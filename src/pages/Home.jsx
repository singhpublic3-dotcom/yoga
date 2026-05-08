import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, MessageSquare, GraduationCap, Microscope, Sparkles, User, Heart, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    session: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // SheetDB API integration
    // REPLACE 'YOUR_SHEETDB_ID' with your actual ID
    const SHEETDB_API_URL = 'https://sheetdb.io/api/v1/YOUR_SHEETDB_ID';

    try {
      const response = await fetch(SHEETDB_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: [formData]
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', email: '', session: '', message: '' });
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    },
    viewport: { once: true }
  };

  return (
    <div className="overflow-x-hidden">
      {/* Section 1: Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-primary">
        {/* Background Decorative Mandalas */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] opacity-[0.06] text-accent-light animate-rotate">
            <svg viewBox="0 0 200 200" fill="currentColor"><path d="M100 0C100 0 110 50 150 50C150 50 150 60 100 60C100 60 50 60 50 50C50 50 90 50 100 0ZM100 200C100 200 90 150 50 150C50 150 50 140 100 140C100 140 150 140 150 150C150 150 110 150 100 200ZM0 100C0 100 50 90 50 50C50 50 60 50 60 100C60 100 60 150 50 150C50 150 50 110 0 100ZM200 100C200 100 150 110 150 150C150 150 140 150 140 100C140 100 140 50 150 50C150 50 150 90 200 100Z"/></svg>
          </div>
          <div className="absolute bottom-[5%] right-[-10%] w-[600px] h-[600px] opacity-[0.04] text-accent-light animate-rotate" style={{ animationDirection: 'reverse', animationDuration: '80s' }}>
             <svg viewBox="0 0 200 200" fill="currentColor"><circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="10 5"/><circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5"/><path d="M100 20v160M20 100h160" stroke="currentColor" strokeWidth="0.5"/></svg>
          </div>
          <div className="absolute top-[40%] left-[60%] w-[300px] h-[300px] opacity-[0.06] text-accent-light animate-rotate" style={{ animationDuration: '45s' }}>
             <svg viewBox="0 0 200 200" fill="currentColor"><path d="M100 20C120 40 180 40 180 100C180 160 120 160 100 180C80 160 20 160 20 100C20 40 80 40 100 20Z" fill="none" stroke="currentColor" strokeWidth="1"/></svg>
          </div>
        </div>

        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center relative z-10">
          <motion.div 
            className="w-full md:w-[60%] text-center md:text-left mb-12 md:mb-0"
            variants={staggerContainer}
            initial="initial"
            animate="whileInView"
            viewport={{ once: true }}
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-6xl md:text-8xl font-bold text-text-dark mb-6 leading-tight"
            >
              Heal. Breathe. <br />
              <span className="text-accent">Transform.</span>
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="font-dm text-lg md:text-xl text-text-muted mb-10 max-w-lg mx-auto md:mx-0"
            >
              Evidence-based Yoga Therapy for Mind & Body. Restore balance and rediscover your inner vitality.
            </motion.p>
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <a 
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 bg-accent text-white rounded-full font-dm font-bold shadow-lg hover:bg-accent/90 transition-all text-center"
              >
                Book a Session
              </a>
              <a 
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 border-2 border-accent text-accent rounded-full font-dm font-bold flex items-center justify-center space-x-2 hover:bg-accent/5 transition-all"
              >
                <MessageSquare size={20} />
                <span>Chat on WhatsApp</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="w-full md:w-[40%] flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-secondary rounded-full animate-float"></div>
              <div className="absolute inset-2 border-2 border-accent-light/30 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-48 h-48 text-accent animate-pulse">
                  <path d="M50 20 C55 35 75 35 75 50 C75 65 55 65 50 80 C45 65 25 65 25 50 C25 35 45 35 50 20 Z" fill="currentColor" opacity="0.8"/>
                  <path d="M50 30 C53 40 65 40 65 50 C65 60 53 60 50 70 C47 60 35 60 35 50 C35 40 47 40 50 30 Z" fill="white" opacity="0.5"/>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-accent"
          >
            <ChevronDown size={32} />
          </motion.div>
        </div>
      </section>

      {/* Section 2: About / Credentials */}
      <section className="py-24 bg-primary relative">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.span 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="font-dm text-sm font-bold uppercase tracking-[0.3em] text-accent mb-4 block"
          >
            About
          </motion.span>
          <motion.h2 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-5xl md:text-6xl text-text-dark mb-8"
          >
            Meet Deepak Kumar
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="font-dm text-text-muted text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            A dedicated yoga therapist committed to blending ancient yogic wisdom with modern therapeutic approaches to support your physical, mental, and spiritual wellbeing.
          </motion.p>

          <div className="flex items-center justify-center space-x-4 mb-16">
            <div className="h-[1px] w-24 bg-accent-light"></div>
            <div className="text-accent">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
              </svg>
            </div>
            <div className="h-[1px] w-24 bg-accent-light"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <GraduationCap className="w-8 h-8" />, title: "Post Graduate Diploma", subtitle: "in Yoga Therapy" },
              { icon: <GraduationCap className="w-8 h-8" />, title: "Master's Degree", subtitle: "in Yoga Therapy" },
              { icon: <Microscope className="w-8 h-8" />, title: "Pursuing PhD", subtitle: "in Yoga" }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-secondary border border-accent-light/30 rounded-2xl py-10 px-8 flex flex-col items-center shadow-sm hover:shadow-xl transition-all"
              >
                <div className="text-accent mb-4 p-4 bg-primary rounded-full">
                  {card.icon}
                </div>
                <h3 className="text-2xl text-text-dark font-bold mb-2">{card.title}</h3>
                <p className="text-text-muted font-dm">{card.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Approach / Philosophy */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.span 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="font-dm text-sm font-bold uppercase tracking-[0.3em] text-accent mb-4 block"
          >
            My Approach
          </motion.span>
          <motion.h2 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-5xl md:text-6xl text-text-dark mb-16"
          >
            Yoga as a Path to Wholeness
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Sparkles className="w-10 h-10" />, title: "Therapeutic", desc: "Evidence-based techniques tailored to your health needs" },
              { icon: <User className="w-10 h-10" />, title: "Personalized", desc: "Each session crafted uniquely for your body and mind" },
              { icon: <Heart className="w-10 h-10" />, title: "Holistic", desc: "Addressing physical, mental, and spiritual dimensions together" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="bg-primary rounded-2xl p-10 border-t-4 border-accent text-left shadow-sm hover:shadow-lg transition-all"
              >
                <div className="text-accent mb-6">{item.icon}</div>
                <h3 className="text-2xl text-text-dark font-bold mb-4">{item.title}</h3>
                <p className="text-text-muted font-dm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Enquiry / Contact Form */}
      <section id="contact" className="py-24 bg-primary">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left Column */}
            <div className="lg:w-1/2">
              <motion.span 
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="font-dm text-sm font-bold uppercase tracking-[0.3em] text-accent mb-4 block"
              >
                Get In Touch
              </motion.span>
              <motion.h2 
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="text-5xl md:text-6xl text-text-dark mb-8"
              >
                Begin Your Healing Journey
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="font-dm text-text-muted text-lg mb-12"
              >
                Ready to take the first step towards a healthier you? Reach out today for a consultation or to book your session.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-secondary rounded-2xl p-8 flex flex-col items-start space-y-6"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-[#25D366]/10 text-[#25D366] rounded-xl">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-dark">Prefer to chat?</h4>
                    <p className="text-text-muted text-sm font-dm">Message directly on WhatsApp</p>
                  </div>
                </div>
                <a 
                  href="https://wa.me/91XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#25D366] text-white rounded-full font-dm font-bold flex items-center space-x-2 hover:bg-[#25D366]/90 transition-all"
                >
                  <MessageSquare size={18} />
                  <span>WhatsApp Me</span>
                </a>
              </motion.div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:w-1/2">
              <motion.form 
                onSubmit={handleSubmit}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {status === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center flex flex-col items-center"
                  >
                    <CheckCircle className="text-green-500 w-16 h-16 mb-4" />
                    <h3 className="text-2xl font-bold text-green-800 mb-2 font-cormorant">Thank you!</h3>
                    <p className="text-green-700 font-dm">Your enquiry has been sent. We'll be in touch soon.</p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="mt-6 text-green-700 underline font-dm"
                    >
                      Send another enquiry
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col space-y-2">
                        <label htmlFor="name" className="text-sm font-bold text-text-dark ml-2 uppercase tracking-wider">Full Name</label>
                        <input 
                          type="text" 
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Deepak Kumar"
                          className="bg-secondary border border-accent-light/30 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-accent font-dm text-text-dark"
                        />
                      </div>
                      <div className="flex flex-col space-y-2">
                        <label htmlFor="phone" className="text-sm font-bold text-text-dark ml-2 uppercase tracking-wider">Phone Number</label>
                        <input 
                          type="tel" 
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 9876543210"
                          className="bg-secondary border border-accent-light/30 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-accent font-dm text-text-dark"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                      <label htmlFor="email" className="text-sm font-bold text-text-dark ml-2 uppercase tracking-wider">Email Address</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="deepak@example.com"
                        className="bg-secondary border border-accent-light/30 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-accent font-dm text-text-dark"
                      />
                    </div>

                    <div className="flex flex-col space-y-2">
                      <label htmlFor="session" className="text-sm font-bold text-text-dark ml-2 uppercase tracking-wider">Preferred Session</label>
                      <select 
                        id="session"
                        name="session"
                        required
                        value={formData.session}
                        onChange={handleInputChange}
                        className="bg-secondary border border-accent-light/30 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-accent font-dm text-text-dark appearance-none"
                      >
                        <option value="">Select a session type</option>
                        <option value="One-on-One Therapy">One-on-One Therapy</option>
                        <option value="Group Class">Group Class</option>
                        <option value="Online Session">Online Session</option>
                        <option value="Corporate Wellness">Corporate Wellness</option>
                      </select>
                    </div>

                    <div className="flex flex-col space-y-2">
                      <label htmlFor="message" className="text-sm font-bold text-text-dark ml-2 uppercase tracking-wider">Message</label>
                      <textarea 
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="How can we help you?"
                        className="bg-secondary border border-accent-light/30 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-accent font-dm text-text-dark resize-none"
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full bg-accent text-white rounded-full py-5 font-dm font-bold text-lg shadow-lg hover:bg-accent/90 transition-all flex items-center justify-center space-x-2"
                    >
                      {status === 'loading' ? (
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <>
                          <Send size={20} />
                          <span>Send Enquiry</span>
                        </>
                      )}
                    </button>

                    {status === 'error' && (
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-red-500 font-dm text-center mt-4 flex items-center justify-center space-x-2"
                      >
                        <AlertCircle size={18} />
                        <span>Something went wrong. Please try WhatsApp instead.</span>
                      </motion.p>
                    )}
                  </>
                )}
              </motion.form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
