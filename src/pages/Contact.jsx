import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, MapPin, Send, ChevronRight } from 'lucide-react';
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',email: '',subject: '', message: ''
  });
  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };
  const contactCards = [
    {
      icon: <Phone className="w-6 h-6 text-blue-600" />,
      title: "Call Us",
      content: ["+9140-48509459", "972 784 4215"]
    },
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: "Email Us",
      content: ["info@dataduckitsolutions.com", "sales@dataduckitsolutions.com"]
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-blue-600" />,
      title: "Live Chat",
      content: ["Chat with our support team"],
      action: <button className="text-blue-600 font-medium mt-2 flex items-center">
        Start Chat <ChevronRight className="w-4 h-4 ml-1" />
      </button>
    }
  ];
  const officeLocations = [
    {
      type: "Headquarters",
      title: "India Office",
      address: [
        "DataDuck IT Solutions Pvt. Ltd.",
        "H.No. 2-1/224, Ground Floor",
        "North NCL Avenue Colony",
        "Sai Baba Temple Road",
        "Kompally, Hyderabad, Telangana",
        "India – 500014"
      ]
    },
    {
      type: "Regional Office",
      title: "US Office",
      address: [
        "12 Towne Commons way,",
        "#13 Cincinnati,",
        "Ohio 45215"
      ]
    }
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#312D2A] py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white inline-flex items-center gap-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            We're available 24/7
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">
            Let's Build Something
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Together</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transform your business with cutting-edge technology solutions
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 -mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactCards.map((card, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
              <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                {card.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
              {card.content.map((line, i) => (
                <p key={i} className="text-gray-600 mt-2">{line}</p>
              ))}
              {card.action}
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">Our Global Offices</h2>
            {officeLocations.map((office, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-900 mb-4">
                  {office.type}
                </span>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{office.title}</h3>
                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-blue-900 mt-1" />
                  <p className="text-gray-600">
                    {office.address.map((line, i) => (
                      <React.Fragment key={i}>
                        {line}<br />
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { name: 'name', label: 'Full Name', type: 'text' },
                { name: 'email', label: 'Email Address', type: 'email' },
                { name: 'subject', label: 'Subject', type: 'text' },
                { name: 'message', label: 'Message', type: 'textarea' }
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {field.label} {field.name !== 'subject' && <span className="text-red-500">*</span>}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      name={field.name}
                      rows="6"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200"
                      onChange={handleChange}
                      value={formData[field.name]}
                    />
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      required={field.name !== 'subject'}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 "
                      onChange={handleChange}
                      value={formData[field.name]}
                    />
                  )}
                </div>
              ))}
              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-4 px-6 rounded-xl hover:bg-blue-800 flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;