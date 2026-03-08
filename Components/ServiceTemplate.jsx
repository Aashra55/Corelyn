'use client';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/Components/ui/button";
import HeroSection from './landing/HeroSection';
import ContactSection from './landing/ContactSection';
import {
    ArrowRight,
    Sparkles,
    CheckCircle2,
    Target,
    Rocket,
    RefreshCcw,
    ShieldCheck,
    Zap,
    Globe,
    Layers,
    Code2,
    Workflow,
    ChevronRight,
    Compass,
    Layout,
    Cpu,
    Box,
    BarChart,
    Lock
} from 'lucide-react';

const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

const SectionHeader = ({ subtitle, title, description, center = false, dark = false }) => (
    <div className={`mb-8 md:mb-12 ${center ? 'text-center' : 'text-left'} max-w-4xl ${center ? 'mx-auto' : ''}`}>
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full ${dark ? 'bg-white/10 border-white/20' : 'bg-[#006cff]/5 border border-[#006cff]/10'} mb-6`}
        >
            <Zap className={`w-4 h-4 ${dark ? 'text-sky-300' : 'text-[#006cff]'}`} />
            <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${dark ? 'text-sky-100' : 'text-[#006cff]'}`}>{subtitle}</span>
        </motion.div>
        <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-3xl md:text-5xl font-bold tracking-tight mb-8 ${dark ? 'text-white' : 'text-gray-950'}`}
        >
            {title}
        </motion.h2>
        {description && (
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className={`text-lg leading-relaxed font-medium ${dark ? 'text-gray-300' : 'text-gray-600'}`}
            >
                {description}
            </motion.p>
        )}
    </div>
);

export default function ServiceTemplate({ data }) {
    if (!data) return null;

    const { title, positioning, whyMatters, whyMattersImage, deliverables, process, whyCorelyn, portfolio } = data;

    return (
        <div className="relative bg-white selection:bg-[#006cff] selection:text-white">
            {/* 1. Specialized Service Hero */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50/30">
                {/* Technical Grid Background */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                    <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(#006cff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                </div>
                
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col items-start max-w-4xl">
                        {/* Breadcrumb */}
                        <motion.div 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-2 mb-8"
                        >
                            <a href="/" className="text-[10px] font-bold text-slate-400 hover:text-slate-600 uppercase tracking-[0.2em] transition-colors">Home</a>
                            <ChevronRight className="w-3 h-3 text-slate-300" />
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Services</span>
                            <ChevronRight className="w-3 h-3 text-slate-300" />
                            <span className="text-[10px] font-black text-[#006cff] uppercase tracking-[0.2em]">{title}</span>
                        </motion.div>

                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[0.95] mb-8"
                        >
                            {title.split(' ')[0]} <br />
                            <span className="text-[#006cff]">{title.split(' ').slice(1).join(' ')}</span>
                        </motion.h1>

                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mb-12"
                        >
                            {positioning}
                        </motion.p>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Button
                                onClick={scrollToContact}
                                className="h-14 px-8 rounded-full bg-[#006cff] text-white hover:bg-slate-900 font-bold text-base transition-all shadow-lg shadow-[#006cff]/20"
                            >
                                Start Your Project
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </motion.div>
                    </div>
                </div>

                {/* Decorative Bottom Fade */}
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
            </section>

            {/* 2. Impact Section - THE IMPACT LENS (REDESIGNED) */}
            <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-16 md:gap-24 items-center">
                        {/* Left: Content Lens */}
                        <div className="lg:col-span-8 relative z-10">
                            <SectionHeader
                                subtitle="Impact Analysis"
                                title="Why This Service Matters"
                                description={whyMatters}
                            />

                            <div className="space-y-8 mt-12">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {/* Metric Module 1 */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-xl transition-all duration-500"
                                    >
                                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                            <Target className="w-12 h-12 text-[#006cff]" />
                                        </div>
                                        <div className="relative z-10">
                                            <div className="flex items-center gap-2 mb-4">
                                                <div className="w-2 h-2 rounded-full bg-[#006cff] animate-pulse" />
                                                <span className="text-[10px] font-black uppercase tracking-widest text-[#006cff]">Strategic Accuracy</span>
                                            </div>
                                            <h4 className="text-4xl font-black text-gray-900 mb-2">98%</h4>
                                            <p className="text-sm text-gray-500 font-medium">Standardized Client Retention Rate.</p>

                                            {/* Mini Sparkline Visualization */}
                                            <div className="mt-6 h-8 w-full">
                                                <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                                                    <motion.path
                                                        d="M 0 15 Q 25 5, 50 15 T 100 10"
                                                        fill="none"
                                                        stroke="#006cff"
                                                        strokeWidth="2"
                                                        initial={{ pathLength: 0 }}
                                                        whileInView={{ pathLength: 1 }}
                                                        transition={{ duration: 1.5 }}
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Metric Module 2 */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-xl transition-all duration-500"
                                    >
                                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                            <ShieldCheck className="w-12 h-12 text-[#006cff]" />
                                        </div>
                                        <div className="relative z-10">
                                            <div className="flex items-center gap-2 mb-4">
                                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600">Verification</span>
                                            </div>
                                            <h4 className="text-3xl font-black text-gray-900 mb-2">24/7</h4>
                                            <p className="text-sm text-gray-500 font-medium">Constant Critical Infrastructure Support.</p>

                                            <div className="mt-6 flex gap-1">
                                                {[...Array(8)].map((_, i) => (
                                                    <motion.div
                                                        key={i}
                                                        className="h-6 w-full bg-gray-50 rounded-sm"
                                                        initial={{ scaleY: 0.3 }}
                                                        whileInView={{ scaleY: [0.3, 1, 0.3] }}
                                                        transition={{ repeat: Infinity, duration: 2, delay: i * 0.1 }}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="p-8 bg-white rounded-[2.5rem] border-2 border-[#006cff]/10 shadow-lg relative overflow-hidden group"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#006cff]/5 blur-[60px]" />
                                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                                        <div className="w-14 h-14 rounded-2xl bg-[#006cff] flex items-center justify-center shrink-0 shadow-lg shadow-[#006cff]/20">
                                            <Rocket className="w-7 h-7 text-white" />
                                        </div>
                                        <div>
                                            <h5 className="text-[15px] font-black text-gray-900 mb-1 tracking-tight uppercase">Technical Dominance</h5>
                                            <p className="text-gray-500 text-[13px] font-medium leading-relaxed">
                                                We engineer competitive advantages that redefine market positions with precision execution.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Right: Asymmetric Technical Viewfinder (Scaled Down) */}
                        <div className="lg:col-span-4 relative">
                            {/* Engineering Metadata Accents */}
                            <div className="absolute -top-6 -left-6 z-20 bg-white px-3 py-1 rounded-md border border-gray-100 shadow-sm">
                                <span className="text-[9px] font-black text-gray-400 tracking-tighter">REF-ID: {title.toUpperCase().slice(0, 3)}-V2.0</span>
                            </div>
                            <div className="absolute -bottom-6 -right-6 z-20 bg-[#006cff] px-3 py-1.5 rounded-md shadow-xl border border-white/10">
                                <span className="text-[9px] font-black text-white tracking-widest uppercase">Target_Locked</span>
                            </div>

                            <div className="relative group">
                                {/* Visual Framing */}
                                <div className="absolute -inset-1 bg-gradient-to-tr from-[#006cff] to-sky-400 rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />

                                <div className="relative aspect-square lg:aspect-square rounded-[2.5rem] overflow-hidden bg-gray-50 shadow-2xl border border-gray-100 max-w-[360px] mx-auto lg:max-w-none">
                                    <img
                                        src={whyMattersImage}
                                        alt="Technical Precision"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                    />

                                    {/* Viewfinder Overlays - Subtler Colors */}
                                    <div className="absolute inset-0 border-[15px] border-white/10 pointer-events-none" />
                                    <div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none">
                                        <div className="flex justify-between">
                                            <div className="w-6 h-6 border-t-2 border-l-2 border-[#006cff]/30" />
                                            <div className="w-6 h-6 border-t-2 border-r-2 border-[#006cff]/30" />
                                        </div>
                                        {/* Scanning Line Animation */}
                                        <motion.div
                                            className="absolute left-0 right-0 h-px bg-[#006cff]/40 shadow-[0_0_15px_rgba(0,108,255,0.4)]"
                                            animate={{ top: ['0%', '100%', '0%'] }}
                                            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
                                        />
                                        <div className="flex justify-between items-end">
                                            <div className="w-6 h-6 border-b-2 border-l-2 border-[#006cff]/30" />
                                            <div className="text-[#006cff]/40 text-[8px] font-black tracking-widest">
                                                LAT: 25.011 <br />
                                                LNG: 55.122
                                            </div>
                                            <div className="w-6 h-6 border-b-2 border-r-2 border-[#006cff]/30" />
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Accessory Stat */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    className="absolute -right-12 top-1/2 -translate-y-1/2 bg-white p-6 rounded-3xl shadow-2xl border border-gray-50 hidden xl:block"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-[#006cff]/10 flex items-center justify-center">
                                            <Zap className="w-6 h-6 text-[#006cff]" />
                                        </div>
                                        <div>
                                            <div className="text-xl font-black text-gray-900 tracking-tighter">14ms</div>
                                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Response Latency</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Deliverables - 5-COLUMN PROCESS WAVE (HIGH-DENSITY FLOW) */}
            <section className="py-16 md:py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="mb-20 md:mb-32 text-center lg:text-left">
                        <SectionHeader
                            subtitle="Engineering Pipeline"
                            title="Comprehensive Scope of Service"
                            description="A modular, high-performance breakdown of technical outcomes engineered for global scalability."
                        />
                    </div>

                    <div className="relative">
                        {/* 5-Column Winding Flow Path (Desktop) */}
                        <div className="absolute top-1/2 left-0 w-full h-1 hidden xl:block -translate-y-1/2 overflow-visible">
                            <svg className="absolute top-0 left-0 w-full h-[200px] -translate-y-1/2 pointer-events-none opacity-[0.15]" viewBox="0 0 1200 200" preserveAspectRatio="none" fill="none">
                                <motion.path
                                    d="M 0 100 C 120 100, 120 25, 240 25 C 360 25, 360 175, 480 175 C 600 175, 600 25, 720 25 C 840 25, 840 175, 960 175 C 1080 175, 1080 25, 1200 25"
                                    stroke="url(#processGradient5Col)"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 3.5, ease: "easeInOut" }}
                                />
                                <defs>
                                    <linearGradient id="processGradient5Col" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#006cff" />
                                        <stop offset="0.5" stopColor="#8b5cf6" />
                                        <stop offset="1" stopColor="#ec4899" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                        {/* Mobile Vertical Spine */}
                        <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-50 xl:hidden" />

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-6 gap-y-20 md:gap-y-32 relative z-20">
                            {deliverables.map((item, index) => {
                                const icons = [Compass, Layout, Code2, Cpu, Globe, Zap, Lock, BarChart];
                                const Icon = icons[index % icons.length] || CheckCircle2;
                                const isEven = index % 2 === 0;

                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.6, delay: (index % 5) * 0.1 }}
                                        className={`relative flex flex-col items-center xl:items-start text-center xl:text-left ${!isEven ? 'xl:translate-y-20' : ''
                                            }`}
                                    >
                                        {/* Shrunken Background Number */}
                                        <div className="absolute top-1/2 left-1/2 xl:left-0 -translate-x-1/2 xl:translate-x-0 -translate-y-1/2 text-[4rem] md:text-[6rem] font-black text-gray-50/80 tracking-tighter select-none pointer-events-none z-0 leading-none">
                                            0{index + 1}
                                        </div>

                                        <div className="relative z-10 flex flex-col items-center xl:items-start w-full max-w-[200px]">
                                            {/* Shrunken Icon Node */}
                                            <div className="relative group mb-6">
                                                <div className="w-14 h-14 bg-white shadow-xl shadow-gray-100 rounded-xl flex items-center justify-center border border-gray-50 relative z-10">
                                                    <Icon className="w-7 h-7 text-[#006cff]" />
                                                </div>
                                                {/* Connecting Pulsar Dot */}
                                                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white rounded-full p-1 shadow-md border border-gray-50 z-20">
                                                    <div className="w-full h-full rounded-full bg-[#006cff] animate-pulse" />
                                                </div>
                                            </div>

                                            <h3 className="text-sm font-bold text-gray-900 tracking-tight leading-snug mb-2 group-hover:text-[#006cff] transition-colors uppercase">
                                                {item}
                                            </h3>

                                            <p className="text-gray-500 text-[11px] leading-relaxed font-medium">
                                                Modular {item.toLowerCase()} architecture standards.
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Strategic Framework - REFINED TIMELINE */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                
                {/* Background Text Accent */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[20rem] font-black text-slate-200/30 select-none pointer-events-none uppercase tracking-tighter opacity-50">
                    Process
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                        <SectionHeader
                            subtitle="Methodology"
                            title="Strategic Pathway to Success"
                            description="A rigorous framework meticulously refined for elite execution and measurable growth."
                        />
                    </div>

                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="absolute top-6 left-0 w-full h-px bg-slate-200 hidden md:block" />

                        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 relative">
                            {process.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative group"
                                >
                                    {/* Step Number Circle */}
                                    <div className="relative z-20 mb-10">
                                        <div className="w-12 h-12 rounded-full bg-white border-4 border-slate-50 flex items-center justify-center shadow-sm group-hover:shadow-lg group-hover:border-[#006cff]/10 transition-all duration-500">
                                            <span className="text-sm font-black text-slate-400 group-hover:text-[#006cff] transition-colors">{step.step}</span>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest leading-none">
                                            {step.title}
                                        </h4>
                                        <div className="w-8 h-[2px] bg-[#006cff]/30 group-hover:w-full transition-all duration-500" />
                                        <p className="text-slate-500 text-[13px] leading-relaxed font-medium">
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* Hover Card Background Effect */}
                                    <div className="absolute -inset-6 bg-white/0 group-hover:bg-white/100 rounded-[2rem] -z-10 transition-all duration-500 border border-transparent group-hover:border-slate-100 group-hover:shadow-2xl group-hover:shadow-slate-200/50" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Why Work With Corelyn - ALTERNATED TO WHITE BG */}
            <section className="py-12 md:py-16 bg-white px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

                {/* Large Background Branding Elements */}
                <div className="absolute -left-20 top-1/2 -translate-y-1/2 text-[15rem] md:text-[25rem] font-black text-slate-200/20 pointer-events-none select-none uppercase leading-none tracking-tighter">
                    Impact
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-12 gap-16 md:gap-24 items-center">
                        {/* Left Column: Typography-Led Value Block */}
                        <div className="lg:col-span-6 space-y-10 md:space-y-14">
                            <div>
                                <SectionHeader
                                    subtitle="Our Promise"
                                    title="A Partnership Built for Growth"
                                    description="We build strategic foundations for your long-term digital dominance."
                                />
                            </div>

                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative py-4"
                            >
                                <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tighter uppercase leading-[0.95]">
                                    Driving <span className="text-[#006cff]">Measurable</span> <br />
                                    Execution <span className="text-slate-400">Excellence.</span>
                                </h3>
                                <p className="text-base md:text-lg text-slate-500 font-medium max-w-xl leading-relaxed mb-12">
                                    Every technical decision and creative stroke is meticulously backed by market data and your specific business objectives.
                                </p>

                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
                                    <Button
                                        className="h-14 px-10 rounded-full bg-[#006cff] text-white hover:bg-slate-900 font-bold text-lg transition-all shadow-xl shadow-[#006cff]/20 hover:scale-105"
                                        onClick={scrollToContact}
                                    >
                                        Start Your Project
                                    </Button>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-[#006cff]/10 flex items-center justify-center">
                                            <Zap className="w-5 h-5 text-[#006cff]" />
                                        </div>
                                        <span className="font-bold text-slate-900 uppercase tracking-widest text-[10px]">Strategic Seal of Quality</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column: Numbered Benefits Grid */}
                        <div className="lg:col-span-6 grid sm:grid-cols-2 gap-6 lg:gap-8">
                            {whyCorelyn.map((item, index) => {
                                const icons = [ShieldCheck, Workflow, Rocket, Code2];
                                const Icon = icons[index % icons.length];
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:border-[#006cff]/20 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
                                    >
                                        <div className="absolute -top-4 -right-4 text-slate-50 font-black text-8xl group-hover:text-[#006cff]/5 transition-colors pointer-events-none select-none">
                                            0{index + 1}
                                        </div>
                                        <div className="relative z-10">
                                            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 group-hover:bg-[#006cff] transition-all duration-500 group-hover:rotate-6">
                                                <Icon className="w-7 h-7 text-[#006cff] group-hover:text-white transition-colors" />
                                            </div>
                                            <h4 className="text-lg font-bold text-slate-900 mb-4 tracking-tight uppercase">{item.title}</h4>
                                            <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.description}</p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Featured Concepts & Projects */}
            {/* <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                        <SectionHeader
                            subtitle="Portfolio"
                            title="Concepts & Explorations"
                            description="A glimpse into the design systems and technical solutions we are currently engineering."
                        />
                        <div className="pb-4">
                            <div className="px-4 py-2 bg-white border border-slate-200 rounded-full shadow-sm flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-[#006cff] animate-pulse" />
                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Always Innovating</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {portfolio?.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group bg-white rounded-[2rem] border border-slate-100 p-8 hover:shadow-2xl transition-all duration-500"
                            >
                                <div className="text-[10px] font-black text-[#006cff] uppercase tracking-widest mb-4">{item.category}</div>
                                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#006cff] transition-colors">{item.title}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6">{item.desc}</p>
                                <div className="h-40 w-full bg-slate-50 rounded-2xl overflow-hidden relative border border-slate-100">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#006cff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    {/* Placeholder for future images */}
                                    {/* <div className="w-full h-full flex items-center justify-center">
                                        <Layout className="w-8 h-8 text-slate-200" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
 */}
            <ContactSection />
        </div >
    );
}
