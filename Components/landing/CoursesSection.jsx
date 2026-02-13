'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Star, ArrowRight } from 'lucide-react';
import { Button } from "@/Components/ui/button";

const courses = [
  {
    title: 'Full-Stack Web Development',
    description: 'Master modern web development from frontend to backend with React, Node.js, and more.',
    duration: '12 Weeks',
    students: '120+',
    rating: '4.9',
    level: 'Beginner to Advanced',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80',
    tag: 'Most Popular',
  },
  {
    title: 'UI/UX Design Mastery',
    description: 'Learn to create beautiful, user-centered designs using Figma, Adobe XD, and design thinking.',
    duration: '8 Weeks',
    students: '85+',
    rating: '4.8',
    level: 'All Levels',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
    tag: 'New',
  },
  {
    title: 'Python for Data Science',
    description: 'Dive into data analysis, visualization, and machine learning with Python.',
    duration: '10 Weeks',
    students: '95+',
    rating: '4.9',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600&q=80',
    tag: 'Trending',
  },
];

export default function CoursesSection() {
  return (
    <section id="courses" className="py-32 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16"
        >
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-[#006cff] tracking-wide uppercase">
              Learn & Grow
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
              Tech courses that
              <span className="block text-[#006cff]">launch careers</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Industry-relevant curriculum, hands-on projects, and expert mentorship 
              to help you master the skills employers are looking for.
            </p>
          </div>
          
          <Button
            variant="outline"
            className="border-gray-300 text-gray-700 hover:bg-gray-100 rounded-full px-6 py-5 self-start lg:self-auto"
          >
            View All Courses
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-sm text-gray-900">
                      {course.tag}
                    </span>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-white/80 text-sm">{course.level}</span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#006cff] transition-colors">
                    {course.title}
                  </h3>
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed flex-1">
                    {course.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Users className="w-4 h-4" />
                        {course.students}
                      </span>
                    </div>
                    <span className="flex items-center gap-1 text-sm font-semibold text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      {course.rating}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}