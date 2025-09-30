import { useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion, useInView } from 'framer-motion';
import { 
  MapPin, Phone, Mail, Send, Clock, MessageCircle, 
  Star, CheckCircle, ArrowRight, Sparkles, Users,
  Building, Globe, Award, Heart
} from 'lucide-react';

// Import images
import contactHero from '../assets/contactus.jpg';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, margin: "-100px" });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: "36/2, Dhandekar Industrial Estate, Kondhwa, Yewalewadi, Pune, Maharashtra - 411048, India",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91-8999037958\n+91-9326909677",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "export@oringandseal.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Sat: 9:00 AM - 6:00 PM\nSunday: Closed",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const features = [
    {
      icon: Users,
      title: "Expert Support",
      description: "Our technical experts are ready to assist you with any queries"
    },
    {
      icon: Award,
      title: "Quality Guarantee",
      description: "30+ years of excellence in automotive rubber technology"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving clients across 20+ countries worldwide"
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Your satisfaction is our top priority"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50/30 to-gray-100/50 overflow-hidden">
    <Navbar />
    
    <main className="relative overflow-hidden">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-20 md:pt-0 py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-900/90 z-10"></div>
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${contactHero})` }}
        ></div>
        
        {/* Animated Background Elements - Smaller on mobile */}
        <div className="absolute top-10 left-4 w-48 h-48 md:top-20 md:left-10 md:w-72 md:h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-4 w-64 h-64 md:bottom-20 md:right-10 md:w-96 md:h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto w-full text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-white/20 backdrop-blur-md text-white rounded-xl md:rounded-2xl text-xs md:text-sm font-semibold border border-white/30 shadow-lg"
            >
              <Sparkles className="h-4 w-4 md:h-5 md:w-5" />
              <span>Get in Touch • Start a Partnership</span>
            </motion.div>
  
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"> 
              <span className="block bg-gradient-to-r from-white to-white bg-clip-text text-transparent">
                Let's Build
              </span>
              <span className="block bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent"> 
                Together 
              </span> 
            </h1>
  
            <div className="space-y-4 md:space-y-6 max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
                Ready to discuss your automotive rubber component needs? Our team of experts is here 
                to provide personalized solutions and technical support. Reach out today and discover 
                the Uni-Tech difference.
              </p>
              
              <div className="bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20">
                <p className="text-base md:text-lg text-white font-medium">
                  "Partnerships built on trust, quality, and innovation since 1995"
                </p>
              </div>
            </div>
  
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-4 md:pt-6"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-2 justify-center text-sm md:text-base"
              >
                <MessageCircle className="h-4 w-4 md:h-5 md:w-5" />
                Start Conversation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 md:px-8 md:py-4 bg-white/20 backdrop-blur-md text-white font-semibold rounded-xl md:rounded-2xl border-2 border-white/30 hover:border-cyan-300 transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base"
              >
                Request Quote
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

        {/* Contact Information Cards */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-20 relative z-30"
            >
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-2xl p-6 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-300"
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${item.color} w-fit mb-4`}>
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm whitespace-pre-line">{item.details}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Contact Form */}
              <motion.div
                ref={formRef}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Send Us a Message
                  </h2>
                  <p className="text-lg text-gray-600">
                    Have questions about our products or services? Fill out the form below and our team 
                    will get back to you within 24 hours.
                  </p>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
                  >
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-900 mb-2">Message Sent Successfully!</h3>
                    <p className="text-green-700">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="Your Name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="+91 XXX XXX XXXX"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="What is this regarding?"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Tell us about your project or inquiry..."
                      ></textarea>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </form>
                )}

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 shadow-sm"
                    >
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <feature.icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">{feature.title}</h4>
                        <p className="text-gray-600 text-xs">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Map and Additional Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
              {/* Interactive Map */}
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                <div className="relative h-80">
                    {/* Replace image with Google Maps Embed */}
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.141951041093!2d73.89070707519207!3d18.48329987004426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ea1dcb5b6b0d%3A0x6d06e8478f55f1f6!2sDhandekar%20Industrial%20Estate%2C%20Yewalewadi%2C%20Pune%2C%20Maharashtra%20411048!5e0!3m2!1sen!2sin!4v1695638990000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>

                    {/* Overlay title */}
                    <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-lg shadow-lg">
                    <h3 className="font-bold text-gray-900">Our Location</h3>
                    </div>
                </div>

                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Find Us Easily</h3>
                    <div className="space-y-3">
                    <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-blue-600" />
                        <span className="text-gray-600">
                        36/2, Dhandekar Industrial Estate, Kondhwa, Yewalewadi, Pune, Maharashtra - 411048
                        </span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-green-600" />
                        <span className="text-gray-600">Monday - Saturday: 9:00 AM - 6:00 PM</span>
                    </div>
                    </div>

                    {/* View Larger / Get Directions button */}
                    <motion.a
                    href="https://www.google.com/maps/place/Dhandekar+Industrial+Estate,+Yewalewadi,+Pune,+Maharashtra+411048"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full mt-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                    >
                    <ArrowRight className="h-4 w-4" />
                    View Larger Map
                    </motion.a>
                </div>
                </div>


                {/* Why Choose Us */}
                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Why Partner With Us?</h3>
                  <ul className="space-y-3">
                    {[
                      "30+ years of industry expertise",
                      "ISO-certified quality standards",
                      "Customized solutions for your needs",
                      "Global shipping and support",
                      "Competitive pricing and timely delivery"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Star className="h-5 w-5 text-yellow-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick Contact */}
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Prefer Direct Contact?</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Call Us Now</h4>
                      <div className="space-y-1">
                        <a href="tel:+918999037958" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                          <Phone className="h-4 w-4" />
                          +91-8999037958
                        </a>
                        <a href="tel:+919326909677" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                          <Phone className="h-4 w-4" />
                          +91-9326909677
                        </a>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Email Us</h4>
                      <a href="mailto:export@oringandseal.com" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                        <Mail className="h-4 w-4" />
                        export@oringandseal.com
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Ready to Start Your Project?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-blue-200 mb-8"
            >
              Let's discuss how our 30+ years of expertise can benefit your automotive component needs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                href="tel:+918999037958"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/20 backdrop-blur-md text-white font-semibold rounded-2xl border-2 border-white/30 hover:border-cyan-300 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Back to Top
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;