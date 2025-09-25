// ProductAutomotiveMoldedRubberParts.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, ChevronRight, CheckCircle, Shield, Zap, Thermometer, 
  Droplets, Factory, Clock, Send, X, Download, MessageCircle,
  Star, Target, Users, Award, Package, Truck, Phone, Mail,
  Car, Cog, Settings, Wrench
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Import images
import automotivePart1 from '../assets/molded-parts.jpg';
import automotivePart2 from '../assets/automotive-molded-parts2.jpg';

const ProductAutomotiveMoldedRubberParts = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    quantity: '',
    application: '',
    specifications: '',
    message: ''
  });

  const product = {
    name: "Automotive Molded Rubber Parts",
    shortName: "Molded Rubber Parts",
    description: "Precision-molded rubber components engineered for automotive applications, offering superior performance, durability, and reliability.",
    fullDescription: "Uni-Tech Auto International specializes in manufacturing high-quality molded rubber parts for the automotive industry. Using advanced injection and compression molding technologies, we produce complex rubber components that meet stringent automotive standards for performance, safety, and longevity.",
    
    images: [automotivePart1, automotivePart2],
    
    features: [
      { icon: Car, title: "Automotive Grade", desc: "Manufactured to meet automotive industry standards and specifications" },
      { icon: Shield, title: "Durability", desc: "Excellent resistance to wear, tear, and environmental factors" },
      { icon: Thermometer, title: "Temperature Resistant", desc: "Withstands extreme automotive temperature cycles" },
      { icon: Cog, title: "Precision Engineered", desc: "Complex geometries with tight tolerances for perfect fit" }
    ],

    specifications: {
      manufacturing: "Injection Molding, Compression Molding, Transfer Molding",
      tolerance: "±0.1mm to ±0.5mm depending on complexity",
      materials: ["EPDM", "NBR (Nitrile)", "Silicone (VMQ)", "Viton (FKM)", "Neoprene", "Natural Rubber", "SBR"],
      standards: ["ISO/TS 16949", "ISO 9001:2015", "ASTM D2000", "Customer Specifications"],
      secondaryOperations: "Trimming, bonding to metal/plastic, surface treatments"
    },

    applications: [
      "Engine mounts and vibration dampers",
      "Suspension bushings and components",
      "Sealing grommets and connectors",
      "HVAC system seals and diaphragms",
      "Brake system components",
      "Fuel system seals and diaphragms",
      "Electrical connector seals",
      "Door and window seals",
      "Exhaust hangers and isolators",
      "Transmission seals and components"
    ],

    benefits: [
      "Reduced vehicle noise, vibration, and harshness (NVH)",
      "Enhanced vehicle safety and reliability",
      "Long service life under demanding conditions",
      "Custom designs for specific automotive applications",
      "Cost-effective manufacturing for high volumes",
      "Quick prototyping and production turnaround"
    ],

    materialProperties: [
      {
        material: "EPDM",
        tempRange: "-50°C to 150°C",
        features: "Excellent weather, ozone, and steam resistance",
        applications: "Weather seals, cooling system components"
      },
      {
        material: "NBR (Nitrile)",
        tempRange: "-40°C to 120°C",
        features: "Superior oil and fuel resistance",
        applications: "Fuel system components, oil seals"
      },
      {
        material: "Silicone",
        tempRange: "-60°C to 230°C",
        features: "High temperature stability, food-grade options",
        applications: "Engine bay components, high-temperature seals"
      },
      {
        material: "Viton",
        tempRange: "-20°C to 200°C",
        features: "Exceptional chemical and heat resistance",
        applications: "Fuel injection systems, aggressive fluid handling"
      }
    ],

    qualityAssurance: [
      "100% dimensional inspection and verification",
      "Material certification and traceability",
      "Statistical process control (SPC) implementation",
      "ISO/TS 16949 compliant manufacturing",
      "PPAP documentation available",
      "Batch testing and quality records"
    ]
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Inquiry submitted:', inquiryForm);
    setShowInquiryModal(false);
    // Reset form
    setInquiryForm({
      name: '',
      email: '',
      company: '',
      phone: '',
      quantity: '',
      application: '',
      specifications: '',
      message: ''
    });
  };

  const handleInputChange = (e) => {
    setInquiryForm({
      ...inquiryForm,
      [e.target.name]: e.target.value
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />
      
      {/* Back Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white shadow-sm border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors group"
          >
            <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Products
          </button>
        </div>
      </motion.div>

      <main>
        {/* Product Hero Section */}
        <section className="relative py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Image Gallery */}
              <motion.div variants={itemVariants} className="space-y-4">
                <motion.div
                  variants={imageVariants}
                  className="relative rounded-3xl overflow-hidden shadow-2xl bg-white p-4"
                >
                  <img
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-full h-96 object-cover rounded-2xl"
                  />
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                    {selectedImage + 1}/{product.images.length}
                  </div>
                </motion.div>
                
                <div className="flex gap-4">
                  {product.images.map((image, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-1 h-24 rounded-xl overflow-hidden border-2 transition-all ${
                        selectedImage === index ? 'border-blue-500 shadow-lg' : 'border-gray-200'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Product Info */}
              <motion.div variants={itemVariants} className="space-y-6">
                <div>
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="inline-block px-4 py-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full mb-4"
                  >
                    Automotive Manufacturing Solutions
                  </motion.span>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    {product.name}
                  </h1>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Key Features */}
                <div className="grid grid-cols-2 gap-4">
                  {product.features.slice(0, 4).map((feature, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm border border-gray-100"
                    >
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <feature.icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm">{feature.title}</h3>
                        <p className="text-xs text-gray-600">{feature.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowInquiryModal(true)}
                    className="flex-1 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Request Quote
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Download className="h-5 w-5" />
                    Technical Catalog
                  </motion.button>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 pt-6">
                  {[
                    { icon: Clock, value: "72h", label: "Prototype Lead Time" },
                    { icon: Shield, value: "ISO/TS", label: "Certified" },
                    { icon: Car, value: "OEM", label: "Standards" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="text-center p-3 bg-white rounded-xl shadow-sm"
                    >
                      <stat.icon className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                      <div className="font-bold text-gray-900">{stat.value}</div>
                      <div className="text-xs text-gray-600">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Detailed Information Sections */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="prose prose-lg max-w-none"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Product Overview</h2>
                  <p className="text-gray-700 leading-relaxed">
                    {product.fullDescription} We work closely with automotive manufacturers and Tier 1 suppliers 
                    to develop custom rubber components that meet specific performance requirements and 
                    integrate seamlessly into vehicle systems.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Our engineering team utilizes CAD design, mold flow analysis, and rapid prototyping 
                    to ensure optimal part design and manufacturing efficiency. With stringent quality 
                    control processes, we deliver parts that exceed automotive industry expectations.
                  </p>
                </motion.div>

                {/* Specifications */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3">Manufacturing & Tolerances</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between py-2 border-b border-gray-200">
                            <span className="text-gray-600">Manufacturing Methods</span>
                            <span className="font-semibold text-right">{product.specifications.manufacturing}</span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-200">
                            <span className="text-gray-600">Dimensional Tolerance</span>
                            <span className="font-semibold">{product.specifications.tolerance}</span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-200">
                            <span className="text-gray-600">Secondary Operations</span>
                            <span className="font-semibold text-right">{product.specifications.secondaryOperations}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3">Materials & Standards</h3>
                        <div className="space-y-3">
                          <div>
                            <h4 className="text-sm font-medium text-gray-700">Available Materials:</h4>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {product.specifications.materials.map((material, index) => (
                                <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                                  {material}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-700">Quality Standards:</h4>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {product.specifications.standards.map((standard, index) => (
                                <span key={index} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                                  {standard}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Material Properties */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Material Properties</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {product.materialProperties.map((material, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ y: -5 }}
                        className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <h3 className="font-bold text-lg text-gray-900 mb-3">{material.material}</h3>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Thermometer className="h-4 w-4 text-blue-600" />
                            <span className="text-sm text-gray-600">Temperature: {material.tempRange}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Shield className="h-4 w-4 text-green-600" />
                            <span className="text-sm text-gray-600">{material.features}</span>
                          </div>
                          <div className="text-sm text-gray-700 mt-3">
                            <strong>Applications:</strong> {material.applications}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Applications */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white"
                >
                  <h3 className="font-bold text-xl mb-4">Automotive Applications</h3>
                  <ul className="space-y-2">
                    {product.applications.slice(0, 6).map((app, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-300 flex-shrink-0" />
                        <span className="text-sm">{app}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Benefits */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
                >
                  <h3 className="font-bold text-xl text-gray-900 mb-4">Key Benefits</h3>
                  <ul className="space-y-3">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Star className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Quality Assurance */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-gray-900 rounded-2xl p-6 text-white"
                >
                  <h3 className="font-bold text-xl mb-4">Quality Assurance</h3>
                  <ul className="space-y-2">
                    {product.qualityAssurance.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <Shield className="h-4 w-4 text-green-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-blue-900">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Need Custom Automotive Rubber Parts?
              </h2>
              <p className="text-xl text-blue-200 mb-8">
                Contact our engineering team for custom solutions, prototyping, and volume production.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowInquiryModal(true)}
                  className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Request Engineering Consultation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  Call: +91-932 690 9677
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Inquiry Modal */}
      <AnimatePresence>
        {showInquiryModal && (
          <InquiryModal
            product={product}
            formData={inquiryForm}
            onChange={handleInputChange}
            onSubmit={handleInquirySubmit}
            onClose={() => setShowInquiryModal(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

// Inquiry Modal Component
const InquiryModal = ({ product, formData, onChange, onSubmit, onClose }) => {
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 25
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -50,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-t-3xl p-6 text-white">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold">Inquiry for {product.name}</h3>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <p className="text-blue-100">Our engineering team will contact you within 2 hours</p>
        </div>

        {/* Modal Content */}
        <form onSubmit={onSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={onChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={onChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="your.email@company.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={onChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="Your company name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={onChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="+91 XXX XXX XXXX"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Estimated Quantity</label>
              <input
                type="text"
                name="quantity"
                value={formData.quantity}
                onChange={onChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="e.g., 10,000 pieces/month"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Application</label>
              <input
                type="text"
                name="application"
                value={formData.application}
                onChange={onChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="e.g., Passenger car suspension, Commercial vehicle engine"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Part Specifications</label>
            <textarea
              name="specifications"
              value={formData.specifications}
              onChange={onChange}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
              placeholder="Dimensions, material requirements, performance specs, standards..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Additional Requirements</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={onChange}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
              placeholder="Testing requirements, delivery timeline, existing drawings/samples..."
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Send className="h-5 w-5" />
            Send Engineering Inquiry
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ProductAutomotiveMoldedRubberParts;