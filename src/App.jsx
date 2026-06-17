import { useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import WhyNorex from './components/WhyNorex';
import Contact from './components/Contact';
import Projects from './components/Projects';

const Divider = ({ from, to, flip = false }) => {
  const pathRef = useRef(null);

  useEffect(() => {
    let tick = 0;
    let raf;
    const animate = () => {
      tick += 0.02;
      const y1 = 20 + Math.sin(tick) * 15;
      const y2 = 30 + Math.cos(tick * 0.8) * 18;
      const y3 = 40 + Math.sin(tick * 1.2) * 12;
      pathRef.current?.setAttribute(
        'd',
        `M0,80 L0,${y1} Q360,80 720,${y2} Q1080,-10 1440,${y3} L1440,80 Z`
      );
      raf = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="relative h-16 md:h-20 overflow-hidden" style={{ background: from }}>
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 w-full h-full"
        style={{ transform: flip ? 'scaleX(-1)' : 'none' }}
      >
        <path ref={pathRef} fill={to} />
      </svg>
    </div>
  );
};

export const COLORS = {
  hero:     '#0D1F13',
  services: '#0F2318',
  about:    '#162B1E',
  projects: '#0A1F14',
  why:      '#112819',
  contact:  '#0E2016',
  footer:   '#0B1C11',
};

function App() {
  const [lang, setLang] = useState('en');

  const toggleLang = () => {
    const newLang = lang === 'en' ? 'ar' : 'en';
    setLang(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  return (
    <div className="min-h-screen text-[#F4F9F6] overflow-x-hidden" style={{ background: COLORS.hero }}>
      <Navbar lang={lang} toggleLang={toggleLang} />

      <main>
        <Hero lang={lang} />

        <Divider from={COLORS.hero} to={COLORS.services} />
        <Services lang={lang} />

        <Divider from={COLORS.services} to={COLORS.about} flip />
        <About lang={lang} />

        <Divider from={COLORS.about} to={COLORS.projects} />
        <Projects lang={lang} />

        <Divider from={COLORS.projects} to={COLORS.why} flip />
        <WhyNorex lang={lang} />

        <Divider from={COLORS.why} to={COLORS.contact} />
        <Contact lang={lang} />
      </main>

      <footer className="py-10 text-center text-sm text-white/40 border-t border-white/10" style={{ background: COLORS.footer }}>
        © 2025 Norex. All rights reserved.
      </footer>
    </div>
  );
}

export default App;