'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A cutting-edge online store with a focus on user experience and performance.',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&q=80',
  },
  {
    title: 'Brand Identity Redesign',
    description: 'A complete visual overhaul for a leading tech startup, from logo to brand guidelines.',
    category: 'Graphic Design',
    image: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=600&q=80',
  },
  {
    title: 'Mobile Banking App',
    description: 'A secure and intuitive mobile app for seamless financial management on the go.',
    category: 'UI/UX Design',
    image: 'https://placehold.co/600x400/000000/FFFFFF/png?text=Mobile+App',
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="py-32 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-[#006cff] tracking-wide uppercase">
            Our Portfolio
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
            Selected Works
          </h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Here are a few examples of our passion for creating exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white dark:bg-slate-900/40 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 dark:border dark:border-slate-800"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-6">
                <p className="text-sm font-medium text-[#006cff]">{project.category}</p>
                <h3 className="mt-2 text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{project.description}</p>
                <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white group-hover:text-[#006cff] transition-colors">
                  View Project
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
