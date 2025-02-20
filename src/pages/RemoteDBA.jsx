import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Database, Cloud, Code, Shield, LineChart, Server, Lock, CheckCircle, Building, Briefcase, Hospital } from 'lucide-react';
const ServiceCard = ({ icon: Icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
  >
    <div className="flex flex-col h-full">
      <div className="mb-4">
        <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center">
          <Icon className="w-6 h-6 text-orange-600" />
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
    </div>
  </motion.div>
);
const BenefitCard = ({ title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="flex items-start space-x-4"
  >
    <div className="flex-shrink-0">
      <CheckCircle className="w-6 h-6 text-orange-600" />
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
);
const IndustryCard = ({ icon: Icon, title, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white p-6 rounded-xl shadow-lg flex items-center space-x-4"
  >
    <Icon className="w-8 h-8 text-orange-600" />
    <span className="text-lg font-semibold text-gray-800">{title}</span>
  </motion.div>
);
const RemoteDBA = () => {
  const benefitsRef = useRef(null);
  const scrollToBenefits = () => {
    benefitsRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const dbaProjects = [
    { icon: Database, title: "Database Upgrades", description: "Seamless upgrade processes for all major database platforms" },
    { icon: Cloud, title: "Oracle Upgrades", description: "Specialized Oracle database upgrade services" },
    { icon: Shield, title: "Database Patching", description: "Regular security and performance patches" },
    { icon: Server, title: "Database Installations", description: "Expert setup and configuration of new database environments" },
    { icon: LineChart, title: "Data Analytics", description: "Advanced analytics and reporting solutions" },
    { icon: Lock, title: "Data Auditing", description: "Comprehensive security and compliance audits" },
    { icon: Code, title: "Performance Analysis", description: "In-depth performance monitoring and optimization" },
    { icon: Database, title: "Database Optimisation", description: "Fine-tuning for maximum efficiency and performance" }
  ];
  const industries = [
    { icon: Building, title: "Manufacturing" },
    { icon: Briefcase, title: "National Retail Chains" },
    { icon: Lock, title: "Global Financial Services" },
    { icon: Hospital, title: "Healthcare Services" }
  ];
  return (
    <div className="min-h-screen bg-gray-100">
       <section
              className=" text-white relative h-[500px] bg-[#312D2A] flex items-center justify-center text-center bg-cover bg-center" >
             <div className="absolute inset-0 bg-cover bg-center opacity-30 "
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}
           
              ></div>
              <div className="relative z-10">
                <motion.h1
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-3xl font-bold md:text-4xl py-4 text-center"
                >
              24/7 Remote Database Administration
              </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-xl mb-8 max-w-3xl mx-auto px-4"
                >
                   Expert database management without the overhead of in-house teams                </motion.p>
                <motion.button
                  onClick={scrollToBenefits}
                  className="bg-blue-800 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-900 "
                >
                  Get Started Today
                </motion.button>
              </div>
            </section>
      <section ref={benefitsRef} className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Remote DBA Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enhance your database operations with our expert management
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <BenefitCard
              title="Cost Reduction"
              description="Standardize and optimize routine administration tasks for significant cost savings"
              index={0}
            />
            <BenefitCard
              title="24/7 Operation"
              description="Ensure reliable, continuously operating data infrastructure"
              index={1}
            />
            <BenefitCard
              title="Enhanced Expertise"
              description="Access to a team of specialized database administrators"
              index={2}
            />
            <BenefitCard
              title="Improved Performance"
              description="Optimize database performance for better business outcomes"
              index={3}
            />
          </div>
        </div>
      </section>
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Remote DBA Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive database management solutions for your business
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dbaProjects.map((project, index) => (
              <ServiceCard key={index} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by leading companies across various sectors
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <IndustryCard key={index} {...industry} index={index} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-10  bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Why Choose DataDuck IT Solutions?
            </h2>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-gray-600 mb-6">
                DataDuck IT Solutions is a pioneer and leader in Data Infrastructure Management, providing complete support for all major database platforms including Oracle, UDB DB2, DB2 z/OS, Sybase, SQL Server, and MySQL using the ONguard IM process.
              </p>
              <p className="text-gray-600 mb-6">
                We manage thousands of databases for more than 140 clients worldwide, with half being Fortune 1000 and Forbes Private 500 firms. Our SAS 70 Type II compliance ensures the highest standards of service delivery.
              </p>
              <div className="border-t pt-6">
                <p className="text-gray-800  italic">
                Todays CIOs understand the value and benefits of managing data infrastructure as a service. The IT talent shortage, explosive data volumes, and 24×7 global markets make our managed service provider approach essential for operational excellence."
                </p>
                <p className="text-gray-600 mt-2">- DBA Experts at DataDuck IT Solutions</p>
              </div>
            </div>
          </motion.div>
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
export default RemoteDBA;