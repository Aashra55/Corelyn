'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: 'What is Corelyn?',
    answer:
      'Corelyn is an early-stage digital initiative focused on building clean, functional, and scalable digital solutions through design and development.',
  },
  {
    question: 'What services does Corelyn provide?',
    answer: `We currently focus on:
• Website design & development
• UI/UX focused interfaces
• Branding & visual identity support
• Digital consultation for early-stage ideas and startups

Our services continue to evolve as we grow.`,
  },
  {
    question: 'Is Corelyn a registered software house?',
    answer:
      'Corelyn is currently operating as a digital-first, early-stage initiative, focused on building strong foundations before formal expansion.',
  },
  {
    question: 'Who is behind Corelyn?',
    answer:
      'Corelyn is led by a small core team of designers and developers, driven by a founder-led vision focused on clarity, collaboration, and execution.',
  },
  {
    question: 'Do you work with clients at this stage?',
    answer:
      'Yes, we selectively take on small projects and collaborations that align with our current capacity and direction.',
  },
  {
    question: 'What is the collaborative program at Corelyn?',
    answer:
      'The collaborative program is an open initiative where designers and developers contribute to real-world and concept-based projects, focusing on learning through hands-on work.',
  },
  {
    question: 'Can collaborators become part of the core team?',
    answer:
      'Yes. Based on performance, commitment, and alignment, selected contributors may be considered for core team or long-term collaboration roles.',
  },
  {
    question: 'How can I collaborate or get in touch?',
    answer:
      'You can reach us via the contact form on our website or connect with us through our LinkedIn page for collaboration opportunities.',
  },
  {
    question: 'Where is Corelyn based?',
    answer:
      'Corelyn operates remotely, allowing collaboration with talent across different locations.',
  },
  {
    question: 'How is Corelyn different from other digital agencies?',
    answer:
      'We prioritize clarity, thoughtful execution, and strong foundations over rushing scale or overpromising.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-indigo-50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-violet-50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
            FAQ
          </span>

          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900">
            Everything you need to{' '}
            <span className="block bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              know
            </span>
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
            Clear answers to common questions about our services and process.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-3xl bg-white shadow-sm hover:shadow-md transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between px-4 sm:px-8 py-4 sm:py-6 text-left hover:bg-gray-50 transition"
                >
                  <span className="text-sm sm:text-xl font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>

                  <span className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-indigo-50">
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-indigo-600" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-indigo-600" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden bg-indigo-500"
                    >
                      <div className="px-8 py-6 border-t border-indigo-100">
                        <p className="text-white leading-relaxed text-sm sm:text-lg whitespace-pre-line">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-base sm:text-lg">
            Still have questions?{' '}
            <a
              href="#contact"
              className="font-semibold text-indigo-600 hover:text-indigo-700 underline-offset-2 hover:underline"
            >
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
