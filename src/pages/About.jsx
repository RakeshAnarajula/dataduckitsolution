import React from 'react';
import { File, Globe, Feather, Shield, Star, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
const AboutPage = () => {
  const sections = [
    {
      icon: <File className="w-8 h-8 text-yellow-500" />,
      title: "Strategy",
      description: "Success starts with a solid plan. We help you set clear goals and execute with precision."
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      title: "Adaptability",
      description: "The market changes fast. Our flexible solutions evolve with your needs."
    },
    {
      icon: <Feather className="w-8 h-8 text-green-500" />,
      title: "Sustainability",
      description: "We deliver tailored solutions to streamline operations and drive growth."
    },
    {
      icon: <Shield className="w-8 h-8 text-violet-500" />,
      title: "Solutions",
      description: "We focus on measurable impact—your success is our success."
    },
    {
      icon: <Star className="w-8 h-8 text-red-500" />,
      title: "Results",
      description: "Innovation with responsibility. We’re committed to ethical and sustainable IT solutions."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-orange-500" />,
      title: "Careers",
      description: "Join our team and be part of a dynamic, forward-thinking environment."
    }
  ];
  const underlineVariants = {
    initial: {
      width: "0%",
      left: "0%",
    },
    hover: {
      width: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };
  return (
    <div>
      <section className="bg-gray-100 py-6 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 bg-[#C44933] text-white rounded-lg p-8">
          <div className="order-2 md:order-1 md:w-1/2 text-center md:text-left">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
              Our mission is to deliver innovative technology solutions that empower, <br />
              businesses to create value, adapt seamlessly, and achieve lasting success.
            </h2>
          </div>
          <div className="order-1 md:order-2 md:w-1/2 flex justify-center">
            <img
              src="/aboutus hero.png"
              alt="Artistic Bird"
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:max-w-md lg:max-h-md object-contain"
            />
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-6">
          <h2 className="text-sm sm:text-base md:text-xl font-extrabold text-gray-900">
            For years, we have been delivering innovative IT solutions that drive business success. The following highlights showcase how we empower our clients, and partners with cutting-edge technology and strategic expertise.
          </h2>
        </div>
        <div className="max-w-7xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <section className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg sm:text-xl font-bold mb-4">Scale</h3>
            <ul className="text-gray-700 space-y-2 text-sm sm:text-base">
              <li>• Extensive experience in IT staffing, consulting, and managed solutions</li>
              <li>• Strong strategic relationships with leading companies</li>
              <li>• Expertise across a broad range of technologies and industries</li>
              <li>• Global reach with resources to serve clients worldwide</li>
              <li>• Flexible business model offering contract, contract-to-hire, and direct-hire solutions</li>
              <li>• Dedicated team of highly skilled IT professionals and consultants</li>
            </ul>
          </section>
          <section className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg sm:text-xl font-bold mb-4">Innovation</h3>
            <ul className="text-gray-700 space-y-2 text-sm sm:text-base">
              <li>• Cutting-edge IT solutions tailored to client needs</li>
              <li>• Expertise in the latest technologies, ensuring maximum value</li>
              <li>• Adaptive and scalable solutions to meet evolving business challenges</li>
              <li>• Strategic partnerships to harness leading-edge innovations</li>
              <li>• Proven track record in delivering high-impact, results-driven IT services</li>
              <li>• Commitment to continuous improvement and knowledge transfer for client success</li>
            </ul>
          </section>
        </div>
      </section>
      <div className="max-w-7xl mx-auto p-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-12">About DataDuck IT Solutions</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div key={index}>
              <div className="mb-4">{section.icon}</div>
              <motion.div 
                className="relative inline-block mb-2"
                initial="initial"
                whileHover="hover"
              >
                <h2 className="text-lg sm:text-xl font-bold">
                  {section.title}
                </h2>
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-black"
                  variants={underlineVariants}
                />
              </motion.div>
              <p className="text-gray-600 text-sm sm:text-base">
                {section.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
