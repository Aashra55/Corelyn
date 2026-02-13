'use client';
import React from 'react';
import { Button } from "@/Components/ui/button";
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-20 w-[420px] h-[420px] bg-gradient-to-br from-[#006cff]/12 to-sky-200/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 right-0 w-[420px] h-[420px] bg-gradient-to-tl from-sky-100 to-[#006cff]/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-40">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(15,23,42,0.05) 1px, transparent 0)`,
              backgroundSize: '42px 42px',
            }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50/80 border border-[#006cff]/10 mb-8"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-medium text-slate-800">Crafting Digital Excellence</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight tracking-tight"
          >
            Design. Develop.
            <br />
            <span className="bg-gradient-to-r from-sky-300 via-[#006cff] to-sky-500 bg-clip-text text-transparent">
              Dominate Digital.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            We transform ideas into stunning digital experiences. From captivating designs 
            to powerful web solutions and expert-led tech courses — we're your partner in digital success.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              onClick={() => scrollToSection('#services')}
              className="bg-[#006cff] text-white hover:bg-[#0052cc] rounded-full px-8 py-6 text-base font-semibold shadow-xl shadow-[#006cff]/30 transition-all hover:scale-105"
            >
              Explore Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={() => scrollToSection('#work')}
              variant="outline"
              className="border-gray-300 text-slate-800 hover:bg-gray-50 rounded-full px-8 py-6 text-base font-semibold"
            >
              View Work
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto"
          >
            {[
              { value: '365', label: 'Days Focused on Growth' },
              { value: '100%', label: 'Commitment to Quality' },
              { value: '24/7', label: 'Support Available' },
              { value: '0%', label: 'Compromise on Standards'}
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-slate-900">{stat.value}</div>
                <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-gray-300 flex items-start justify-center p-2 bg-white/70 backdrop-blur">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-gray-700"
          />
        </div>
      </motion.div>
    </section>
  );
}