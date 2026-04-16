'use client';

import React from 'react';
import blogsData from '../data/blogs.json';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, Clock } from 'lucide-react';

const Blogs = ({ category }) => {
  const filteredBlogs = blogsData.filter(blog => blog.category === category).slice(0, 3);

  return (
    <section id="blogs" className="py-24 px-6 md:px-12 xl:px-24 bg-white dark:bg-[#06060e] transition-colors duration-500 overflow-hidden">
      <div className="container mx-auto">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-poppins text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-gray-900 dark:text-white mb-4"
          >
            Insights <span className="text-secondary italic">&</span> <br className="hidden sm:block" />
            The <span className="text-gradient">Intellect</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 dark:text-slate-400 max-w-xl font-light tracking-tight"
          >
            Deep dives into the {category.toLowerCase()} strategies that are reshaping the digital landscape in 2026.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col bg-slate-50 dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-[2rem] overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-primary text-[9px] font-black uppercase tracking-widest bg-primary/10 px-2 py-1 rounded">
                    {blog.category}
                  </span>
                  <div className="flex items-center gap-1 text-slate-400 text-[9px] font-bold uppercase tracking-widest">
                    <Clock size={12} />
                    {blog.readTime}
                  </div>
                </div>
                
                <h3 className="font-poppins text-xl font-black uppercase leading-tight tracking-tight text-gray-900 dark:text-white mb-4 group-hover:text-primary transition-colors">
                  {blog.title}
                </h3>
                
                <p className="text-slate-500 dark:text-slate-400 font-light leading-relaxed text-sm mb-6 line-clamp-2">
                  {blog.excerpt}
                </p>
                
                <div className="mt-auto pt-6 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-slate-400">
                    <Calendar size={12} />
                    {blog.date}
                  </div>
                  
                  <Link href={`/blog/${blog.slug}`} className="p-2 bg-black/5 dark:bg-white/5 rounded-xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <ArrowUpRight size={20} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
