import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Testinomial from './Components/Testinomial';
import Aboutus from "./Components/Aboutus";
import About from "./pages/About";
import RemoteDBA from "./pages/RemoteDBA";
import DBAOptions from "./pages/DBAOptions";
import Salesforce from "./pages/Salesforce";
import SystemAdmin from "./pages/SystemAdmin";
import WebDesign from "./pages/WebDesign";
import MobileApps from "./pages/MobileApps";
import Recruitment from "./pages/Recruitment";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Loader from "./Components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading && <Loader />}
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Testinomial />
                <Aboutus />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/services/remote-dba" element={<RemoteDBA />} />
          <Route path="/services/dba-options" element={<DBAOptions />} />
          <Route path="/services/salesforce" element={<Salesforce />} />
          <Route path="/services/system-admin" element={<SystemAdmin />} />
          <Route path="/services/web-design" element={<WebDesign />} />
          <Route path="/services/mobile-apps" element={<MobileApps />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;