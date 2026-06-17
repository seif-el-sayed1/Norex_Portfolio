import { motion } from 'framer-motion';
import projectsData from '../data';

function Projects({ lang }) {
  const isAr = lang === 'ar';

  return (
    <section 
      id="projects" 
      dir={isAr ? "rtl" : "ltr"} 
      className="relative py-16 md:py-24 px-6 md:px-16 bg-[#0A1F14] overflow-hidden select-none"
    >
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#00F299]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#0A1F14]/60 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        <div className="text-center mb-14 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: isAr ? "0.1em" : "0.25em" }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-[#00F299] text-xs md:text-sm font-bold tracking-[0.25em] mb-6 uppercase"
          >
            {isAr ? '// مشاريعنا المميزة' : '// FEATURED PROJECTS'}
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight"
          >
            {isAr ? 'حلول رقمية تحقق الأهداف' : "Digital Solutions That Drive Results"}
          </motion.h2>
        </div>

        <div className="flex flex-col gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.12, ease: [0.215, 0.610, 0.355, 1] }}
              viewport={{ once: true }}
              whileHover={{ x: isAr ? -4 : 4, transition: { duration: 0.3 } }}
              className={`group relative bg-[#0c1f15] rounded-[28px] md:rounded-[32px] overflow-hidden border border-white/5 hover:border-[#00F299]/30 transition-all duration-500 shadow-2xl hover:shadow-[#00F299]/5
                flex flex-col md:flex-row ${isAr ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="relative w-full h-52 md:w-80 md:h-auto md:shrink-0 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={isAr ? project.title.ar : project.title.en}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1f15] via-transparent to-transparent opacity-70 md:hidden" />
                <div className={`hidden md:block absolute inset-0 bg-gradient-to-${isAr ? 'l' : 'r'} from-transparent to-[#0c1f15] opacity-60`} />
              </div>

              {/* Content */}
              <div className={`flex flex-col justify-between p-7 md:p-12 flex-1 ${isAr ? 'text-right' : 'text-left'}`}>
                <div>
                  <div className="hidden md:block text-[#00F299]/20 text-7xl md:text-8xl font-black leading-none mb-4 select-none">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <h3 className="text-xl md:text-3xl font-bold text-white mb-3 md:mb-4 group-hover:text-[#00F299] transition-colors duration-300 leading-snug">
                    {isAr ? project.title.ar : project.title.en}
                  </h3>
                  
                  <p className="text-white/60 text-sm md:text-base leading-relaxed font-light">
                    {isAr ? project.description.ar : project.description.en}
                  </p>
                </div>

                <div className="mt-6 md:mt-8 pt-5 md:pt-6 border-t border-white/5">
                  <a 
                    target="_blank"
                    href={project.link} 
                    className="inline-flex items-center gap-2 text-md font-bold tracking-wider uppercase text-[#00F299] hover:text-white transition-colors duration-300 group/btn"
                  >
                    {isAr ? 'استكشف المشروع' : 'Explore'}
                    <span className={`inline-block transition-transform duration-300 ${
                      isAr ? 'group-hover/btn:-translate-x-1 rotate-180' : 'group-hover/btn:translate-x-1'
                    }`}>
                      →
                    </span>
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;