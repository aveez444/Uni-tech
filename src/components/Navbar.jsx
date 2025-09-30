import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown,
  Home,
  Users,
  BookOpen,
  Phone,
  Package,
  Globe
} from 'lucide-react';

import logo from '../assets/logo.jpg';

// Import product images (adjust paths as needed)
import oRingImg from '../assets/o-rings.jpg';
import oilSealImg from '../assets/oil-seals.jpg';
import rubberBellowsImg from '../assets/rubber-bellows.jpg';
import rubberGasketsImg from '../assets/rubber-gaskets.jpg';
import rubberRollersImg from '../assets/rubber-rollers.jpg';
import rubberProfileImg from '../assets/rubber-profile.jpg';
import conveyorRollersImg from '../assets/conveyor-roller-1.jpg';
import moldedPartsImg from '../assets/molded-parts.jpg';
import flangeGasketsImg from '../assets/flange-gasket-1.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setIsProductsOpen(false);
  }, [location]);

  // Products data with images
  const products = [
    {
      name: "O-Rings",
      path: "/products/o-rings",
      image: oRingImg,
      description: "Precision sealing solutions"
    },
    {
      name: "Oil Seals",
      path: "/products/oil-seals", 
      image: oilSealImg,
      description: "Advanced lubrication retention"
    },
    {
      name: "Rubber Bellows",
      path: "/products/rubber-bellows",
      image: rubberBellowsImg,
      description: "Flexible protection solutions"
    },
    {
      name: "Rubber Gaskets",
      path: "/products/rubber-gaskets",
      image: rubberGasketsImg,
      description: "Leak-proof sealing"
    },
    {
      name: "Rubber Rollers",
      path: "/products/rubber-rollers",
      image: rubberRollersImg,
      description: "High-performance rollers"
    },
    {
      name: "Rubber Profile",
      path: "/products/rubber-profile",
      image: rubberProfileImg,
      description: "Custom extruded profiles"
    },
    {
      name: "Conveyor Rollers",
      path: "/products/rubber-conveyor",
      image: conveyorRollersImg,
      description: "Industrial conveyor solutions"
    },
    {
      name: "Molded Parts",
      path: "/products/rubber-molded-parts",
      image: moldedPartsImg,
      description: "Custom rubber components"
    },
    {
      name: "Flange Gaskets",
      path: "/products/rubber-flange-gasket",
      image: flangeGasketsImg,
      description: "Industrial flange sealing"
    }
  ];

  // Main navigation items - OPTION 1: Products after Exports
  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Our Legacy", path: "/our-legacy", icon: Users },
    { name: "Exports & Solutions", path: "/exports", icon: Globe, shortName: "Exports" },
    { name: "Blogs", path: "/blogs", icon: BookOpen },
    { name: "Contact", path: "/contact", icon: Phone }
  ];

  // OPTION 2: If you want Products after Our Legacy instead, use this:
  // const navItems = [
  //   { name: "Home", path: "/", icon: Home },
  //   { name: "Our Legacy", path: "/our-legacy", icon: Users },
  //   { name: "Blogs", path: "/blogs", icon: BookOpen },
  //   { name: "Exports", path: "/exports", icon: Globe, shortName: "Exports" },
  //   { name: "Contact", path: "/contact", icon: Phone }
  // ];

  // Check if current path matches
  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  // Animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.15,
        ease: "easeIn"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: custom * 0.05,
        duration: 0.3
      }
    })
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-200/50' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo - Made smaller for better fit */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0"
          >
            <img
              src={logo}
              alt="Unitech Auto International"
              className="h-8 w-auto rounded-lg lg:h-10"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => {
              // Render Home, Our Legacy first
              if (index < 2) {
                return (
                  <motion.div
                    key={item.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={item.path}
                      className={`px-3 py-2 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 text-sm ${
                        isActive(item.path)
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                    >
                      <item.icon className="h-4 w-4 flex-shrink-0" />
                      <span className="truncate">{item.name}</span>
                    </Link>
                  </motion.div>
                );
              }
              
              // After Our Legacy, insert Products dropdown
              if (index === 2) {
                return (
                  <React.Fragment key="products-fragment">
                    {/* Products Dropdown - Positioned after Our Legacy */}
                    <div className="relative">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsProductsOpen(!isProductsOpen)}
                        className={`px-3 py-2 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 text-sm ${
                          location.pathname.includes('/products')
                            ? 'bg-blue-600 text-white shadow-lg'
                            : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                        }`}
                      >
                        <Package className="h-4 w-4" />
                        Products
                        <motion.div
                          animate={{ rotate: isProductsOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="h-4 w-4" />
                        </motion.div>
                      </motion.button>

                      <AnimatePresence>
                        {isProductsOpen && (
                          <motion.div
                            variants={dropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="absolute top-full left-0 mt-2 w-96 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden"
                          >
                            <div className="p-2">
                              <div className="p-4 border-b border-gray-100">
                                <h3 className="font-semibold text-gray-900 mb-1">Our Products</h3>
                                <p className="text-sm text-gray-600">Precision-engineered rubber solutions</p>
                              </div>
                              
                              {/* Fixed height with proper scrolling */}
                              <div className="max-h-80 overflow-y-auto p-2 space-y-1 custom-scrollbar">
                                {products.map((product, index) => (
                                  <motion.div
                                    key={product.path}
                                    custom={index}
                                    variants={itemVariants}
                                    initial="hidden"
                                    animate="visible"
                                  >
                                    <Link
                                      to={product.path}
                                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all duration-300 group"
                                      onClick={() => setIsProductsOpen(false)}
                                    >
                                      <div className="flex-shrink-0">
                                        <img
                                          src={product.image}
                                          alt={product.name}
                                          className="h-10 w-10 object-cover rounded-lg shadow-sm group-hover:shadow-md transition-shadow"
                                        />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors text-sm">
                                          {product.name}
                                        </div>
                                        <div className="text-xs text-gray-600">
                                          {product.description}
                                        </div>
                                      </div>
                                    </Link>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Then continue with the rest of navigation items */}
                    <motion.div
                      key={item.name}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        to={item.path}
                        className={`px-3 py-2 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 text-sm ${
                          isActive(item.path)
                            ? 'bg-blue-600 text-white shadow-lg'
                            : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                        } ${item.name === "Exports" ? 'min-w-0 max-w-32 truncate' : ''}`}
                        title={item.name === "Exports" ? "Exports & Solutions" : item.name}
                      >
                        <item.icon className="h-4 w-4 flex-shrink-0" />
                        <span className="truncate">
                          {item.name === "Exports" ? "Exports" : item.name}
                        </span>
                      </Link>
                    </motion.div>
                  </React.Fragment>
                );
              }

              // Render remaining items (Blogs, Contact)
              return (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item.path}
                    className={`px-3 py-2 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 text-sm ${
                      isActive(item.path)
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    <item.icon className="h-4 w-4 flex-shrink-0" />
                    <span className="truncate">{item.name}</span>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6 text-gray-700" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6 text-gray-700" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-lg rounded-2xl mx-4 mb-4 shadow-xl border border-gray-200/50"
            >
              <div className="p-4 space-y-2">
                {/* Navigation Items - Mobile follows the same order */}
                {navItems.slice(0, 2).map((item, index) => (
                  <motion.div
                    key={item.name}
                    custom={index}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      to={item.path}
                      className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
                        isActive(item.path)
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      <span className="font-medium truncate">{item.name}</span>
                    </Link>
                  </motion.div>
                ))}

                {/* Products Section - Positioned after Our Legacy in mobile too */}
                <motion.div
                  custom={2}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <button
                    onClick={() => setIsProductsOpen(!isProductsOpen)}
                    className={`w-full flex items-center justify-between gap-3 p-3 rounded-xl transition-all duration-300 ${
                      location.pathname.includes('/products')
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Package className="h-5 w-5" />
                      <span className="font-medium">Products</span>
                    </div>
                    <motion.div
                      animate={{ rotate: isProductsOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.div>
                  </button>
                </motion.div>

                {/* Rest of navigation items */}
                {navItems.slice(2).map((item, index) => (
                  <motion.div
                    key={item.name}
                    custom={index + 3}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      to={item.path}
                      className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
                        isActive(item.path)
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      <span className="font-medium truncate">
                        {item.name === "Exports" ? "Exports & Solutions" : item.name}
                      </span>
                    </Link>
                  </motion.div>
                ))}

                {/* Products Dropdown - Fixed scrolling */}
                <AnimatePresence>
                  {isProductsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-4 space-y-1 overflow-hidden"
                    >
                      <div className="max-h-60 overflow-y-auto space-y-1 pr-2 custom-scrollbar">
                        {products.map((product, index) => (
                          <motion.div
                            key={product.path}
                            custom={index}
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                          >
                            <Link
                              to={product.path}
                              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all duration-300 group"
                              onClick={() => {
                                setIsOpen(false);
                                setIsProductsOpen(false);
                              }}
                            >
                              <div className="flex-shrink-0">
                                <img
                                  src={product.image}
                                  alt={product.name}
                                  className="h-8 w-8 object-cover rounded-md shadow-sm"
                                />
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors truncate">
                                  {product.name}
                                </div>
                                <div className="text-xs text-gray-600 truncate">
                                  {product.description}
                                </div>
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;