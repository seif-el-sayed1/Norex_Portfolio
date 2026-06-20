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
      <footer className="py-12 text-center text-sm text-white/40 border-t border-white/10" style={{ background: COLORS.footer }}>
        <div className="max-w-5xl mx-auto px-6">
          
          {/* Social Media Icons */}
          <div className="flex justify-center gap-8 mb-8">
            <a 
              href="https://www.linkedin.com/company/norex-software/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#00F299] transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            <a 
              href="https://www.instagram.com/norex.dev/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#00F299] transition-all hover:scale-110"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.849.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4 2.21 0 4 1.791 4 4 0 2.21-1.79 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.796 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            <a 
              href="https://www.facebook.com/profile.php?id=61591017839963" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#00F299] transition-all hover:scale-110"
              aria-label="Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-white/30 text-xs tracking-widest">
            © 2025 Norex Software. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;