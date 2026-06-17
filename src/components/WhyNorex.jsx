import { motion } from 'framer-motion';

function WhyNorex({ lang }) {
  const isAr = lang === 'ar';

  const pillars = [
    {
      number: "01",
      icon: (
        <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M3 19v-8l9-5 9 5v8l-9 5-9-5z"/>
          <path d="M3 11l9 5 9-5"/>
          <path d="M12 2v10"/>
        </svg>
      ),
      title: isAr ? 'حلول مخصصة' : 'Tailored Solutions',
      desc: isAr
        ? 'نطور حلولاً رقمية مصممة خصيصاً لتناسب احتياجات عملك وأهدافه، بعيداً عن القوالب الجاهزة.'
        : 'We create custom digital solutions designed around your business goals, workflows, and unique requirements.'
    },
    {
      number: "02",
      icon: (
        <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M12 2L3 7v10c0 5 4 9 9 10 5-1 9-5 9-10V7l-9-5z"/>
          <path d="M12 7v5"/>
          <path d="M9 13l3 3 5-5"/>
        </svg>
      ),
      title: isAr ? 'جودة وموثوقية' : 'Quality & Reliability',
      desc: isAr
        ? 'نركز على بناء تطبيقات مستقرة وسريعة وسهلة الصيانة لضمان أفضل تجربة للمستخدمين.'
        : 'We focus on building reliable, high-performance applications that deliver a smooth user experience.'
    },
    {
      number: "03",
      icon: (
        <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <circle cx="12" cy="12" r="10"/>
          <circle cx="12" cy="12" r="4"/>
          <path d="M12 2v20 M2 12h20"/>
        </svg>
      ),
      title: isAr ? 'نمو مستدام' : 'Built for Growth',
      desc: isAr
        ? 'نبني أنظمة قابلة للتوسع تساعد شركتك على النمو والتطور دون الحاجة لإعادة بناء المشروع مستقبلاً.'
        : 'Our solutions are designed to scale with your business and support future growth with confidence.'
    },
    {
      number: "04",
      icon: (
        <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M12 2v4M12 18v4M4 12h4M16 12h4"/>
          <path d="M6.34 6.34l2.83 2.83M14.83 14.83l2.83 2.83M6.34 17.66l2.83-2.83M14.83 9.17l2.83-2.83"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      ),
      title: isAr ? 'دمج الذكاء الاصطناعي' : 'AI Integration',
      desc: isAr
        ? 'نطور وندمج أدوات وميزات الذكاء الاصطناعي مباشرةً داخل نظامك المؤسسي أو تطبيقك، لتحويل العمليات التقليدية إلى وظائف ذكية تعمل تلقائياً وتسهل إدارة عملك.'
        : 'We develop and integrate custom AI features directly into your enterprise system or application, transforming traditional workflows into smart, automated operations.'
    }
  ];

  return (
    <section id="why" dir={isAr ? "rtl" : "ltr"} className="relative py-16 md:py-24 px-4 md:px-8 bg-[#112819] overflow-hidden section-glow">
      <div className="max-w-[90xl] mx-auto">
        
        <div className="text-center mb-14 md:mb-20">
          <div className="text-[#00F299] text-md md:text-xl tracking-[0.2em] mb-5 font-semibold">
            {isAr ? 'لماذا Norex' : 'WHY NOREX'}
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 text-white leading-tight">
            {isAr ? (
              <>
                الفارق مع <span className="text-[#00F299] mint-glow">Norex</span>
              </>
            ) : (
              <>
                The <span className="text-[#00F299] mint-glow">Norex Difference</span>
              </>
            )}
          </h2>
          
          <p className="text-white/70 max-w-2xl mx-auto text-base md:text-xl leading-relaxed">
            {isAr
              ? "مبادئ أساسية تميز الحلول البرمجية الذكية عن الأنظمة التقليدية."
              : "Core principles that separate good software from truly transformative systems."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className={`pillar-card relative p-8 xl:p-10 rounded-[2.5rem] border border-white/10 hover:border-[#00F299]/70 bg-[#0D2016] hover:bg-[#0a1c12] transition-all duration-500 flex flex-col h-full group ${
                isAr ? 'text-right' : 'text-left'
              }`}
            >
              <div className={`absolute -top-6 text-[100px] xl:text-[130px] font-black text-[#00F299]/10 group-hover:text-[#00F299]/20 transition-all duration-500 select-none ${
                isAr ? 'left-6' : 'right-6'
              }`}>
                {pillar.number}
              </div>

              <div className="mb-10 w-16 h-16 rounded-2xl bg-[#00F299]/10 flex items-center justify-center group-hover:bg-[#00F299]/20 transition-all z-10">
                {pillar.icon}
              </div>

              <h3 className="text-2xl xl:text-3xl font-black mb-5 text-white group-hover:text-[#00F299] transition-colors leading-tight z-10">
                {pillar.title}
              </h3>

              <p className="text-white/80 text-base xl:text-lg leading-relaxed flex-1 z-10">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyNorex;