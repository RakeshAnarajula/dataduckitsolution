import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Users, Share2 } from 'lucide-react';
import { FaShareAlt, FaDesktop, FaDatabase, FaTools } from 'react-icons/fa';
const WebDesign = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };
  const images = [
    "/edu tech bg.jpg",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <div className="min-h-screen bg-gray-100">
      <section className="text-white relative h-[500px] bg-[#312D2A] flex items-center justify-center text-center bg-cover bg-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          }}
        ></div>
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold md:text-4xl py-4 text-center"
          >
            Innovative Web Development
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl mb-8 max-w-3xl mx-auto px-4"
          >
            Tailored applications that drive business success through innovation and performance
          </motion.p>
        </div>
      </section>
      <motion.div {...fadeIn} className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 lg:pl-12">
            <h2 className="text-3xl font-bold mb-6">The Social Web Era</h2>
            <p className="text-gray-600 mb-6">
              We live in an era of a social web, which facilitates interaction. At DataDuck IT Solutions, we build applications that are part of this social paradigm, integrating seamlessly with external services like web-based email and social networks.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Share2, text: "Social Integration" },
                { icon: Users, text: "User Interaction" },
                { icon: Globe, text: "Global Reach" },
                { icon: Code, text: "Custom Development" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-white rounded-xl shadow-lg flex items-center gap-3"
                >
                  <item.icon className="w-6 h-6 text-blue-600" />
                  <span className="font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
             <motion.div
            whileHover={{ scale: 1.02 }}
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
      <div className="container mx-auto px-6 ">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Custom Web Application Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: FaShareAlt,
              title: "Portals & Content Apps",
              description: "Corporate portals, e-shops, blogs, news sites, and more."
            },
            {
              icon: FaDesktop,
              title: "Desktop-like Web Apps",
              description: "Windows/Linux apps ported to the web with enhanced functionality."
            },
            {
              icon: FaDatabase,
              title: "Proactive Care",
              description: "Monitor and predict database issues before they affect your business."
            },
            {
              icon: FaTools,
              title: "Customized Service Levels",
              description: "Pay only for the services you need, with flexible support options."
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <service.icon className="text-orange-800 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
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
              Join the leading organizations that trust DataDuck IT Solutions for Web applications need
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
export default WebDesign;