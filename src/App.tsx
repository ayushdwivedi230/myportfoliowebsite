/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import SkillsMarquee from './components/SkillsMarquee';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StarBackground from './components/StarBackground';

export default function App() {
  return (
    <div className="relative">
      <StarBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Education />
        <SkillsMarquee />
        <Projects />
        <Certificates />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
