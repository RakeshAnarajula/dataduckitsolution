import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Building, Cloud, Lock, Users } from 'lucide-react';
const ServiceCard = ({ title, description, features, icon: Icon, category }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 p-8 w-full"
  >
    <div className="flex items-center justify-between mb-6">
      <div className=" p-4 rounded-xl">
        <Icon className="w-12 h-12 text-blue-900" />
      </div>
      <span className="text-sm font-medium text-blue-900 bg-blue-50 px-4 py-1 rounded-full">
        {category}
      </span>
    </div>
    <h3 className="text-3xl font-bold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-600 mb-6">{description}</p>
    <div className="space-y-3">
      {features.map((feature, index) => (
        <div key={index} className="flex items-start space-x-3">
          <ShieldCheck className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
          <span className="text-gray-600 text-lg">{feature}</span>
        </div>
      ))}
    </div>
  </motion.div>
);
const DBAOptions = () => {
  const services = [
    {
      icon: ShieldCheck,
      title: "Continuous Service Assurance (CSA)",
      category: "Small & Medium Business",
      description: "Ensure 24×7 availability of mission-critical production database environments with proactive monitoring and automated maintenance.",
      features: ["Round-the-clock monitoring", "Automated maintenance", "Regular health checks", "Performance optimization"],
    },
    {
      icon: Building,
      title: "Enterprise Service Assurance (ESA)",
      category: "Enterprise",
      description: "Tailored solutions for enterprises with dedicated resources, strategic consulting, and custom SLA options.",
      features: ["Dedicated DBA team", "Custom SLA options", "Strategic consulting", "Scalability solutions"],
    },
    {
      icon: Clock,
      title: "On-Demand Services",
      category: "Flexible",
      description: "Hourly database services to supplement CSA and ESA with advanced expertise and flexible scheduling.",
      features: ["Pay-as-you-go model", "Expert consultation", "Flexible scheduling", "Emergency support"],
    }
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      <section 
        className="relative bg-[#312D2A] text-gray-400 py-40 overflow-hidden">
       <div className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" }}
      
        ></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-200">
            Database Management Solutions
          </h1>
          <p className="text-lg text-blue-100">
            Choose the right database management solution for your business needs.
          </p>
        </motion.div>
      </section>
      <section className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 md:px-12 lg:px-20 py-12">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </section>
      <section className="py-20 bg-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Additional Features
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Enhance your database management with these powerful features.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Cloud className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">Cloud Integration</h3>
              <p className="text-gray-600">Seamlessly integrate your databases with cloud platforms like AWS, Azure, and Google Cloud.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Lock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">Advanced Security</h3>
              <p className="text-gray-600">Ensure top-notch security with encryption, monitoring, and compliance with industry standards.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">User Access Control</h3>
              <p className="text-gray-600">Manage user roles and permissions effectively with granular access controls.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-6 bg-gray-100">
              <div className="container mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="max-w-4xl mx-auto text-center"
                >
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
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
export default DBAOptions;