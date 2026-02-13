'use client';
import React from 'react';
import Image from 'next/image';
import { Linkedin, Twitter, Instagram, Github } from 'lucide-react';

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
  { icon: Twitter, href: '#' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/corelyn' },
  { icon: Instagram, href: '#' },
  { icon: Github, href: '#' },
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
    <footer className="bg-sky-300 text-slate-900 dark:bg-slate-800 dark:text-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Image
                src="/logo.png"
                alt="Corelyn Logo"
                width={100}
                height={100}
                className="w-22 h-22 object-contain"
              />
            </div>

            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed max-w-xs">
              Transforming ideas into stunning digital experiences through design,
              development, and education.
            </p>

            <div className="flex gap-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-black/5 flex items-center justify-center hover:bg-black/10 transition-colors"
                >
                    <social.icon className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links], index) => (
            <div key={index}>
              <h3 className="font-semibold text-sm mb-4 text-gray-800 dark:text-gray-100">{title}</h3>
              <ul className="space-y-3">
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
                        className="text-sm text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-200 transition-colors"
                      >
                        {label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-black/10 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            © {new Date().getFullYear()} Corelyn. All rights reserved.
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Crafted with passion for digital excellence
          </p>
        </div>
      </div>
    </footer>
  );
}
