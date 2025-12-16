import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Hero/Home";
import AboutUs from "./components/Navbar/AboutUs";
import ContactUs from "./components/Navbar/Contact";
import Careers from "./components/Navbar/Career";
import SoftwareDevelopment from "./components/Services/OnsiteFieldSupport";
import WebsiteDesignPage from "./components/Services/WebDesign";
import BlogList from "./components/Navbar/Blogs";
import Privacypolicy from "./components/Footer/Privacypolicy";
import TermsAndConditions from "./components/Footer/Terms&Conditions";
// Import the ScrollToTop component
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.";
import ITInfrastructurePage from "./components/Services/ITInfrastructure";
import APIIntegrationPage from "./components/Services/ApiIntegration";
import OnsiteFluidSupport from "./components/Services/OnsiteFieldSupport";
import SoftwareTestingPage from "./components/Services/SoftwareTesting";
import WarrantyExtensionPage from "./components/Services/WarrantyExtension";
import CRMPage from "./components/Services/CRM";
import MobileAppDevelopmentPage from "./components/Services/MobileAppDevlopment";
import InsPage from "./components/Services/INS";
import BookServicePage from "./components/Navbar/BookServices";
import RepairDepoPage from './components/Services/RepairDepo'; // Update with correct path
import AMCPage from "./components/Services/Amc";



const App = () => {
  return (
    <BrowserRouter>
      {/* ScrollToTop should be placed outside Routes to catch route changes */}
      <ScrollToTop />
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/careers" element={<Careers />} /> {/* Fixed path to lowercase */}
        <Route path="/blogs" element={<BlogList/>} />
        <Route path="/OnsiteFluidSupport" element={<OnsiteFluidSupport />} />
        <Route path="/website-design" element={<WebsiteDesignPage />} />
        <Route path="/it-infrastructure" element={<ITInfrastructurePage />} />
        <Route path="/api-integration" element={<APIIntegrationPage/>} />
        <Route path="/software-testing" element={<SoftwareTestingPage/>} />
        <Route path="/warranty-extension" element={<WarrantyExtensionPage/>}/>
        <Route path="/crm-solutions" element={<CRMPage/>} />
        <Route path="/mobile-app-development" element={<MobileAppDevelopmentPage/>} />
        <Route path="/ins" element={<InsPage/>} />
       <Route path="/book-services" element={<BookServicePage/>}/>
        <Route path="/repair-depo" element={<RepairDepoPage />} />
        <Route path="/privacy-policy" element={<Privacypolicy />} />
        <Route path="/terms-and-condition" element={<TermsAndConditions />} />
        <Route path="/amc" element={<AMCPage/>} />
      
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
};

export default App;
