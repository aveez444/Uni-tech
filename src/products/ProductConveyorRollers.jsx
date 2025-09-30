// ProductConveyorRollers.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, ChevronRight, CheckCircle, Shield, Zap, Thermometer, 
  Droplets, Factory, Clock, Send, X, Download, MessageCircle,
  Star, Target, Users, Award, Package, Truck, Phone, Mail,
  RotateCcw, Settings, Gauge, HardHat, Warehouse, Cog
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Import images - you'll need to add these to your assets folder
import conveyorRoller1 from '../assets/conveyor-roller-1.jpg';
import conveyorRoller2 from '../assets/conveyor-roller-2.jpg';
import conveyorRoller3 from '../assets/conveyor-roller-3.jpg';
import apolloBearing from '../assets/apollo-bearing.jpg';

const ProductConveyorRollers = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [activeTab, setActiveTab] = useState('belt');
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    quantity: '',
    application: '',
    conveyorType: '',
    rollerSize: '',
    specifications: '',
    message: ''
  });

  const productCategories = {
    belt: {
      name: "Belt Conveyor Rollers",
      description: "Heavy-duty rollers designed for belt conveyor systems in various industrial applications.",
      features: [
        { icon: Shield, title: "High Load Capacity", desc: "Designed to handle heavy loads up to 5000kg" },
        { icon: RotateCcw, title: "Smooth Rotation", desc: "Precision bearings for frictionless operation" },
        { icon: Gauge, title: "Precision Balanced", desc: "Dynamically balanced for vibration-free operation" },
        { icon: Droplets, title: "Corrosion Resistant", desc: "Various coatings available for harsh environments" }
      ]
    },
    apollo: {
      name: "Apollo Bearings Conveyor Rollers",
      description: "Premium rollers with Apollo bearings for superior performance and extended service life.",
      features: [
        { icon: Award, title: "Premium Bearings", desc: "Apollo sealed bearings for extended lifespan" },
        { icon: Settings, title: "Low Maintenance", desc: "Sealed design reduces maintenance requirements" },
        { icon: Zap, title: "High Speed", desc: "Suitable for high-speed conveyor applications" },
        { icon: Thermometer, title: "Temperature Resistant", desc: "Operates in -20°C to 120°C range" }
      ]
    }
  };

  const product = {
    name: "Industrial Conveyor Rollers",
    shortName: "Conveyor Rollers",
    description: "High-performance conveyor rollers engineered for reliable material handling in demanding industrial environments.",
    fullDescription: "Uni-Tech Auto International's conveyor rollers are manufactured to withstand the toughest industrial conditions. Our rollers feature precision engineering, durable materials, and advanced bearing technology to ensure smooth operation and extended service life in various material handling applications.",
    
    images: [conveyorRoller1, conveyorRoller2, conveyorRoller3, apolloBearing],
    
    specifications: {
      diameters: "50mm to 300mm",
      lengths: "200mm to 2000mm",
      loadCapacity: "Up to 5000kg per roller",
      speedRating: "Up to 4 m/s",
      materials: ["Mild Steel", "Stainless Steel 304/316", "Galvanized Steel", "Plastic (Nylon, UHMW)"],
      bearingTypes: ["Apollo Sealed Bearings", "Double Sealed Ball Bearings", "Precision Roller Bearings", "Sleeve Bearings"],
      surfaceTreatments: ["Zinc Plated", "Powder Coated", "PVC Coated", "Rubber Coated"]
    },

    applications: [
      "Warehouse and distribution centers",
      "Manufacturing and assembly lines",
      "Mining and quarry operations",
      "Food processing plants",
      "Airport baggage handling",
      "Port and terminal operations",
      "Recycling facilities",
      "Packaging industries"
    ],

    benefits: [
      "Reduced operational downtime",
      "Lower maintenance costs",
      "Increased conveyor efficiency",
      "Extended service life",
      "Custom sizes and specifications",
      "Quick replacement availability"
    ],

    types: [
      {
        type: "Belt Conveyor Rollers",
        description: "Standard rollers for belt conveyor systems",
        features: ["Heavy-duty construction", "Various diameters available", "Multiple surface options"],
        applications: "General material handling, mining, manufacturing"
      },
      {
        type: "Gravity Rollers",
        description: "Non-powered rollers for gravity conveyors",
        features: ["Cost-effective", "Easy installation", "Low maintenance"],
        applications: "Warehousing, packaging lines, distribution centers"
      },
      {
        type: "Powered Rollers",
        description: "Motorized rollers with built-in drive",
        features: ["Compact design", "Energy efficient", "Quiet operation"],
        applications: "Sortation systems, automated warehouses"
      },
      {
        type: "Impact Rollers",
        description: "Reinforced rollers for loading points",
        features: ["Shock absorbing", "Rubber coated", "Extended lifespan"],
        applications: "Loading zones, transfer points"
      }
    ],

    materialOptions: [
      {
        material: "Mild Steel",
        properties: "Economical, good strength",
        coating: "Zinc plating or powder coating",
        applications: "General industrial use"
      },
      {
        material: "Stainless Steel 304",
        properties: "Corrosion resistant, hygienic",
        coating: "Passivated finish",
        applications: "Food processing, chemical industries"
      },
      {
        material: "Stainless Steel 316",
        properties: "High corrosion resistance",
        coating: "Passivated finish",
        applications: "Marine, pharmaceutical applications"
      },
      {
        material: "Plastic (Nylon/UHMW)",
        properties: "Lightweight, corrosion proof",
        coating: "None required",
        applications: "Food grade, washdown areas"
      }
    ],

    qualityAssurance: [
      "100% dimensional inspection",
      "Bearing performance testing",
      "Load capacity verification",
      "Surface finish quality check",
      "ISO 9001:2015 certified manufacturing",
      "Material certification available"
    ],

    apolloFeatures: [
      "Advanced sealing technology",
      "Extended lubrication intervals",
      "High temperature tolerance",
      "Contamination protection",
      "Reduced friction design",
      "Longer service life"
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
      conveyorType: '',
      rollerSize: '',
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
            Material Handling Solutions
          </motion.span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            {product.name}
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="bg-white rounded-lg md:rounded-xl p-2 shadow-sm border border-gray-200">
          <div className="flex space-x-2">
            {Object.entries(productCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex-1 py-2 md:py-3 px-3 md:px-4 rounded-lg text-center transition-all text-xs md:text-sm ${
                  activeTab === key
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <span className="font-semibold">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Features based on active tab */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {productCategories[activeTab].features.map((feature, index) => (
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
            Technical Specs
          </motion.button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 md:gap-4 pt-4 md:pt-6">
          {[
            { icon: Clock, value: "72h", label: "Sample Delivery" },
            { icon: Shield, value: "ISO", label: "Certified" },
            { icon: Package, value: "500+", label: "Variants" }
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
                    {product.fullDescription} Our conveyor rollers are manufactured using advanced 
                    production techniques and quality materials to ensure reliable performance in 
                    the most demanding material handling applications.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    With extensive experience in industrial components manufacturing, Uni-Tech Auto 
                    International provides conveyor rollers that meet international standards for 
                    durability, performance, and safety across various industries.
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
                        <h3 className="font-semibold text-gray-900 mb-3">Dimensions & Capacity</h3>
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
                            <span className="text-gray-600">Load Capacity</span>
                            <span className="font-semibold">{product.specifications.loadCapacity}</span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-200">
                            <span className="text-gray-600">Speed Rating</span>
                            <span className="font-semibold">{product.specifications.speedRating}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3">Materials & Options</h3>
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
                            <h4 className="text-sm font-medium text-gray-700">Bearing Types:</h4>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {product.specifications.bearingTypes.map((bearing, index) => (
                                <span key={index} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                                  {bearing}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-700">Surface Treatments:</h4>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {product.specifications.surfaceTreatments.map((treatment, index) => (
                                <span key={index} className="px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full">
                                  {treatment}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Roller Types */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Available Roller Types</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {product.types.map((type, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ y: -5 }}
                        className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <h3 className="font-bold text-lg text-gray-900 mb-3">{type.type}</h3>
                        <p className="text-gray-600 text-sm mb-4">{type.description}</p>
                        <div className="space-y-2 mb-4">
                          <h4 className="font-semibold text-gray-900 text-sm">Key Features:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {type.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                <CheckCircle className="h-3 w-3 text-green-500" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="text-sm text-gray-700">
                          <strong>Applications:</strong> {type.applications}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Apollo Bearings Special Section */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <Award className="h-8 w-8 text-blue-600" />
                    <h2 className="text-2xl font-bold text-gray-900">Apollo Bearings Advantage</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-4">Premium Features</h3>
                      <ul className="space-y-3">
                        {product.apolloFeatures.map((feature, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <div className="p-1 bg-blue-100 rounded-full">
                              <CheckCircle className="h-4 w-4 text-blue-600" />
                            </div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-4">Performance Benefits</h3>
                      <div className="space-y-4">
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-700">Service Life</span>
                            <span className="text-lg font-bold text-green-600">+40%</span>
                          </div>
                          <p className="text-xs text-gray-600">Extended operational lifespan compared to standard bearings</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-700">Maintenance Interval</span>
                            <span className="text-lg font-bold text-green-600">+60%</span>
                          </div>
                          <p className="text-xs text-gray-600">Longer intervals between lubrication and maintenance</p>
                        </div>
                      </div>
                    </div>
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
                  <h3 className="font-bold text-xl mb-4">Industrial Applications</h3>
                  <ul className="space-y-2">
                    {product.applications.slice(0, 6).map((app, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Factory className="h-4 w-4 text-green-300 flex-shrink-0" />
                        <span className="text-sm">{app}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Material Options */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
                >
                  <h3 className="font-bold text-xl text-gray-900 mb-4">Material Options</h3>
                  <div className="space-y-4">
                    {product.materialOptions.map((material, index) => (
                      <div key={index} className="border-l-4 border-blue-500 pl-3">
                        <h4 className="font-semibold text-gray-900 text-sm">{material.material}</h4>
                        <p className="text-xs text-gray-600 mt-1">{material.properties}</p>
                        <p className="text-xs text-gray-500 mt-1">{material.applications}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Benefits */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
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
                  transition={{ delay: 0.4 }}
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
                Need Custom Conveyor Rollers?
              </h2>
              <p className="text-xl text-blue-200 mb-8">
                Get expert consultation and competitive pricing for your specific requirements.
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
                placeholder="e.g., 100 pieces/month"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Conveyor Type</label>
              <select
                name="conveyorType"
                value={formData.conveyorType}
                onChange={onChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              >
                <option value="">Select conveyor type</option>
                <option value="Belt Conveyor">Belt Conveyor</option>
                <option value="Roller Conveyor">Roller Conveyor</option>
                <option value="Gravity Conveyor">Gravity Conveyor</option>
                <option value="Powered Roller">Powered Roller</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Roller Size Required</label>
              <input
                type="text"
                name="rollerSize"
                value={formData.rollerSize}
                onChange={onChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="e.g., 50mm x 300mm"
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
                placeholder="e.g., Mining conveyor system"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Special Requirements</label>
            <textarea
              name="specifications"
              value={formData.specifications}
              onChange={onChange}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="Any special material, coating, or bearing requirements..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Additional Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={onChange}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="Any additional information or questions..."
            />
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 px-6 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <Send className="h-5 w-5" />
              Submit Inquiry
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-4 bg-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ProductConveyorRollers;