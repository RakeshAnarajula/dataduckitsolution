import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const customerData = [
  {
    id: 1,
    logo: '/techcrop logo.png',
    name: 'TechCorp Solutions',
    title: 'TechCorp transformed cloud infrastructure with DataDuck',
    story: 'DataDuck IT Solutions helped us modernize our entire cloud infrastructure, resulting in 45% cost savings and 60% improved performance.',
    background: '/tech crop bg.jpg',
  },
  {
    id: 2,
    logo: '/global finance group logo.png',
    name: 'Global Finance Group',
    title: 'Revolutionary FinTech transformation with DataDuck',
    story: 'Our digital transformation journey with DataDuck IT Solutions led to a complete overhaul of our financial systems, enabling real-time processing and enhanced security.',
    background: '/global finance group bg.jpg',
  },
  {
    id: 3,
    logo: '/education-guru-logo.png',
    name: 'EduTech Institute',
    title: 'EduTech revolutionizes learning with DataDuck',
    story: 'DataDuck IT Solutions helped us create a seamless hybrid learning environment that increased student engagement by 75%.',
    background: '/edu tech bg.jpg',
  },
  {
    id: 4,
    logo: '/healthcare logo.png',
    name: 'HealthCare Plus',
    title: 'Healthcare Plus achieves digital excellence',
    story: 'With DataDuck IT Solutions, we implemented a state-of-the-art patient management system that reduced wait times by 40%.',
    background: '/health care bg.jpg',
  },
  {
    id: 5,
    logo: '/retail dynamics logo.jpg',
    name: 'Retail Dynamics',
    title: 'Retail Dynamics transforms customer experience',
    story: 'DataDuck IT Solutions revolutionized our retail operations with AI-powered inventory management and personalized customer experiences.',
    background: '/retail dynamics bg.jpg',
  },
];
const LogoButton = ({ customer, isActive, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`transition-all duration-300 p-4 rounded-lg ${
          isActive || isHovered ? 'grayscale-0' : 'grayscale'
        }`}
      >
        <img
          src={customer.logo}
          alt={customer.name}
          className="h-10 w-30 object-contain"
        />
        <motion.div
          className="absolute bottom-2 left-4 right-4 h-0.5 bg-amber-400"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered || isActive ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />
      </button>
    </div>
  );
};
const CustomerLogos = ({ activeId, onLogoClick }) => (
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 items-center justify-items-center">
      {customerData.map((customer) => (
        <LogoButton
          key={customer.id}
          customer={customer}
          isActive={activeId === customer.id}
          onClick={() => onLogoClick(customer.id)}
        />
      ))}
    </div>
  </div>
);
const CustomerStory = ({ customer }) => (
  <div className="relative h-140 overflow-hidden">
    <AnimatePresence mode="wait">
      <motion.div
        key={customer.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0">
          <img
            src={customer.background}
            alt="Background"
            className="w-full h-full object-cover brightness-90"
          />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white max-w-2xl p-6 md:p-8 rounded-lg shadow-lg mx-4"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {customer.title}
            </h3>
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              {customer.story}
            </p>
            <button className="inline-flex items-center px-6 py-3 text-sm md:text-base font-medium text-white bg-[#312D2A] hover:bg-[#161612] rounded-md transition-colors">
              Read {customer.name}&apos;s story
            </button>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  </div>
);

const Testimonial = () => {
  const [activeCustomer, setActiveCustomer] = useState(customerData[0]);

  const handleLogoClick = (customerId) => {
    const selected = customerData.find((c) => c.id === customerId);
    setActiveCustomer(selected);
  };

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-6 text-left">
        <h2 className="text-3xl md:text-4xl font-serif mb-2">
          Success Stories
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          See how leading companies are transforming with DataDuck IT Solutions
        </p>
      </div>
      <CustomerLogos
        activeId={activeCustomer.id}
        onLogoClick={handleLogoClick}
      />
      <CustomerStory customer={activeCustomer} />
    </section>
  );
};

export default Testimonial;
