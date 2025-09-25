import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Uni-Tech International
                </h3>
                <p className="text-blue-200 text-sm">ISO 9001:2015 Certified</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Since 1995, Unitech Auto Products has been at the forefront of rubber manufacturing 
              excellence. We deliver precision-engineered automotive rubber products that meet 
              international quality standards and exceed customer expectations.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="bg-white/10 hover:bg-blue-600 rounded-full p-3 transition-colors duration-300 backdrop-blur-sm"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['About Us', 'Our Products', 'Quality Assurance', 'Certifications', 'Gallery', 'Blogs'].map((item) => (
                <li key={item}>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300">Your Company Address Here, City, State, PIN Code</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <a href="tel:+911234567890" className="text-gray-300 hover:text-white transition-colors">
                  +91 123 456 7890
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <a href="mailto:info@unitechautoproducts.com" className="text-gray-300 hover:text-white transition-colors">
                  info@unitechautoproducts.com
                </a>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="mt-8">
              <h5 className="font-semibold mb-3">Stay Updated</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-white/10 border border-blue-500/30 rounded-l-lg focus:outline-none focus:border-blue-400"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg font-medium transition-colors"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm mb-4 md:mb-0"
            >
              © {currentYear} Uni-Tech International. All rights reserved.
            </motion.p>
            <div className="flex space-x-6">
              {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item) => (
                <motion.a
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;