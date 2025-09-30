// ExportsAndSolutions.jsx
import { useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion, useInView } from 'framer-motion';
import { Globe, Truck, Package, ShieldCheck, Settings, Target, Award, Users, Factory, Cog, CheckCircle, MapPin, ArrowRight, Quote, Sparkles, Building } from 'lucide-react';

// Import images
import solution1 from '../assets/Solution1.jpg';  // Workers discussing blueprint in factory
import solution2 from '../assets/Solution2.jpg';  // Worker inspecting rings on conveyor
import solution3 from '../assets/Solution3.jpg';  // Scientist inspecting machine part with magnifier

import export1 from '../assets/export1.jpg';  // Handshake at port with containers and truck
import export2 from '../assets/export2.jpg';  // Person at desk with world map and charts
import export3 from '../assets/export3.jpg';  // Plane, ship, truck at sunset with city skyline
import export4 from '../assets/export4.jpg';  // Workers loading container in warehouse

const ExportsAndSolutions = () => {
  const [activeSolution, setActiveSolution] = useState(0);
  const solutionsRef = useRef(null);
  const exportsRef = useRef(null);
  const isSolutionsInView = useInView(solutionsRef, { once: true, margin: "-100px" });
  const isExportsInView = useInView(exportsRef, { once: true, margin: "-100px" });

  const solutions = [
    {
      title: "Customized Manufacturing Solutions",
      description: "Tailored production processes designed to meet your specific requirements, from material selection to final assembly.",
      detailed: "Our team of engineers works closely with clients to develop bespoke solutions that optimize performance, reduce costs, and ensure seamless integration into your operations. We specialize in rapid prototyping and iterative design to bring your vision to reality efficiently.",
      image: solution1,
      features: [
        { icon: Settings, text: "Precision Engineering" },
        { icon: Target, text: "Custom Specifications" },
        { icon: Users, text: "Collaborative Design" }
      ],
      color: "from-blue-600 to-blue-400"
    },
    {
      title: "Quality Inspection & Assurance",
      description: "Rigorous testing protocols ensuring every product meets or exceeds international standards.",
      detailed: "Utilizing advanced inspection technologies including AI-powered visual systems and precision measurement tools, we maintain zero-defect quality control. Our multi-stage inspection process covers raw materials, in-process manufacturing, and final product verification.",
      image: solution2,
      features: [
        { icon: ShieldCheck, text: "Multi-Stage Testing" },
        { icon: Award, text: "ISO Certified Processes" },
        { icon: CheckCircle, text: "Zero-Defect Guarantee" }
      ],
      color: "from-gray-600 to-gray-400"
    },
    {
      title: "Integrated Supply Chain Solutions",
      description: "End-to-end management from design to delivery, optimizing efficiency and reliability.",
      detailed: "Our comprehensive solutions include inventory management, just-in-time delivery, and predictive maintenance programs. We leverage digital twins and IoT monitoring to ensure uninterrupted supply and proactive issue resolution.",
      image: solution3,
      features: [
        { icon: Cog, text: "Smart Logistics" },
        { icon: Factory, text: "Automated Production" },
        { icon: Package, text: "Efficient Packaging" }
      ],
      color: "from-cyan-600 to-cyan-400"
    }
  ];

  const exportHighlights = [
    {
      title: "Global Reach",
      description: "Exporting to over 50 countries across 6 continents with localized support teams.",
      stats: "50+ Countries",
      details: "Strategic partnerships with international logistics providers ensure timely delivery worldwide.",
      image: export1,
      icon: Globe
    },
    {
      title: "Export Expertise",
      description: "Comprehensive documentation and compliance with international trade regulations.",
      stats: "25+ Years Experience",
      details: "Dedicated export team handles customs clearance, certifications, and trade compliance.",
      image: export2,
      icon: Building
    },
    {
      title: "Multimodal Transportation",
      description: "Sea, air, and land freight options optimized for your needs.",
      stats: "99.9% On-Time Delivery",
      details: "Integrated tracking systems provide real-time visibility throughout the shipping process.",
      image: export3,
      icon: Truck
    },
    {
      title: "Secure Packaging",
      description: "Custom packaging solutions ensuring product integrity during global transit.",
      stats: "Zero Damage Rate",
      details: "Climate-controlled and shock-resistant packaging for sensitive components.",
      image: export4,
      icon: Package
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950/80 to-gray-900/80 z-10" />
        <img 
          src={export3} 
          alt="Global Exports Network" 
          className="absolute inset-0 w-full h-full object-cover transform scale-110"
        />
        <div className="relative z-20 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6"
          >
            Global Exports & Customized Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
          >
            Delivering excellence worldwide with tailored industrial solutions and seamless global distribution
          </motion.p>
        </div>
      </section>

      {/* Solutions Section */}
      <section ref={solutionsRef} className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={isSolutionsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-900 to-gray-900 bg-clip-text text-transparent">
              Tailored Industrial Solutions
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in creating customized solutions that address your unique challenges, backed by rigorous quality inspection and innovative engineering.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={isSolutionsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative overflow-hidden rounded-3xl shadow-2xl"
            >
              <img 
                src={solutions[activeSolution].image} 
                alt={solutions[activeSolution].title}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 p-6 md:p-8 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{solutions[activeSolution].title}</h3>
                <p className="text-base md:text-lg">{solutions[activeSolution].description}</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={isSolutionsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col justify-between"
            >
              <div className="bg-gray-50 rounded-3xl p-6 md:p-8 mb-6 shadow-xl">
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                  {solutions[activeSolution].detailed}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {solutions[activeSolution].features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-md">
                      <feat.icon className="h-6 w-6 text-blue-600" />
                      <span className="text-sm md:text-base font-medium text-gray-800">{feat.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {solutions.map((sol, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => setActiveSolution(idx)}
                    whileHover={{ scale: 1.05 }}
                    className={`relative overflow-hidden rounded-2xl aspect-video ${activeSolution === idx ? 'ring-4 ring-blue-500' : ''}`}
                  >
                    <img 
                      src={sol.image} 
                      alt={sol.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-3 ${activeSolution === idx ? 'bg-blue-900/30' : ''}`}>
                      <span className="text-white text-sm font-medium">{sol.title}</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Exports Section */}
      <section ref={exportsRef} className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-blue-50/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={isExportsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
              Worldwide Export Excellence
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering our premium products to every corner of the globe with unmatched reliability and efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {exportHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isExportsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-48 md:h-64">
                  <img 
                    src={highlight.image} 
                    alt={highlight.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 rounded-full p-3 shadow-md">
                    <highlight.icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900">{highlight.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{highlight.description}</p>
                  <div className="text-blue-700 font-bold text-lg mb-3">{highlight.stats}</div>
                  <p className="text-gray-500 text-sm leading-relaxed">{highlight.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-900 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Ready to Go Global?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl mb-8 leading-relaxed"
          >
            Partner with us for customized solutions and seamless worldwide exports. Let's build the future together.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 md:px-10 py-4 bg-white text-blue-900 font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all flex items-center gap-3 mx-auto"
          >
            Get Started <ArrowRight className="h-5 w-5" />
          </motion.button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExportsAndSolutions;