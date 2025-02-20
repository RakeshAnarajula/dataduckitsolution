import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaCloud, FaChartLine, FaCogs, FaUsers, FaLightbulb, FaShieldAlt,FaRocket,FaClock,FaCheckCircle,FaHandshake} from "react-icons/fa";
const Salesforce = () => {
  const featuresRef = useRef(null);
  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="min-h-screen text-white overflow-hidden">
      <section
        className="relative h-[500px] bg-[#312D2A] flex items-center justify-center text-center bg-cover bg-center" >
       <div className="absolute inset-0 bg-cover bg-center opacity-30 "
        style={{ backgroundImage: "url('/salesforce bg.jpg')" }}
     
        ></div>
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold md:text-4xl py-4 text-center"
          >
            Transform Your Business with Salesforce
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl mb-8 max-w-3xl mx-auto px-4"
          >
            Leverage the power of Salesforce products and technologies to drive growth, efficiency, and customer satisfaction.
          </motion.p>
          <motion.button
            onClick={scrollToFeatures}
            className="bg-blue-800 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-900 "
          >
            Explore Products
          </motion.button>
        </div>
      </section>
      <section ref={featuresRef} className="container mx-auto px-6 py-20 text-gray-900">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Salesforce Products & Technologies?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {salesforceFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center text-4xl mb-4 text-blue-900">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="text-gray-900 py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Implementation Approach</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Your trusted partner in digital transformation, delivering innovative Salesforce solutions that drive business success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {dataduckFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white shadow-lg p-8 rounded-4xl"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 p-3 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-6">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">
              Ready to Transform Your Database Operations?
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Join the leading organizations that trust DataDuck IT Solutions for their database management needs
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-800 text-white px-8 py-3 rounded-full font-medium hover:bg-orange-900 transition-colors"
            >
              Schedule a Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
const salesforceFeatures = [
  {
    icon: <FaCloud />,
    title: "Cloud Solutions",
    description: "Scalable and secure cloud-based solutions for your business needs.",
  },
  {
    icon: <FaChartLine />,
    title: "Data Analytics",
    description: "Unlock insights with powerful analytics and reporting tools.",
  },
  {
    icon: <FaCogs />,
    title: "Automation",
    description: "Streamline processes with intelligent automation.",
  },
  {
    icon: <FaUsers />,
    title: "Customer Management",
    description: "Enhance customer relationships with CRM tools.",
  },
  {
    icon: <FaLightbulb />,
    title: "Innovation",
    description: "Stay ahead with cutting-edge technology and innovation.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Security & Compliance",
    description: "Ensure data protection and regulatory compliance with robust security features.",
  },
];

const dataduckFeatures = [
  {
    icon: <FaRocket className="w-6 h-6 text-white" />,
    title: "Accelerated Time-to-Market",
    description: "We leverage advanced tools and automation to fast-track your project deployment without compromising quality.",
  },
  {
    icon: <FaHandshake className="w-6 h-6 text-white" />,
    title: "Client-Centric Approach",
    description: "We understand your pain points and deliver solutions that align perfectly with your business objectives.",
  },
  {
    icon: <FaClock className="w-6 h-6 text-white" />,
    title: "Rapid Implementation",
    description: "Quick project completion with our proven methodology and experienced team of Salesforce experts.",
  },
  {
    icon: <FaCheckCircle className="w-6 h-6 text-white" />,
    title: "Quality Assurance",
    description: "Robust, scalable, and future-ready solutions that undergo rigorous quality testing.",
  },
];
export default Salesforce;