import React from 'react';
import Navbar from '../Components/landing/Navbar';
import HeroSection from '../Components/landing/HeroSection';
import ServicesSection from '../Components/landing/ServicesSection';
import WorkSection from '../Components/landing/WorkSection';
import AboutSection from '../Components/landing/AboutSection';
// import TestimonialsSection from '../Components/landing/TestimonialsSection';
import FAQSection from '../Components/landing/FAQSection';
import ContactSection from '../Components/landing/ContactSection';
import Footer from '../Components/landing/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WorkSection />
      <AboutSection />
      {/* <TestimonialsSection /> */}
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}