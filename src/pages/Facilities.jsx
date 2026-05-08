import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, Users, Laptop, Building2, Leaf, Heart, ArrowRight, MessageSquare } from 'lucide-react';

const Facilities = () => {
  const [activeTab, setActiveTab] = useState('in-person');

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const facilities = [
    { icon: <Leaf className="w-10 h-10" />, title: "Yoga Therapy Hall", desc: "Spacious, ventilated hall for group and individual yoga therapy sessions." },
    { icon: <Heart className="w-10 h-10" />, title: "Personal Therapy Room", desc: "Private one-on-one sessions in a calm, focused environment." },
    { icon: <Leaf className="w-10 h-10" />, title: "Meditation Space", desc: "Dedicated quiet space for guided meditation and breathwork." },
    { icon: <Laptop className="w-10 h-10" />, title: "Online Sessions", desc: "Live virtual sessions from the comfort of your home via Zoom/Google Meet." },
    { icon: <Users className="w-10 h-10" />, title: "Group Classes", desc: "Energizing group yoga classes for all experience levels." },
    { icon: <Building2 className="w-10 h-10" />, title: "Corporate Wellness", desc: "Customized yoga programs for offices and organizations." }
  ];

  return (
    <div className="pt-20 overflow-x-hidden">
      {/* Section 1: Page Hero Banner */}
      <section className="h-[50vh] min-h-[400px] bg-secondary flex flex-col items-center justify-center relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,100 C30,80 70,80 100,100" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <path d="M0,90 C30,70 70,70 100,90" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 text-center z-10"
        >
          <span className="font-dm text-sm font-bold uppercase tracking-[0.3em] text-accent mb-4 block">
            What We Offer
          </span>
          <h1 className="text-6xl md:text-7xl font-bold text-text-dark mb-8">
            Our Facilities
          </h1>
          <nav className="flex items-center justify-center space-x-2 text-text-muted font-dm">
            <Link to="/" className="hover:text-accent transition-colors flex items-center">
              <Home size={16} className="mr-1" />
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-accent">Facilities</span>
          </nav>
        </motion.div>
      </section>

      {/* Section 2: Facilities Grid */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.h2 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-5xl md:text-6xl text-text-dark mb-16"
          >
            Spaces Designed for Healing
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="bg-secondary rounded-2xl p-10 text-left border-b-2 border-accent shadow-sm hover:shadow-xl transition-all"
              >
                <div className="text-accent mb-6">{facility.icon}</div>
                <h3 className="text-xl font-bold text-text-dark mb-4 font-dm">{facility.title}</h3>
                <p className="text-text-muted font-dm text-sm leading-relaxed">{facility.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Session Types Tab */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <motion.h2 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-5xl md:text-6xl text-text-dark mb-12 text-center"
          >
            Choose Your Format
          </motion.h2>

          {/* Tab Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-primary/50 p-2 rounded-full border border-accent-light/20 flex space-x-1">
              {['in-person', 'online'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-3 rounded-full font-dm font-bold transition-all ${
                    activeTab === tab 
                      ? 'bg-accent text-white shadow-lg' 
                      : 'bg-transparent text-accent hover:bg-accent/10'
                  }`}
                >
                  {tab === 'in-person' ? 'In-Person' : 'Online'}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="relative min-h-[400px]">
            <AnimatePresence mode="wait">
              {activeTab === 'in-person' ? (
                <motion.div
                  key="in-person"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-primary p-10 md:p-16 rounded-3xl shadow-xl border border-accent-light/10"
                >
                  <h3 className="text-3xl font-bold text-text-dark mb-6">Traditional In-Person Therapy</h3>
                  <p className="text-text-muted mb-8 font-dm text-lg">Experience the full depth of yoga therapy with personalized guidance in our serene studio environment.</p>
                  <ul className="space-y-4 mb-10">
                    {[
                      "Direct physical adjustments and alignment checks",
                      "Full access to specialized props and equipment",
                      "Calm environment free from domestic distractions",
                      "Flexible timings for 1-on-1 and group sessions"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start space-x-3 text-text-dark font-dm">
                        <div className="mt-1 text-accent"><ArrowRight size={18} /></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="/#contact" className="inline-block px-10 py-4 bg-accent text-white rounded-full font-dm font-bold hover:bg-accent/90 transition-all shadow-lg">
                    Book In-Person Session
                  </a>
                </motion.div>
              ) : (
                <motion.div
                  key="online"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-primary p-10 md:p-16 rounded-3xl shadow-xl border border-accent-light/10"
                >
                  <h3 className="text-3xl font-bold text-text-dark mb-6">Convenient Online Sessions</h3>
                  <p className="text-text-muted mb-8 font-dm text-lg">Heal from the comfort of your own home with live, interactive virtual sessions tailored to your needs.</p>
                  <ul className="space-y-4 mb-10">
                    {[
                      "Interactive sessions via Zoom or Google Meet",
                      "Ideal for those with limited mobility or travel constraints",
                      "Session recordings available for self-practice",
                      "Personalized guidance matching your home setup"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start space-x-3 text-text-dark font-dm">
                        <div className="mt-1 text-accent"><ArrowRight size={18} /></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="/#contact" className="inline-block px-10 py-4 bg-accent text-white rounded-full font-dm font-bold hover:bg-accent/90 transition-all shadow-lg">
                    Book Online Session
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Section 4: CTA Banner */}
      <section className="py-24 bg-accent relative overflow-hidden">
        {/* Background circular decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full"></div>

        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold text-white mb-8"
          >
            Ready to Begin Your <br /> Yoga Journey?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/80 font-dm text-xl mb-12 max-w-2xl mx-auto"
          >
            Whether you're looking for physical healing, mental clarity, or spiritual growth, I'm here to guide you every step of the way.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <a 
              href="/#contact"
              className="w-full sm:w-auto px-10 py-4 bg-white text-accent rounded-full font-dm font-bold shadow-2xl hover:bg-secondary transition-all text-center"
            >
              Enquire Now
            </a>
            <a 
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-4 border-2 border-white text-white rounded-full font-dm font-bold flex items-center justify-center space-x-2 hover:bg-white/10 transition-all"
            >
              <MessageSquare size={20} />
              <span>WhatsApp Me</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
