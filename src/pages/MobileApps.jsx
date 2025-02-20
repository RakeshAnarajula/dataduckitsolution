import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Smartphone, Cpu, Phone, Monitor, Laptop } from "lucide-react";
import { FaApple, FaAndroid, FaWindows } from "react-icons/fa";
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 },
};
const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
};
const images = [
  "/edu tech bg.jpg",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
];
const platforms = [
  { icon: Phone, text: "iPhone & iPad" },
  { icon: Smartphone, text: "Android" },
  { icon: Monitor, text: "Windows Mobile" },
  { icon: Laptop, text: "BlackBerry" },
];
const services = [
  {
    icon: FaApple,
    title: "iOS Development",
    description: "Custom iPhone and iPad applications tailored to your business needs.",
  },
  {
    icon: FaAndroid,
    title: "Android Development",
    description: "Robust and scalable Android apps for diverse industries.",
  },
  {
    icon: FaWindows,
    title: "Windows Mobile",
    description: "Enterprise-grade applications for Windows Mobile platforms.",
  },
  {
    icon: Cpu,
    title: "Cross-Platform",
    description: "Unified solutions for multiple platforms using cutting-edge frameworks.",
  },
];
const HeroSection = () => (
  <section className="text-white relative h-[500px] bg-[#312D2A] flex items-center justify-center text-center bg-cover bg-center">
    <div
      className="absolute inset-0 bg-cover bg-center opacity-30"
      style={{
        backgroundImage: `url(${images[1]})`,
      }}
    ></div>
    <div className="relative z-10">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold md:text-4xl py-4 text-center"
      >
        Mobile Application Development
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-xl mb-8 max-w-3xl mx-auto px-4"
      >
        Empowering businesses with custom mobile solutions that are secure, scalable, and innovative.
      </motion.p>
    </div>
  </section>
);
const PlatformCard = ({ icon: Icon, text }) => (
  <motion.div
    {...hoverScale}
    className="p-4 bg-white rounded-xl shadow-lg flex items-center gap-3"
  >
    <Icon className="w-6 h-6 text-blue-600" />
    <span className="font-medium">{text}</span>
  </motion.div>
);
const ServiceCard = ({ icon: Icon, title, description }) => (
  <motion.div
    {...hoverScale}
    className="bg-white p-6 rounded-lg shadow-lg text-center"
  >
    <Icon className="text-orange-800 text-4xl mx-auto mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);
const MobileApp = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="min-h-screen bg-gray-100">
      <HeroSection />
      <motion.div {...fadeIn} className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 lg:pl-12">
            <h2 className="text-3xl font-bold mb-6">Why Choose Our Solutions?</h2>
            <p className="text-gray-600 mb-6">
              We specialize in developing stable, secure, and high-performance mobile applications for all major platforms, including iOS, Android, Windows, and cross-platform solutions. Our expert team ensures seamless user experiences, optimized performance, and future-ready scalability.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {platforms.map((platform, index) => (
                <PlatformCard key={index} {...platform} />
              ))}
            </div>
          </div>
          <motion.div
            {...hoverScale}
            className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto lg:mx-0"
          >
            <img
              src={images[currentImageIndex]}
              alt="Social Web Development"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
          </motion.div>
        </div>
      </motion.div>
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Mobile Application Development
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Let's build a mobile application that drives growth and innovation.
            </p>
            <motion.button
              {...hoverScale}
              className="bg-orange-800 text-white px-8 py-3 rounded-full font-medium hover:bg-orange-900 transition-colors"
            >
              Get Started Now
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
export default MobileApp;