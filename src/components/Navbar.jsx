import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, X, Menu, ArrowRight } from 'lucide-react';
import logo from '../assets/logo.jpg';

// Import product images
import oRingsImage from '../assets/o-rings.jpg';
import oilSealsImage from '../assets/oil-seals.jpg';
import rubberBellowsImage from '../assets/rubber-bellows.jpg';
import moldedPartsImage from '../assets/molded-parts.jpg';
import metalBondedImage from '../assets/metal-bonded.jpg';
import rubberGasketsImage from '../assets/rubber-gaskets.jpg';
import rubberProfileImage from '../assets/rubber-profile.jpg';
import rubberRollersImage from '../assets/rubber-rollers.jpg';
import automotivePartsImage from '../assets/automotive-parts.jpg';
import siliconeRubberImage from '../assets/silicone-molded.jpg';

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

  const products = [
    {
      name: 'O-Rings',
      href: '/products/o-rings',
      image: oRingsImage,
      description: 'Precision sealing solutions'
    },
    {
      name: 'Oil Seals',
      href: '/products/oil-seals',
      image: oilSealsImage,
      description: 'Advanced leak prevention'
    },
    {
      name: 'Rubber Bellows',
      href: '/products/rubber-bellows',
      image: rubberBellowsImage,
      description: 'Protective flexible covers'
    },
    {
      name: 'Molded Parts',
      href: '/products/molded-parts',
      image: moldedPartsImage,
      description: 'Custom molded components'
    },
    {
      name: 'Metal Bonded',
      href: '/products/metal-bonded',
      image: metalBondedImage,
      description: 'Rubber-to-metal bonding'
    },
    {
      name: 'Rubber Gaskets',
      href: '/products/rubber-gaskets',
      image: rubberGasketsImage,
      description: 'Perfect sealing surfaces'
    },
    {
      name: 'Rubber Profile',
      href: '/products/rubber-profile',
      image: rubberProfileImage,
      description: 'Extruded rubber profiles'
    },
    {
      name: 'Rubber Rollers',
      href: '/products/rubber-rollers',
      image: rubberRollersImage,
      description: 'Industrial roller solutions'
    },
    {
      name: 'Automotive Parts',
      href: '/products/automotive',
      image: automotivePartsImage,
      description: 'Vehicle components'
    },
    {
      name: 'Silicone Rubber',
      href: '/products/silicone-rubber',
      image: siliconeRubberImage,
      description: 'High-temperature solutions'
    }
  ];

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

  const productCardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 }
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
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
                src={logo}
                alt="Unitech Auto Products"
                className="h-12 w-auto rounded-lg"
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

                {/* Our Legacy (No Dropdown) */}
                <motion.div variants={itemVariants}>
                  <a
                    href="/our-legacy"
                    className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 group"
                  >
                    Our Legacy
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </motion.div>

                {/* Products Dropdown - Tesla Inspired */}
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
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        onMouseLeave={() => setActiveDropdown(null)}
                        className="absolute left-1/2 transform -translate-x-1/2 mt-6 w-[95vw] max-w-6xl bg-white/98 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden"
                      >
                        <div className="p-8">
                          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
                            {products.map((product, index) => (
                              <motion.a
                                key={product.name}
                                href={product.href}
                                variants={productCardVariants}
                                initial="hidden"
                                animate="visible"
                                whileHover="hover"
                                custom={index}
                                className="group block bg-gradient-to-br from-white to-gray-50 rounded-2xl p-4 border border-gray-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
                              >
                                <div className="relative overflow-hidden rounded-xl mb-4 h-32 bg-gradient-to-br from-gray-100 to-gray-200">
                                  <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                
                                <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                                  {product.name}
                                </h3>
                                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                                  {product.description}
                                </p>
                                
                                <div className="flex items-center text-blue-600 text-sm font-medium">
                                  Explore
                                  <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </div>
                              </motion.a>
                            ))}
                          </div>
                          
                          {/* View All Products */}
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mt-8 text-center"
                          >
                            <a
                              href="/products"
                              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105"
                            >
                              View All Products
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                          </motion.div>
                        </div>
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
                
                <a href="/our-legacy" className="block py-3 px-4 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors">Our Legacy</a>

                <div className="space-y-1">
                  <div className="py-3 px-4 text-gray-700 font-medium">Products</div>
                  <div className="grid grid-cols-2 gap-3 px-4">
                    {products.map((product) => (
                      <a 
                        key={product.name} 
                        href={product.href} 
                        className="block p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group"
                      >
                        <div className="aspect-square mb-2 bg-gray-200 rounded-lg overflow-hidden">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-700">{product.name}</span>
                      </a>
                    ))}
                  </div>
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