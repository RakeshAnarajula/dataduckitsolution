import React from "react";
import { motion } from "framer-motion";
import { CodeSquare, Cloud, UserCheck, Users, Shield, ScrollText, Award, BrainCircuit, CheckCircle, Star } from 'lucide-react';
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};
const TrainingCard = ({ icon: Icon, title, technologies, image }) => (
  <motion.div
    variants={itemVariants}
    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
  >
    <div className="relative h-48 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
    </div>
    <div className="p-6">
      <div className="flex items-center mb-4">
        <Icon className="w-8 h-8 text-blue-600 mr-3" />
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      <div className="space-y-4">
        {technologies.map((pair, index) => (
          <div key={index} className="grid grid-cols-2 gap-4">
            {pair.map((tech, techIndex) => (
              <div key={techIndex} className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                {tech}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);
const ProcessStep = ({ icon: Icon, title, description }) => (
  <motion.div
    variants={itemVariants}
    className="flex flex-col items-center text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
  >
    <div className="bg-blue-100 p-4 rounded-full mb-4">
      <Icon className="w-8 h-8 text-blue-600" />
    </div>
    <h4 className="text-xl font-semibold mb-3 text-gray-800">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);
const TestimonialCard = ({ name, role, feedback, rating }) => (
  <motion.div
    variants={itemVariants}
    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
  >
    <div className="flex items-center mb-4">
      <div className="bg-blue-100 p-3 rounded-full">
        <Star className="w-6 h-6 text-blue-600" />
      </div>
      <div className="ml-4">
        <h4 className="text-xl font-semibold text-gray-800">{name}</h4>
        <p className="text-gray-600">{role}</p>
      </div>
    </div>
    <p className="text-gray-700 mb-4">{feedback}</p>
    <div className="flex items-center">
      {Array.from({ length: rating }, (_, i) => (
        <Star key={i} className="w-5 h-5 text-yellow-400" />
      ))}
    </div>
  </motion.div>
);
const trainingPrograms = [
  {
    title: "Development",
    technologies: [["Java", ".NET"], ["Python", "React"], ["Angular", "Node.js"]],
    icon: CodeSquare,
    image: "/edu tech bg.jpg"
  },
  {
    title: "Cloud & DevOps",
    technologies: [["AWS", "Azure"], ["Docker", "Kubernetes"], ["Jenkins", "Git"]],
    icon: Cloud,
    image: "/empowering bg.jpg"
  },
  {
    title: "Data & AI",
    technologies: [["Machine Learning", "Deep Learning"], ["Big Data", "Analytics"], ["NLP", "Computer Vision"]],
    icon: BrainCircuit,
    image: "/global finance group bg.jpg"
  }
];
const processSteps = [
  {
    title: "Requirements Analysis",
    description: "In-depth analysis of your recruitment needs and objectives",
    icon: ScrollText
  },
  {
    title: "Candidate Sourcing",
    description: "Strategic talent sourcing from our extensive network",
    icon: Users
  },
  {
    title: "Screening Process",
    description: "Rigorous screening of technical and soft skills",
    icon: Shield
  },
  {
    title: "Quality Verification",
    description: "Thorough background and reference checks",
    icon: UserCheck
  },
  {
    title: "Final Selection",
    description: "Detailed assessment and final candidate selection",
    icon: Award
  },
  {
    title: "Onboarding Success",
    description: "Smooth transition and integration into your team",
    icon: CheckCircle
  }
];
const testimonials = [
  {
    name: "John Doe",
    role: "CTO at TechCorp",
    feedback: "The recruitment process was seamless, and we found the perfect candidate for our team.",
    rating: 5
  },
  {
    name: "Jane Smith",
    role: "HR Manager at Innovate Inc.",
    feedback: "Their training programs helped our team upskill quickly and efficiently.",
    rating: 5
  },
  {
    name: "Michael Brown",
    role: "CEO at DataWorks",
    feedback: "Highly professional and reliable. We will definitely work with them again.",
    rating: 4
  }
];
const Recruitment = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
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
            Recruitment Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl mb-8 max-w-3xl mx-auto px-4 text-white"
          >
            Connecting top talent with leading companies in the IT industry
          </motion.p>
        </div>
      </section>
      <section className="py-10 bg-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            className="text-center max-w-6xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-12">
              Our Resourcing Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <ProcessStep
                  key={index}
                  icon={step.icon}
                  title={`Step ${index + 1}: ${step.title}`}
                  description={step.description}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <section className="bg-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Upskilling Your Workforce
            </h2>
            <p className="text-xl text-gray-700">
              Our training programs are designed to bridge the skills gap and empower your team with the latest technologies.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {trainingPrograms.map((program, index) => (
              <TrainingCard
                key={index}
                icon={program.icon}
                title={program.title}
                technologies={program.technologies}
                image={program.image}
              />
            ))}
          </motion.div>
        </div>
      </section>
      <section className="py-10 bg-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-700">
              Hear from our satisfied clients about their experiences.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                feedback={testimonial.feedback}
                rating={testimonial.rating}
              />
            ))}
          </motion.div>
        </div>
      </section>
      <section className="py-6 bg-blue-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-gray-700">
            Lets discuss how we can help you build your dream team.
          </p>
          <button className="bg-orange-800 text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-orange-900 transform hover:scale-105 transition-all">
            Contact Us Today
          </button>
        </motion.div>
      </section>
    </div>
  );
};
export default Recruitment;