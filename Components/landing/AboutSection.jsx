'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Heart, Trophy } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Precision',
    description: 'Every pixel, every line of code — crafted with meticulous attention to detail.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We stay ahead of trends to deliver cutting-edge solutions.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'We love what we do, and it shows in every project we deliver.',
  },
  {
    icon: Trophy,
    title: 'Excellence',
    description: 'Good enough isn\'t in our vocabulary. We aim for exceptional.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-32 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-indigo-600 tracking-wide uppercase">
              About Us
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
              We're building the
              <span className="block text-indigo-600">future of digital</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Founded with a vision to democratize digital excellence, Corelyn combines 
              creative expertise with technical prowess to help businesses and individuals 
              thrive in the digital age.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Our team of designers, developers, and educators are united by a common goal: 
              delivering exceptional value through innovative solutions and world-class education.
            </p>

            <div className="mt-10 flex flex-wrap gap-8">
              {[
                { value: '3+', label: 'Years Experience' },
                { value: '50+', label: 'Projects Completed' },
                { value: '100%', label: 'Client Satisfaction' },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-100 to-violet-100 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="font-bold text-gray-900">{value.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}