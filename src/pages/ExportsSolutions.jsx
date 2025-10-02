// ExportsAndSolutions.jsx
import { useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion, useInView } from 'framer-motion';
import { Globe, Truck, Package, ShieldCheck, Settings, Target, Award, Users, Factory, Cog, CheckCircle, MapPin, ArrowRight, Quote, Sparkles, Building, Clock, Zap, Layers, BarChart3, HeartHandshake, Shield, TrendingUp, ArrowUpRight } from 'lucide-react';

// Import images
import solution1 from '../assets/Solution1.jpg';
import solution2 from '../assets/Solution2.jpg';
import solution3 from '../assets/Solution3.jpg';

import export1 from '../assets/export1.jpg';
import export2 from '../assets/export2.jpg';
import export3 from '../assets/export3.jpg';
import export4 from '../assets/export4.jpg';

const ExportsAndSolutions = () => {
  const [activeSolution, setActiveSolution] = useState(0);
  const [activeExportTab, setActiveExportTab] = useState(0);
  const solutionsRef = useRef(null);
  const exportsRef = useRef(null);
  const isSolutionsInView = useInView(solutionsRef, { once: true, margin: "-100px" });
  const isExportsInView = useInView(exportsRef, { once: true, margin: "-100px" });

  const solutions = [
    {
      title: "Customized Manufacturing Solutions",
      description: "Tailored production processes designed to meet your specific requirements, from material selection to final assembly.",
      detailed: "Our team of engineers works closely with clients to develop bespoke solutions that optimize performance, reduce costs, and ensure seamless integration into your operations. We specialize in rapid prototyping and iterative design to bring your vision to reality efficiently.",
      additionalInfo: [
        "Advanced CAD/CAM integration for precision engineering",
        "Material science expertise across metals, polymers, and composites",
        "Scalable production from prototypes to mass manufacturing",
        "Continuous improvement through data-driven optimization"
      ],
      image: solution1,
      features: [
        { icon: Settings, text: "Precision Engineering" },
        { icon: Target, text: "Custom Specifications" },
        { icon: Users, text: "Collaborative Design" },
        { icon: Zap, text: "Rapid Prototyping" }
      ],
      color: "from-blue-600 to-blue-400",
      stats: [
        { value: "48h", label: "Prototype Delivery" },
        { value: "99.7%", label: "Client Satisfaction" },
        { value: "200+", label: "Projects Completed" }
      ]
    },
    {
      title: "Quality Inspection & Assurance",
      description: "Rigorous testing protocols ensuring every product meets or exceeds international standards.",
      detailed: "Utilizing advanced inspection technologies including AI-powered visual systems and precision measurement tools, we maintain zero-defect quality control. Our multi-stage inspection process covers raw materials, in-process manufacturing, and final product verification.",
      additionalInfo: [
        "AI-powered automated optical inspection systems",
        "Non-destructive testing (NDT) capabilities",
        "Metrology lab with 3D scanning and CMM",
        "Real-time quality monitoring throughout production"
      ],
      image: solution2,
      features: [
        { icon: ShieldCheck, text: "Multi-Stage Testing" },
        { icon: Award, text: "ISO Certified Processes" },
        { icon: CheckCircle, text: "Zero-Defect Guarantee" },
        { icon: Shield, text: "Compliance Assurance" }
      ],
      color: "from-gray-600 to-gray-400",
      stats: [
        { value: "0.01%", label: "Defect Rate" },
        { value: "24/7", label: "Quality Monitoring" },
        { value: "50+", label: "Quality Standards" }
      ]
    },
    {
      title: "Integrated Supply Chain Solutions",
      description: "End-to-end management from design to delivery, optimizing efficiency and reliability.",
      detailed: "Our comprehensive solutions include inventory management, just-in-time delivery, and predictive maintenance programs. We leverage digital twins and IoT monitoring to ensure uninterrupted supply and proactive issue resolution.",
      additionalInfo: [
        "Digital twin technology for supply chain simulation",
        "IoT-enabled real-time inventory tracking",
        "Predictive analytics for demand forecasting",
        "Sustainable logistics and carbon footprint optimization"
      ],
      image: solution3,
      features: [
        { icon: Cog, text: "Smart Logistics" },
        { icon: Factory, text: "Automated Production" },
        { icon: Package, text: "Efficient Packaging" },
        { icon: Layers, text: "Inventory Management" }
      ],
      color: "from-cyan-600 to-cyan-400",
      stats: [
        { value: "30%", label: "Cost Reduction" },
        { value: "99.9%", label: "On-Time Delivery" },
        { value: "60+", label: "Global Partners" }
      ]
    }
  ];

  const exportServices = [
    {
      category: "Logistics & Shipping",
      services: [
        "Multi-modal transportation planning (sea, air, rail, road)",
        "Customs brokerage and documentation services",
        "Dangerous goods and hazardous materials handling",
        "Temperature-controlled and sensitive cargo solutions",
        "Project cargo and oversized shipment management"
      ],
      capabilities: [
        "Real-time shipment tracking and monitoring",
        "Consolidation services for cost optimization",
        "Insurance and risk management solutions",
        "Port operations and terminal handling"
      ]
    },
    {
      category: "Compliance & Documentation",
      services: [
        "Export license and permit acquisition",
        "Certificate of origin and legalization services",
        "Trade compliance and regulatory consulting",
        "Product classification and harmonized system codes",
        "Sanctions screening and denied party checks"
      ],
      capabilities: [
        "Automated documentation generation",
        "Compliance audit and assessment services",
        "Training and capacity building programs",
        "Continuous regulatory updates and monitoring"
      ]
    },
    {
      category: "Market Expansion",
      services: [
        "Market research and entry strategy development",
        "Distribution network establishment",
        "Local representation and agent identification",
        "Cultural and business practice consulting",
        "After-sales service and support setup"
      ],
      capabilities: [
        "In-country market intelligence reports",
        "Partner vetting and due diligence",
        "Contract negotiation support",
        "Performance monitoring and optimization"
      ]
    }
  ];

  const exportHighlights = [
    {
      title: "Global Reach",
      description: "Exporting to over 50 countries across 6 continents with localized support teams.",
      stats: "50+ Countries",
      details: "Strategic partnerships with international logistics providers ensure timely delivery worldwide. Our network includes regional hubs in North America, Europe, Asia, and emerging markets.",
      additional: "Local warehouses and distribution centers reduce delivery times by up to 40%",
      image: export1,
      icon: Globe
    },
    {
      title: "Export Expertise",
      description: "Comprehensive documentation and compliance with international trade regulations.",
      stats: "25+ Years Experience",
      details: "Dedicated export team handles customs clearance, certifications, and trade compliance. We navigate complex regulatory environments efficiently.",
      additional: "Reduced customs clearance times by average 3-5 days through pre-clearance programs",
      image: export2,
      icon: Building
    },
    {
      title: "Multimodal Transportation",
      description: "Sea, air, and land freight options optimized for your needs.",
      stats: "99.9% On-Time Delivery",
      details: "Integrated tracking systems provide real-time visibility throughout the shipping process. Our multi-modal approach ensures cost-effectiveness and reliability.",
      additional: "Carbon-neutral shipping options available for environmentally conscious clients",
      image: export3,
      icon: Truck
    },
    {
      title: "Secure Packaging",
      description: "Custom packaging solutions ensuring product integrity during global transit.",
      stats: "Zero Damage Rate",
      details: "Climate-controlled and shock-resistant packaging for sensitive components. Our engineering team designs packaging solutions for maximum protection and efficiency.",
      additional: "Sustainable packaging materials reduce environmental impact by 35%",
      image: export4,
      icon: Package
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Consultation & Planning",
      description: "Understanding your requirements and developing customized export strategy",
      icon: HeartHandshake
    },
    {
      step: 2,
      title: "Documentation & Compliance",
      description: "Preparing all necessary documentation and ensuring regulatory compliance",
      icon: BarChart3
    },
    {
      step: 3,
      title: "Logistics & Shipping",
      description: "Coordinating transportation and managing the shipping process",
      icon: Truck
    },
    {
      step: 4,
      title: "Delivery & Support",
      description: "Ensuring successful delivery and providing ongoing support",
      icon: ShieldCheck
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950/80 to-gray-900/60 z-10" />
        <img 
          src={export3} 
          alt="Global Exports Network" 
          className="absolute inset-0 w-full h-full object-cover transform scale-110"
        />
        <div className="relative z-20 text-center px-4 max-w-6xl">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight"
          >
            Global Exports & 
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Customized Solutions
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-200 max-w-4xl mx-auto leading-relaxed"
          >
            Delivering excellence worldwide with tailored industrial solutions and seamless global distribution
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-blue-600 text-white font-bold rounded-full shadow-2xl hover:bg-blue-700 transition-all flex items-center gap-3"
            >
              Explore Solutions <ArrowRight className="h-5 w-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all"
            >
              Export Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section - Enhanced */}
      <section ref={solutionsRef} className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={isSolutionsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-900 to-gray-900 bg-clip-text text-transparent">
              Tailored Industrial Solutions
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We specialize in creating customized solutions that address your unique challenges, backed by rigorous quality inspection and innovative engineering. Our approach combines technical expertise with practical implementation.
            </p>
          </motion.div>

          {/* Enhanced Solutions Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-16">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isSolutionsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={solution.image} 
                    alt={solution.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent`} />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
                    <p className="text-sm opacity-90">{solution.description}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {solution.stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                        <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    {solution.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="bg-blue-100 p-2 rounded-lg">
                          <feat.icon className="h-5 w-5 text-blue-600" />
                        </div>
                        <span className="text-sm font-medium text-gray-800">{feat.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Capabilities:</h4>
                    <ul className="space-y-2">
                      {solution.additionalInfo.map((info, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                          {info}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Detailed Solution View */}
          <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={isSolutionsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative overflow-hidden rounded-2xl shadow-2xl"
              >
                <img 
                  src={solutions[activeSolution].image} 
                  alt={solutions[activeSolution].title}
                  className="w-full h-64 md:h-80 object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={isSolutionsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {solutions[activeSolution].title}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {solutions[activeSolution].detailed}
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {solutions[activeSolution].stats.map((stat, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-4 text-center shadow-md">
                      <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                      <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Solution Navigation */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              {solutions.map((sol, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setActiveSolution(idx)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    activeSolution === idx 
                      ? 'bg-blue-600 text-white shadow-lg' 
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                  }`}
                >
                  {sol.title.split(' ')[0]}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Exports Section */}
      <section ref={exportsRef} className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-blue-50/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={isExportsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
              Worldwide Export Excellence
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Delivering our premium products to every corner of the globe with unmatched reliability, efficiency, and comprehensive support services.
            </p>
          </motion.div>

          {/* Export Process Steps */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isExportsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 text-blue-600 rounded-xl p-3">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <div className="text-2xl font-bold text-gray-400">0{step.step}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Export Highlights */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {exportHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isExportsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img 
                    src={highlight.image} 
                    alt={highlight.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-6 right-6 bg-white/90 rounded-full p-3 shadow-lg">
                    <highlight.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="absolute bottom-6 left-6">
                    <div className="text-2xl font-bold text-white mb-1">{highlight.stats}</div>
                    <h3 className="text-xl font-bold text-white">{highlight.title}</h3>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-gray-600 mb-4 leading-relaxed">{highlight.description}</p>
                  <p className="text-gray-700 mb-4 leading-relaxed">{highlight.details}</p>
                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                    <p className="text-sm text-blue-700 font-medium">{highlight.additional}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Export Services Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isExportsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="border-b border-gray-200">
              <div className="flex overflow-x-auto scrollbar-hide">
                {exportServices.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveExportTab(index)}
                    className={`flex-1 min-w-[200px] px-6 py-4 text-lg font-medium transition-all ${
                      activeExportTab === index
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {service.category}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Services Offered</h4>
                  <ul className="space-y-3">
                    {exportServices[activeExportTab].services.map((service, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <ArrowUpRight className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Key Capabilities</h4>
                  <ul className="space-y-3">
                    {exportServices[activeExportTab].capabilities.map((capability, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <TrendingUp className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Ready to Go Global?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto"
          >
            Partner with us for customized solutions and seamless worldwide exports. Let's build the future together with innovation, quality, and global reach.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 md:px-10 py-4 bg-white text-blue-900 font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all flex items-center gap-3"
            >
              Start Your Project <ArrowRight className="h-5 w-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 md:px-10 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all"
            >
              Schedule Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExportsAndSolutions;