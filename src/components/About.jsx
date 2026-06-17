import { motion } from 'framer-motion';

function About({ lang }) {
  const isAr = lang === 'ar';
  
  const content = isAr 
    ? [
        'في Norex، نهندس حلولاً برمجية متكاملة تدفع المؤسسات نحو الصدارة. نحن نتخصص في ابتكار الأنظمة المؤسسية وتطوير تطبيقات الويب والجوال مع دمج ميزات الذكاء الاصطناعي (AI) المخصصة لرفع كفاءة عملياتك.',
        'نحول الأفكار الطموحة إلى واقع رقمي يتميز ببنية تحتية قوية، تقنيات ذكية، وأمان صارم؛ ليكون نظامك البرمجي شريكاً استراتيجياً يضمن لك تفوقاً مستداماً في السوق الرقمي.'
      ]
    : [
        'At Norex, we engineer comprehensive software solutions that propel enterprises forward. We specialize in building enterprise systems, web, and mobile applications integrated with custom AI features to maximize operational efficiency.',
        'We transform ambitious visions into secure, intelligent, and scalable digital realities—ensuring your software acts as a core strategic asset that delivers a sustainable competitive edge.'
      ];

  return (
    <section id="about" className="relative py-16 md:py-24 px-6 md:px-12 bg-[#162B1E] overflow-hidden section-glow">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="text-[#00F299] text-md md:text-xl tracking-[0.2em] mb-5 font-semibold">
            {isAr ? 'من نحن' : 'ABOUT US'}
          </div>
          
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-none text-white mb-6">
            {isAr ? 'نطوّر حلولًا رقمية تُحدث أثرًا حقيقيًا.' : 'Building Digital Products That Make a Difference.'}
          </h2>
          
          <motion.p 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-[#00F299] text-xl md:text-2xl font-medium mint-glow"
          >
            {isAr ? 'هندسة برمجية ذكية للمؤسسات' : 'Smart Software Engineering for Enterprises'}
          </motion.p>
        </motion.div>

        {/* Content */}
        <div className="max-w-3xl mx-auto"> 
          <div className={`space-y-8 text-lg md:text-xl text-white/80 leading-relaxed text-center ${isAr ? 'md:text-right' : 'md:text-left'}`}
          >
            {content.map((paragraph, index) => (
              <motion.p 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;