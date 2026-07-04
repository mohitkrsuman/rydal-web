/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Shield,
  Users,
  Mic,
  MapPin,
  Zap,
  PhoneCall,
  Navigation,
  Award,
  AlertTriangle,
  ChevronRight,
  Menu,
  X,
  Bell,
  Heart
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';

const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-dark-bg" />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-hero-accent/5 blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -80, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-hero-accent/10 blur-[120px]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0)_0%,rgba(10,10,10,0.5)_100%)]" />
      <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
    </div>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.8, 1], [0.8, 1]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Safety', href: '#safety' },
    { name: 'Dashboard', href: '#dashboard' },
    { name: 'Waitlist', href: '#waitlist' },
  ];

  const features = [
    {
      icon: <Users className="w-8 h-8 text-hero-accent" />,
      title: "Group Synchronization",
      description: "Live location of every member in your pack. No more 'where is everyone?' stress."
    },
    {
      icon: <Navigation className="w-8 h-8 text-hero-accent" />,
      title: "Technical Navigation",
      description: "Optimized routes for bikers focusing on viewpoints, twists, and road quality."
    },
    {
      icon: <Mic className="w-8 h-8 text-hero-accent" />,
      title: "Voice-First Interface",
      description: "Hands-free Bluetooth control for petrol, food, and route adjustments."
    },
    {
      icon: <Award className="w-8 h-8 text-hero-accent" />,
      title: "Incentivized Intelligence",
      description: "Contribute road data and earn subscription discounts. Smarter with every km."
    }
  ];

  return (
    <div className="min-h-screen bg-transparent text-dark-text-primary selection:bg-hero-accent selection:text-white relative">
      <BackgroundAnimation />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-dark-border bg-dark-bg/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <img src="../../public/app_logo_white.png" alt="Rydal Logo" className="h-15 md:h-26 w-auto object-contain" referrerPolicy="no-referrer" />
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8 uppercase text-xs font-bold tracking-widest text-dark-text-secondary">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="hover:text-hero-accent transition-colors">
                  {link.name}
                </a>
              ))}
              <button className="px-6 py-2 bg-hero-accent text-white hover:bg-opacity-90 transition-all rounded-sm uppercase tracking-tighter italic font-black">
                Join Beta
              </button>
            </div>

            {/* Mobile Toggle */}
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-dark-bg pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col space-y-6 uppercase text-xl font-black italic">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)}>
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden min-h-[90vh] flex items-center">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none overflow-hidden hidden lg:block">
            <div className="w-full h-full bg-linear-to-bl from-hero-accent to-transparent rotate-12 -translate-y-20 translate-x-20"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-dark-border bg-dark-surface/50 text-hero-accent text-[10px] font-bold tracking-widest uppercase mb-6">
                <Zap className="w-3 h-3" />
                <span>The ultimate guardian for every rider</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter leading-[0.9] mb-8 uppercase">
                YOUR PACK.<br />
                <span className="text-hero-accent text-outline-white">SYNCED.</span><br />
                YOUR RIDE.<br />
                SECURED.
              </h1>
              <p className="text-lg md:text-xl text-dark-text-secondary max-w-xl mb-12">
                A high-tech riding platform that transforms your smartphone into a dedicated motorcycle dashboard. Focused on real-time safety and hands-free utility.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#waitlist" className="px-10 py-5 bg-hero-accent text-white font-black italic uppercase tracking-tighter text-xl hover:scale-105 active:scale-95 transition-all text-center">
                  Join the Waitlist
                </a>
                <a href="#features" className="px-10 py-5 border border-dark-border hover:bg-dark-surface text-white font-black italic uppercase tracking-tighter text-xl transition-all text-center">
                  Explore Features
                </a>
              </div>
            </motion.div>
          </div>

          {/* Subtle decoration */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Scroll to navigate</span>
            <div className="w-px h-12 bg-linear-to-b from-hero-accent to-transparent"></div>
          </div>
        </section>

        {/* Feature Grid - Recipe 1 Inspired */}
        <section id="features" className="py-24 border-y border-dark-border bg-dark-surface/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-white">
              <div className="max-w-2xl">
                <span className="text-hero-accent font-mono text-xs tracking-widest uppercase mb-2 block">// Core Ecosystem</span>
                <h2 className="text-4xl md:text-5xl font-black italic tracking-tight uppercase">Performance Driven Engineering</h2>
              </div>
              <div className="hidden md:block text-right">
                <span className="text-dark-text-secondary font-mono text-4xl block">01-04</span>
                <span className="text-[10px] uppercase tracking-widest opacity-40 italic">System modules</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-dark-border border border-dark-border">
              {features.map((feature, idx) => (
                <div key={idx} className="bg-dark-bg p-8 group hover:bg-dark-surface transition-all duration-500">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-black italic uppercase mb-4 tracking-tighter group-hover:text-hero-accent transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-dark-text-secondary text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety Section - Dual Layer */}
        <section id="safety" className="py-32 bg-dark-bg overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase mb-6">
                The Dual-Layer <span className="text-hero-accent">Safety Net</span>
              </h2>
              <p className="text-dark-text-secondary max-w-2xl mx-auto uppercase tracking-wider text-sm font-bold">
                Whether you’re on a solo commute or a cross-country tour, help is always one signal away.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Group Safety */}
              <motion.div
                whileHover={{ y: -10 }}
                className="glass-panel p-10 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Users size={120} className="text-hero-accent" />
                </div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-hero-accent/10 rounded-full">
                    <Shield className="w-8 h-8 text-hero-accent" />
                  </div>
                  <span className="text-xs font-mono tracking-widest uppercase opacity-50">Mode: Pack Synchronization</span>
                </div>
                <h3 className="text-3xl font-black italic uppercase mb-6 tracking-tighter">For Group Riders</h3>
                <p className="text-dark-text-secondary mb-8 text-lg">
                  In the event of a crash, every member in your group receives <strong>instant, high-priority alerts</strong> with exact GPS coordinates. Friends become first responders.
                </p>
                <div className="border-t border-dark-border pt-8 mt-auto">
                  <div className="flex items-center gap-3 text-success font-bold uppercase text-xs tracking-widest">
                    <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
                    Immediate Support Protocol
                  </div>
                </div>
              </motion.div>

              {/* Solo Safety */}
              <motion.div
                whileHover={{ y: -10 }}
                className="glass-panel p-10 relative overflow-hidden border-hero-accent/30"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 text-white">
                  <Navigation size={120} />
                </div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-danger/10 rounded-full">
                    <Bell className="w-8 h-8 text-danger" />
                  </div>
                  <span className="text-xs font-mono tracking-widest uppercase opacity-50">Mode: Solo Sentry</span>
                </div>
                <h3 className="text-3xl font-black italic uppercase mb-6 tracking-tighter">For Solo Riders</h3>
                <p className="text-dark-text-secondary mb-8 text-lg text-white">
                  Accident detected? Ryder triggers an <strong>Automatic Emergency SOS</strong>, sending your live location to pre-set contacts via SMS and Data. No rider is ever truly alone.
                </p>
                <div className="border-t border-dark-border pt-8 mt-auto">
                  <div className="flex items-center gap-3 text-danger font-bold uppercase text-xs tracking-widest">
                    <span className="w-2 h-2 rounded-full bg-danger animate-ping"></span>
                    Emergency Broadcast Protocol
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Voice Interface - Hardware Feel */}
        <section id="dashboard" className="py-32 border-y border-dark-border bg-dark-surface/50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <span className="text-hero-accent font-mono text-xs tracking-widest uppercase mb-4 block">// Hands-Free Command</span>
                <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase mb-8 leading-tight">
                  Focus on the road, <br />
                  <span className="text-white opacity-40">not the screen.</span>
                </h2>
                <div className="space-y-6">
                  {[
                    "Bluetooth-integrated voice assistant",
                    "Voice-activated petrol station search",
                    "On-the-go route adjustments via voice",
                    "Seamless food and rest-stop requests"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4group">
                      <ChevronRight className="w-5 h-5 text-hero-accent group-hover:translate-x-1 transition-transform" />
                      <span className="text-lg text-dark-text-secondary font-medium tracking-wide">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                {/* Mock UI Interface */}
                <div className="aspect-square glass-panel rounded-full flex items-center justify-center relative p-12 border-2 border-hero-accent/40 shadow-[0_0_50px_rgba(47,107,255,0.1)]">
                  <div className="w-full h-full rounded-full border border-dark-border border-dashed animate-[spin_20s_linear_infinite] absolute inset-4"></div>
                  <div className="text-center z-10">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-24 h-24 bg-hero-accent rounded-full mx-auto mb-8 flex items-center justify-center shadow-[0_0_30px_rgba(47,107,255,0.5)]"
                    >
                      <Mic className="w-10 h-10 text-white" />
                    </motion.div>
                    <div className="font-mono text-hero-accent text-sm tracking-[0.2em] mb-2">LISTENING</div>
                    <div className="text-xl font-bold uppercase tracking-widest text-white italic">"Find nearest shell station"</div>
                  </div>
                </div>

                {/* Floating labels */}
                <div className="absolute -top-4 -right-4 glass-panel px-4 py-2 rounded-sm text-[10px] uppercase tracking-widest font-bold">Latency: 24ms</div>
                <div className="absolute -bottom-4 -left-4 glass-panel px-4 py-2 rounded-sm text-[10px] uppercase tracking-widest font-bold">Model: Rydal-V1</div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Intelligence */}
        <section className="py-32 bg-dark-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-panel p-1 border-hero-accent/20">
              <div className="bg-dark-bg p-8 md:p-16 flex flex-col lg:flex-row gap-16 items-center">
                <div className="flex-1 order-2 lg:order-1">
                  <div className="inline-flex items-center gap-2 text-hero-accent font-black italic uppercase tracking-tighter mb-6">
                    <Award className="w-6 h-6" />
                    <span>Contributor Program</span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase mb-6 leading-tight">
                    Ride Smarter.<br />
                    Get <span className="text-hero-accent">Rewarded.</span>
                  </h2>
                  <p className="text-dark-text-secondary text-lg mb-8 max-w-xl">
                    Our community-built database gets smarter with every kilometer. Contribute data on road conditions, hidden viewpoints, and dangerous patches to earn subscription discounts and exclusive gear.
                  </p>
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <div className="text-3xl font-black italic text-white mb-1">15% OFF</div>
                      <div className="text-[10px] uppercase tracking-widest text-dark-text-secondary">Basic contribution</div>
                    </div>
                    <div>
                      <div className="text-3xl font-black italic text-hero-accent mb-1">40% OFF</div>
                      <div className="text-[10px] uppercase tracking-widest text-dark-text-secondary">Elite road scout</div>
                    </div>
                  </div>
                </div>

                <div className="flex-1 lg:order-2 grid grid-cols-2 gap-4 w-full">
                  <div className="space-y-4">
                    <div className="h-40 glass-panel rounded-lg flex items-center justify-center -rotate-3 hover:rotate-0 transition-transform">
                      <div className="text-center">
                        <MapPin className="w-8 h-8 text-warning mx-auto mb-2" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">New Viewpoint</span>
                      </div>
                    </div>
                    <div className="h-32 glass-panel rounded-lg flex items-center justify-center rotate-2 hover:rotate-0 transition-transform border-success/30">
                      <div className="text-center">
                        <AlertTriangle className="w-8 h-8 text-success mx-auto mb-2" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Clear Road</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="h-32 glass-panel rounded-lg flex items-center justify-center -rotate-2 hover:rotate-0 transition-transform border-danger/30">
                      <div className="text-center">
                        <Zap className="w-8 h-8 text-danger mx-auto mb-2" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Pothole Alert</span>
                      </div>
                    </div>
                    <div className="h-40 glass-panel rounded-lg flex items-center justify-center rotate-3 hover:rotate-0 transition-transform border-info/30">
                      <div className="text-center">
                        <Mic className="w-8 h-8 text-info mx-auto mb-2" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Voice Note</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Waitlist Form */}
        <section id="waitlist" className="py-32 bg-dark-bg relative">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <div className="inline-block p-4 bg-hero-accent/10 rounded-2xl mb-8">
              <Zap className="w-10 h-10 text-hero-accent" />
            </div>
            <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase mb-6 leading-none">
              Claim Your Spot <br />in the Pack
            </h2>
            <p className="text-xl text-dark-text-secondary mb-12 uppercase tracking-wide font-bold">
              Be the first to experience the Rydal ecosystem.
            </p>

            <AnimatePresence mode="wait">
              {formStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-12 glass-panel border-success/30 rounded-lg flex flex-col items-center"
                >
                  <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mb-6">
                    <Heart className="w-10 h-10 text-success" />
                  </div>
                  <h3 className="text-3xl font-black italic uppercase mb-4 tracking-tighter text-white">Welcome aboard, Rider.</h3>
                  <p className="text-dark-text-secondary italic tracking-widest font-bold uppercase text-sm">You are officially on the list. High-five.</p>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  layout
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      required
                      type="text"
                      placeholder="YOUR NAME"
                      className="w-full bg-dark-surface border border-dark-border px-6 py-5 focus:border-hero-accent outline-hidden transition-colors font-black italic uppercase tracking-widest text-white"
                    />
                    <input
                      required
                      type="email"
                      placeholder="EMAIL ADDRESS"
                      className="w-full bg-dark-surface border border-dark-border px-6 py-5 focus:border-hero-accent outline-hidden transition-colors font-black italic uppercase tracking-widest text-white"
                    />
                  </div>
                  <select className="w-full bg-dark-surface border border-dark-border px-6 py-5 focus:border-hero-accent outline-hidden transition-colors font-black italic uppercase tracking-widest text-white appearance-none">
                    <option>SELECT YOUR MACHINE</option>
                    <option>SPORT / STREET</option>
                    <option>ADV / DUAL SPORT</option>
                    <option>CRUISER</option>
                    <option>TRACK / RACE</option>
                    <option>OTHER / VINTAGE</option>
                  </select>
                  <button
                    disabled={formStatus === 'submitting'}
                    className="w-full py-6 bg-hero-accent text-white font-black italic uppercase text-2xl tracking-tighter hover:bg-opacity-90 disabled:opacity-50 transition-all flex items-center justify-center gap-4"
                  >
                    {formStatus === 'submitting' ? 'PROCESING...' : (
                      <>
                        Request Beta Access
                        <ChevronRight />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>

            <p className="mt-8 text-[10px] text-dark-text-secondary uppercase tracking-[0.3em] font-bold">
              Join 4,200+ riders waiting for the revolution
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="pt-32 pb-12 border-t border-dark-border bg-dark-surface relative overflow-hidden">
        {/* Big Background Text */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 pointer-events-none select-none opacity-[0.03]">
          <h2 className="text-[25vw] font-black italic tracking-tighter leading-none text-white whitespace-nowrap uppercase">
            RYDAL
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-24">
            <motion.h2
              style={{ opacity, scale }}
              className="text-8xl md:text-[12rem] font-black italic tracking-tighter leading-[0.8] uppercase mb-12"
            >
              Rydal<span className="text-hero-accent">.</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-8">
                <img src="../../public/app_logo_white.png" alt="Rydal Logo" className="h-25 w-auto grayscale brightness-200" referrerPolicy="no-referrer" />
              </div>
              <p className="text-dark-text-secondary max-w-sm mb-12 text-lg font-medium leading-relaxed">
                Empowering the riding community through advanced technology, real-time synchronization, and unconditional safety. Built for the ultimate riding experience.
              </p>
              <div className="flex gap-6">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-12 h-12 border border-dark-border flex items-center justify-center hover:bg-hero-accent hover:border-hero-accent transition-all cursor-pointer group rounded-full">
                    <div className="w-5 h-5 bg-dark-text-secondary group-hover:bg-white rounded-sm"></div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-mono tracking-[0.3em] uppercase mb-8 text-hero-accent">// Ecosystem</h4>
              <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-dark-text-secondary">
                <li><a href="#" className="hover:text-white transition-colors">Group Sync</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Safety Net</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Voice AI</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Data Rewards</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono tracking-[0.3em] uppercase mb-8 text-hero-accent">// Company</h4>
              <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-dark-text-secondary">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-dark-border flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-dark-text-secondary">
            <p>© 2026 RYDAL TECHNOLOGY GROUP. STRIKE FAST. STAY SAFE.</p>
            <div className="flex gap-8">
              <span>LAT: 40.7128° N</span>
              <span>LNG: 74.0060° W</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

