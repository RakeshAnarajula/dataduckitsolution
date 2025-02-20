import { Building2, MapPin, Facebook, MessageCircle, Linkedin, Twitter, Instagram, Phone, Mail } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-[#312D2A] text-white py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-9xl mx-auto container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 ml-8 md:ml-16">
          <div className="space-y-6">
            <img
              src="/logo-dataduck.png"
              alt="DataDuck Logo"
              className="w-48 bg-white rounded-lg p-2"
            />
            <p className="leading-relaxed">
              DataDuck IT Solutions services include providing clients with contract staffing on an individual or project basis. Skilled consultants develop and maintain application systems, manage large projects, and lead strategic planning initiatives.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-xl uppercase text-[#ABA7A6]">India Office</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                <p className="font-semibold">DataDuck IT Solutions</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                <p>H.No. 2-1/224, Ground Floor North NCL Avenue Colony, Sai Baba Temple Road Kompally, Hyderabad, Telangana</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                <p>+9140-48509459</p>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                <p>info@dataduckitsolutions.com</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-xl uppercase text-[#ABA7A6]">US Office</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                <p className="font-semibold">DataDuck IT Solutions</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                <p>12 Towne Commons way, #13 Cincinnati, Ohio 45215.</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                <p>972 784 4215 / 330 409 3420</p>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                <p>info@dataduckitsolutions.com</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-xl text-[#ABA7A6]">Explore More</h3>
            <div className="space-y-2">
              <div className="pt-4 space-y-3">
                <a href="#" className="block hover:underline">
                  Home
                </a>
                <a href="#" className="block hover:underline">
                  Career
                </a>
                <a href="#" className="block hover:underline">
                  Services
                </a>
                <a href="#" className="block hover:underline">
                  About us
                </a>
              </div>
            </div>
            <div className="flex gap-4 mt-8">
              <a href="#" className="text-white hover:opacity-80 transition-opacity">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-white hover:opacity-80 transition-opacity">
                <MessageCircle size={24} />
              </a>
              <a href="#" className="text-white hover:opacity-80 transition-opacity">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-white hover:opacity-80 transition-opacity">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-white hover:opacity-80 transition-opacity">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 ml-8 md:ml-16">
            <div>
              ©2025 Dataduckitsolutions/ All Rights Reserved
            </div>
            <div>
              Designed & Developed by{" "}
              <a
                href="https://www.virtutechsolutions.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Virtu Tech Solutions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
