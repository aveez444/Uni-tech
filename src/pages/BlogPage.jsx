// BlogPage.jsx
import { useState } from 'react';
import Navbar from '../components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Calendar, User, Clock, ArrowRight, ExternalLink,
  Tag, Share, Bookmark, Eye, Heart, MessageCircle, Zap,
  Factory, Leaf, Brain, Rocket, Telescope, Gem, Crown, MapPin, Phone, Mail,
  ChevronLeft, ChevronRight, Filter, X, Sparkles,
  TrendingUp, Target, Users, Globe, Award, Shield
} from 'lucide-react';

// Import blog images (you'll need to add these)

import article1 from '../assets/smart-rubber-tech.jpg';
import article2 from '../assets/sustainable-manufacturing.jpg';
import article3 from '../assets/ai-rubber-design.jpg';
import article4 from '../assets/aerospace-medical.jpg';
import article5 from '../assets/innovation-legacy.jpg';


const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Enhanced Articles Data
  const articles = [
    {
      id: 1,
      title: "The Future of Rubber: Smart Materials Revolutionizing Automotive Industry",
      excerpt: "How self-healing polymers and sensor-integrated components are creating the next generation of intelligent vehicles.",
      content: `Smart rubber materials are no longer science fiction. At Uni-Tech, we're pioneering the development of components that can self-repair, monitor their own health, and communicate with vehicle systems in real-time.

## The Technology Behind Smart Rubber

Our R&D team has developed proprietary nanocomposites that enable:
- **Self-healing capabilities** for extended component lifespan
- **Embedded micro-sensors** for real-time performance monitoring
- **Shape memory polymers** that adapt to environmental conditions

## Real-World Applications

These innovations are already transforming:
- **Predictive maintenance systems** that alert before failures occur
- **Adaptive sealing technologies** for electric vehicles
- **Intuitive vibration damping** that learns from driving patterns

The future is intelligent, and it's made of rubber.`,
      image: article1,
      category: 'innovation',
      readTime: 8,
      publishDate: '2024-12-15',
      author: {
        name: 'Dr. Rajesh Sharma',
        role: 'Chief Innovation Officer'
      },
      tags: ['Smart Materials', 'IoT', 'Automotive Tech', 'Innovation'],
      stats: {
        views: '2.4k',
        likes: 156,
        shares: 89
      },
      gradient: 'from-purple-600 via-pink-600 to-rose-600',
      featured: true
    },
    {
      id: 2,
      title: "Sustainable Rubber Manufacturing: Our Journey to Carbon-Neutral Production",
      excerpt: "Discover how Uni-Tech is leading the green revolution in automotive component manufacturing.",
      content: `Sustainability isn't just a buzzword at Uni-Tech—it's embedded in our manufacturing DNA. Our journey to carbon-neutral production represents a fundamental shift in how automotive components are made.

## Our Green Initiatives

### Renewable Energy Integration
- **Solar-powered facilities** covering 85% of our energy needs
- **Biomass conversion** of rubber waste into energy
- **Water recycling systems** with 95% efficiency

### Circular Economy Practices
We've implemented closed-loop systems where:
- Production waste is repurposed into new materials
- End-of-life components are recycled into raw materials
- Packaging is 100% biodegradable and reusable

## Measurable Impact

Our sustainability efforts have resulted in:
- **65% reduction** in carbon footprint since 2015
- **Zero waste** to landfill across all facilities
- **40% less water** consumption through advanced recycling`,
      image: article2,
      category: 'sustainability',
      readTime: 6,
      publishDate: '2024-12-10',
      author: {
        name: 'Green Manufacturing Team',
        role: 'Sustainability Division',
   
      },
      tags: ['Sustainability', 'Green Tech', 'Eco-Friendly', 'Manufacturing'],
      stats: {
        views: '1.8k',
        likes: 203,
        shares: 124
      },
      gradient: 'from-green-600 via-emerald-600 to-teal-600',
      featured: true
    },
    {
      id: 3,
      title: "AI-Powered Precision: How Machine Learning is Transforming Custom Rubber Part Design",
      excerpt: "Exploring our AI algorithms that reduce design time from weeks to hours while improving accuracy.",
      content: `Artificial Intelligence is revolutionizing how we approach custom rubber component design. Our proprietary AI systems have transformed what was once an art into a precise science.

## The AI Design Process

### Generative Design Algorithms
Our systems can:
- **Generate thousands of design variations** in minutes
- **Optimize for multiple parameters** simultaneously
- **Predict performance characteristics** with 99.7% accuracy

### Real-Time Simulation
Advanced machine learning models enable:
- **Virtual stress testing** without physical prototypes
- **Material behavior prediction** under extreme conditions
- **Automated optimization** based on performance data

## Case Study: Automotive Seal Redesign

One client needed a complex sealing solution. Our AI:
- Reduced design time from 3 weeks to 6 hours
- Improved sealing efficiency by 42%
- Cut material costs by 18% through optimized geometry`,
      image: article3,
      category: 'technology',
      readTime: 7,
      publishDate: '2024-12-05',
      author: {
        name: 'AI Engineering Team',
        role: 'Digital Innovation Lab',
  
      },
      tags: ['Artificial Intelligence', 'Machine Learning', 'CAD', 'Innovation'],
      stats: {
        views: '3.1k',
        likes: 287,
        shares: 156
      },
      gradient: 'from-blue-600 via-cyan-600 to-sky-600'
    },
    {
      id: 4,
      title: "Beyond Automotive: Rubber Innovations in Aerospace and Medical Applications",
      excerpt: "How our high-performance elastomers are solving critical challenges in aerospace and healthcare.",
      content: `While automotive remains our core focus, our material innovations are making significant impacts in aerospace and medical industries where failure is not an option.

## Aerospace Applications

### Extreme Environment Sealing
Our specialized compounds withstand:
- **Temperature extremes** from -65°C to 300°C
- **High-pressure conditions** up to 10,000 PSI
- **Chemical exposure** to aviation fuels and lubricants

### Medical Grade Components
We've developed biocompatible rubbers for:
- **Surgical instruments** requiring absolute reliability
- **Prosthetic components** needing durability and comfort
- **Diagnostic equipment** seals for precision medical devices

## Certification and Standards

All components meet:
- **AS9100** aerospace quality standards
- **ISO 13485** medical device requirements
- **FDA Class VI** biocompatibility certification`,
      image: article4,
      category: 'applications',
      readTime: 5,
      publishDate: '2024-11-28',
      author: {
        name: 'Dr. Rajesh Sharma',
        role: 'Chief Innovation Officer',

      },
      tags: ['Aerospace', 'Medical', 'High-Performance', 'Applications'],
      stats: {
        views: '1.5k',
        likes: 134,
        shares: 78
      },
      gradient: 'from-orange-600 via-amber-600 to-yellow-600'
    },
    {
      id: 5,
      title: "30 Years of Innovation: The Uni-Tech Legacy and Our Vision for 2030",
      excerpt: "Reflecting on three decades of breakthroughs and looking ahead to the next frontier of rubber technology.",
      content: `From our humble beginnings in 1995 to becoming a global innovation leader, the Uni-Tech journey has been defined by relentless pursuit of excellence.

## Key Milestones

### The Foundation Years (1995-2005)
- Established core manufacturing capabilities
- Developed proprietary rubber compounds
- Built reputation for precision and reliability

### The Expansion Era (2005-2015)
- Expanded to international markets
- Implemented advanced quality systems
- Pioneered custom manufacturing approaches

### The Innovation Age (2015-Present)
- Integrated Industry 4.0 technologies
- Developed sustainable manufacturing practices
- Established global R&D partnerships

## Vision 2030

Looking ahead, we're focused on:
- **Quantum material research** for unprecedented performance
- **Digital twin technology** for virtual manufacturing
- **Autonomous production systems** with AI optimization`,
      image: article5,
      category: 'company',
      readTime: 10,
      publishDate: '2024-11-20',
      author: {
        name: 'Leadership Team',
        role: 'Uni-Tech Auto International',
     
      },
      tags: ['Legacy', 'Innovation', 'Future Tech', 'Company'],
      stats: {
        views: '4.2k',
        likes: 345,
        shares: 201
      },
      gradient: 'from-gray-700 via-gray-800 to-black',
      featured: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Articles', count: articles.length },
    { id: 'innovation', name: 'Innovation', count: articles.filter(a => a.category === 'innovation').length },
    { id: 'sustainability', name: 'Sustainability', count: articles.filter(a => a.category === 'sustainability').length },
    { id: 'technology', name: 'Technology', count: articles.filter(a => a.category === 'technology').length },
    { id: 'applications', name: 'Applications', count: articles.filter(a => a.category === 'applications').length },
    { id: 'company', name: 'Company', count: articles.filter(a => a.category === 'company').length }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = activeCategory === 'all' || article.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticles = articles.filter(article => article.featured);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main className="relative overflow-hidden">
        {/* Enhanced Hero Section */}
        <section className="relative min-h-[70vh] flex items-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-black"></div>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.4, 0.2, 0.4]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md text-cyan-300 rounded-2xl text-sm font-semibold border border-cyan-500/30 shadow-2xl"
              >
                <Sparkles className="h-5 w-5" />
                <span>Uni-Tech Innovations Hub</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Innovation
                </span>
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                  Blog
                </span>
              </h1>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Exploring the future of rubber technology, sustainable manufacturing, 
                and groundbreaking innovations that are shaping the automotive industry.
              </p>

              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="max-w-2xl mx-auto relative"
              >
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search articles, technologies, innovations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-md border border-gray-600/30 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 transition-all duration-300"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Featured Insights
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Deep dives into our most groundbreaking research and innovations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {featuredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  onClick={() => setSelectedArticle(article)}
                  className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl cursor-pointer border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-500"
                >
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent`} />
                    <div className={`absolute top-4 right-4 px-3 py-1 bg-gradient-to-r ${article.gradient} text-white text-sm font-semibold rounded-full backdrop-blur-sm`}>
                      Featured
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {article.publishDate}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {article.readTime} min read
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <User className="h-4 w-4" />
                          {article.author.name}
                        </div>
                      </div>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2 text-cyan-400 font-semibold"
                      >
                        Read More
                        <ArrowRight className="h-4 w-4" />
                      </motion.div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="relative py-8 px-4 sm:px-6 lg:px-8 border-t border-b border-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 backdrop-blur-md border ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-2xl border-cyan-500/50'
                      : 'bg-white/5 text-gray-300 border-gray-600/30 hover:border-cyan-500/30'
                  }`}
                >
                  {category.name} ({category.count})
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
            >
              {filteredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  onClick={() => setSelectedArticle(article)}
                  className="group relative bg-gradient-to-br from-gray-800/30 to-gray-900/50 backdrop-blur-md rounded-3xl overflow-hidden shadow-xl cursor-pointer border border-gray-700/30 hover:border-cyan-500/20 transition-all duration-500"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent`} />
                    <div className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${article.gradient} text-white text-xs font-semibold rounded-full backdrop-blur-sm`}>
                      {article.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                      <span>{article.publishDate}</span>
                      <span>•</span>
                      <span>{article.readTime} min read</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="text-xs text-cyan-400 font-semibold">
                          {article.author.name}
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-gray-400">
                        <div className="flex items-center gap-1 text-xs">
                          <Eye className="h-3 w-3" />
                          {article.stats.views}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mt-4">
                      {article.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>

            {filteredArticles.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-gray-400 text-lg">No articles found matching your criteria</div>
                <button
                  onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                  className="mt-4 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Clear filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Stay Ahead of Innovation
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Get the latest research, insights, and breakthroughs delivered to your inbox
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/5 backdrop-blur-md border border-gray-600/30 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Article Detail Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <ArticleModal 
            article={selectedArticle} 
            onClose={() => setSelectedArticle(null)} 
          />
        )}
      </AnimatePresence>

      <BlogFooter />
    </div>
  );
};

