import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, Users, Laptop, Building2, Leaf, Heart, ArrowRight, MessageSquare } from 'lucide-react';
import facilitiesHero from '../assets/facilities-hero.png';

// --- SVG Icons Components ---

const SpineIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#A0714F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v2M12 6v2M12 10v2M12 14v2M12 18v2M12 22v-2" />
    <path d="M9 4.5c1.5-1 4.5-1 6 0M8 8.5c2-1.5 6-1.5 8 0M7 12.5c2.5-2 7.5-2 10 0M8 16.5c2-1.5 6-1.5 8 0M9 20.5c1.5-1 4.5-1 6 0" />
  </svg>
);

const HeartPulseIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#A0714F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.51 4.05 3 5.5l7 7Z" />
    <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
  </svg>
);

const AnatomicalHeartIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#A0714F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21c-4.5-2.5-7-6-7-10.5a7 7 0 0 1 14 0c0 4.5-2.5 8-7 10.5Z" />
    <path d="M12 6v4M10 8h4M8 14h1M15 14h1" />
    <path d="M11 2s.5 2 1 2 1-2 1-2" />
  </svg>
);

const KneeIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#A0714F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 3c-1 0-3 1.5-4 4.5l-2 6.5s-1 3.5-3 5.5l1.5 1.5c2 0 4.5-1 6-4.5l2.5-7.5c.5-2 1.5-4 1.5-4s-1-2-2.5-2Z" />
    <circle cx="12" cy="11" r="2" />
    <path d="M7 21h10" />
  </svg>
);

const BloodDropIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#A0714F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-4-4.5-4-7.5c0 3-2 5.9-4 7.5s-3 3.5-3 5.5a7 7 0 0 0 7 7Z" />
    <circle cx="12" cy="15" r="2" />
  </svg>
);

const ButterflyIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#A0714F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 18s-1-4-1-6 1-4 1-4 1 2 1 4-1 6-1 6Z" />
    <path d="M11 10c-2-1-4-2-6 1s1 5 4 6c-1 2-2 3 1 3s3-3 4-5c1 2 4 5 7 5s0-4-1-6c3-1 6-3 4-6s-4-2-6-1" />
  </svg>
);

const LungsIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#A0714F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 3c-2 0-3 1-4 4s1 10 4 11c3-1 4-4 4-8s-1-7-4-7Z" />
    <path d="M17 3c2 0 3 1 4 4s-1 10-4 11c-3-1-4-4-4-8s1-7 4-7Z" />
    <path d="M12 3v11M12 7l-2-2M12 7l2-2" />
  </svg>
);

const StomachIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#A0714F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 3c-3 0-5 3-7 6s-3 6-3 9 2 3 5 3 4-2 6-5 4-6 4-10-2-3-5-3Z" />
    <path d="M8 12s1 2 4 2 4-2 4-2" />
  </svg>
);

const HandsIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#A0714F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5" />
    <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v10" />
    <path d="M10 14V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v11" />
    <path d="M18 11h0a2 2 0 0 1 2 2v5a7 7 0 0 1-7 7h-2a7 7 0 0 1-7-7v-3" />
    <circle cx="10" cy="14" r="1" fill="#A0714F" />
    <circle cx="14" cy="11" r="1" fill="#A0714F" />
  </svg>
);

const MentalHealthIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#A0714F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21v-3c0-4.5 3-6.5 3-6.5s3 2 3 6.5v3" />
    <path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
    <path d="M10 6.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
    <path d="M12 5.5s-.5 1-1 1 0-1 0-1 .5-1 1-1" />
  </svg>
);

const NetiPotIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#A0714F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 14h12l1 4H5l1-4Z" />
    <path d="M18 14c2 0 4-1 4-3s-2-3-4-3h-2" />
    <path d="M8 8V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3" />
    <circle cx="21" cy="9" r="1" />
  </svg>
);

const CatheterIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#A0714F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 12c4-8 12-8 16 0s-4 12-8 12-8-4-8-12Z" />
    <path d="M12 12c2 0 4 2 4 4s-2 4-4 4-4-2-4-4 2-4 4-4Z" opacity="0.3" />
  </svg>
);

const DropletIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#A0714F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 18a4 4 0 0 0 4-4c0-1.5-1-3-4-5-3 2-4 3.5-4 5a4 4 0 0 0 4 4Z" />
  </svg>
);

const FlameIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#A0714F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2c0 4.5-5 7-5 11a5 5 0 0 0 10 0c0-4-5-6.5-5-11Z" />
    <path d="M12 18s-1.5-1.5-1.5-3 1.5-2 1.5-2 1.5.5 1.5 2-1.5 3-1.5 3Z" opacity="0.5" />
  </svg>
);

const WavyClothIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#A0714F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 8c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
    <path d="M4 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0" opacity="0.6" />
    <path d="M4 16c2-2 4-2 6 0s4 2 6 0 4-2 6 0" opacity="0.3" />
  </svg>
);

const LotusDivider = () => (
  <div className="flex items-center justify-center space-x-4 my-6">
    <div className="h-[1px] w-12 bg-[#C9A882]"></div>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#C9A882">
      <path d="M12 21c-2-2.5-5-4-5-7 0-3 2-5 5-8 3 3 5 5 5 8 0 3-3 4.5-5 7Z" opacity="0.5" />
      <path d="M12 21c-1.5-2-3.5-3-3.5-5.5 0-2 1.5-3.5 3.5-6 2 2.5 3.5 4 3.5 6 0 2.5-2 3.5-3.5 5.5Z" />
    </svg>
    <div className="h-[1px] w-12 bg-[#C9A882]"></div>
  </div>
);

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

  const therapyCards = [
    {
      icon: <SpineIcon />,
      title: "Yoga for Back Pain",
      sanskrit: "Merudanda Chikitsa",
      desc: "A structured therapeutic program targeting chronic and acute back conditions through spinal mobilization asanas, core strengthening, and postural correction. Addresses disc issues, sciatica, lumbar spondylosis, and muscle tension.",
      tags: ["Marjaryasana", "Bhujangasana", "Setu Bandhasana", "Pawanmuktasana"],
      ideal: "Desk workers, chronic pain patients, post-surgery recovery"
    },
    {
      icon: <HeartPulseIcon />,
      title: "Yoga for Hypertension",
      sanskrit: "Raktachapa Chikitsa",
      desc: "A gentle, evidence-based protocol combining breathwork, restorative asanas, and meditation to reduce systolic and diastolic blood pressure naturally. Activates the parasympathetic nervous system for sustained stress relief.",
      tags: ["Shavasana", "Anulom Vilom", "Yoga Nidra", "Viparita Karani"],
      ideal: "Hypertensive patients, high-stress professionals, anxiety sufferers"
    },
    {
      icon: <AnatomicalHeartIcon />,
      title: "Yoga for Cardiac Disease",
      sanskrit: "Hridaya Chikitsa",
      desc: "A carefully monitored cardiac rehabilitation program using low-intensity yoga, pranayama, and relaxation techniques. Supports heart function, improves circulation, reduces cholesterol, and builds cardiac endurance gradually.",
      tags: ["Sukhasana", "Nadi Shodhana", "Yoga Nidra", "Tadhasana"],
      ideal: "Post-cardiac event recovery, arrhythmia, mild heart failure"
    },
    {
      icon: <KneeIcon />,
      title: "Yoga for Knee Pain",
      sanskrit: "Janu Chikitsa",
      desc: "Targeted asana sequences to strengthen the quadriceps, hamstrings, and surrounding musculature of the knee joint. Reduces inflammation, improves synovial fluid circulation, and restores functional mobility.",
      tags: ["Virabhadrasana", "Utkatasana", "Supta Padangusthasana", "Gomukhasana"],
      ideal: "Osteoarthritis, runner's knee, post-operative rehabilitation"
    },
    {
      icon: <BloodDropIcon />,
      title: "Yoga for Diabetes",
      sanskrit: "Madhumeha Chikitsa",
      desc: "A metabolic wellness program combining dynamic asanas, pranayama, and dietary guidance to regulate blood glucose levels, improve insulin sensitivity, and reduce diabetic complications through consistent yogic practice.",
      tags: ["Mandukasana", "Ardha Matsyendrasana", "Kapalabhati", "Dhanurasana"],
      ideal: "Type 2 diabetics, pre-diabetics, metabolic syndrome"
    },
    {
      icon: <ButterflyIcon />,
      title: "Yoga for Thyroid",
      sanskrit: "Thyroid Granthi Chikitsa",
      desc: "Specialized neck and throat-focused asanas combined with pranayama techniques to stimulate or regulate thyroid gland function. Effective for both hypothyroid and hyperthyroid conditions under supervised guidance.",
      tags: ["Sarvangasana", "Halasana", "Matsyasana", "Ujjayi Pranayama"],
      ideal: "Hypothyroidism, hyperthyroidism, hormonal imbalance"
    },
    {
      icon: <LungsIcon />,
      title: "Yoga for Asthma",
      sanskrit: "Shwasa Chikitsa",
      desc: "A respiratory-focused therapeutic program emphasizing breath expansion, diaphragmatic breathing, and lung capacity building. Reduces frequency and severity of asthmatic episodes through consistent pranayama and chest-opening asanas.",
      tags: ["Kapalbhati", "Bhramari", "Matsyasana", "Ustrasana"],
      ideal: "Asthma, bronchitis, COPD, shortness of breath"
    },
    {
      icon: <StomachIcon />,
      title: "Yoga for Digestive Disease",
      sanskrit: "Pachana Chikitsa",
      desc: "Abdominal yoga techniques and twisting asanas that stimulate digestive organs, improve peristalsis, reduce bloating, and support liver and pancreatic function. Addresses IBS, constipation, acidity, and gastric issues.",
      tags: ["Pavanamuktasana", "Ardha Matsyendrasana", "Trikonasana", "Navasana"],
      ideal: "IBS, constipation, acidity, gastritis, liver disorders"
    },
    {
      icon: <HandsIcon />,
      title: "Yoga for Arthritis",
      sanskrit: "Sandhivata Chikitsa",
      desc: "Gentle mobilization sequences designed to reduce joint inflammation, improve range of motion, and build supporting muscle strength around affected joints. Combines warm-up flows, hydrotherapy guidance, and anti-inflammatory pranayama.",
      tags: ["Sukshma Vyayama", "Trikonasana", "Vrikshasana", "Yoga Nidra"],
      ideal: "Rheumatoid arthritis, osteoarthritis, gout, joint stiffness"
    },
    {
      icon: <MentalHealthIcon />,
      title: "Yoga for Mental Health",
      sanskrit: "Manasika Chikitsa",
      desc: "An integrative mental wellness program combining therapeutic asanas, mindfulness meditation, yoga nidra, and pranayama to address stress, anxiety, depression, and emotional imbalance. Rooted in the yogic understanding of the Pancha Kosha model.",
      tags: ["Yoga Nidra", "Bhramari", "Trataka", "Anulom Vilom"],
      ideal: "Anxiety, depression, insomnia, PTSD, burnout"
    }
  ];

  const shatkarmaCards = [
    {
      icon: <NetiPotIcon />,
      title: "Jala Neti",
      sanskrit: "जल नेति — Jala Neti",
      desc: "The foundational nasal cleansing technique using lukewarm saline water poured through one nostril and released through the other via a traditional neti pot. Purifies the nasal passages and upper respiratory tract.",
      benefits: [
        "Relieves chronic sinusitis and nasal congestion",
        "Reduces frequency of colds and allergies",
        "Improves airflow and oxygen absorption",
        "Calms the nervous system and sharpens mental clarity",
        "Prepares the nasal passage for pranayama"
      ],
      contra: "Active nosebleed, severe nasal polyps, ear infections"
    },
    {
      icon: <CatheterIcon />,
      title: "Sutra Neti",
      sanskrit: "सूत्र नेति — Sutra Neti",
      desc: "An advanced Shatkarma practice where a soft rubber catheter or specially prepared wax-coated cotton thread is gently inserted through the nostril and pulled out through the mouth. Deeply cleanses and tones the nasal mucosa.",
      benefits: [
        "Deep mechanical cleansing of nasal passages",
        "Helps manage nasal polyps and deviated septum",
        "Strengthens nasal and sinus tissue",
        "Enhances concentration and alertness",
        "Stimulates the Ajna (third eye) energy center"
      ],
      contra: "Not for beginners without guidance, avoid during acute infection"
    },
    {
      icon: <DropletIcon />,
      title: "Dugdha Neti (Milk Neti)",
      sanskrit: "दुग्ध नेति — Dugdha Neti",
      desc: "A nourishing variation of Jala Neti performed using warm pure cow's milk instead of saline solution. Known for its soothing and healing properties on irritated or inflamed nasal membranes.",
      benefits: [
        "Soothes inflamed and hypersensitive nasal mucosa",
        "Beneficial for dry nasal passages and chronic irritation",
        "Deeply nourishing for the Ojas (vital essence)",
        "Supports those with allergic rhinitis",
        "Calming effect on the nervous system"
      ],
      contra: "Lactose intolerance, active nasal infection, milk allergy"
    },
    {
      icon: <FlameIcon />,
      title: "Ghrita Neti (Ghee Neti)",
      sanskrit: "घृत नेति — Ghrita Neti",
      desc: "A therapeutic Ayurvedic-yogic practice involving the instillation of warm, pure clarified butter (ghee) into the nasal passages. Used to lubricate, heal, and deeply nourish the nasal and cranial tissues.",
      benefits: [
        "Lubricates dry and cracked nasal membranes",
        "Supports brain tissue nourishment (through Nasya pathway)",
        "Beneficial for migraine, chronic headache, and memory",
        "Balances Vata dosha in the head region",
        "Enhances quality of sleep and reduces anxiety"
      ],
      contra: "Active sinusitis, high kapha imbalance, ghee sensitivity"
    },
    {
      icon: <WavyClothIcon />,
      title: "Vastra Dhauti (Cloth Cleansing)",
      sanskrit: "वस्त्र धौति — Vastra Dhauti",
      desc: "One of the six Shatkarmas, this practice involves slowly swallowing a long, damp, fine muslin cloth strip and gently withdrawing it to mechanically cleanse the esophagus and stomach lining. Practiced under strict expert supervision only.",
      benefits: [
        "Removes excess mucus from the stomach and esophagus",
        "Relieves chronic acidity and gastric disorders",
        "Stimulates digestive fire (Agni)",
        "Beneficial for asthma related to mucus accumulation",
        "Purifies the entire upper alimentary canal"
      ],
      contra: "Strictly supervised practice — not for self-practice. Avoid with ulcers, hernia, or heart conditions"
    }
  ];

  return (
    <div className="pt-20 overflow-x-hidden">
      {/* Section 1: Page Hero Banner */}
      <section className="h-[50vh] min-h-[400px] flex flex-col items-center justify-center relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={facilitiesHero} 
            alt="Yoga Studio" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-text-dark/40 backdrop-blur-[2px]"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 text-center z-10"
        >
          <span className="font-dm text-sm font-bold uppercase tracking-[0.3em] text-accent-light mb-4 block">
            What We Offer
          </span>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-8">
            Our Facilities
          </h1>
          <nav className="flex items-center justify-center space-x-2 text-white/70 font-dm">
            <Link to="/" className="hover:text-white transition-colors flex items-center">
              <Home size={16} className="mr-1" />
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-accent-light">Facilities</span>
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

      {/* REVISED SECTION A — Yoga Therapy Specializations */}
      <section className="bg-[#FAF6F1] py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-dm text-xs font-bold uppercase tracking-widest text-accent mb-4 block"
            >
              THERAPEUTIC PROGRAMS
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12, duration: 0.5 }}
              className="text-5xl md:text-6xl text-text-dark mb-4 font-cormorant"
            >
              Conditions We Treat
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <LotusDivider />
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.24, duration: 0.5 }}
              className="text-text-muted font-dm text-base max-w-3xl mx-auto leading-relaxed"
            >
              Each therapeutic program is rooted in classical yogic science and aligned with modern clinical understanding. Sessions are individually assessed and progressively structured for lasting results.
            </motion.p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {therapyCards.map((card, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.6, delay: idx * 0.07, ease: [0.22, 1, 0.36, 1] }
                  }
                }}
                whileHover={{ y: -4, boxShadow: "0 8px 32px rgba(160,113,79,0.13)" }}
                className="bg-white border border-[#E8D9C8] rounded-2xl px-8 py-8 border-l-4 border-[#A0714F] shadow-[0_2px_16px_rgba(160,113,79,0.07)] transition-all"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">{card.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-text-dark font-cormorant">{card.title}</h3>
                      <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: (idx * 0.07) + 0.3, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-accent-light font-playfair italic text-xs"
                      >
                        {card.sanskrit}
                      </motion.p>
                    </div>
                  </div>
                </div>
                
                <p className="text-text-muted font-dm text-sm leading-relaxed mb-6">
                  {card.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {card.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="bg-[#F2EBE0] text-text-muted text-[10px] px-3 py-1 rounded-full font-dm">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#F2EBE0]">
                  <p className="text-[11px] font-dm text-text-muted uppercase tracking-wider">
                    <span className="font-bold text-accent">Ideal for:</span> {card.ideal}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center text-text-muted italic font-dm text-sm mt-16"
          >
            "All therapy programs begin with a detailed personal health assessment. Protocols are customized based on medical history, current condition, and individual capacity. Please consult your physician before beginning any therapeutic yoga program."
          </motion.p>
        </div>
      </section>

      {/* REVISED SECTION B — Shatkarma & Neti Practices */}
      <section className="bg-[#F2EBE0] py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-dm text-xs font-bold uppercase tracking-widest text-accent mb-4 block"
            >
              SHATKARMA PRACTICES
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12, duration: 0.5 }}
              className="text-5xl md:text-6xl text-text-dark mb-4 font-cormorant"
            >
              Sacred Purification Techniques
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <LotusDivider />
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.24, duration: 0.5 }}
              className="text-text-muted font-dm text-base max-w-3xl mx-auto leading-relaxed"
            >
              Shatkarma are the six classical purification rituals of Hatha Yoga, designed to cleanse the body's vital channels (Nadis) and prepare the practitioner for deeper yogic work. All practices are taught under strict expert supervision.
            </motion.p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {shatkarmaCards.map((card, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.6, delay: idx * 0.1, ease: "easeOut" }
                  }
                }}
                whileHover={{ y: -5 }}
                className="bg-white border border-[#E8D9C8] rounded-[2rem] p-10 flex flex-col relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#A0714F]"></div>
                
                <div className="flex justify-center mb-8">
                  <div className="p-4 rounded-full bg-[#FAF6F1] group-hover:scale-110 transition-transform duration-500">
                    {card.icon}
                  </div>
                </div>

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-text-dark font-cormorant mb-1">{card.title}</h3>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: (idx * 0.1) + 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-accent-light font-playfair italic text-sm"
                  >
                    {card.sanskrit}
                  </motion.p>
                </div>

                <p className="text-text-muted font-dm text-sm leading-relaxed mb-8 text-center">
                  {card.desc}
                </p>

                <div className="flex-grow">
                  <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-4">Core Benefits:</p>
                  <ul className="space-y-3">
                    {card.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start text-[11px] font-dm text-text-muted leading-tight">
                        <span className="text-accent mr-2">—</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-[#F2EBE0]">
                  <p className="text-[10px] font-dm text-text-muted italic leading-tight">
                    <span className="font-bold not-italic">Not recommended for:</span> {card.contra}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-[#FAF6F1] border border-[#E8D9C8] rounded-2xl px-10 py-8 max-w-3xl mx-auto mt-20 text-center"
          >
            <span className="font-dm text-[10px] font-bold uppercase tracking-widest text-accent mb-3 block">
              IMPORTANT NOTICE
            </span>
            <p className="text-text-muted font-dm italic text-sm leading-relaxed">
              All Shatkarma practices listed above are advanced yogic cleansing techniques. They are conducted exclusively under the direct supervision of Deepak Kumar in a controlled environment. Self-practice without proper training is strictly discouraged. A prior health consultation is mandatory before participation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Session Types Tab */}
      <section className="py-24 bg-primary">
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
            <div className="bg-secondary p-2 rounded-full border border-accent-light/20 flex space-x-1">
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
                  className="bg-secondary p-10 md:p-16 rounded-3xl shadow-xl border border-accent-light/10"
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
                  <a href="/#contact" className="inline-block px-10 py-4 bg-accent text-white rounded-full font-dm font-bold hover:bg-accent/90 transition-all shadow-lg text-center">
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
                  className="bg-secondary p-10 md:p-16 rounded-3xl shadow-xl border border-accent-light/10"
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
                  <a href="/#contact" className="inline-block px-10 py-4 bg-accent text-white rounded-full font-dm font-bold hover:bg-accent/90 transition-all shadow-lg text-center">
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
              href="https://wa.me/916201205698"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-4 border-2 border-white text-white rounded-full font-dm font-bold flex items-center justify-center space-x-2 hover:bg-white/10 transition-all text-center"
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
