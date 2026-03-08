'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';

const footerLinks = {
  Services: ['Graphic Design', 'Web Development', 'Brand Identity', 'UI/UX Design'],
  Resources: ['Blog', 'Case Studies', 'Free Templates', 'Community'],
  Company: ['About Us', 'Our Team', 'Careers', 'Contact'],
  Support: [
    'Help Center',
    'Terms of Service',
    'Privacy Policy',
    { label: 'FAQ', href: '#faq' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: 'https://x.com/corelynofficial' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/corelyn' },
  { icon: Instagram, href: 'https://www.instagram.com/corelynofficial/#' },
  { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61588279177410' },
];

export default function Footer() {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <footer className="bg-slate-50 text-slate-900 relative overflow-hidden border-t border-slate-200/50">
      {/* 1. Animated Horizon Line (The Attraction) */}
      <div className="absolute top-0 left-0 w-full h-[2px] overflow-hidden opacity-30">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="w-1/2 h-full bg-gradient-to-r from-transparent via-[#006cff] to-transparent"
        />
      </div>

      {/* 2. Technical DNA Overlay */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none">
        <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(15,23,42,0.03) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Brand Identity Block */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Corelyn Logo"
                width={400}
                height={400}
                className="w-24 h-24 object-contain"
              />
            </div>

            <p className="text-slate-500 text-sm leading-relaxed max-w-sm font-medium">
              Crafting high-performance digital products through 
              <span className="text-slate-900 font-semibold"> precision design </span> 
              and <span className="text-slate-900 font-semibold"> technical excellence.</span>
            </p>

            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center hover:bg-[#006cff] hover:border-[#006cff] group transition-all duration-300 shadow-sm"
                >
                  <social.icon className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Dynamic Link Matrix */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([title, links], index) => (
                <div key={index} className="space-y-6">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">{title}</h3>
                  <ul className="space-y-4">
                    {links.map((link, linkIndex) => {
                      const label = typeof link === 'string' ? link : link.label;
                      const href = typeof link === 'string' ? '#' : link.href;

                      return (
                        <li key={linkIndex}>
                          <a
                            href={href}
                            onClick={(e) => {
                              if (href.startsWith('#')) {
                                e.preventDefault();
                                scrollToSection(href);
                              }
                            }}
                            className="text-sm text-slate-600 hover:text-[#006cff] font-medium transition-all inline-flex items-center group"
                          >
                            <span className="w-0 group-hover:w-2 h-[2px] bg-[#006cff] mr-0 group-hover:mr-2 transition-all opacity-0 group-hover:opacity-100" />
                            {label}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Refined Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-200/60 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6 text-xs font-medium text-slate-500">
            <p>© {new Date().getFullYear()} Corelyn. All rights reserved.</p>
            <div className="hidden sm:flex items-center gap-6 border-l border-slate-200/60 pl-6 h-4">
              <a href="#" className="hover:text-[#006cff] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#006cff] transition-colors">Terms of Service</a>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100/50 rounded-full border border-slate-200/50">
            <div className="h-1.5 w-1.5 rounded-full bg-[#006cff] animate-pulse" />
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              Engineering <span className="text-slate-900">Digital Excellence</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
