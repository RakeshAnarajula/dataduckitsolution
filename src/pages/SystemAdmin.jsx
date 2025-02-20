import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Server, Shield, Clock, Zap } from 'lucide-react';
const FEATURES = [
  {
    icon: <Server />,
    title: 'AI-Powered Monitoring',
    description: 'Predictive analysis and automated issue detection',
  },
  {
    icon: <Shield />,
    title: 'Zero-Trust Security',
    description: 'Enterprise-grade protection with real-time threat detection',
  },
  {
    icon: <Zap />,
    title: 'Instant Scaling',
    description: 'Dynamic resource allocation based on demand',
  },
];

const SERVICES = [
  {
    icon: <Clock className="w-8 h-8 text-blue-900" />,
    title: '24/7 System Administration',
    features: ['AI-driven monitoring', 'Instant issue resolution', 'Predictive maintenance'],
  },
  {
    icon: <Zap className="w-8 h-8 text-blue-900" />,
    title: 'On-Demand Solutions',
    features: ['Flexible scaling', 'Pay-as-you-go', 'Expert support'],
  },
];
const FeatureCard = ({ icon, title, description, isHovered, onHoverStart, onHoverEnd }) => (
  <motion.div
    className="relative p-8 rounded-3xl shadow-lg overflow-hidden bg-blue-50 hover:shadow-xl transition-shadow"
    onHoverStart={onHoverStart}
    onHoverEnd={onHoverEnd}
    whileHover={{ y: -5 }}
  >
    <div className="relative z-10">
      <div className="mb-4 text-blue-400">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: isHovered ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    />
  </motion.div>
);
const ServiceCard = ({ icon, title, features }) => (
  <div className="relative p-8 rounded-3xl shadow-lg overflow-hidden bg-blue-50 hover:shadow-xl transition-shadow">
    <div className="flex items-center gap-4 mb-4">
      <div className="p-2 bg-blue-50 rounded-lg">{icon}</div>
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-3 text-gray-600">
          <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
          {feature}
        </li>
      ))}
    </ul>
  </div>
);
const SystemAdmin = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  return (
    <div className="relative min-h-screen bg-gray-200 overflow-hidden">
      <section className="relative h-[500px] bg-[#312D2A] flex items-center justify-center text-center bg-cover bg-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/salesforce bg.jpg')" }}
        />
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold md:text-4xl py-4 text-white text-center"
          >
            Next-Gen AI Administration
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl mb-8 max-w-3xl mx-auto px-4 text-white"
          >
            Transform your IT infrastructure with AI-powered monitoring and real-time optimization
          </motion.p>
        </div>
      </section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="px-10 py-16 bg-gray-100"
      >
        <h2 className="text-3xl font-bold text-center mb-12">System Administration Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              isHovered={hoveredCard === index}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            />
          ))}
        </div>
      </motion.section>
      <section className="px-10 py-6 bg-gray-100 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 gap-6 max-w-4xl w-full"
        >
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              features={service.features}
            />
          ))}
        </motion.div>
      </section>
      <section className="py-6 text-center bg-gray-100">
        <h2 className="text-3xl font-bold mb-2">Ready to Transform Your IT Infrastructure?</h2>
        <p className="text-xl mb-2">
          Get started with our AI-powered system administration services today.
        </p>
        <button className="px-8 py-3 bg-orange-800 text-white rounded-full hover:bg-orange-900 transition-colors">
          Get Started Now
        </button>
      </section>
    </div>
  );
};
export default SystemAdmin;