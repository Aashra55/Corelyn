'use client';
import React from 'react';
import Image from 'next/image';

import { Linkedin, Twitter, Instagram, Github } from 'lucide-react';

const footerLinks = {
  Services: ['Graphic Design', 'Web Development', 'Brand Identity', 'UI/UX Design'],
  Resources: ['Blog', 'Case Studies', 'Free Templates', 'Community'],
  Company: ['About Us', 'Our Team', 'Careers', 'Contact'],
  Support: ['Help Center', 'Terms of Service', 'Privacy Policy', 'FAQ'],
};

const socialLinks = [
  { icon: Twitter, href: '#' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/corelyn' },
  { icon: Instagram, href: '#' },
  { icon: Github, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Image src="/logo.png" alt="Corelyn Logo" width={100} height={100} className="w-22 h-22 object-contain" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Transforming ideas into stunning digital experiences through design, 
              development, and education.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <social.icon className="w-5 h-5 text-gray-400" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links], index) => (
            <div key={index}>
              <h3 className="font-semibold text-sm mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Corelyn. All rights reserved.
          </p>
          <p className="text-sm text-gray-400">
            Crafted with passion for digital excellence
          </p>
        </div>
      </div>
    </footer>
  );
}