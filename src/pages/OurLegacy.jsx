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
      milestone: '1998: First patented component design',
      description: 'Our humble beginnings marked the start of a revolution in automotive rubber technology. With just a small workshop and big dreams, we laid the foundation for what would become an industry-leading enterprise focused on precision, quality, and innovation.'
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
      milestone: '2012: Awarded "Excellence in Manufacturing"',
      description: 'This decade of strategic expansion saw Uni-Tech International transform from a regional supplier to a global partner. We invested heavily in advanced manufacturing capabilities while maintaining our commitment to exceptional quality that clients had come to depend on.'
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
      milestone: '2023: Carbon-neutral production achieved',
      description: 'In our current era, we\'re pushing the boundaries of what\'s possible in automotive rubber technology. Through digital transformation, sustainable practices, and cutting-edge R&D, we\'re not just keeping pace with industry trends—we\'re setting them.'
    }
  ];

  // Enhanced Values with more depth
  const values = [
    {
      icon: Gem,
      title: "Craftsmanship Excellence",
      description: "Every component is a masterpiece of precision engineering, crafted with attention to microscopic details that exceed industry standards. Our artisans combine traditional techniques with modern technology to create products that stand the test of time.",
      color: "from-blue-500 to-cyan-500",
      features: ["Micro-precision tolerances", "Hand-finished quality", "Artisan-level craftsmanship"],
      detailed: "We believe that true quality is found in the details invisible to the naked eye. Each component undergoes meticulous inspection and refinement, ensuring performance reliability that our clients can depend on year after year."
    },
    {
      icon: Telescope,
      title: "Visionary Innovation",
      description: "We don't just follow trends – we create them through groundbreaking research and development that anticipates the future needs of the automotive industry.",
      color: "from-purple-500 to-pink-500",
      features: ["Future-focused R&D", "Cutting-edge technology", "Industry-first solutions"],
      detailed: "Our innovation lab operates five years ahead of current market demands, developing next-generation materials and manufacturing processes that will define the automotive industry of tomorrow."
    },
    {
      icon: Leaf,
      title: "Sustainable Legacy",
      description: "Building a greener future through eco-conscious manufacturing and circular economy principles that minimize environmental impact while maximizing efficiency.",
      color: "from-green-500 to-emerald-500",
      features: ["Carbon-neutral operations", "Recyclable materials", "Zero-waste processes"],
      detailed: "Sustainability isn't an afterthought—it's integrated into every aspect of our operations. From energy-efficient facilities to closed-loop manufacturing systems, we're committed to leaving a positive environmental legacy."
    },
    {
      icon: Crown,
      title: "Uncompromising Quality",
      description: "Perfection isn't a goal – it's our standard. Every product exceeds international quality benchmarks through rigorous testing and continuous improvement processes.",
      color: "from-amber-500 to-orange-500",
      features: ["6-sigma precision", "Multi-stage inspection", "Lifetime performance guarantee"],
      detailed: "Our quality assurance process involves over 200 checkpoints, with each component tracked from raw material to finished product. This meticulous approach ensures consistent excellence that has become our trademark."
    }
  ];

  // Realistic Statistics
  const realisticStats = [
    { icon: Users, value: "100+", label: "Satisfied Clients", sublabel: "Engineers, Technicians & Specialists" },
    { icon: Building, value: "3000+", label: "Square Feet", sublabel: "Advanced Manufacturing Space" },
    { icon: Globe, value: "10+", label: "Countries", sublabel: "Global Client Partnerships" },
    { icon: Award, value: "98.9%", label: "Quality Rate", sublabel: "Defect-Free Deliveries" }
  ];

  // Facility Features
  const facilityFeatures = [
    {
      icon: Zap,
      title: "Smart Manufacturing",
      description: "AI-driven production lines with real-time quality monitoring and predictive maintenance systems",
      stats: "40% efficiency gain",
      details: "Our fully integrated smart factory utilizes IoT sensors and machine learning algorithms to optimize production flow and minimize downtime."
    },
    {
      icon: Leaf,
      title: "Green Facility",
      description: "Solar-powered operations with water recycling systems and energy recovery technology",
      stats: "100% renewable energy",
      details: "The facility features a 500kW solar array, rainwater harvesting, and heat recovery systems that reduce our carbon footprint by 75% compared to conventional plants."
    },
    {
      icon: Brain,
      title: "R&D Center",
      description: "Advanced materials research and prototype development lab with testing facilities",
      stats: "15+ patents",
      details: "Our research team collaborates with leading universities and automotive manufacturers to develop innovative rubber compounds and manufacturing techniques."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "ISO-certified testing laboratories with precision instruments and automated inspection",
      stats: "0.01mm tolerance",
      details: "Every batch undergoes rigorous testing for durability, temperature resistance, and performance under extreme conditions to ensure reliability."
    }
  ];

  // Leadership team data
  const leadershipTeam = [
    {
      name: "M.Yunus Siddiqui ",
      role: "Founder & CEO",
      experience: "30+ years in automotive manufacturing",
      quote: "Quality is not an act, it is a habit that defines everything we do."
    },
    {
      name: "Shafeen Siddiqui",
      role: "Co-Owner",
      experience: "B.E in Mechanical Engineering",
      quote: "Innovation happens when we challenge the impossible and make it routine."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-gray-100/50 overflow-hidden">
      <Navbar />
      
      <main className="relative overflow-hidden">
  {/* Enhanced Hero Section */}
  <section className="relative min-h-[90vh] flex items-center pt-20 md:pt-24 py-10 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-blue-50/40 to-transparent z-10"></div>
    
    {/* Animated Background Elements - Smaller on mobile */}
    <div className="absolute top-10 left-4 w-48 h-48 md:top-20 md:left-10 md:w-72 md:h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-10 right-4 w-64 h-64 md:bottom-20 md:right-10 md:w-96 md:h-96 bg-cyan-100/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
    
    <div className="relative z-20 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6 md:space-y-8 text-center lg:text-left"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-white/80 backdrop-blur-md text-blue-700 rounded-xl md:rounded-2xl text-xs md:text-sm font-semibold border border-blue-200/50 shadow-lg"
        >
          <Sparkles className="h-4 w-4 md:h-5 md:w-5" />
          <span>Established 1995 • Legacy of Excellence</span>
        </motion.div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
          <span className="block bg-gradient-to-r from-gray-900 via-blue-700 to-cyan-600 bg-clip-text text-transparent">
            30 Years
          </span>
          <span className="block bg-gradient-to-r from-cyan-600 via-blue-700 to-gray-900 bg-clip-text text-transparent">
            of Driving Engineered Excellence
          </span>
        </h1>

        <div className="space-y-4 md:space-y-6">
          <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
            For over 30 years, Uni-Tech International has been at the forefront of automotive 
            rubber technology, transforming industry standards through relentless innovation 
            and uncompromising quality. What began as a small workshop with big dreams has evolved 
            into a global enterprise recognized for precision engineering and sustainable practices.
          </p>
          
          <div className="bg-blue-50/50 rounded-xl md:rounded-2xl p-4 md:p-6 border border-blue-100">
            <p className="text-sm md:text-base lg:text-lg text-blue-800 font-medium italic">
              "Our journey reflects our commitment to excellence—each decade building upon the last 
              to deliver innovative solutions that drive the automotive industry forward."
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 md:pt-6 justify-center lg:justify-start">
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-2 justify-center text-sm md:text-base"
          >
            <Play className="h-4 w-4 md:h-5 md:w-5" />
            Watch Our Story
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 md:px-8 md:py-4 bg-white/80 backdrop-blur-md text-gray-700 font-semibold rounded-xl md:rounded-2xl border-2 border-gray-200/50 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base"
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
        className="relative mt-8 lg:mt-0"
      >
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-700">
          <img
            src={aboutUsHero}
            alt="Uni-Tech Auto International Legacy"
            className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          
          {/* Floating Stats Cards - Smaller on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="absolute bottom-4 left-4 md:bottom-8 md:left-8 bg-white/90 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-6 shadow-2xl border border-white/20"
          >
            <div className="flex items-center gap-3 md:gap-4">
              <div className="p-2 md:p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg md:rounded-xl">
                <Award className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900">30+</div>
                <div className="text-xs md:text-sm font-semibold text-blue-600">Years of Excellence</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Background Decorative Elements - Smaller on mobile */}
        <div className="absolute -top-4 -right-4 md:-top-8 md:-right-8 w-24 h-24 md:w-40 md:h-40 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40 z-0"></div>
        <div className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-8 w-20 h-20 md:w-32 md:h-32 bg-cyan-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-40 z-0"></div>
      </motion.div>
    </div>
  </section>

   {/* Completely Redesigned Timeline Section */}
<section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50/50 via-white to-blue-50/30">
  <div className="max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12 md:mb-20"
    >
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
        <span className="bg-gradient-to-r from-gray-900 via-blue-700 to-cyan-600 bg-clip-text text-transparent">
          Our Evolution
        </span>
      </h2>
      <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
        A journey of transformation from a visionary startup to a global innovation leader 
        in automotive rubber technology. Each era represents significant milestones that shaped 
        our identity and capabilities in the automotive components industry.
      </p>
    </motion.div>

    {/* Era Selection - Horizontal scroll on mobile */}
    <div className="flex justify-center mb-8 md:mb-12">
      <div className="bg-white/80 backdrop-blur-md rounded-xl md:rounded-2xl p-1 md:p-2 shadow-lg border border-gray-200/50 overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div className="flex space-x-1 md:space-x-2 min-w-max px-2">
          {companyEras.map((era) => (
            <button
              key={era.id}
              onClick={() => setActiveEra(era.id)}
              className={`px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl font-semibold transition-all duration-300 text-sm md:text-base ${
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
    </div>

    {/* Era Content - Stack on mobile */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
      {/* Era Description */}
      <motion.div
        key={activeEra}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="space-y-4 md:space-y-6"
      >
        <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
          <div className={`p-3 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-br ${companyEras.find(e => e.id === activeEra)?.color} text-white shadow-lg`}>
            {(() => {
              const era = companyEras.find(e => e.id === activeEra);
              const IconComponent = era?.icon;
              return IconComponent ? <IconComponent className="h-6 w-6 md:h-8 md:w-8" /> : null;
            })()}
          </div>
          <div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
              {companyEras.find(e => e.id === activeEra)?.title}
            </h3>
            <p className="text-blue-600 font-semibold text-sm md:text-base">
              {companyEras.find(e => e.id === activeEra)?.period}
            </p>
          </div>
        </div>

        {/* Era Description Paragraph */}
        <div className="bg-white/50 rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-200/30">
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            {companyEras.find(e => e.id === activeEra)?.description}
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50/50 to-cyan-50/30 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-blue-100/50">
          <div className="space-y-3 md:space-y-4">
            <h4 className="text-base md:text-lg font-semibold text-gray-900">Key Achievements</h4>
            {companyEras.find(e => e.id === activeEra)?.achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm md:text-base">{achievement}</span>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-4 md:mt-6 p-3 md:p-4 bg-white/50 rounded-lg md:rounded-xl border border-blue-200/30">
            <div className="text-xs md:text-sm font-semibold text-blue-600">Landmark Achievement</div>
            <div className="text-gray-900 text-sm md:text-base">{companyEras.find(e => e.id === activeEra)?.milestone}</div>
          </div>
        </div>
      </motion.div>

      {/* Visual Timeline */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        className="relative mt-8 lg:mt-0"
      >
        <div className="bg-gradient-to-br from-gray-900/5 to-blue-900/5 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-gray-200/30">
          <div className="relative h-48 md:h-64 bg-gradient-to-r from-blue-100/20 via-cyan-100/20 to-emerald-100/20 rounded-xl md:rounded-2xl overflow-hidden">
            {/* Timeline Visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-3xl md:text-6xl font-bold text-gray-300/30">
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
              className="absolute top-1/4 left-1/4 w-12 h-12 md:w-20 md:h-20 bg-blue-300/20 rounded-full blur-xl"
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
              className="absolute bottom-1/3 right-1/3 w-10 h-10 md:w-16 md:h-16 bg-cyan-300/20 rounded-full blur-xl"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-3 md:gap-4 mt-4 md:mt-6">
            {realisticStats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -2 }}
                className="bg-white/80 backdrop-blur-md rounded-lg md:rounded-xl p-3 md:p-4 text-center border border-gray-200/50 shadow-sm"
              >
                <stat.icon className="h-5 w-5 md:h-6 md:w-6 text-blue-600 mx-auto mb-1 md:mb-2" />
                <div className="text-lg md:text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-xs text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Content Block */}
        <div className="mt-6 md:mt-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl md:rounded-2xl p-4 md:p-6 text-white">
          <div className="flex items-center gap-3 md:gap-4">
            <Target className="h-6 w-6 md:h-8 md:w-8" />
            <div>
              <h4 className="font-bold text-base md:text-lg">Our Vision for 2030</h4>
              <p className="text-blue-100 text-xs md:text-sm">Expanding into electric vehicle components and sustainable mobility solutions</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>

  {/* Enhanced Values Section */}
<section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30">
  <div className="max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12 md:mb-20"
    >
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
        <span className="bg-gradient-to-r from-gray-900 via-blue-700 to-cyan-600 bg-clip-text text-transparent">
          Our Philosophy
        </span>
      </h2>
      <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
        The core principles that drive our innovation, shape our culture, and define our legacy. 
        These values guide every decision we make and every product we create.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
      {values.map((value, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -4, scale: 1.01 }}
          className="group relative bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl border border-gray-100 transition-all duration-500 overflow-hidden"
        >
          {/* Background Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
          
          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className={`p-3 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-br ${value.color} text-white shadow-lg flex-shrink-0 self-start`}
              >
                <value.icon className="h-6 w-6 md:h-8 md:w-8" />
              </motion.div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-blue-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-3 md:mb-4 text-sm md:text-base">
                  {value.description}
                </p>
                
                {/* Additional detailed paragraph */}
                <div className="bg-gray-50/50 rounded-lg md:rounded-xl p-3 md:p-4 mb-3 md:mb-4">
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    {value.detailed}
                  </p>
                </div>
                
                <div className="space-y-1 md:space-y-2">
                  {value.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs md:text-sm text-gray-500">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${value.color} flex-shrink-0`}></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Additional Content Block */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-12 md:mt-16 bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl md:rounded-3xl p-6 md:p-8 text-white"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Living Our Values Daily</h3>
          <p className="text-blue-200 leading-relaxed text-sm md:text-base">
            Our commitment to these principles extends beyond our products to our people, 
            processes, and partnerships. We measure success not just by financial metrics 
            but by how well we uphold these values in every aspect of our business.
          </p>
        </div>
        <div className="bg-white/10 rounded-xl md:rounded-2xl p-4 md:p-6">
          <h4 className="font-bold text-base md:text-lg mb-2 md:mb-3">Value in Action</h4>
          <ul className="space-y-1 md:space-y-2 text-blue-200">
            <li className="flex items-center gap-2 text-xs md:text-sm">
              <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-400 flex-shrink-0" />
              Quarterly ethics and values training for all employees
            </li>
            <li className="flex items-center gap-2 text-xs md:text-sm">
              <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-400 flex-shrink-0" />
              Sustainability metrics integrated into performance reviews
            </li>
            <li className="flex items-center gap-2 text-xs md:text-sm">
              <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-400 flex-shrink-0" />
              Innovation awards program recognizing creative solutions
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  </div>
</section>

        {/* Leadership Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50/50 to-cyan-50/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-gray-900 via-blue-700 to-cyan-600 bg-clip-text text-transparent">
                  Our Leadership
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Visionary leaders who have guided our company through three decades of growth and innovation, 
                maintaining our commitment to excellence while embracing change.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leadershipTeam.map((leader, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
                >
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{leader.name}</h3>
                    <p className="text-blue-600 font-semibold">{leader.role}</p>
                    <p className="text-sm text-gray-500 mt-2">{leader.experience}</p>
                  </div>
                  
                  <div className="bg-gray-50/50 rounded-xl p-4">
                    <Quote className="h-6 w-6 text-blue-500 mb-2" />
                    <p className="text-gray-700 italic text-sm">"{leader.quote}"</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* New Facility Showcase Section */}
        <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900">
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-0 left-0 w-48 md:w-96 h-48 md:h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>
  </div>

  <div className="relative z-10 max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12 md:mb-16"
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
        <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
          Innovation Hub
        </span>
      </h2>
      <p className="text-lg md:text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
        Our 45,000 sq. ft. state-of-the-art facility combines cutting-edge technology 
        with sustainable practices to deliver unparalleled quality. Designed for efficiency, 
        innovation, and environmental responsibility, this facility represents the future 
        of automotive component manufacturing.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
      {/* Facility Image - Enhanced mobile layout */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-700">
          <img
            src={facilityImage}
            alt="Uni-Tech Auto International Facility"
            className="w-full h-[350px] md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          
          {/* Overlay Badge */}
          <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-green-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-full font-semibold text-xs md:text-sm">
            Eco-Certified Facility
          </div>
        </div>

        {/* Additional Info Card - Better mobile spacing */}
        <div className="mt-4 md:mt-6 bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/10">
          <h4 className="text-white font-bold text-base md:text-lg mb-2 md:mb-2">Facility Highlights</h4>
          <ul className="text-blue-200 space-y-1 md:space-y-2 text-xs md:text-sm">
            <li className="flex items-center gap-2">
              <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
              LEED Gold Certified building
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
              24/7 automated production capabilities
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
              Advanced climate control systems
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
              On-site research and development center
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Facility Features - Improved mobile grid */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
      >
        {facilityFeatures.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
              <div className="p-2 md:p-3 bg-white/20 rounded-lg md:rounded-xl">
                <feature.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
              <div className="text-white font-semibold text-sm md:text-base">{feature.title}</div>
            </div>
            <p className="text-blue-200 text-xs md:text-sm mb-2 md:mb-3 leading-relaxed">
              {feature.description}
            </p>
            <div className="text-cyan-200 font-bold text-base md:text-lg mb-2 md:mb-3">{feature.stats}</div>
            <p className="text-blue-300/80 text-xs leading-relaxed">
              {feature.details}
            </p>
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
              For three decades, we've been pushing the boundaries of automotive rubber technology. 
              As we look toward the future of mobility, we invite you to partner with us in creating 
              innovative solutions that will shape the next generation of vehicles.
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
                <Send className="h-5 w-5" />
                Start Partnership
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/80 backdrop-blur-md text-gray-700 font-semibold rounded-2xl border-2 border-gray-200/50 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Download Capabilities Brochure
              </motion.button>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                { icon: Clock, label: "30+ Years", description: "Industry Experience" },
                { icon: Shield, label: "ISO Certified", description: "Quality Standards" },
                { icon: Globe, label: "Global Reach", description: "10+ Countries" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white/50 backdrop-blur-md rounded-2xl p-6 border border-gray-200/30"
                >
                  <item.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">{item.label}</div>
                  <div className="text-gray-600 text-sm">{item.description}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OurLegacy;