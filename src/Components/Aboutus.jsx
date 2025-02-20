import React from 'react';
import { File, Globe, Feather, Shield, Star, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
const timelineData = [
  {
    year: 2018,
    title: "Company Founded",
    description: "DataDuck IT Solutions established with a vision to transform digital landscapes.",
    image: "/empowering bg.jpg",
    yearColor: "text-gray-800",
  },
  {
    year: 2019,
    title: "First Major Project",
    description: "Successfully delivered enterprise-scale cloud migration for a Fortune 500 client.",
    image: "/global finance group bg.jpg",
    yearColor: "text-gray-800",
  },
  {
    year: 2020,
    title: "Global Expansion",
    description: "Opened new offices in Europe and Asia, serving clients across 15 countries.",
    image: "/health care bg.jpg",
    yearColor: "text-gray-800",
  },
  {
    year: 2021,
    title: "AI Innovation Hub",
    description: "Launched dedicated AI research division and innovative ML solutions.",
    image: "/retail dynamics bg.jpg",
    yearColor: "text-gray-800",
  },
  {
    year: 2022,
    title: "Strategic Partnerships",
    description: "Formed key alliances with leading tech giants to enhance service offerings.",
    image: "/edu tech bg.jpg",
    yearColor: "text-gray-800",
  },
  {
    year: 2023,
    title: "Sustainability Initiative",
    description: "Implemented green computing solutions and carbon-neutral operations.",
    image: "/securebg.jpg",
    yearColor: "text-gray-800",
  },
];
const TimelineItem = ({ item }) => (
  <div className="min-w-[350px] mx-6">
    <div className="p-4 rounded-t-lg text-center">
      <span className={`${item.yearColor} text-6xl font-bold drop-shadow-lg`}>
        {item.year}
      </span>
    </div>
    <div className="relative">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-[250px] object-cover rounded-b-lg"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent rounded-b-lg"></div>
    </div>
    <div className="mt-4">
      <h3 className="text-xl text-center font-semibold text-gray-800 mb-2">{item.title}</h3>
      <p className="text-gray-600">{item.description}</p>
    </div>
  </div>
);
const InfiniteMarquee = () => (
  <div className="w-full py-10 overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-10 px-10 font-inter">A history of responsibilities</h2>
      <div className="overflow-hidden">
        <div className="flex animate-marquee">
          {[...timelineData, ...timelineData].map((item, index) => (
            <TimelineItem key={`${item.year}-${index}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  </div>
);
const AboutPage = () => {
  const sections = [
    {
      icon: <File className="w-8 h-8 text-yellow-500" />,
      title: "Strategy",
      description: "Success starts with a solid plan. We help you set clear goals and execute with precision.",
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      title: "Adaptability",
      description: "The market changes fast. Our flexible solutions evolve with your needs.",
    },
    {
      icon: <Feather className="w-8 h-8 text-green-500" />,
      title: "Sustainability",
      description: "We deliver tailored solutions to streamline operations and drive growth.",
    },
    {
      icon: <Shield className="w-8 h-8 text-violet-500" />,
      title: "Solutions",
      description: "We focus on measurable impact—your success is our success.",
    },
    {
      icon: <Star className="w-8 h-8 text-red-500" />,
      title: "Results",
      description: "Innovation with responsibility. We’re committed to ethical and sustainable IT solutions.",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-orange-500" />,
      title: "Careers",
      description: "Join our team and be part of a dynamic, forward-thinking environment.",
    },
  ];
  return (
    <div className="font-inter">
      <section className="bg-gray-100 py-4 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 bg-[#905707] text-white rounded-lg p-8">
          <div className="order-2 md:order-1 md:w-1/2 text-center md:text-left">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
              Our mission is to deliver innovative technology solutions that empower ,<br/>businesses to create value, adapt seamlessly, and achieve lasting success.
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
          <h2 className="text-sm sm:text-base md:text-xl font-extrabold text-gray-900 p-2">
            For years, we have been delivering innovative IT solutions that drive business success. The following highlights showcase how we empower our clients and partners with cutting-edge technology and strategic expertise.
          </h2>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Scale</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Extensive experience in IT staffing, consulting, and managed solutions</li>
              <li>• Strong strategic relationships with leading companies</li>
              <li>• Expertise across a broad range of technologies and industries</li>
              <li>• Global reach with resources to serve clients worldwide</li>
              <li>• Flexible business model offering contract, contract-to-hire, and direct-hire solutions</li>
              <li>• Dedicated team of highly skilled IT professionals and consultants</li>
            </ul>
          </section>

          <section className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Innovation</h3>
            <ul className="text-gray-700 space-y-2">
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
        <h1 className="text-3xl font-bold mb-12">About DataDuck IT Solutions</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div key={index}>
              <div className="mb-4">{section.icon}</div>
              <motion.div
                className="relative inline-block mb-2"
                initial="initial"
                whileHover="hover"
              >
                <h2 className="text-xl font-bold">{section.title}</h2>
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-black"
                  variants={{
                    initial: { width: "0%", left: "0%" },
                    hover: { width: "100%", transition: { duration: 0.3, ease: "easeInOut" } },
                  }}
                />
              </motion.div>
              <p className="text-gray-600">{section.description}</p>
            </div>
          ))}
        </div>
      </div>
      <InfiniteMarquee />
    </div>
  );
};
export default AboutPage;