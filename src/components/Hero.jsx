import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

function Hero({ lang }) {
  const isAr = lang === 'ar';
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const mouse = { x: -9999, y: -9999 };
    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onMouseLeave = () => { mouse.x = mouse.y = -9999; };

    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);

    const MINT = '0,242,153';
    const COUNT = 95;
    const MAX_DIST = 180;

    const particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height * 0.95,
      vx: (Math.random() - 0.5) * 1.8,
      vy: (Math.random() - 0.5) * 1.8,
      r: Math.random() * 2.8 + 1.3,
      pulse: Math.random() * Math.PI * 2,
    }));

    const orbs = [
      { x: canvas.width * 0.15, y: canvas.height * 0.25, r: 210, vx: 0.08, vy: 0.05 },
      { x: canvas.width * 0.78, y: canvas.height * 0.68, r: 245, vx: -0.07, vy: -0.06 },
      { x: canvas.width * 0.45, y: canvas.height * 0.18, r: 170, vx: 0.11, vy: -0.08 },
      { x: canvas.width * 0.88, y: canvas.height * 0.35, r: 130, vx: -0.09, vy: 0.07 },
    ];

    let tick = 0;

    const draw = () => {
      tick++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      orbs.forEach(o => {
        o.x += o.vx;
        o.y += o.vy;
        if (o.x < -o.r || o.x > canvas.width + o.r) o.vx *= -1;
        if (o.y < -o.r || o.y > canvas.height + o.r) o.vy *= -1;

        const grad = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r);
        grad.addColorStop(0, `rgba(${MINT}, 0.1)`);
        grad.addColorStop(0.5, `rgba(${MINT}, 0.035)`);
        grad.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < MAX_DIST) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${MINT}, ${(1 - dist / MAX_DIST) * 0.28})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
      }

      particles.forEach(p => {
        const mdist = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        if (mdist < 130 && mdist > 0) {
          const force = (130 - mdist) / 130 * 0.85;
          p.vx += ((p.x - mouse.x) / mdist) * force;
          p.vy += ((p.y - mouse.y) / mdist) * force;
        }

        p.vx *= 0.992;
        p.vy *= 0.992;
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        const pulsedR = p.r + Math.sin(tick * 0.04 + p.pulse) * 0.7;

        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, pulsedR * 4.8);
        grd.addColorStop(0, `rgba(${MINT}, 0.65)`);
        grd.addColorStop(0.4, `rgba(${MINT}, 0.22)`);
        grd.addColorStop(1, 'transparent');
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(p.x, p.y, pulsedR * 4.8, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, pulsedR, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${MINT}, 0.97)`;
        ctx.fill();
      });

      animFrameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 w-full h-full"
        style={{ opacity: 1 }}
      />

      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0D1F13]/60 via-transparent to-[#0D1F13]/80 pointer-events-none" />

      <div className="relative z-20 text-center max-w-5xl mx-auto px-6 w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.2, delayChildren: 0.1 } }
          }}
          className="space-y-8 md:space-y-12"
        >
          {/* Badge */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            className="inline-flex px-8 py-3 border border-[#00F299]/40 rounded-3xl text-sm md:text-base tracking-widest text-[#00F299] font-medium"
          >
            {isAr ? '// برمجيات المؤسسات تُعاد تعريفها' : '// Enterprise Software Redefined'}
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[82px] font-black tracking-[-3px] leading-none text-white"
          >
            {isAr ? 'أنظمة تُبنى' : 'Build Systems That'}
            <br />
            <span className="mint-glow block mt-2 md:mt-3">
              {isAr ? 'لا حدود لها' : 'Scale Without Limits'}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
            className="text-lg md:text-2xl text-white/75 max-w-3xl mx-auto leading-relaxed"
          >
            {isAr
              ? 'نصمّم أنظمة مؤسسية ومنصات ويب وتطبيقات جوال تدفع أعمالك للأمام على مدى العقد القادم.'
              : 'We architect enterprise systems, web platforms, and mobile experiences that power your business for the next decade.'}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-col sm:flex-row gap-5 justify-center pt-6"
          >
            <motion.button
              onClick={() => scrollTo('contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="cta-btn px-12 py-5 text-lg font-semibold"
            >
              {isAr ? 'ابدأ مشروعك' : 'Start Your Project'}
            </motion.button>

            <motion.button
              onClick={() => scrollTo('services')}
              whileHover={{ scale: 1.05 }}
              className="group flex items-center justify-center gap-3 text-white/80 hover:text-white text-xl font-medium transition-all"
            >
              {isAr ? 'استكشف خدماتنا' : 'Explore Services'}
              <span className="group-hover:translate-x-2 transition">→</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/40 text-xs tracking-widest"
      >
        SCROLL
        <div className="mt-3 w-px h-12 bg-gradient-to-b from-transparent via-[#00F299]/50 to-transparent" />
      </motion.div>
    </section>
  );
}

export default Hero;