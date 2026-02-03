'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Code, GraduationCap, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Brand identities, UI/UX design, marketing materials, and visual content that captivates and converts.',
    features: ['Brand Identity', 'UI/UX Design', 'Print & Digital', 'Social Media Graphics'],
    gradient: 'from-rose-500 to-orange-500',
    bgGradient: 'from-rose-500/10 to-orange-500/10',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom websites and web applications built with cutting-edge technology for performance and scalability.',
    features: ['Custom Websites', 'E-commerce', 'Web Applications', 'CMS Development'],
    gradient: 'from-indigo-500 to-violet-500',
    bgGradient: 'from-indigo-500/10 to-violet-500/10',
  },
  {
    icon: GraduationCap,
    title: 'Collaborative Programs',
    description: 'Partner with us to build innovative solutions, share expertise, and drive mutual growth through joint ventures and strategic alliances.',
    features: ['Joint Ventures', 'Strategic Partnerships', 'Co-development', 'Knowledge Sharing'],
    gradient: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-500/10 to-teal-500/10',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-indigo-50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-violet-50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-sm font-semibold text-indigo-600 tracking-wide uppercase">
            What We Offer
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            Services tailored to your
            <span className="block leading-normal bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              digital success
            </span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Whether you need stunning visuals, a powerful web presence, or want to upskill — 
            we've got you covered with our comprehensive suite of services.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 h-full">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">{service.title}</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">{service.description}</p>

                <ul className="mt-6 space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-600">
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  Learn more
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}