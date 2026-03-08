'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/Components/ui/button";
import { ArrowRight, Code2, Layout, Zap } from 'lucide-react';

export default function ServicesHero({ title, description, primaryCTA }) {
    return (
        <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-white pt-24 pb-16">
            {/* Premium Background System */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Mesh Gradients */}
                <div className="absolute -top-[10%] -right-[5%] w-[60%] h-[70%] bg-[#006cff]/10 rounded-[100%] blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
                <div className="absolute -bottom-[10%] -left-[5%] w-[50%] h-[60%] bg-sky-100/40 rounded-[100%] blur-[100px]" />

                {/* Technical Grid with Perspective */}
                <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage: 'linear-gradient(#006cff 1px, transparent 1px), linear-gradient(90deg, #006cff 1px, transparent 1px)',
                        backgroundSize: '60px 60px',
                        maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    {/* Left Column: Content */}
                    <div className="lg:col-span-7 xl:col-span-6 text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#006cff]/5 border border-[#006cff]/10 mb-8"
                        >
                            <Zap className="w-4 h-4 text-[#006cff]" />
                            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#006cff]">Strategic Solution</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-[1.1]"
                        >
                            Engineered for <br />
                            <span className="bg-gradient-to-r from-[#006cff] via-sky-500 to-[#006cff] bg-clip-text text-transparent">
                                {title}
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-base md:text-lg text-slate-600 max-w-xl mb-10 leading-relaxed"
                        >
                            {description}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-wrap gap-5"
                        >
                            <Button
                                onClick={primaryCTA.onClick}
                                className="h-14 px-8 rounded-[100px] bg-[#006cff] text-white hover:bg-slate-900 font-bold text-base transition-all shadow-xl shadow-[#006cff]/20 hover:scale-105 active:scale-95 group border border-white/10"
                            >
                                {primaryCTA.text}
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </motion.div>
                    </div>

                    {/* Right Column: Premium Visualizer */}
                    <div className="lg:col-span-5 xl:col-span-6 relative hidden lg:block">
                        <div className="relative aspect-square max-w-[500px] ml-auto">
                            {/* Glass Card 1 */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: 9999, ease: "easeInOut" }}
                                className="absolute top-0 right-0 w-64 p-6 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl z-20"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center">
                                        <Code2 className="w-5 h-5 text-[#006cff]" />
                                    </div>
                                    <div className="h-2 w-24 bg-slate-100 rounded-full overflow-hidden">
                                        <motion.div
                                            animate={{ x: [-100, 100] }}
                                            transition={{ duration: 2, repeat: 9999, ease: "linear" }}
                                            className="h-full w-full bg-[#006cff]/20"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="h-2 w-full bg-slate-50 rounded-full" />
                                    <div className="h-2 w-3/4 bg-slate-50 rounded-full" />
                                </div>
                            </motion.div>

                            {/* Glass Card 2 */}
                            <motion.div
                                animate={{ y: [0, 20, 0] }}
                                transition={{ duration: 5, repeat: 9999, ease: "easeInOut", delay: 0.5 }}
                                className="absolute bottom-10 left-0 w-72 p-8 rounded-[2.5rem] bg-slate-900/95 backdrop-blur-2xl border border-slate-800 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] z-30"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-2xl bg-[#006cff] flex items-center justify-center shadow-lg shadow-[#006cff]/40">
                                        <Zap className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-black text-[#006cff] uppercase tracking-widest mb-1">Performance</div>
                                        <div className="text-xl font-bold text-white tracking-tight">Active Node</div>
                                    </div>
                                </div>
                                <div className="flex items-end gap-1 h-12">
                                    {[...Array(12)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            animate={{ height: ['20%', '80%', '40%', '100%', '20%'] }}
                                            transition={{ duration: 2, repeat: 9999, delay: i * 0.1 }}
                                            className="w-full bg-[#006cff]/40 rounded-t-sm"
                                        />
                                    ))}
                                </div>
                            </motion.div>

                            {/* Decorative Elements */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-[#006cff]/5 rounded-full animate-spin-slow" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-[#006cff]/5 rounded-full animate-reverse-spin-slow" />

                            {/* Floating Icons */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: 9999, ease: "linear" }}
                                className="absolute inset-0"
                            >
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 p-3 bg-white rounded-xl shadow-lg border border-slate-50">
                                    <Layout className="w-6 h-6 text-sky-400" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes spin-slow {
                    from { transform: translate(-50%, -50%) rotate(0deg); }
                    to { transform: translate(-50%, -50%) rotate(360deg); }
                }
                @keyframes reverse-spin-slow {
                    from { transform: translate(-50%, -50%) rotate(360deg); }
                    to { transform: translate(-50%, -50%) rotate(0deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 20s linear infinite;
                }
                .animate-reverse-spin-slow {
                    animation: reverse-spin-slow 25s linear infinite;
                }
            `}</style>
        </section>
    );
}
