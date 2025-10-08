import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, Factory, Shield, Zap, Globe, Users, Award, Clock, Target, Flame, Phone, Mail, MapPin, Send, MessageCircle,
  CheckCircle, X, DollarSign, Palette, Star, ArrowRight, Anchor, Droplet, RefreshCw,
  Thermometer, Droplets, Shield as ShieldIcon, Zap as ZapIcon, Layers, Package, Square, Car,
  Sun, Fuel, Atom, Leaf 
} from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


// Import your images
import heroImage1 from '../assets/hero-1.jpg';
import heroImage2 from '../assets/hero-2.jpg';
import heroImage3 from '../assets/hero-3.jpg';
import heroImage4 from '../assets/hero-4.jpg';
import aboutImage from '../assets/about-image.jpg';
// Product images imports
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

const HomePage = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  // Hero Section Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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

  const featureVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        delay: 1
      }
    }
  };

  // About Section Animations
  const aboutContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const aboutItemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const imageVariants = {
    hidden: { x: 50, opacity: 0, scale: 0.8 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const statVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (custom) => ({
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15,
        delay: custom * 0.1
      }
    })
  };

  // Why Choose Us Section Animations
  const whyChooseUsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      y: 100, 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 50
    },
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
      transition: {
        duration: 0.3
      }
    }
  };

  // Why Choose Us Features Data
  const features = [
    {
      id: 1,
      icon: Palette,
      title: "Complete Customization",
      shortDesc: "Tailored solutions for unique requirements",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      borderColor: "border-purple-200",
      details: {
        title: "Bespoke Manufacturing Excellence",
        description: "We specialize in creating products that perfectly match your unique specifications. Our customization capabilities are unmatched in the industry.",
        points: [
          "Manufacture products as per desired sizes, designs and drawings",
          "Customization of products depending on customer specifications",
          "Flexible material selection including specialized rubber compounds",
          "Precision engineering for DESIGN, SHAPE, SIZE, and HARDNESS parameters",
          "Technical consultation for optimal product design",
          "Rapid prototyping and sample development"
        ],
        stats: [
          { value: "48h", label: "Prototype Turnaround" },
          { value: "1000+", label: "Custom Designs" },
          { value: "99%", label: "Spec Accuracy" }
        ]
      }
    },
    {
      id: 2,
      icon: Shield,
      title: "Quality Assurance",
      shortDesc: "Uncompromising precision and reliability",
      color: "from-green-500 to-teal-500",
      bgColor: "bg-gradient-to-br from-green-50 to-teal-50",
      borderColor: "border-green-200",
      details: {
        title: "Zero-Compromise Quality Standards",
        description: "Our rigorous quality control processes ensure every component meets the highest standards of precision and durability.",
        points: [
          "Strict quality control for achieving utmost precision",
          "ISO 9001:2015 certified manufacturing processes",
          "Advanced testing laboratories with cutting-edge equipment",
          "100% component inspection before dispatch",
          "Statistical process control for consistent quality",
          "Continuous improvement through quality audits"
        ],
        stats: [
          { value: "0.01%", label: "Defect Rate" },
          { value: "100%", label: "Quality Checks" },
          { value: "ISO", label: "Certified" }
        ]
      }
    },
    {
      id: 3,
      icon: Clock,
      title: "Delivery Compliance",
      shortDesc: "Timely solutions when you need them",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
      details: {
        title: "Reliable Supply Chain Excellence",
        description: "We understand that time is critical in the all industry. Our streamlined processes ensure you receive components exactly when needed.",
        points: [
          "Understanding value of time and striving for prompt deliveries",
          "Advanced production planning and scheduling",
          "Real-time order tracking and updates",
          "Multiple shipping options for urgent requirements",
          "Proactive communication for delivery timelines",
          "Emergency production capacity for critical needs"
        ],
        stats: [
          { value: "98%", label: "On-Time Delivery" },
          { value: "24/7", label: "Order Tracking" },
          { value: "2h", label: "Response Time" }
        ]
      }
    },
    {
      id: 4,
      icon: DollarSign,
      title: "Cost Effective",
      shortDesc: "Maximum value for your investment",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
      borderColor: "border-orange-200",
      details: {
        title: "Optimized Value Solutions",
        description: "We deliver exceptional quality at competitive prices, ensuring you get the best return on your investment without compromising on performance.",
        points: [
          "Providing products at excellent value proposition",
          "Lean manufacturing techniques to reduce waste",
          "Bulk production discounts and volume pricing",
          "Long-term partnership benefits",
          "Value engineering for cost optimization",
          "Transparent pricing with no hidden costs"
        ],
        stats: [
          { value: "15%", label: "Cost Savings" },
          { value: "ROI", label: "Focused" },
          { value: "0%", label: "Hidden Costs" }
        ]
      }
    },
    {
      id: 5,
      icon: Zap,
      title: "Innovation Driven",
      shortDesc: "Cutting-edge manufacturing technologies",
      color: "from-yellow-500 to-amber-500",
      bgColor: "bg-gradient-to-br from-yellow-50 to-amber-50",
      borderColor: "border-yellow-200",
      details: {
        title: "Pioneering Manufacturing Innovation",
        description: "We continuously invest in research and development to bring you the most advanced rubber component solutions in the market.",
        points: [
          "R&D center dedicated to rubber technology innovation",
          "Advanced CAD/CAM design capabilities",
          "Industry compliant manufacturing systems",
          "Sustainable and eco-friendly material development",
          "Patent-pending proprietary manufacturing techniques",
          "Continuous technology upgradation program"
        ],
        stats: [
          { value: "15+", label: "Patents" },
          { value: "R&D", label: "Center" },
          { value: "2024", label: "Tech Ready" }
        ]
      }
    },
    {
      id: 6,
      icon: Globe,
      title: "Global Standards",
      shortDesc: "World-class quality and compliance",
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-gradient-to-br from-indigo-50 to-purple-50",
      borderColor: "border-indigo-200",
      details: {
        title: "International Quality Compliance",
        description: "Our products meet and exceed global standards, making us the preferred choice for international manufacturers.",
        points: [
          "Compliance with international quality standards (ISO, ASTM)",
          "Global material certification and traceability",
          "Multi-national quality audit compliance",
          "Export packaging standards for international shipping",
          "Cultural and language support for global clients",
          "International logistics and customs expertise"
        ],
        stats: [
          { value: "50+", label: "Countries" },
          { value: "Global", label: "Standards" },
          { value: "24/7", label: "Support" }
        ]
      }
    }
  ];
