import { motion } from 'framer-motion';

function Services({ lang }) {
  const isAr = lang === 'ar';

  const services = [
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="6" y="8" width="36" height="28" rx="3"/>
          <path d="M6 30h36"/>
          <path d="M18 38h12 M24 36v2"/>
          <circle cx="24" cy="19" r="6"/>
        </svg>
      ),
      title: isAr ? 'أنظمة المؤسسات' : 'Enterprise Systems',
      desc: isAr 
        ? 'نصمم أنظمة ERP وCRM متكاملة ومنصات داخلية مخصصة بالكامل حسب احتياجات عملك. نركز على تبسيط العمليات المعقدة مع الحفاظ على مرونة عالية وقدرة على التطور مع نمو الشركة.' 
        : 'We build custom ERP, CRM, and internal platforms tailored to your unique business processes. From complex operational logic to seamless user experiences, designed to scale as your company grows.'
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="8" width="40" height="28" rx="3"/>
          <path d="M4 28h40"/>
          <path d="M16 36h16"/>
        </svg>
      ),
      title: isAr ? 'تطبيقات الويب' : 'Web Applications',
      desc: isAr 
        ? 'تطبيقات ويب حديثة عالية الأداء وقابلة للتوسع بدرجة كبيرة. سواء كانت منصات SaaS أو بوابات داخلية أو أنظمة معقدة متعددة المستخدمين، نستخدم أحدث التقنيات لضمان السرعة والأمان والتجربة الممتازة.' 
        : 'High-performance, scalable web applications using modern technologies. From SaaS platforms to complex multi-tenant systems and enterprise portals — built for speed, security, and exceptional user experience.'
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="14" y="4" width="20" height="40" rx="4"/>
          <path d="M14 12h20 M14 36h20"/>
        </svg>
      ),
      title: isAr ? 'تطبيقات الجوال' : 'Mobile Applications',
      desc: isAr 
        ? 'تطوير تطبيقات جوال احترافية لـ iOS و Android باستخدام React Native أو Flutter. تجارب مستخدم سلسة، أداء عالي، ودعم كامل للعمل بدون إنترنت مع إشعارات فورية وميزات متقدمة.' 
        : 'Professional cross-platform mobile apps for iOS and Android using React Native and Flutter. Beautiful, fast, and reliable experiences with offline support, push notifications, and advanced features.'
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
    <section id="services" className="relative py-16 md:py-24 px-6 md:px-12" style={{ background: '#0F2318' }}>
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <div className="text-[#00F299] text-xs md:text-sm tracking-[0.2em] mb-5 font-semibold">
            {isAr ? 'خدماتنا' : 'OUR SERVICES'}
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 text-white leading-tight">
            {isAr ? 'ما نقدمه' : 'What We'} <span className="text-[#00F299] mint-glow">{isAr ? 'نبنيه' : 'Build'}</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-base md:text-xl leading-relaxed">
            {isAr 
              ? "من الشركات الناشئة إلى المؤسسات الكبرى — نطوّر برمجيات تعمل بأعلى أداء." 
              : "From lean startups to large enterprises — we build software that performs at scale."}
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-5 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
              whileHover={{ x: isAr ? -6 : 6, transition: { duration: 0.3 } }}
              className={`service-card group relative flex items-center rounded-[24px] md:rounded-[32px] border border-white/10 hover:border-[#00F299]/60 bg-[#071A0E]/80 hover:bg-[#071A0E] transition-all duration-500 overflow-hidden
                flex-row gap-5 p-5 md:gap-10 md:p-10 ${isAr ? 'flex-row-reverse' : ''}`}
            >
              {/* Icon */}
              <div className="shrink-0 w-14 h-14 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-[#00F299]/10 group-hover:bg-[#00F299]/20 flex items-center justify-center text-[#00F299]/70 group-hover:text-[#00F299] transition-all duration-500">
                <div className="w-8 h-8 md:w-full md:h-full flex items-center justify-center">
                  {service.icon}
                </div>
              </div>

              <div className="hidden md:block shrink-0 w-px h-16 bg-white/10 group-hover:bg-[#00F299]/30 transition-colors duration-500" />

              {/* Text */}
              <div className={`flex-1 min-w-0 ${isAr ? 'text-right' : 'text-left'}`}>
                <h3 className="text-lg md:text-3xl font-black mb-1 md:mb-3 text-white group-hover:text-[#00F299] transition-colors leading-tight">
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm md:text-lg leading-relaxed">
                  {service.desc}
                </p>
              </div>


              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;