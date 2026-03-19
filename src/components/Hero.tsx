import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ChevronDown } from 'lucide-react';

const roles = [
  "Full-Stack Developer",
  "Cloud Computing Enthusiast"
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full glass text-xs font-semibold tracking-wider text-primary uppercase mb-6"
          >
            Welcome to my portfolio
          </motion.span>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
            I'm <span className="gradient-text">Ayush Dwivedi</span>
          </h1>

          <div className="h-12 mb-6">
            <AnimatePresence mode="wait">
              <motion.p
                key={roles[roleIndex]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl font-medium text-white/80"
              >
                {roles[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <p className="text-lg text-white/60 mb-10 max-w-lg leading-relaxed">
            I build scalable web applications and cloud-powered systems. 
            Passionate about creating efficient, user-centric digital experiences.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="/assets/AyushDwivediCV.pdf"
              download="AyushDwivedi_CV.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-dark font-bold rounded-xl flex items-center gap-2 hover:bg-primary/90 transition-colors"
            >
              <Download size={20} />
              Resume
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 card-3d">
            {/* Animated Rings */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-full"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 border border-secondary/20 rounded-full"
            />
            
            <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-white/10 shadow-[0_20px_50px_rgba(167,139,250,0.3)]">
              <img 
                src="/profile.jpg" 
                alt="Ayush Dwivedi" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=400&h=400";
                }}
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
