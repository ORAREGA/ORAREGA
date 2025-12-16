import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Logo from "../../assets/banner5.png";

// Service Categories
const serviceCategories = [
  {
    id: 1,
    title: "Digital Transformation",
    dropdown: true,
    links: [
      { title: "Website Design", path: "/website-design" },
      { title: "CRM Solutions", path: "/crm-solutions" },
      { title: "API Integration", path: "/api-integration" },
      { title: "Software Development & Testing", path: "/software-testing" },
      { title: "Mobile App Development", path: "/mobile-app-development" },
    ],
  },
  {
    id: 2,
    title: "Support & Services",
    dropdown: true,
    links: [
      { title: "Field Support", path: "/OnsiteFluidSupport" },
      { title: "IT infrastructure", path: "/it-infrastructure" },
      { title: "Warranty Extensition", path: "/warranty-extension" },
      { title: "Repair Depot", path: "/repair-depo" },
      { title: "Installation Support", path: "/ins" },
      { title: "AMC", path: "/asm" },
    ],
  },
  {
    id: 3,
    title: "Book Services",
    dropdown: false,
    path: "/book-services",
  },
];

const Footer = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="relative text-white py-10 px-4 sm:px-8 lg:px-16" style={{ backgroundColor: "#1D1955" }}>
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${Logo})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.2,
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
        {/* Registered Office */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold mb-3">Registered Office</h2>
          <div
            className="cursor-pointer hover:text-Second text-sm sm:text-base"
            onClick={() => window.open("https://maps.app.goo.gl/NRsnv4AnycP2FMrJ6", "_blank")}
          >
            <p>
              <span className="font-bold">ORAREGA Technologies Pvt Ltd</span>
              <br />
              CIN: U95111PN2025PTC238490
              <br />
              Office 202, Viva Icon Building (A Wing), Opp. D Mart, Hinjewadi Phase 1, Pune - 411057
            </p>
          </div>
        </div>

        {/* Company Section */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold mb-3">Company</h2>
          {[
            "About Us",
            "Careers",
            "Terms and Condition",
            "Privacy Policy",
            "Refund and Cancellation Policy",
            "Payment Policy",
          ].map((item) => (
            <div key={item} className="py-1 hover:text-Second text-sm sm:text-base">
              <Link to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}>
                {item}
              </Link>
            </div>
          ))}
        </div>

        {/* Services Section */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold mb-3">Product & Services</h2>
          {serviceCategories.map((category) =>
            category.dropdown ? (
              <div key={category.id} className="mb-3">
                <div
                  className="cursor-pointer flex items-center gap-2 hover:text-Second text-sm sm:text-base"
                  onClick={() =>
                    setOpenDropdown(openDropdown === category.id ? null : category.id)
                  }
                >
                  {category.title}
                  {openDropdown === category.id ? (
                    <FiChevronUp size={18} />
                  ) : (
                    <FiChevronDown size={18} />
                  )}
                </div>
                {openDropdown === category.id && (
                  <div className="pl-4 mt-1">
                    {category.links.map((link) => (
                      <div key={link.title} className="py-1 hover:text-Second text-sm sm:text-base">
                        <Link to={link.path}>{link.title}</Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div key={category.id} className="py-1 hover:text-Second text-sm sm:text-base">
                <Link to={category.path}>{category.title}</Link>
              </div>
            )
          )}
        </div>

        {/* Follow Us */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold mb-3">Follow Us</h2>
          <div className="flex items-center space-x-6 mb-6">
            <FaInstagram
              size={24}
              className="cursor-pointer hover:text-Second"
              onClick={() => window.open("https://www.instagram.com/ora.rega", "_blank")}
              aria-label="Instagram"
            />
            <FaFacebook
              size={24}
              className="cursor-pointer hover:text-Second"
              onClick={() => window.open("https://facebook.com", "_blank")}
              aria-label="Facebook"
            />
            <FaLinkedin
              size={24}
              className="cursor-pointer hover:text-Second"
              onClick={() => window.open("https://www.linkedin.com/company/orarega-techniologies-pvt-ltd", "_blank")}
              aria-label="LinkedIn"
            />
          </div>

          <Link to="/contact-us">
            <button className="bg-gradient-to-r from-Second to-Third hover:bg-cyan-800 text-white px-6 py-2 rounded-full text-sm sm:text-base transition-transform transform hover:scale-105">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-8 border-t-2 border-Four relative z-10" />

      {/* Copyright */}
      <p className="text-center text-xs sm:text-sm relative z-10">
        © Copyright 2022 <span className="font-bold">ORAREGA Technologies Pvt Ltd</span> - All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
