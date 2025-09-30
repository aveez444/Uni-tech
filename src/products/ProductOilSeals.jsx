// ProductOilSeals.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, ChevronRight, CheckCircle, Shield, Zap, Thermometer, 
  Droplets, Factory, Clock, Send, X, Download, MessageCircle,
  Star, Target, Users, Award, Package, Truck, Phone, Mail,
  RotateCcw, Gauge, Settings
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Import images
import oilSealImage1 from '../assets/oil-seals.jpg';
import oilSealImage2 from '../assets/oil-seal-2.jpg';

const ProductOilSeals = () => {
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
    name: "Premium Oil Seals & Radial Shaft Seals",
    shortName: "Oil Seals",
    description: "High-performance oil seals engineered for superior lubrication retention and contamination exclusion in demanding automotive and industrial applications.",
    fullDescription: "Uni-Tech Auto International's precision oil seals are manufactured to exacting standards, providing reliable sealing solutions for rotating shaft applications. Our oil seals offer exceptional wear resistance, excellent sealing capabilities, and long service life even under extreme operating conditions.",
    
    images: [oilSealImage1, oilSealImage2],
    
    features: [
      { icon: Shield, title: "Contamination Protection", desc: "Excludes dust, dirt, and contaminants while retaining lubricants" },
      { icon: RotateCcw, title: "High-Speed Performance", desc: "Designed for rotational speeds up to 30 m/s" },
      { icon: Gauge, title: "Pressure Resistant", desc: "Withstands pressures up to 1.5 bar depending on design" },
      { icon: Thermometer, title: "Temperature Range", desc: "Operates from -40°C to 200°C based on material selection" }
    ],

    specifications: {
      sizes: "5mm to 500mm shaft diameter",
      widths: "4mm to 20mm seal width",
      materials: ["NBR (Nitrile)", "FKM (Viton)", "ACM (Polyacrylate)", "Silicone (VMQ)", "Polyurethane"],
      designs: ["Single Lip", "Double Lip", "Spring Loaded", "Metal Case", "Rubber Covered"],
      standards: ["ISO 6194", "DIN 3760", "SAE J946", "JIS B 2402"],
      tolerance: "ISO h9 shaft tolerance recommended"
    },

    applications: [
      "Automotive transmissions and gearboxes",
      "Engine crankshafts and camshafts",
      "Industrial gearboxes and reducers",
      "Electric motors and generators",
      "Agricultural machinery and equipment",
      "Construction equipment",
      "Marine propulsion systems",
      "Pumps and compressors"
    ],

    benefits: [
      "Extended bearing and component life",
      "Reduced maintenance costs and downtime",
      "Improved equipment reliability",
      "Excellent wear and abrasion resistance",
      "Custom designs for specific applications",
      "Quick delivery from extensive inventory"
    ],

    designTypes: [
      {
        type: "Single Lip Seal",
        description: "Basic design for general purpose applications",
        features: ["Single sealing lip", "Cost-effective", "Standard applications"],
        applications: "Electric motors, light-duty gearboxes"
      },
      {
        type: "Double Lip Seal",
        description: "Enhanced protection with auxiliary dust lip",
        features: ["Primary sealing lip", "Secondary dust lip", "Extra contamination protection"],
        applications: "Construction equipment, agricultural machinery"
      },
      {
        type: "Spring Loaded Seal",
        description: "Positive sealing with garter spring",
        features: ["Constant lip pressure", "Excellent sealing at low pressures", "Wide temperature range"],
        applications: "Automotive transmissions, industrial gearboxes"
      },
      {
        type: "Metal Case Seal",
        description: "Rigid construction for precise fitment",
        features: ["Metal outer case", "Excellent dimensional stability", "High pressure capability"],
        applications: "Heavy-duty industrial applications"
      }
    ],

    materialProperties: [
      {
        material: "NBR (Nitrile)",
        tempRange: "-40°C to 120°C",
        features: "Excellent oil and fuel resistance, good abrasion resistance",
        applications: "Automotive, general industrial applications"
      },
      {
        material: "FKM (Viton)",
        tempRange: "-20°C to 200°C",
        features: "Superior chemical and heat resistance",
        applications: "High-temperature, chemical exposure applications"
      },
      {
        material: "ACM (Polyacrylate)",
        tempRange: "-30°C to 150°C",
        features: "Excellent heat aging resistance, good oil resistance",
        applications: "Automotive transmissions, engine applications"
      },
      {
        material: "Silicone (VMQ)",
        tempRange: "-60°C to 200°C",
        features: "Wide temperature range, food-grade options",
        applications: "Food processing, medical equipment"
      }
    ],

    qualityAssurance: [
      "100% dimensional inspection",
      "Material certification available",
      "Lip pressure testing",
      "Surface finish verification",
      "ISO 9001:2015 certified processes",
      "Batch traceability maintained"
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
        <section className="relative py-8 md:py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center"
    >
      {/* Image Gallery */}
      <motion.div variants={itemVariants} className="space-y-3 md:space-y-4">
        <motion.div
          variants={imageVariants}
          className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl bg-white p-3 md:p-4"
        >
          <img
            src={product.images[selectedImage]}
            alt={product.name}
            className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-xl md:rounded-2xl"
          />
          <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 bg-black/70 text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm backdrop-blur-sm">
            {selectedImage + 1}/{product.images.length}
          </div>
        </motion.div>
        
        <div className="flex gap-2 md:gap-4">
          {product.images.map((image, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedImage(index)}
              className={`flex-1 h-16 md:h-20 lg:h-24 rounded-lg md:rounded-xl overflow-hidden border-2 transition-all ${
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
      <motion.div variants={itemVariants} className="space-y-4 md:space-y-6">
        <div>
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-block px-3 py-1 md:px-4 md:py-2 bg-blue-100 text-blue-800 text-xs md:text-sm font-semibold rounded-full mb-3 md:mb-4"
          >
            Precision Sealing Solutions
          </motion.span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            {product.name}
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {product.features.slice(0, 4).map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02, y: -2 }}
              className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-white rounded-lg md:rounded-xl shadow-sm border border-gray-100"
            >
              <div className="p-1 md:p-2 bg-blue-100 rounded-md md:rounded-lg">
                <feature.icon className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 text-xs md:text-sm">{feature.title}</h3>
                <p className="text-xs text-gray-600 leading-tight">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowInquiryModal(true)}
            className="flex-1 px-4 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
          >
            <MessageCircle className="h-4 w-4 md:h-5 md:w-5" />
            Request Quote
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-3 md:px-8 md:py-4 bg-white text-gray-700 font-semibold rounded-lg md:rounded-xl border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
          >
            <Download className="h-4 w-4 md:h-5 md:w-5" />
            Technical Catalog
          </motion.button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 md:gap-4 pt-4 md:pt-6">
          {[
            { icon: Clock, value: "24h", label: "Sample Delivery" },
            { icon: Shield, value: "ISO", label: "Certified" },
            { icon: Package, value: "500+", label: "Sizes Available" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-2 md:p-3 bg-white rounded-lg md:rounded-xl shadow-sm"
            >
              <stat.icon className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-blue-600 mx-auto mb-1 md:mb-2" />
              <div className="font-bold text-gray-900 text-sm md:text-base">{stat.value}</div>
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
                    {product.fullDescription} Our oil seals are manufactured using state-of-the-art 
                    compression molding and precision machining techniques, ensuring consistent quality 
                    and dimensional accuracy across all production batches.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    With over 30 years of expertise in sealing technology, Uni-Tech Auto International 
                    delivers oil seals that meet and exceed international standards for performance and 
                    reliability in the most demanding rotating shaft applications.
                  </p>
                </motion.div>

                {/* Design Types */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Seal Design Types</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {product.designTypes.map((design, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ y: -5 }}
                        className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
                      >
                        <h3 className="font-bold text-lg text-gray-900 mb-2">{design.type}</h3>
                        <p className="text-gray-600 text-sm mb-3">{design.description}</p>
                        <div className="space-y-2">
                          {design.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span className="text-sm text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-3 pt-3 border-t border-gray-200">
                          <span className="text-xs font-medium text-gray-500">Applications: {design.applications}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
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
                        <h3 className="font-semibold text-gray-900 mb-3">Dimensions & Standards</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between py-2 border-b border-gray-200">
                            <span className="text-gray-600">Shaft Diameter Range</span>
                            <span className="font-semibold">{product.specifications.sizes}</span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-200">
                            <span className="text-gray-600">Seal Width Range</span>
                            <span className="font-semibold">{product.specifications.widths}</span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-200">
                            <span className="text-gray-600">Shaft Tolerance</span>
                            <span className="font-semibold">{product.specifications.tolerance}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3">Materials & Designs</h3>
                        <div className="space-y-4">
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
                            <h4 className="text-sm font-medium text-gray-700">Seal Designs:</h4>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {product.specifications.designs.map((design, index) => (
                                <span key={index} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                                  {design}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-700">International Standards:</h4>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {product.specifications.standards.map((standard, index) => (
                                <span key={index} className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
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
                  <h3 className="font-bold text-xl mb-4">Common Applications</h3>
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
                Ready to Order Your Premium Oil Seals?
              </h2>
              <p className="text-xl text-blue-200 mb-8">
                Contact our experts today for customized solutions and competitive pricing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowInquiryModal(true)}
                  className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Get Instant Quote
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
          <p className="text-blue-100">Our team will contact you within 2 hours</p>
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
                placeholder="e.g., 1000 pieces/month"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Application</label>
              <input
                type="text"
                name="application"
                value={formData.application}
                onChange={onChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="How will you use the oil seals?"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Specific Requirements</label>
            <textarea
              name="specifications"
              value={formData.specifications}
              onChange={onChange}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
              placeholder="Shaft diameter, material, design type, or other specifications..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Additional Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={onChange}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
              placeholder="Any other information we should know..."
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Send className="h-5 w-5" />
            Send Inquiry
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ProductOilSeals;