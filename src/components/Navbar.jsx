import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar({ lang, toggleLang }) {
  const isAr = lang === 'ar';
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6, rootMargin: "-80px 0px -20%" }
    );

    document.querySelectorAll('section[id]').forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { id: 'services', label: isAr ? 'خدماتنا' : 'Services' },
    { id: 'why', label: isAr ? 'لماذا نوريكس' : 'Why Norex' },
    { id: 'contact', label: isAr ? 'تواصل معنا' : 'Contact' },
    { id: 'projects', label: isAr ? 'مشاريعنا' : 'Projects' },
    { id: 'about', label: isAr ? 'من نحن' : 'About' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 flex items-center justify-between bg-[#0D1F13]/95 backdrop-blur-xl border-b border-white/10">
        
        {/* Logo */}
        <div className="flex items-center gap-3 z-50" dir="ltr">
          <img src="/logo.png" alt="Norex" className="h-8 md:h-10 w-auto" />
          <span className="text-2xl md:text-3xl font-black tracking-tighter text-white">Norex</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 text-base font-medium">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`transition-all duration-300 hover:text-[#00F299] py-1 relative ${
                activeSection === link.id ? 'text-[#00F299]' : 'text-white/80'
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <motion.span
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 h-[2px] w-full bg-[#00F299]"
                />
              )}
            </button>
          ))}
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center gap-4">
          
          {/* Language Toggle */}
          <div className="flex items-center border border-[#00F299]/30 rounded-2xl overflow-hidden z-50 bg-[#161B19]">
            <button
              onClick={() => lang === 'ar' && toggleLang()}
              className={`px-5 py-2 text-sm font-semibold transition-all ${
                !isAr ? 'bg-[#00F299] text-black' : 'text-white/70 hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => lang === 'en' && toggleLang()}
              className={`px-5 py-2 text-sm font-semibold transition-all ${
                isAr ? 'bg-[#00F299] text-black' : 'text-white/70 hover:text-white'
              }`}
            >
              AR
            </button>
          </div>

          {/* Get Started Button */}
          <button
            onClick={() => scrollToSection('contact')}
            className="hidden md:block border border-[#00F299] hover:bg-[#00F299] hover:text-black text-[#00F299] px-7 py-3 rounded-2xl font-semibold text-sm transition-all duration-300"
          >
            {isAr ? 'ابدأ الآن' : 'Get Started'}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white z-50 relative"
          >
            <AnimatePresence mode="wait">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="md:hidden fixed inset-0 bg-[#0D1F13] z-40 pt-32 px-8 flex flex-col justify-start"
            onClick={() => setIsOpen(false)}
          >
            <div className={`flex flex-col gap-8 text-2xl font-medium w-full ${isAr ? 'text-right' : 'text-left'}`} onClick={e => e.stopPropagation()}>
              {navLinks.map((link, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, x: isAr ? 40 : -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => scrollToSection(link.id)}
                  className={`hover:text-[#00F299] transition-colors py-2 block ${isAr ? 'text-right' : 'text-left'}`}
                >
                  {link.label}
                </motion.button>
              ))}
              
              <button
                onClick={() => scrollToSection('contact')}
                className="mt-6 cta-btn text-lg py-5 text-center block w-full"
              >
                {isAr ? 'ابدأ مشروعك' : 'Get Started'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;