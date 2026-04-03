import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const defaultAllowedOrigins = [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'http://localhost:5174',
  'http://127.0.0.1:5174',
  'http://localhost:5175',
  'http://127.0.0.1:5175',
  'http://localhost:4173',
  'http://127.0.0.1:4173',
  'http://localhost:4174',
  'http://127.0.0.1:4174',
  'http://localhost:4175',
  'http://127.0.0.1:4175',
];
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',').map((origin) => origin.trim()).filter(Boolean)
  : defaultAllowedOrigins;

app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error(`CORS blocked for origin: ${origin}`));
  },
  methods: ['POST'],
}));
app.use(express.json());

const leadFormats = {
  design: {
    label: 'Design',
    heading: 'New Design Lead',
    accent: '#FF4D00',
  },
  'ai-automation': {
    label: 'AI/Automation',
    heading: 'New AI & Automation Lead',
    accent: '#29D3FF',
  },
  development: {
    label: 'Development',
    heading: 'New Development Lead',
    accent: '#4F8CFF',
  },
  default: {
    label: 'General',
    heading: 'New Shared Landing Page Lead',
    accent: '#4F8CFF',
  },
};

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_PORT == 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.post('/api/contact', async (req, res) => {
  const { user_name, user_email, user_phone, service, budget, message, recaptcha_token, landing_page } = req.body;
  const cleanName = user_name?.trim();
  const cleanEmail = user_email?.trim();
  const cleanPhone = user_phone?.trim();
  const cleanService = service?.trim();
  const cleanBudget = budget?.trim();
  const cleanMessage = message?.trim();

  if (!cleanName || !cleanEmail || !cleanPhone || !cleanMessage || !recaptcha_token) {
    return res.status(400).json({ error: 'Missing required fields, phone number, or recaptcha token.' });
  }

  try {
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptcha_token}`;
    const recaptchaRes = await fetch(verifyUrl, { method: 'POST' });
    const recaptchaData = await recaptchaRes.json();

    if (!recaptchaData.success) {
      console.error('ReCaptcha Failure:', recaptchaData);
      return res.status(400).json({ error: 'ReCaptcha verification failed.' });
    }

    const leadFormat = leadFormats[landing_page] || leadFormats.default;

    const mailOptions = {
      from: `"${cleanName}" <${process.env.SMTP_USER}>`,
      replyTo: cleanEmail,
      to: process.env.SMTP_TO,
      subject: `New ${leadFormat.label} Lead: ${cleanService || 'General'} from ${cleanName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #111;">
          <h2 style="border-bottom: 2px solid ${leadFormat.accent}; padding-bottom: 10px;">${leadFormat.heading}</h2>
          <p><strong>Landing Page:</strong> ${leadFormat.label}</p>
          <p><strong>Name:</strong> ${cleanName}</p>
          <p><strong>Email:</strong> ${cleanEmail}</p>
          <p><strong>Phone:</strong> ${cleanPhone}</p>
          ${cleanService ? `<p><strong>Service Requested:</strong> ${cleanService}</p>` : ''}
          <p><strong>Target Budget:</strong> ${cleanBudget || 'Not specified'}</p>

          <h3 style="margin-top: 30px;">Project Details:</h3>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 8px;">
            ${cleanMessage.replace(/\n/g, '<br/>')}
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Server Mail Error:', error);
    res.status(500).json({ error: 'Internal Server Error while sending email.' });
  }
});

app.listen(PORT, () => {
  console.log(`Shared landing page backend running on http://localhost:${PORT}`);
  console.log(`Allowed origins: ${allowedOrigins.join(', ')}`);
  console.log(`Nodemailer hooked up to SMTP: ${process.env.SMTP_USER || 'MISSING .ENV CONFIG'}`);
});
