import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUp } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
const NavLink = ({ to, children, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link
      to={to}
      className="relative py-2 px-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <span
        className={`${
          isActive ? "text-gray-200" : "text-white"
        } text-sm font-medium transition-colors duration-200`}
      >
        {children}
      </span>
      <AnimatePresence>
        {(isHovered || isActive) && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{ originX: 0 }}
            className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-gray-200"
          />
        )}
      </AnimatePresence>
    </Link>
  );
};
const ServicesDropdown = ({ isOpen, setIsOpen, servicesLinks, closeMenus }) => {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const isServicePage = servicesLinks.some(({ path }) => location.pathname === path);
  return (
    <div
      className="relative py-2 px-4"
      onMouseEnter={() => {
        setIsHovered(true);
        setIsOpen(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsOpen(false);
      }}
    >
      <span
        className={`${
          isServicePage ? "text-gray-200" : "text-white"
        } text-sm font-medium cursor-pointer transition-colors duration-200`}
      >
        Services
      </span>
      <AnimatePresence>
        {(isHovered || isServicePage) && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{ originX: 0 }}
            className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-gray-200"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 mt-2 w-48 bg-[#312D2A] rounded-md shadow-lg py-1 z-50"
          >
            {servicesLinks.map(({ path, label }) => (
              <DropdownItem
                key={path}
                to={path}
                onClick={closeMenus}
                isActive={location.pathname === path}
              >
                {label}
              </DropdownItem>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
const DropdownItem = ({ to, children, onClick, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link
      to={to}
      className="relative block px-4 py-2"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span
        className={`${
          isActive ? "text-gray-200" : "text-white"
        } text-sm transition-colors duration-200`}
      >
        {children}
      </span>
      <AnimatePresence>
        {(isHovered || isActive) && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{ originX: 0 }}
            className="absolute bottom-0 left-4 right-25 h-0.5 bg-gray-200"
          />
        )}
      </AnimatePresence>
    </Link>
  );
};
const MobileMenu = ({ isOpen, onClose, servicesLinks }) => {
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-[#312D2A] bg-opacity-95 z-50 md:hidden flex flex-col items-center"
        >
          <div className="w-full max-w-sm flex flex-col items-center pt-8 px-4">
            <div className="w-full flex flex-col items-center relative mb-8">
              <img src="/logo-dataduck.png" alt="Logo" className="h-12 w-auto mb-4" />
              <button onClick={onClose} className="absolute top-0 right-0">
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
            <nav className="flex flex-col items-center space-y-0 w-full text-md">
              <NavLink to="/" onClick={onClose}>
                Home
              </NavLink>
              <NavLink to="/about" onClick={onClose}>
                About Us
              </NavLink>
              <div className="w-full flex flex-col items-center">
                <button
                  onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                  className="relative group py-2"
                >
                  <span className="text-white text-sm font-medium">Services</span>
                  <AnimatePresence>
                    {mobileDropdownOpen && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        exit={{ scaleX: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        style={{ originX: 0 }}
                        className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-gray-200"
                      />
                    )}
                  </AnimatePresence>
                </button>
                <AnimatePresence>
                  {mobileDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-4 flex flex-col items-center space-y-4"
                    >
                      {servicesLinks.map(({ path, label }) => (
                        <NavLink key={path} to={path} onClick={onClose}>
                          {label}
                        </NavLink>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <NavLink to="/recruitment" onClick={onClose}>
                Recruitment
              </NavLink>
              <NavLink to="/career" onClick={onClose}>
                Career
              </NavLink>
              <NavLink to="/contact" onClick={onClose}>
                Contact Us
              </NavLink>
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 200);
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    setDropdownOpen(false);
    setSidebarOpen(false);
  }, [location]);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const closeMenus = () => {
    setSidebarOpen(false);
    setDropdownOpen(false);
  };
  const servicesLinks = [
    { path: "/services/remote-dba", label: "Remote DBA" },
    { path: "/services/dba-options", label: "DBA Options" },
    { path: "/services/salesforce", label: "Salesforce" },
    { path: "/services/system-admin", label: "System Admin" },
    { path: "/services/web-design", label: "Web Design" },
    { path: "/services/mobile-apps", label: "Mobile Apps" },
  ];
  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 bg-[#312D2A] text-white z-50 transition-shadow duration-300 ${
          isScrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="hidden md:flex justify-between items-center max-w-8xl mx-auto px-6 h-16">
          <img src="/logo-dataduck.png" alt="Logo" className="w-40 bg-white rounded-lg p-2" />
          <div className="flex text-sm font-medium">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <ServicesDropdown
              servicesLinks={servicesLinks}
              closeMenus={closeMenus}
              isOpen={dropdownOpen}
              setIsOpen={setDropdownOpen}
            />
            <NavLink to="/recruitment">Recruitment</NavLink>
            <NavLink to="/career">Career</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <img
                src="https://flagcdn.com/w40/us.png"
                alt="USA Flag"
                className="w-6 h-4 rounded-md"
              />
              <span className="text-xs">+1 972 784 4215</span>
            </div>
            <div className="flex items-center space-x-2">
              <img
                src="https://flagcdn.com/w40/in.png"
                alt="India Flag"
                className="w-6 h-4 rounded-md"
              />
              <span className="text-xs">+9140-48509459</span>
            </div>
            <div className="flex items-center space-x-2">
              <img
                src="https://cdn.pixabay.com/photo/2016/06/13/17/30/mail-1454731_640.png"
                alt="Email"
                className="w-6 h-6 rounded-md"
              />
              <span className="text-xs">info@dataduckitsolutions.com</span>
            </div>
          </div>
        </div>
        <div className="md:hidden flex justify-between items-center p-4">
          <div className="w-full flex justify-center relative">
            <img src="/logo-dataduck.png" alt="Logo" className="w-40 bg-white rounded-lg p-2" />
            <button
              onClick={() => setSidebarOpen(true)}
              className="absolute right-0 top-1/2 -translate-y-1/2"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>
      <div className="h-16 md:h-16"></div>
      <MobileMenu
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        servicesLinks={servicesLinks}
      />
      <AnimatePresence>
        {showScrollButton && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-5 right-5 bg-[#cb6111] hover:bg-[#cb6111] p-3 rounded-full shadow-lg transition-colors duration-200 z-40"
          >
            <ArrowUp className="w-6 h-6 text-white" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};
export default Navbar;