// Products Data
const products = [
  // 1. Rubber O-Rings
  {
    id: 1,
    name: "Rubber O-Rings",
    image: oRingsImage,
    shortDesc: "Precision sealing solutions for various applications",
    gradient: "from-red-500 to-orange-500",
    icon: Target,
    features: ["Standard & Custom Sizes", "Temperature Resistant", "Chemical Compatible"],
    details: {
      title: "High-Performance Rubber O-Rings",
      description: "Our precision-engineered O-rings provide reliable sealing solutions for automotive, industrial, and hydraulic applications. Manufactured to exact specifications with superior elasticity and durability.",
      specifications: [
        "Available in various sizes from 1mm to 500mm diameter",
        "Thickness range: 0.5mm to 10mm",
        "Temperature range: -60°C to 300°C",
        "Pressure resistance up to 5000 PSI",
        "Multiple material options including NBR, EPDM, Silicone, Viton"
      ],
      applications: [
        "Hydraulic systems sealing",
        "Pneumatic equipment",
        "Automotive engines",
        "Industrial machinery",
        "Plumbing and fluid handling"
      ],
      benefits: [
        "Excellent compression set resistance",
        "Superior sealing performance",
        "Long service life",
        "Cost-effective solution"
      ]
    }
  },

  // 2. Rubber Gaskets
  {
    id: 6,
    name: "Lathe Cut Rubber Washerexport.unitech",
    image: rubberGasketsImage,
    shortDesc: "Sealing solutions for leak-proof performance",
    gradient: "from-pink-500 to-red-500",
    icon: Droplet,
    features: ["Leak Prevention", "Custom Sizes", "Wide Material Range"],
    details: {
      title: "Precision Rubber Gaskets",
      description: "Manufactured with precision to provide leak-proof sealing in static applications. Suitable for automotive, plumbing, and industrial uses.",
      specifications: [
        "Cut and molded gaskets available",
        "Thickness range: 0.5mm to 50mm",
        "Compatible with fluids, gases, and chemicals"
      ],
      applications: [
        "Pipe flanges",
        "Engine housings",
        "Industrial sealing applications"
      ],
      benefits: [
        "Excellent sealing reliability",
        "Resistance to extreme conditions",
        "Custom design options"
      ]
    }
  },

  // 3. Rubber Molded Parts
  {
    id: 4,
    name: "Rubber Molded Parts",
    image: moldedPartsImage,
    shortDesc: "Custom precision-molded rubber components",
    gradient: "from-purple-500 to-pink-500",
    icon: Package,
    features: ["Tailored Designs", "Multiple Compounds", "Tight Tolerances"],
    details: {
      title: "Custom Rubber Molded Parts",
      description: "We manufacture precision molded rubber components as per customer specifications. With advanced molding techniques, we deliver parts for critical applications in automotive and industrial sectors.",
      specifications: [
        "Compression, transfer, and injection molding",
        "Wide range of elastomers: NBR, EPDM, Silicone, Viton",
        "Tolerances as per ISO standards"
      ],
      applications: [
        "Automotive interiors and exteriors",
        "Industrial sealing components",
        "Medical and electrical equipment"
      ],
      benefits: [
        "Custom-designed for specific needs",
        "High durability and resilience",
        "Cost-effective manufacturing"
      ]
    }
  },

  // 4. Automotive Rubber Parts
  {
    id: 9,
    name: "Automotive Rubber Parts",
    image: automotivePartsImage,
    shortDesc: "Durable rubber parts for automotive applications",
    gradient: "from-gray-500 to-slate-500",
    icon: Car,
    features: ["OEM Standards", "High Strength", "Weather Resistant"],
    details: {
      title: "OEM Automotive Rubber Parts",
      description: "Engineered rubber parts that meet OEM quality standards, designed to perform in critical automotive environments.",
      specifications: [
        "Manufactured with automotive-grade elastomers",
        "High resistance to oil, heat, and weathering",
        "Available for multiple vehicle models"
      ],
      applications: [
        "Engine mounts",
        "Seals and gaskets",
        "Suspension bushings",
        "Interior & exterior trims"
      ],
      benefits: [
        "Improved vehicle performance",
        "Reliable long-term use",
        "Custom designs for specific models"
      ]
    }
  },

  // 5. Rubber Bellows
  {
    id: 3,
    name: "Rubber Bellows",
    image: rubberBellowsImage,
    shortDesc: "Flexible protection against dust, moisture, and vibration",
    gradient: "from-green-500 to-lime-500",
    icon: Layers,
    features: ["High Flexibility", "Weather Resistant", "Custom Shapes Available"],
    details: {
      title: "Durable Rubber Bellows",
      description: "Designed to protect moving mechanical parts from dust, dirt, and environmental exposure while allowing free movement. Ideal for automotive, industrial, and heavy-duty applications.",
      specifications: [
        "Available in round, square, and custom profiles",
        "Temperature range: -40°C to 200°C",
        "Material options: EPDM, Neoprene, Silicone",
        "UV and ozone resistant"
      ],
      applications: [
        "Steering systems",
        "Machine joints",
        "Hydraulic cylinders",
        "Automotive suspension systems"
      ],
      benefits: [
        "Enhanced part longevity",
        "Reliable dust & moisture protection",
        "High flexibility",
        "Cost-effective design options"
      ]
    }
  },

  // 6. Oil Seals
  {
    id: 2,
    name: "Oil Seals",
    image: oilSealsImage,
    shortDesc: "Advanced sealing technology for lubrication retention",
    gradient: "from-blue-500 to-cyan-500",
    icon: Shield,
    features: ["Dust & Fluid Protection", "High-Speed Compatible", "Extended Lifespan"],
    details: {
      title: "Premium Oil Seals & Radial Shaft Seals",
      description: "Engineered to retain lubricants and exclude contaminants in rotating shaft applications. Our oil seals offer superior performance in demanding industrial environments.",
      specifications: [
        "Sizes from 5mm to 500mm shaft diameter",
        "Various lip designs available",
        "Temperature range: -40°C to 200°C",
        "Speed capability up to 30 m/s",
        "Multiple spring configurations"
      ],
      applications: [
        "Automotive transmissions",
        "Engine crankshafts",
        "Industrial gearboxes",
        "Electric motors",
        "Agricultural equipment"
      ],
      benefits: [
        "Excellent wear resistance",
        "Contamination protection",
        "Easy installation",
        "Reduced maintenance costs"
      ]
    }
  },

  // 7. Rubber Profiles
  {
    id: 7,
    name: "Rubber Profiles",
    image: rubberProfileImage,
    shortDesc: "Extruded rubber profiles for sealing & insulation",
    gradient: "from-indigo-500 to-blue-500",
    icon: Square,
    features: ["Custom Extrusions", "UV Resistant", "Durable"],
    details: {
      title: "Extruded Rubber Profiles",
      description: "Our rubber profiles are manufactured using precision extrusion for sealing, insulation, and protection applications.",
      specifications: [
        "Available in solid and sponge types",
        "Continuous lengths or cut sizes",
        "Wide range of elastomers"
      ],
      applications: [
        "Door seals",
        "Window seals",
        "Electrical cabinet protection",
        "Automotive trims"
      ],
      benefits: [
        "Excellent weather resistance",
        "Durable and flexible",
        "Custom shapes available"
      ]
    }
  },

  // 8. Silicone Rubber Molded Parts
  {
    id: 10,
    name: "Silicone Rubber Molded Parts",
    image: siliconeRubberImage,
    shortDesc: "High-performance silicone components",
    gradient: "from-orange-500 to-pink-500",
    icon: Flame,
    features: ["Heat Resistant", "Biocompatible", "Flexible"],
    details: {
      title: "Premium Silicone Rubber Molded Parts",
      description: "Manufactured using high-grade silicone, these parts offer excellent thermal stability, flexibility, and resistance to chemicals and weathering.",
      specifications: [
        "Temperature range: -70°C to 300°C",
        "Excellent electrical insulation",
        "Custom molding options"
      ],
      applications: [
        "Medical devices",
        "Food processing equipment",
        "Automotive applications",
        "Electrical insulation components"
      ],
      benefits: [
        "Superior heat resistance",
        "Non-toxic and food grade options",
        "Long-lasting flexibility"
      ]
    }
  },

  // 9. Rubber Rollers
  {
    id: 8,
    name: "Rubber Rollers",
    image: rubberRollersImage,
    shortDesc: "High-performance rollers for industrial use",
    gradient: "from-teal-500 to-emerald-500",
    icon: RefreshCw,
    features: ["Wear Resistant", "Smooth Operation", "Custom Hardness"],
    details: {
      title: "Industrial Rubber Rollers",
      description: "We manufacture rubber rollers designed for printing, packaging, and industrial applications with high precision and durability.",
      specifications: [
        "Available in various diameters and lengths",
        "Hardness from 20 to 90 Shore A",
        "Balanced for smooth operation"
      ],
      applications: [
        "Printing machines",
        "Packaging equipment",
        "Textile machinery"
      ],
      benefits: [
        "Long-lasting performance",
        "Smooth and quiet operation",
        "Custom formulations available"
      ]
    }
  },

  // 10. Rubber to Metal Bonded Parts (rest)
  {
    id: 5,
    name: "Rubber to Metal Bonded Parts",
    image: metalBondedImage,
    shortDesc: "Strong bonding technology for vibration control",
    gradient: "from-yellow-500 to-orange-500",
    icon: Anchor,
    features: ["Vibration Damping", "High Strength Bond", "Corrosion Resistant"],
    details: {
      title: "Rubber to Metal Bonded Parts",
      description: "Specialized in bonding rubber with metal substrates for anti-vibration and sealing applications. These parts combine the flexibility of rubber with the strength of metal.",
      specifications: [
        "Custom bonding techniques",
        "High load-bearing capacity",
        "Corrosion-protected metal surfaces"
      ],
      applications: [
        "Engine mountings",
        "Shock absorbers",
        "Vibration dampers",
        "Industrial machinery supports"
      ],
      benefits: [
        "Enhanced vibration absorption",
        "Increased machinery lifespan",
        "Reliable bonding strength"
      ]
    }
  }
];



    // Elastomers Data
  const elastomers = [
    {
      id: 1,
      name: "NITRILE RUBBER",
      shortName: "NBR",
      icon: Fuel,
      gradient: "from-red-500 to-orange-500",
      bgGradient: "from-red-50 to-orange-50",
      description: "Excellent oil-resistant synthetic rubber perfect for fuel systems and industrial applications.",
      properties: ["Oil Resistant", "Fuel Resistant", "Abrasion Resistant", "Temperature: -40°C to 120°C"],
      applications: ["Fuel Hoses", "Gaskets", "Rollers", "O-Rings", "Seals"],

    },
    {
      id: 2,
      name: "EPDM RUBBER",
      shortName: "EPDM",
      icon: Sun,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      description: "Weather-resistant synthetic rubber ideal for outdoor and automotive applications.",
      properties: ["Weather Resistant", "Ozone Resistant", "Heat Resistant", "Temperature: -50°C to 150°C"],
      applications: ["Weather Seals", "Cooling System Parts", "Electrical Insulation", "Roofing Membranes"],
      
    },
    {
      id: 3,
      name: "NEOPRENE RUBBER",
      shortName: "CR",
      icon: ShieldIcon,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      description: "Versatile synthetic rubber with balanced properties for various industrial applications.",
      properties: ["Weather Resistant", "Chemical Resistant", "Flame Retardant", "Temperature: -50°C to 120°C"],
      applications: ["Gaskets", "Hoses", "Weather Stripping", "Vibration Dampers", "Wetsuits"],
     
    },
    {
      id: 4,
      name: "SBR RUBBER",
      shortName: "SBR",
      icon: ZapIcon,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      description: "General-purpose synthetic rubber with excellent abrasion resistance.",
      properties: ["Abrasion Resistant", "Aging Stable", "Cost Effective", "Temperature: -50°C to 100°C"],
      applications: ["Tires", "Footwear", "Conveyor Belts", "Flooring", "Mechanical Goods"],
     
    },
    {
      id: 5,
      name: "SILICON RUBBER",
      shortName: "VMQ",
      icon: Thermometer,
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-50 to-purple-50",
      description: "High-temperature resistant rubber perfect for medical and food applications.",
      properties: ["High Temp Resistant", "Biocompatible", "Flexible", "Temperature: -100°C to 300°C"],
      applications: ["Medical Devices", "Food Grade Seals", "High Temp Gaskets", "Baby Products"],
    
    },
    {
      id: 6,
      name: "VITON RUBBER",
      shortName: "FKM",
      icon: Atom,
      gradient: "from-gray-700 to-gray-900",
      bgGradient: "from-gray-100 to-gray-200",
      description: "High-performance fluoroelastomer for extreme chemical and temperature applications.",
      properties: ["Chemical Resistant", "High Temp", "Fuel Resistant", "Temperature: -20°C to 200°C"],
      applications: ["Aerospace Seals", "Chemical Processing", "Oil Field Equipment", "Automotive Fuels"],
     
    },
    {
      id: 7,
      name: "POLYURETHANE",
      shortName: "PU",
      icon: Zap,
      gradient: "from-amber-500 to-yellow-500",
      bgGradient: "from-amber-50 to-yellow-50",
      description: "High-performance synthetic rubber with exceptional toughness and durability.",
      properties: ["Abrasion Resistant", "Tear Resistant", "High Load Capacity", "Temperature: -50°C to 80°C"],
      applications: ["Wheels", "Rollers", "Seals", "Bushings", "Industrial Parts"],

    },
    {
      id: 8,
      name: "FLUOROSILICONE",
      shortName: "FVMQ",
      icon: Droplets,
      gradient: "from-teal-500 to-green-500",
      bgGradient: "from-teal-50 to-green-50",
      description: "Premium rubber combining silicone's temperature stability with chemical resistance.",
      properties: ["Fuel Resistant", "High Temp", "Chemical Resistant", "Temperature: -60°C to 200°C"],
      applications: ["Aerospace", "Automotive Fuels", "Chemical Processing", "Specialty Seals"],

    },
    {
      id: 9,
      name: "NATURAL RUBBER",
      shortName: "NR",
      icon: Leaf,
      gradient: "from-lime-500 to-green-500",
      bgGradient: "from-lime-50 to-green-50",
      description: "Classic rubber with excellent mechanical properties and resilience.",
      properties: ["High Elasticity", "Tear Resistant", "Impact Resistant", "Temperature: -20°C to 70°C"],
      applications: ["Tires", "Shock Absorbers", "Elastic Bands", "Medical Devices", "General Products"],

    }
  ];

  // Why Choose Us Component Function
  const WhyChooseUsSection = () => (
    <section id="why-choose-us" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-full mb-6 shadow-2xl"
          >
            Why Choose Us
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="block bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
              Excellence in Every
            </span>
            <span className="block bg-gradient-to-r from-blue-600 to-gray-900 bg-clip-text text-transparent">
              Component
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the unique advantages that make Uni-Tech International your trusted partner 
            for precision rubber components. Experience innovation, quality, and reliability like never before.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={whyChooseUsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedCard(feature)}
              className={`relative group cursor-pointer ${feature.bgColor} rounded-3xl p-8 border-2 ${feature.borderColor} shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden`}
            >
              {/* Animated Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Icon Container */}
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`relative z-10 inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} text-white shadow-lg mb-6`}
              >
                <feature.icon className="h-8 w-8" />
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.shortDesc}
                </p>
                
                {/* Animated CTA */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center text-blue-600 font-semibold group"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Star className="h-6 w-6 text-yellow-400" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Start Your Project With Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );

  // Products Section Component
const ProductsSection = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

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
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="products" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-900 to-blue-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute top-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-block px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-lg font-semibold rounded-full mb-6 shadow-2xl"
          >
            Our Products
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Precision Engineered
            </span>
            <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Rubber Solutions
            </span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of high-quality rubber components, each engineered to meet 
            the highest standards of performance, durability, and reliability for your specific applications.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedProduct(product)}
              className="group relative bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-2xl cursor-pointer overflow-hidden"
            >
              {/* Background Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Product Image */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative h-40 mb-4 rounded-2xl overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-xl bg-gradient-to-br ${product.gradient} text-white`}>
                    <product.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{product.name}</h3>
                </div>
                
                <p className="text-blue-200 text-sm mb-4 leading-relaxed">
                  {product.shortDesc}
                </p>

                {/* Features Tags */}
                <div className="flex flex-wrap gap-1">
                  {product.features.map((feature, idx) => (
                    <span key={idx} className="px-2 py-1 bg-white/20 text-white text-xs rounded-full backdrop-blur-sm">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-3xl transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductDetailModal 
            product={selectedProduct} 
            onClose={() => setSelectedProduct(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

  // Product Detail Modal Component
const ProductDetailModal = ({ product, onClose }) => {
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
        className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className={`relative p-8 bg-gradient-to-r ${product.gradient} rounded-t-3xl text-white`}>
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-2xl bg-white/20 backdrop-blur-sm">
              <product.icon className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-3xl font-bold">{product.details.title}</h3>
              <p className="text-white/80">{product.shortDesc}</p>
            </div>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative order-1 lg:order-1"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 sm:h-72 lg:h-80 object-cover rounded-2xl shadow-lg"
            />
          </motion.div>

          {/* Details Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6 order-2 lg:order-2"
          >
            {/* Description */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Description</h4>
              <p className="text-gray-700 leading-relaxed">{product.details.description}</p>
            </div>

            {/* Specifications */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Specifications</h4>
              <div className="space-y-2">
                {product.details.specifications.map((spec, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
          {/* Applications & Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h4 className="text-lg font-bold text-gray-900 mb-3">Applications</h4>
              <div className="flex flex-wrap gap-2">
                {product.details.applications.map((app, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                    {app}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h4 className="text-lg font-bold text-gray-900 mb-3">Key Benefits</h4>
              <div className="space-y-2">
                {product.details.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-amber-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 bg-gradient-to-r ${product.gradient} text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              Request Quote for {product.name}
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

  // Contact Section Component
const ContactSection = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    setShowSuccessModal(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-900 to-blue-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-gray-600/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-lg font-semibold rounded-full mb-6 shadow-2xl"
          >
            Let's Connect
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Get In Touch
            </span>
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              With Us Today
            </span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your project? Contact us for expert consultation and personalized solutions 
            tailored to your specific requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-white mb-8">Contact Information</h3>
            
            {/* Contact Items */}
            {[
              {
                icon: Phone,
                title: "Call Us",
                info: " +91-932 690 9677",
  
              },
              {
                icon: Mail,
                title: "Email Us",
                info: "expor@rubberoring.com",
                desc: "Send us your query anytime"
              },
              {
                icon: MapPin,
                title: "Visit Us",
                info: "Address: Sr. No. 32/3/4/1, near Advika society, Danny Mehta Nagar, Kondhwa ",
                desc: "Pune, Maharashtra, India"
              },
              {
                icon: MessageCircle,
                title: "Quick Response",
                info: "Guaranteed response time",
             
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="flex items-center gap-6 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                  <p className="text-blue-200 font-medium">{item.info}</p>
                  <p className="text-blue-300 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-blue-200 text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-blue-200 text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div>
                <label className="block text-blue-200 text-sm font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-blue-200 text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                  placeholder="Tell us about your project requirements..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowSuccessModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -50 }}
              className="bg-white rounded-3xl max-w-md w-full p-8 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
              <p className="text-gray-600 mb-6">
                Thank you for contacting us. Our team will get back to you within 2 hours.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowSuccessModal(false)}
                className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-full"
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      <Navbar />
      <main>
{/* Hero Section */}
<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  {/* Mobile: Carousel */}
  <div className="absolute inset-0 sm:hidden">
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={10}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      className="h-full w-full"
    >
      {[heroImage1, heroImage2, heroImage3, heroImage4].map((img, idx) => (
        <SwiperSlide key={idx}>
          <div className="relative h-full w-full">
            <img
              src={img}
              alt={`Hero ${idx + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>

  {/* Desktop: Collage with animation */}
  <div className="absolute inset-0 hidden sm:grid grid-cols-2 grid-rows-2 gap-4 p-4">
    {[
      { img: heroImage1, anim: { x: -50 } },
      { img: heroImage2, anim: { y: -50 } },
      { img: heroImage3, anim: { y: 50 } },
      { img: heroImage4, anim: { x: 50 } },
    ].map((item, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, ...item.anim }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 + idx * 0.2 }}
        className="relative rounded-2xl overflow-hidden"
      >
        <img
          src={item.img}
          alt={`Hero ${idx + 1}`}
          className="w-full h-full object-cover transition-transform duration-[4000ms] ease-in-out hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </motion.div>
    ))}
  </div>

  {/* Dark Overlay (covers both mobile & desktop) */}
  <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-black/80 z-10"></div>

  {/* Content */}
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
  >
    <motion.div variants={itemVariants} className="mb-8">
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
        className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4 border border-white/30 text-white shadow-lg"
      >
        ISO 9001:2015 Certified Excellence
      </motion.span>
    </motion.div>

    <motion.h1
      variants={itemVariants}
      className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
    >
      <span className="block bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent drop-shadow-2xl">
        Uni-Tech 
      </span>
      <span className="block bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent drop-shadow-2xl">
        International
      </span>
    </motion.h1>

    <motion.p
      variants={itemVariants}
      className="text-xl md:text-2xl text-white max-w-4xl mx-auto mb-8 leading-relaxed font-medium drop-shadow-lg"
    >
      Precision-engineered rubber solutions driving all industry excellence since 1995. 
      Where innovation meets reliability in every component we create.
    </motion.p>

    <motion.div
      variants={itemVariants}
      className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
    >
      <motion.button
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 shadow-2xl shadow-blue-600/30 border-2 border-blue-500"
      >
        Explore Our Products
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold rounded-full transition-all duration-300 border-2 border-white/40 shadow-lg"
      >
        Request Quote
      </motion.button>
    </motion.div>

    {/* Features Grid */}
    <motion.div
      variants={containerVariants}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
    >
      {[
        { icon: Factory, text: "Advanced Manufacturing" },
        { icon: Shield, text: "Quality Certified" },
        { icon: Zap, text: "Innovation Driven" },
        { icon: Globe, text: "Global Standards" }
      ].map((feature, index) => (
        <motion.div
          key={index}
          variants={featureVariants}
          whileHover={{ scale: 1.05, y: -5 }}
          className="bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/25 shadow-lg"
        >
          <feature.icon className="h-8 w-8 mx-auto mb-2 text-white" />
          <p className="text-sm font-semibold text-white drop-shadow-md">
            {feature.text}
          </p>
        </motion.div>
      ))}
    </motion.div>
  </motion.div>

  {/* Scroll Indicator */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 2 }}
    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
  >
    <motion.button
      onClick={scrollToNext}
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="text-white/90 hover:text-white transition-colors backdrop-blur-sm bg-white/10 rounded-full p-2 border border-white/20"
    >
      <ChevronDown className="h-8 w-8" />
    </motion.button>
  </motion.div>
</section>


        
        {/* About Us Section */}
        <section className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content Side */}
            <motion.div
              variants={aboutContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              <motion.div variants={aboutItemVariants}>
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full mb-4 shadow-lg"
                >
                  Our Legacy
                </motion.span>
                <motion.h2
                  variants={aboutItemVariants}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                >
                  <span className="block bg-gradient-to-r from-blue-600 to-gray-800 bg-clip-text text-transparent">
                    Three Decades of
                  </span>
                  <span className="block bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent">
                    Excellence
                  </span>
                </motion.h2>
              </motion.div>

              <motion.p
                variants={aboutItemVariants}
                className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium"
              >
                Since 1995, <span className="font-bold text-blue-600">Uni-Tech International</span> has been at the 
                forefront of precision rubber manufacturing, serving the global industry with 
                unwavering commitment to quality and innovation.
              </motion.p>

              <motion.p
                variants={aboutItemVariants}
                className="text-lg text-gray-600 leading-relaxed"
              >
                Our journey began with a simple vision: to create rubber components that set new standards 
                in durability, precision, and performance. Today, we're proud to be a trusted partner for 
                all industry manufacturers worldwide, delivering solutions that drive excellence.
              </motion.p>

              {/* Stats Grid */}
              <motion.div
                variants={aboutContainerVariants}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
              >
                {[
                  { icon: Clock, number: "30+", label: "Years Experience" },
                  { icon: Users, number: "100+", label: "Clients Worldwide" },
                  { icon: Award, number: "50M+", label: "Components Delivered" },
                  { icon: Target, number: "100%", label: "Quality Focus" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={statVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20"
                  >
                    <stat.icon className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                    <motion.p 
                      className="text-2xl font-bold text-gray-900 mb-1"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                    >
                      {stat.number}
                    </motion.p>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div
                variants={aboutItemVariants}
                className="pt-8"
              >
                <motion.button
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 20px 40px rgba(37, 99, 235, 0.3)" 
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full transition-all duration-300 shadow-xl"
                >
                  Discover Our Story
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Image Side */}
            <motion.div
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <motion.div
                className="relative rounded-3xl overflow-hidden shadow-2xl"
              >
          <img
  src={aboutImage}
  alt="Uni-Tech International Manufacturing Facility"
  className="w-full h-64 object-cover rounded-2xl sm:h-[400px] lg:h-[600px]"
/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                {/* Experience Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2, type: "spring" }}
                  className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-2xl border border-white/20"
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900">30+</div>
                    <div className="text-sm font-semibold text-blue-600">Years Experience</div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Background Decorative Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="absolute -z-10 -top-8 -right-8 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-lg opacity-40"
              ></motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 }}
                className="absolute -z-10 -bottom-8 -left-8 w-24 h-24 rounded-full mix-blend-multiply filter blur-lg opacity-40"
              ></motion.div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <WhyChooseUsSection />

        {/* Modal for Detailed View */}
        <AnimatePresence>
          {selectedCard && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              onClick={() => setSelectedCard(null)}
            >
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className={`relative p-8 ${selectedCard.bgColor} rounded-t-3xl`}>
                  <button
                    onClick={() => setSelectedCard(null)}
                    className="absolute top-6 right-6 p-2 rounded-full bg-white/80 hover:bg-white transition-colors shadow-lg"
                  >
                    <X className="h-6 w-6 text-gray-600" />
                  </button>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${selectedCard.color} text-white shadow-lg`}>
                      <selectedCard.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">
                        {selectedCard.details.title}
                      </h3>
                      <p className="text-gray-600 mt-2">{selectedCard.shortDesc}</p>
                    </div>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-8">
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {selectedCard.details.description}
                  </p>

                  {/* Key Points */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    {selectedCard.details.points.map((point, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{point}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {selectedCard.details.stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="text-center p-4 bg-gray-50 rounded-2xl"
                      >
                        <div className="text-2xl font-bold text-gray-900 mb-1">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-600 font-medium">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get Started with {selectedCard.title}
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <section id="elastomers" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50">
    {/* Animated Background */}
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 left-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
      />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <motion.span
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="inline-block px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white text-lg font-semibold rounded-full mb-6 shadow-2xl"
        >
          Material Expertise
        </motion.span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          <span className="block bg-gradient-to-r from-gray-900 to-green-600 bg-clip-text text-transparent">
            Advanced Elastomers
          </span>
          <span className="block bg-gradient-to-r from-blue-600 to-gray-900 bg-clip-text text-transparent">
            For Every Application
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Discover our comprehensive range of high-performance elastomers, each engineered to deliver 
          exceptional properties for specific industrial and applications.
        </p>
      </motion.div>

      {/* Elastomers Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={whyChooseUsContainerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
      >
      {elastomers.map((elastomer, index) => (
        <motion.div
          key={elastomer.id}
          variants={cardVariants}
          custom={index}
          whileHover={{ 
            y: -5,
            scale: 1.02,
            transition: { type: "spring", stiffness: 300 }
          }}
          className="group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl border border-gray-100 overflow-hidden cursor-pointer transition-all duration-300"
        >
          {/* Background Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${elastomer.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
          
          {/* Header */}
          <div className="flex items-center gap-4 mb-4 relative z-10">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className={`p-3 rounded-2xl bg-gradient-to-br ${elastomer.gradient} text-white shadow-lg`}
            >
              <elastomer.icon className="h-6 w-6" />
            </motion.div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                {elastomer.shortName}
              </h3>
              <p className="text-sm text-gray-600">{elastomer.name}</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-700 mb-4 leading-relaxed relative z-10 group-hover:text-gray-800 transition-colors">
            {elastomer.description}
          </p>

          {/* Properties */}
          <div className="mb-4 relative z-10">
            <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Properties:</h4>
            <div className="flex flex-wrap gap-1">
              {elastomer.properties.map((prop, idx) => (
                <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full group-hover:bg-gray-200 transition-colors">
                  {prop}
                </span>
              ))}
            </div>
          </div>

          {/* Applications */}
          <div className="relative z-10">
            <h4 className="text-sm font-semibold text-gray-900 mb-2">Common Applications:</h4>
            <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
              {elastomer.applications.slice(0, 3).join(", ")}...
            </p>
          </div>
        </motion.div>
      ))}
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-center"
      >
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Help Choosing the Right Material?</h3>
          <p className="text-gray-600 mb-6">
            Our material experts will help you select the perfect elastomer for your specific application requirements.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Consult Our Experts
          </motion.button>
        </div>
      </motion.div>
    </div>
  </section>
  {/* Products Section */}
  <ProductsSection />         
    <ContactSection /> 
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;