// Add this Footer component inside your BlogPage.jsx, before the export default

const BlogFooter = () => {
    return (
      <footer className="relative bg-black border-t border-gray-800/50">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.05, 0.1, 0.05]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute top-0 right-1/4 w-80 h-80 bg-purple-900/10 rounded-full blur-3xl"
          />
        </div>
  
        <div className="relative z-10">
          {/* Main Footer Content */}
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              
              {/* Company Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Uni-Tech Auto International
                  </span>
                </div>
                
                <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                  Pioneering rubber technology innovations since 1995. 
                  Transforming automotive components through cutting-edge research, 
                  sustainable practices, and uncompromising quality.
                </p>
                
                <div className="flex gap-4">
                  {[
                    { icon: Factory, label: 'ISO 9001:2015 Certified' },
                    { icon: Leaf, label: 'Eco-Friendly Manufacturing' },
                    { icon: Brain, label: 'R&D Driven' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 px-3 py-2 bg-gray-900/50 rounded-lg border border-gray-800"
                    >
                      <item.icon className="h-4 w-4 text-cyan-400" />
                      <span className="text-xs text-gray-300">{item.label}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
  
              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-lg font-semibold text-white mb-6">Explore</h3>
                <ul className="space-y-3">
                  {[
                    'Innovation Blog',
                    'Our Products', 
                    'Technology',
                    'Sustainability',
                    'Case Studies',
                    'Research Papers'
                  ].map((link, index) => (
                    <li key={index}>
                      <motion.a
                        whileHover={{ x: 5, color: '#22d3ee' }}
                        href="#"
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                      >
                        {link}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
  
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-lg font-semibold text-white mb-6">Connect</h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: MapPin,
                      text: '123 Industrial Park, Auto City',
                      subtext: 'Pune, Maharashtra, India'
                    },
                    {
                      icon: Phone, 
                      text: '+91 12345 67890',
                      subtext: 'Mon-Fri, 9AM-6PM'
                    },
                    {
                      icon: Mail,
                      text: 'innovation@unitechauto.com',
                      subtext: 'Research & Development'
                    }
                  ].map((contact, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-start gap-3 group cursor-pointer"
                    >
                      <div className="p-2 bg-gray-900/50 rounded-lg group-hover:bg-cyan-900/20 transition-colors">
                        <contact.icon className="h-4 w-4 text-cyan-400" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">{contact.text}</div>
                        <div className="text-xs text-gray-500">{contact.subtext}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
  
            {/* Newsletter Subscription */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-12 pt-8 border-t border-gray-800/50"
            >
              <div className="max-w-md">
                <h4 className="text-lg font-semibold text-white mb-3">Stay Updated</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Get the latest research papers, innovation insights, and technology breakthroughs.
                </p>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 text-sm"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium rounded-lg text-sm shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
  
          {/* Bottom Bar */}
          <div className="border-t border-gray-800/50">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                {/* Copyright */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-gray-500 text-sm"
                >
                  © 2024 Uni-Tech Auto International. All rights reserved. 
                  <span className="text-cyan-400 ml-2">Pioneering Innovation Since 1995</span>
                </motion.div>
  
                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-4"
                >
                  <span className="text-gray-500 text-sm">Follow our research:</span>
                  <div className="flex gap-3">
                    {[
                      { name: 'LinkedIn', color: 'hover:text-blue-400' },
                      { name: 'ResearchGate', color: 'hover:text-green-400' },
                      { name: 'YouTube', color: 'hover:text-red-400' },
                      { name: 'Twitter', color: 'hover:text-cyan-400' }
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        whileHover={{ scale: 1.2, y: -2 }}
                        href="#"
                        className={`text-gray-400 ${social.color} transition-colors duration-300 text-sm`}
                      >
                        {social.name}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
  
                {/* Legal Links */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex gap-4 text-sm"
                >
                  {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link, index) => (
                    <motion.a
                      key={index}
                      whileHover={{ color: '#22d3ee' }}
                      href="#"
                      className="text-gray-500 hover:text-cyan-400 transition-colors duration-300"
                    >
                      {link}
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };

// Enhanced Article Modal Component
const ArticleModal = ({ article, onClose }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: -50 }}
        className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="relative h-96 overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-3 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-black/70 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="absolute bottom-6 left-6 right-6">
            <div className={`inline-block px-4 py-2 bg-gradient-to-r ${article.gradient} text-white text-sm font-semibold rounded-full mb-4 backdrop-blur-sm`}>
              {article.category}
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">{article.title}</h1>
            <div className="flex items-center gap-6 text-gray-200">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                {article.author.name}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                {article.publishDate}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                {article.readTime} min read
              </div>
            </div>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-xl text-gray-300 leading-relaxed mb-8">{article.excerpt}</p>
                <div className="whitespace-pre-line text-gray-300 leading-relaxed">
                  {article.content}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8">
                {article.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-gray-700/50 text-cyan-300 text-sm rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Author Info */}
              <div className="bg-gray-800/50 rounded-2xl p-6">
                <h3 className="font-semibold text-white mb-4">About the Author</h3>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{article.author.name}</div>
                    <div className="text-sm text-gray-400">{article.author.role}</div>
                  </div>
                </div>
                <p className="text-sm text-gray-300">Leading innovation in rubber technology and sustainable manufacturing practices.</p>
              </div>

              {/* Article Actions */}
              <div className="bg-gray-800/50 rounded-2xl p-6">
                <h3 className="font-semibold text-white mb-4">Article Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Views</span>
                    <span className="text-white">{article.stats.views}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Likes</span>
                    <span className="text-white">{article.stats.likes}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Shares</span>
                    <span className="text-white">{article.stats.shares}</span>
                  </div>
                </div>

                <div className="flex gap-3 mt-4">
                  <button
                    onClick={() => setIsLiked(!isLiked)}
                    className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-xl transition-all duration-300 ${
                      isLiked 
                        ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                        : 'bg-gray-700/50 text-gray-400 hover:text-red-400'
                    }`}
                  >
                    <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
                    Like
                  </button>
                  <button
                    onClick={() => setIsBookmarked(!isBookmarked)}
                    className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-xl transition-all duration-300 ${
                      isBookmarked 
                        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                        : 'bg-gray-700/50 text-gray-400 hover:text-cyan-400'
                    }`}
                  >
                    <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BlogPage;