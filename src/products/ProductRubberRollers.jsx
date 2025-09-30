// ProductRubberRollers.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, ChevronRight, CheckCircle, Shield, Zap, Thermometer,
  Droplets, Factory, Clock, Send, X, Download, MessageCircle,
  Star, RefreshCw, Package, Truck, Phone, Mail
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Images - adjust filenames if yours differ
import rollerImage1 from '../assets/rubber-rollers.jpg';
import rollerImage2 from '../assets/rubber-rollers-2.jpg';

const ProductRubberRollers = () => {
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
    name: "Industrial Rubber Rollers",
    shortName: "Rubber Rollers",
    description: "High-performance rubber rollers engineered for printing, packaging, textile and general industrial applications.",
    fullDescription:
      "Our rubber rollers are precision manufactured for balance, durability and long service life. Available in multiple compounds and hardness ranges to suit a wide variety of processes — from soft nip rollers for delicate substrates to hard, wear-resistant rollers for heavy-duty conveying.",
    images: [rollerImage1, rollerImage2],
    features: [
      { icon: RefreshCw, title: "Balanced Rotation", desc: "Dynamic balancing for smooth, vibration-free operation" },
      { icon: Thermometer, title: "Custom Hardness", desc: "Available 20–90 Shore A depending on application" },
      { icon: Droplets, title: "Wear Resistant", desc: "Formulations for abrasion and chemical resistance" },
      { icon: Zap, title: "Precision Finish", desc: "Surface finishes from matte to chrome-plated options" }
    ],
    specifications: {
      diameters: "10mm to 300mm (standard) — custom on request",
      lengths: "Up to 3000mm and beyond with splice/joint options",
      hardnessRange: "20 to 90 Shore A",
      materials: ["Nitrile (NBR)", "EPDM", "Silicone (VMQ)", "Polyurethane (PU)", "Viton (FKM)"],
      balancing: "Static and dynamic balancing available",
      tolerances: "Diameter ±0.05mm / Runout as specified"
    },
    applications: [
      "Printing press feed rollers",
      "Laminating & coating lines",
      "Textile processing",
      "Conveyor systems",
      "Packaging machines",
      "Paper & board handling"
    ],
    benefits: [
      "Reduced downtime due to longer wear life",
      "Improved print quality and substrate handling",
      "Custom hardness and compound selection",
      "Precise concentricity and balance",
      "Surface coatings and chrome plating options"
    ],
    materialProperties: [
      {
        material: "NBR (Nitrile)",
        tempRange: "-40°C to 120°C",
        features: "Good oil and abrasion resistance",
        applications: "General industrial, printing where oil exposure occurs"
      },
      {
        material: "EPDM",
        tempRange: "-50°C to 150°C",
        features: "Excellent weather/ozone/heat resistance",
        applications: "Outdoor conveyors, weather-exposed processes"
      },
      {
        material: "Silicone (VMQ)",
        tempRange: "-60°C to 230°C",
        features: "High temperature stability, non-stick surface options",
        applications: "Food-grade lines, high-temp laminating"
      },
      {
        material: "Polyurethane (PU)",
        tempRange: "-30°C to 80°C",
        features: "Outstanding abrasion & tear resistance",
        applications: "High-wear applications, conveyor rollers"
      }
    ],
    qualityAssurance: [
      "Dynamic balancing to customer spec",
      "Hardness testing per batch",
      "Dimensional inspection",
      "Material certificates on request",
      "ISO 9001:2015 compliant processes"
    ]
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    // Replace with your submit logic (API call / email)
    console.log('Rubber Roller inquiry submitted:', inquiryForm);
    setShowInquiryModal(false);
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

  // Animation variants (kept simple and consistent with your O-ring page)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 120, damping: 14 } }
  };

  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 90, damping: 14 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />

      {/* Back Navigation */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button onClick={() => navigate(-1)} className="flex items-center text-gray-600 hover:text-blue-600 transition-colors group">
            <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Products
          </button>
        </div>
      </motion.div>

      <main>
        {/* Product Hero */}
        <section className="relative py-8 md:py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <motion.div 
      variants={containerVariants} 
      initial="hidden" 
      animate="visible" 
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start"
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
          {product.images.map((image, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelectedImage(idx)}
              className={`flex-1 h-16 md:h-20 lg:h-24 rounded-lg md:rounded-xl overflow-hidden border-2 transition-all ${selectedImage === idx ? 'border-blue-500 shadow-lg' : 'border-gray-200'}`}
            >
              <img src={image} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
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
            transition={{ delay: 0.2 }} 
            className="inline-block px-3 py-1 md:px-4 md:py-2 bg-blue-100 text-blue-800 text-xs md:text-sm font-semibold rounded-full mb-3 md:mb-4"
          >
            Precision Industrial Rollers
          </motion.span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 md:mb-4">{product.name}</h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">{product.description}</p>
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

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }} 
            onClick={() => setShowInquiryModal(true)} 
            className="flex-1 px-4 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
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
            Brochure
          </motion.button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 md:gap-4 pt-4 md:pt-6">
          {[
            { icon: Clock, value: "7-14d", label: "Lead Time" },
            { icon: Shield, value: "ISO", label: "Certified" },
            { icon: Package, value: "Custom", label: "Sizes & Coatings" }
          ].map((stat, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ scale: 1.03 }} 
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

        {/* Detailed Sections */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main content */}
              <div className="lg:col-span-2 space-y-12">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="prose prose-lg max-w-none">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Product Overview</h2>
                  <p className="text-gray-700 leading-relaxed">{product.fullDescription}</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3">Dimensions & Tolerances</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between py-2 border-b border-gray-200">
                            <span className="text-gray-600">Diameter Range</span>
                            <span className="font-semibold">{product.specifications.diameters}</span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-200">
                            <span className="text-gray-600">Length Range</span>
                            <span className="font-semibold">{product.specifications.lengths}</span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-200">
                            <span className="text-gray-600">Hardness</span>
                            <span className="font-semibold">{product.specifications.hardnessRange}</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3">Materials & Balancing</h3>
                        <div className="space-y-3">
                          <div>
                            <h4 className="text-sm font-medium text-gray-700">Materials</h4>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {product.specifications.materials.map((m, i) => (
                                <span key={i} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">{m}</span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-700">Balancing</h4>
                            <div className="mt-1 text-sm text-gray-600">{product.specifications.balancing}</div>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-700">Tolerances</h4>
                            <div className="mt-1 text-sm text-gray-600">{product.specifications.tolerances}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Material Properties</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {product.materialProperties.map((mat, i) => (
                      <motion.div key={i} whileHover={{ y: -4 }} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="font-bold text-lg text-gray-900 mb-3">{mat.material}</h3>
                        <div className="space-y-2 text-sm text-gray-700">
                          <div className="flex items-center gap-2">
                            <Thermometer className="h-4 w-4 text-blue-600" />
                            <span>Temperature: {mat.tempRange}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Shield className="h-4 w-4 text-green-600" />
                            <span>{mat.features}</span>
                          </div>
                          <div className="mt-2"><strong>Applications:</strong> {mat.applications}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-blue-600 to-teal-500 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-xl mb-4">Common Applications</h3>
                  <ul className="space-y-2">
                    {product.applications.slice(0, 6).map((app, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-white flex-shrink-0" />
                        <span className="text-sm">{app}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                  <h3 className="font-bold text-xl text-gray-900 mb-4">Key Benefits</h3>
                  <ul className="space-y-3">
                    {product.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Star className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-gray-900 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-xl mb-4">Quality Assurance</h3>
                  <ul className="space-y-2 text-sm">
                    {product.qualityAssurance.map((q, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <Shield className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-blue-900">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Order Custom Rubber Rollers?</h2>
              <p className="text-xl text-blue-200 mb-8">Contact our engineering team for hardness selection, coatings, balancing and precise quotes.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setShowInquiryModal(true)} className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Get Instant Quote
                </motion.button>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
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
          <InquiryModal product={product} formData={inquiryForm} onChange={handleInputChange} onSubmit={handleInquirySubmit} onClose={() => setShowInquiryModal(false)} />
        )}
      </AnimatePresence>
    </div>
  );
};

const InquiryModal = ({ product, formData, onChange, onSubmit, onClose }) => {
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 25 } },
    exit: { opacity: 0, scale: 0.95, y: -20, transition: { duration: 0.25 } }
  };

  return (
    <motion.div initial="hidden" animate="visible" exit="exit" variants={modalVariants} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <motion.div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-t-3xl p-6 text-white">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold">Inquiry for {product.name}</h3>
            <button onClick={onClose} className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
              <X className="h-5 w-5" />
            </button>
          </div>
          <p className="text-blue-100">Our team will contact you with a quote and lead time.</p>
        </div>

        <form onSubmit={onSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
              <input type="text" name="name" value={formData.name} onChange={onChange} required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="Your full name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
              <input type="email" name="email" value={formData.email} onChange={onChange} required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="your.email@company.com" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
              <input type="text" name="company" value={formData.company} onChange={onChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="Your company name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
              <input type="tel" name="phone" value={formData.phone} onChange={onChange} required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="+91 XXX XXX XXXX" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Estimated Quantity</label>
              <input type="text" name="quantity" value={formData.quantity} onChange={onChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="e.g., 500 pieces/month" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Application</label>
              <input type="text" name="application" value={formData.application} onChange={onChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="Printing / Conveyor / Textile / etc." />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Specific Requirements</label>
            <textarea name="specifications" value={formData.specifications} onChange={onChange} rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none" placeholder="Diameter, length, hardness, coating, balancing specs..." />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Additional Message</label>
            <textarea name="message" value={formData.message} onChange={onChange} rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none" placeholder="Any other information..." />
          </div>

          <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2">
            <Send className="h-5 w-5" />
            Send Inquiry
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ProductRubberRollers;
