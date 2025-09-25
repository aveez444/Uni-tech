import { useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion, useInView } from 'framer-motion';
import { 
  Calendar, Target, Award, Users, Globe, TrendingUp, Heart, Shield,
  Zap, Factory, Star, ArrowRight, Quote, Play, Pause, Clock,
  CheckCircle, MapPin, Phone, Mail, Send, Sparkles, Rocket,
  Building, Leaf, Brain, Telescope, Gem, Crown
} from 'lucide-react';

// Import images
import aboutUsHero from '../assets/AboutUs.jpg';
import teamImage from '../assets/team-collaboration.jpg';
import facilityImage from '../assets/modern-facility.jpg';

const OurLegacy = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeEra, setActiveEra] = useState('pioneering');
  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: true, margin: "-100px" });

  // Enhanced Timeline with Eras
  const companyEras = [
    {
      id: 'pioneering',
      period: '1995-2005',
      title: 'The Pioneering Years',
      color: 'from-blue-500 to-cyan-500',
      icon: Rocket,
      achievements: [
        'Founded as small rubber components workshop',
        'Developed proprietary manufacturing techniques',
        'Built foundational client relationships',
        'Established quality-first culture'
      ],
      milestone: '1998: First patented component design'
    },
    {
      id: 'growth',
      period: '2005-2015',
      title: 'Growth & Expansion',
      color: 'from-green-500 to-emerald-500',
      icon: TrendingUp,
      achievements: [
        'Expanded production capacity 5x',
        'Entered international markets',
        'Implemented quality management systems',
        'Developed advanced material formulations'
      ],
      milestone: '2012: Awarded "Excellence in Manufacturing"'
    },
    {
      id: 'innovation',
      period: '2015-2025',
      title: 'Innovation Era',
      color: 'from-purple-500 to-pink-500',
      icon: Brain,
      achievements: [
        'Industry 4.0 automation integration',
        'Sustainable manufacturing initiatives',
        'AI-powered quality control systems',
        'Global R&D partnerships'
      ],
      milestone: '2023: Carbon-neutral production achieved'
    }
  ];

  // Enhanced Values with more depth
  const values = [
    {
      icon: Gem,
      title: "Craftsmanship Excellence",
      description: "Every component is a masterpiece of precision engineering, crafted with attention to microscopic details.",
      color: "from-blue-500 to-cyan-500",
      features: ["Micro-precision tolerances", "Hand-finished quality", "Artisan-level craftsmanship"]
    },
    {
      icon: Telescope,
      title: "Visionary Innovation",
      description: "We don't just follow trends – we create them through groundbreaking research and development.",
      color: "from-purple-500 to-pink-500",
      features: ["Future-focused R&D", "Cutting-edge technology", "Industry-first solutions"]
    },
    {
      icon: Leaf,
      title: "Sustainable Legacy",
      description: "Building a greener future through eco-conscious manufacturing and circular economy principles.",
      color: "from-green-500 to-emerald-500",
      features: ["Carbon-neutral operations", "Recyclable materials", "Zero-waste processes"]
    },
    {
      icon: Crown,
      title: "Uncompromising Quality",
      description: "Perfection isn't a goal – it's our standard. Every product exceeds international quality benchmarks.",
      color: "from-amber-500 to-orange-500",
      features: ["6-sigma precision", "Multi-stage inspection", "Lifetime performance guarantee"]
    }
  ];

  // Realistic Statistics
  const realisticStats = [
    { icon: Users, value: "100+", label: "Satisfied Clients", sublabel: "Engineers, Technicians & Specialists" },
    { icon: Building, value: "45,000", label: "Square Feet", sublabel: "Advanced Manufacturing Space" },
    { icon: Globe, value: "20+", label: "Countries", sublabel: "Global Client Partnerships" },
    { icon: Award, value: "98.9%", label: "Quality Rate", sublabel: "Defect-Free Deliveries" }
  ];

  // Facility Features
  const facilityFeatures = [
    {
      icon: Zap,
      title: "Smart Manufacturing",
      description: "AI-driven production lines with real-time quality monitoring",
      stats: "40% efficiency gain"
    },
    {
      icon: Leaf,
      title: "Green Facility",
      description: "Solar-powered operations with water recycling systems",
      stats: "100% renewable energy"
    },
    {
      icon: Brain,
      title: "R&D Center",
      description: "Advanced materials research and prototype development lab",
      stats: "15+ patents"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "ISO-certified testing laboratories with precision instruments",
      stats: "0.01mm tolerance"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-gray-100/50">
      <Navbar />
      
      <main className="relative overflow-hidden">
        {/* Enhanced Hero Section */}
        <section className="relative min-h-[90vh] flex items-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-blue-50/40 to-transparent z-10"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="relative z-20 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-md text-blue-700 rounded-2xl text-sm font-semibold border border-blue-200/50 shadow-lg"
              >
                <Sparkles className="h-5 w-5" />
                <span>Established 1995 • Legacy of Excellence</span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                <span className="block bg-gradient-to-r from-gray-900 via-blue-700 to-cyan-600 bg-clip-text text-transparent">
                  Three Decades
                </span>
                <span className="block bg-gradient-to-r from-cyan-600 via-blue-700 to-gray-900 bg-clip-text text-transparent">
                  of Innovation
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                For 30 years, Uni-Tech Auto International has been at the forefront of automotive 
                rubber technology, transforming industry standards through relentless innovation 
                and uncompromising quality.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-2"
                >
                  <Play className="h-5 w-5" />
                  Watch Our Story
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/80 backdrop-blur-md text-gray-700 font-semibold rounded-2xl border-2 border-gray-200/50 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Explore Timeline
                </motion.button>
              </div>
            </motion.div>

            {/* Enhanced Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-700">
                <img
                  src={aboutUsHero}
                  alt="Uni-Tech Auto International Legacy"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                
                {/* Floating Stats Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gray-900">30+</div>
                      <div className="text-sm font-semibold text-blue-600">Years of Excellence</div>
                    </div>
                  </div>
                </motion.div>

              </div>

              {/* Background Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40 z-0"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-cyan-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-40 z-0"></div>
            </motion.div>
          </div>
        </section>

        {/* Completely Redesigned Timeline Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50/50 via-white to-blue-50/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-gray-900 via-blue-700 to-cyan-600 bg-clip-text text-transparent">
                  Our Evolution
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                A journey of transformation from a visionary startup to a global innovation leader 
                in automotive rubber technology.
              </p>
            </motion.div>

            {/* Era Selection */}
            <div className="flex justify-center mb-12">
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-2 shadow-lg border border-gray-200/50">
                {companyEras.map((era) => (
                  <button
                    key={era.id}
                    onClick={() => setActiveEra(era.id)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      activeEra === era.id
                        ? `bg-gradient-to-r ${era.color} text-white shadow-lg`
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {era.period}
                  </button>
                ))}
              </div>
            </div>

            {/* Era Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Era Description */}
              <motion.div
                    key={activeEra}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                    >
                    <div className="flex items-center gap-4 mb-6">
                        <div className={`p-4 rounded-2xl bg-gradient-to-br ${companyEras.find(e => e.id === activeEra)?.color} text-white shadow-lg`}>
                        {(() => {
                            const era = companyEras.find(e => e.id === activeEra);
                            const IconComponent = era?.icon;
                            return IconComponent ? <IconComponent className="h-8 w-8" /> : null;
                        })()}
                        </div>
                        <div>
                        <h3 className="text-3xl font-bold text-gray-900">
                            {companyEras.find(e => e.id === activeEra)?.title}
                        </h3>
                        <p className="text-blue-600 font-semibold">
                            {companyEras.find(e => e.id === activeEra)?.period}
                        </p>
                        </div>
                    </div>

                <div className="bg-gradient-to-br from-blue-50/50 to-cyan-50/30 rounded-3xl p-8 border border-blue-100/50">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900">Key Achievements</h4>
                    {companyEras.find(e => e.id === activeEra)?.achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-white/50 rounded-xl border border-blue-200/30">
                    <div className="text-sm font-semibold text-blue-600">Landmark Achievement</div>
                    <div className="text-gray-900">{companyEras.find(e => e.id === activeEra)?.milestone}</div>
                  </div>
                </div>
              </motion.div>

              {/* Visual Timeline */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-gray-900/5 to-blue-900/5 rounded-3xl p-8 border border-gray-200/30">
                  <div className="relative h-64 bg-gradient-to-r from-blue-100/20 via-cyan-100/20 to-emerald-100/20 rounded-2xl overflow-hidden">
                    {/* Timeline Visualization */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl font-bold text-gray-300/30">
                        {companyEras.find(e => e.id === activeEra)?.period}
                      </div>
                    </div>
                    
                    {/* Animated Elements */}
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute top-1/4 left-1/4 w-20 h-20 bg-blue-300/20 rounded-full blur-xl"
                    />
                    <motion.div
                      animate={{ 
                        scale: [1.2, 1, 1.2],
                        opacity: [0.4, 0.2, 0.4]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                      className="absolute bottom-1/3 right-1/3 w-16 h-16 bg-cyan-300/20 rounded-full blur-xl"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    {realisticStats.map((stat, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="bg-white/80 backdrop-blur-md rounded-xl p-4 text-center border border-gray-200/50 shadow-sm"
                      >
                        <stat.icon className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                        <div className="text-xs font-semibold text-gray-600">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Enhanced Values Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-gray-900 via-blue-700 to-cyan-600 bg-clip-text text-transparent">
                  Our Philosophy
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The core principles that drive our innovation, shape our culture, and define our legacy.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl border border-gray-100 transition-all duration-500 overflow-hidden"
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-6">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className={`p-4 rounded-2xl bg-gradient-to-br ${value.color} text-white shadow-lg flex-shrink-0`}
                      >
                        <value.icon className="h-8 w-8" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                          {value.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {value.description}
                        </p>
                        <div className="space-y-2">
                          {value.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${value.color}`}></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* New Facility Showcase Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
                  Innovation Hub
                </span>
              </h2>
              <p className="text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
                Our 45,000 sq. ft. state-of-the-art facility combines cutting-edge technology 
                with sustainable practices to deliver unparalleled quality.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Facility Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-700">
                  <img
                    src={facilityImage}
                    alt="Uni-Tech Auto International Facility"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Overlay Badge */}
                  <div className="absolute top-6 left-6 bg-green-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
                    Eco-Certified Facility
                  </div>
                </div>
              </motion.div>

              {/* Facility Features */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                {facilityFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-white/20 rounded-xl">
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-white font-semibold">{feature.title}</div>
                    </div>
                    <p className="text-blue-200 text-sm mb-3 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="text-cyan-200 font-bold text-lg">{feature.stats}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50/50 to-cyan-50/30">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-cyan-200/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              <span className="bg-gradient-to-r from-gray-900 via-blue-700 to-cyan-600 bg-clip-text text-transparent">
                Join Our Journey
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Be part of the next chapter in automotive innovation. Let's create something extraordinary together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-2"
              >
                <Rocket className="h-5 w-5" />
                Start Collaboration
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/80 backdrop-blur-md text-gray-700 font-semibold rounded-2xl border-2 border-gray-200/50 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Schedule Tour
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
    
  );
};

export default OurLegacy;