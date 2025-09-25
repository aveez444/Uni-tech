import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, X, Menu } from 'lucide-react';
import logo from '../assets/logo.jpg'; // Import the logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = {
    company: [
      { name: 'About Us', href: '/our-legacy' },
      { name: 'Our Journey', href: '/journey' },
      { name: 'Certifications', href: '/certifications' },
      { name: 'Quality Assurance', href: '/quality' }
    ],
    products: [
      { name: 'Automotive Rubber', href: '/products/automotive' },
      { name: 'Industrial Rubber', href: '/products/industrial' },
      { name: 'Custom Solutions', href: '/products/custom' },
      { name: 'Technical Specifications', href: '/products/tech-specs' }
    ],
    gallery: [
      { name: 'Product Gallery', href: '/gallery/products' },
      { name: 'Manufacturing Process', href: '/gallery/process' },
      { name: 'Facility Tour', href: '/gallery/facility' }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-2xl shadow-blue-500/10' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0"
            >
              <img
                src={logo} // Use imported logo
                alt="Unitech Auto Products"
                className="h-12 w-auto rounded-lg rounded-none, rounded-sm, rounded-lg "
                
              />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex items-center space-x-8"
              >
                {/* Home */}
                <motion.div variants={itemVariants}>
                  <a
                    href="/"
                    className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 group"
                  >
                    Home
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </motion.div>

                {/* About Dropdown */}
                <motion.div variants={itemVariants} className="relative">
                  <button
                    onMouseEnter={() => setActiveDropdown('company')}
                    className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 group"
                  >
                    About Us
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === 'company' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        onMouseLeave={() => setActiveDropdown(null)}
                        className="absolute left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                      >
                        {navigation.company.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block px-6 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 border-b border-gray-100 last:border-b-0"
                          >
                            {item.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Products Dropdown */}
                <motion.div variants={itemVariants} className="relative">
                  <button
                    onMouseEnter={() => setActiveDropdown('products')}
                    className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 group"
                  >
                    Products
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === 'products' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        onMouseLeave={() => setActiveDropdown(null)}
                        className="absolute left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                      >
                        {navigation.products.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block px-6 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 border-b border-gray-100 last:border-b-0"
                          >
                            {item.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Gallery */}
                <motion.div variants={itemVariants}>
                  <a
                    href="/gallery"
                    className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 group"
                  >
                    Gallery
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </motion.div>

                {/* Blogs */}
                <motion.div variants={itemVariants}>
                  <a
                    href="/blogs"
                    className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 group"
                  >
                    Blogs
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </motion.div>

                {/* Contact */}
                <motion.div variants={itemVariants}>
                  <a
                    href="/contact"
                    className="relative px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-medium hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105"
                  >
                    Contact Us
                  </a>
                </motion.div>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="md:hidden p-2 rounded-lg bg-white/80 backdrop-blur-sm border border-gray-200"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                <a href="/" className="block py-3 px-4 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors">Home</a>
                
                <div className="space-y-1">
                  <div className="py-3 px-4 text-gray-700 font-medium">About Us</div>
                  {navigation.company.map((item) => (
                    <a key={item.name} href={item.href} className="block py-2 px-6 text-gray-600 hover:bg-blue-50 rounded-lg transition-colors">
                      {item.name}
                    </a>
                  ))}
                </div>

                <div className="space-y-1">
                  <div className="py-3 px-4 text-gray-700 font-medium">Products</div>
                  {navigation.products.map((item) => (
                    <a key={item.name} href={item.href} className="block py-2 px-6 text-gray-600 hover:bg-blue-50 rounded-lg transition-colors">
                      {item.name}
                    </a>
                  ))}
                </div>

                <a href="/gallery" className="block py-3 px-4 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors">Gallery</a>
                <a href="/blogs" className="block py-3 px-4 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors">Blogs</a>
                <a href="/contact" className="block py-3 px-4 bg-blue-600 text-white rounded-lg text-center font-medium mt-4">Contact Us</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer for fixed navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;