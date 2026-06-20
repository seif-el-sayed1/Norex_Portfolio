import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

function Contact({ lang }) {
  const isAr = lang === 'ar';
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    projectDetails: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: isAr ? 'جاري الإرسال...' : 'Sending...' });

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          fullName: formData.fullName,
          email: formData.email,
          projectDetails: formData.projectDetails,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus({ 
        type: 'success', 
        message: isAr ? 'تم إرسال الرسالة بنجاح! سنرد عليك خلال 24 ساعة.' : 'Message sent successfully! We will reply within 24 hours.' 
      });

      setFormData({ fullName: '', email: '', projectDetails: '' });

    } catch (error) {
      console.error(error);
      setStatus({ 
        type: 'error', 
        message: isAr ? 'حدث خطأ أثناء الإرسال. حاول مرة أخرى.' : 'Failed to send. Please try again.' 
      });
    }
  };

  return (
    <section id="contact" className="relative py-16 md:py-24 px-6 md:px-12 bg-[#0E2016]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <div className="text-[#00F299] text-xs md:text-sm tracking-[0.2em] mb-5 font-semibold">
            {isAr ? 'تواصل معنا' : 'CONTACT US'}
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 text-white leading-tight">
            {isAr ? "لنبني شيئاً عظيماً" : "Let's Build"} <span className="text-[#00F299] mint-glow">{isAr ? 'معاً' : 'Something Great'}</span>
          </h2>
          
          <p className="text-white/70 max-w-2xl mx-auto text-lg md:text-2xl leading-relaxed">
            {isAr 
              ? "أخبرنا عن مشروعك. سنردّ عليك خلال 24 ساعة." 
              : "Tell us about your project. We'll get back to you within 24 hours."}
          </p>
        </div>

        <motion.form 
          onSubmit={handleSubmit} 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8 max-w-3xl mx-auto"
        >
          {/* Form fields remain the same */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className={isAr ? 'text-right' : 'text-left'}>
              <label className="block text-white/60 text-sm tracking-widest font-medium mb-3">
                {isAr ? 'الاسم الكامل' : 'FULL NAME'}
              </label>
              <input 
                type="text" 
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                required
                className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:border-[#00F299] outline-none text-white placeholder-white/40 text-lg transition-all"
                placeholder={isAr ? "الاسم الكامل" : "John Smith"}
              />
            </div>
            
            <div className={isAr ? 'text-right' : 'text-left'}>
              <label className="block text-white/60 text-sm tracking-widest font-medium mb-3">
                {isAr ? 'البريد الإلكتروني' : 'EMAIL ADDRESS'}
              </label>
              <input 
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:border-[#00F299] outline-none text-white placeholder-white/40 text-lg transition-all"
                placeholder={isAr ? "البريد الإلكتروني" : "john@company.com"}
              />
            </div>
          </div>

          <div className={isAr ? 'text-right' : 'text-left'}>
            <label className="block text-white/60 text-sm tracking-widest font-medium mb-3">
              {isAr ? 'تفاصيل المشروع' : 'PROJECT DETAILS'}
            </label>
            <textarea 
              rows="7" 
              value={formData.projectDetails}
              onChange={(e) => setFormData({...formData, projectDetails: e.target.value})}
              required
              placeholder={isAr 
                ? "أخبرنا عن مشروعك، أهدافه، الجدول الزمني، والمتطلبات التقنية..." 
                : "Tell us about your project, goals, timeline, and any technical requirements..."}
              className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:border-[#00F299] outline-none text-white placeholder-white/40 text-lg resize-y transition-all"
            />
          </div>

          <motion.button 
            type="submit"
            disabled={status.type === 'loading'}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto px-12 py-5 text-lg font-bold rounded-2xl bg-[#00F299] hover:bg-[#00F299]/90 text-black transition-all duration-300 disabled:opacity-70 mx-auto block shadow-xl"
          >
            {status.type === 'loading' 
              ? (isAr ? 'جاري الإرسال...' : 'Sending...') 
              : (isAr ? 'إرسال الرسالة' : 'Send Message')}
          </motion.button>
        </motion.form>

        {status.message && status.type !== 'loading' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`mt-10 text-center text-lg font-medium ${status.type === 'success' ? 'text-[#00F299]' : 'text-red-400'}`}
          >
            {status.message}
          </motion.div> 
        )}
        {/* Contact Info Bar */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            
            <div>
              <div className="text-white/50 text-sm tracking-widest mb-2">
                {isAr ? 'البريد الإلكتروني' : 'EMAIL'}
              </div>
              <a
                href="mailto:norex.software.dev@gmail.com"
                className="text-[#00F299] hover:underline text-xl font-semibold"
              >
                norex.software.dev@gmail.com
              </a>
            </div>

            <div>
              <div className="text-white/50 text-sm tracking-widest mb-2">
                {isAr ? 'مدة الرد' : 'RESPONSE TIME'}
              </div>
              <div className="text-white text-xl font-semibold">
                {isAr ? 'خلال 24 ساعة' : 'Within 24 Hours'}
              </div>
            </div>

            <div>
              <div className="text-white/50 text-sm tracking-widest mb-2">
                {isAr ? 'لينكدإن' : 'LINKEDIN'}
              </div>
              <a
                href="https://www.linkedin.com/company/norex-software/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00F299] hover:underline text-xl font-semibold"
              >
                {isAr ? 'تواصل معنا على لينكدإن ←' : 'Connect on LinkedIn →'}
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;