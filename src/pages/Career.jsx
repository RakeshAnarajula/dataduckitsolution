import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Award, Trophy, Globe, Briefcase, Heart, Gift, Star } from 'lucide-react';
const Career = () => {
  const whyJoinUsRef = useRef(null);
  const handleCultureClick = () => {
    whyJoinUsRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const careerBlogs = [
    {
      title: "Why Choose DataDuck IT Solutions?",
      excerpt: "Discover how we're revolutionizing the IT industry with our innovative approach to talent management.",
      date: "Feb 15, 2025",
      image: "/edu tech bg.jpg"
    },
    {
      title: "Growing Your Career in Tech",
      excerpt: "Learn about the career growth opportunities and mentorship programs at DataDuck IT Solutions.",
      date: "Feb 10, 2025",
      image: "/empowering bg.jpg"
    },
    {
      title: "Success Stories",
      excerpt: "Read about how our employees have grown from junior developers to tech leads.",
      date: "Feb 5, 2025",
      image: "/global finance group bg.jpg"
    }
  ];
  const benefits = [
    { 
      title: 'Medical Insurance',
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      description: 'Comprehensive health coverage for you and your family.'
    },
    {
      title: 'Flexible Vacation Time',
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      description: 'Take time off when you need it to recharge and relax.'
    },
    {
      title: 'Expenses Reimbursement',
      icon: <Gift className="w-8 h-8 text-blue-600" />,
      description: 'Get reimbursed for work-related expenses.'
    },
    {
      title: 'Permanent Residency',
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      description: 'Support for obtaining permanent residency.'
    },
    {
      title: 'Knowledge Sharing',
      icon: <Users className="w-8 h-8 text-blue-600" />,
      description: 'Opportunities to learn and share knowledge with peers.'
    },
    {
      title: 'Additional Benefits',
      icon: <Star className="w-8 h-8 text-blue-600" />,
      description: 'Customizable benefits to suit your needs.'
    }
  ];
  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      <div 
        className="relative bg-gray-200 min-h-[500px] flex items-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'multiply'
        }}
      >
        <div className="absolute inset-0 bg-gray-900/65" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-3xl font-bold text-white mb-6">Shape Tomorrow's Technology at DataDuck</h1>
              <p className="text-xl text-gray-100 mb-8">
                Join a dynamic team of innovators at DataDuck IT Solutions. We're not just hiring developers - we're building the future of technology solutions.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={handleCultureClick}
                  className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition duration-300"
                >
                  Our Culture
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="hidden md:block"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className=" bg-white backdrop-blur-lg p-6 rounded-lg ">
                  <Trophy className="w-8 h-8 mb-4" />
                  <h3 className="font-bold mb-2">Industry Leader</h3>
                  <p>Top-rated IT solutions provider</p>
                </div>
                <div className="bg-white backdrop-blur-lg p-6 rounded-lg ">
                  <Globe className="w-8 h-8 mb-4" />
                  <h3 className="font-bold mb-2">Global Presence</h3>
                  <p>Operations in 15+ countries</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <section ref={whyJoinUsRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Why Join DataDuck IT Solutions?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-12 h-12 text-blue-600" />,
                title: "Collaborative Culture",
                description: "Work with diverse, talented teams in an environment that promotes innovation and creativity."
              },
              {
                icon: <Award className="w-12 h-12 text-blue-600" />,
                title: "Career Growth",
                description: "Clear career paths with opportunities for advancement and skill development."
              },
              {
                icon: <Briefcase className="w-12 h-12 text-blue-600" />,
                title: "Exciting Projects",
                description: "Work on cutting-edge technologies and solve challenging problems for global clients."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center p-6"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section id="benefits" className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Employee Benefits</h2>
          <p className="text-gray-600 text-center text-lg mb-12">
            DataDuck IT Solutions offers employees top-of-the-line benefits and the flexibility to design them to fit their lifestyle.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {benefit.icon}
                  <h3 className="text-xl font-bold ml-4">{benefit.title}</h3>
                </div>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section id="referral" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">Our Referral Program</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-blue-50 p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold mb-4">How It Works</h3>
              <p className="text-gray-700 mb-6">
                Do you have a talented friend or colleague who would be interested in learning more about contract or permanent opportunities with our clients? By submitting their name through the DataDuck IT Solutions referral program, you can earn a cash bonus for each referral that we place.
              </p>
              <div className="bg-white p-6 rounded-lg">
                <p className="text-blue-600 font-bold text-xl mb-2">$1000 Bonus</p>
                <p className="text-gray-600">For every successful referral</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-blue-50 p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold mb-4">Earn Your Bonus</h3>
              <p className="text-gray-700 mb-6">
                If your referral is hired by one of our clients through DataDuck IT Solutions, you will receive <span className="font-bold">$1000.00</span> once they successfully complete 3 months at their new position.
              </p>
              <a
                href="#refer"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
              >
                Refer Someone Now
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Latest from Our Career Blog</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {careerBlogs.map((blog, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
                  <h3 className="text-xl font-bold mb-3">{blog.title}</h3>
                  <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                  <a href="#" className="text-blue-600 font-semibold hover:text-blue-800">
                    Read More →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-6 bg-gray-50">
        <div className="container mx-auto px-6">
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
export default Career;