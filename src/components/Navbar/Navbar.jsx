import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import Logo from "../../assets/logo.png";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleMobileMenu,
  closeMobileMenu,
  setDropdownOpen,
  closeDropdown,
  setScrolling,
} from "../../Redux/Featuers/Navbar";

const NavLinks = [
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
      { title: "AMC", path: "/amc" },
    ],
  },
  {
    id: 3,
    title: "Book Services",
    path: "/book-services",
  },
  {
    id: 4,
    title: "Blogs",
    path: "/blogs",
  },
];

const Navbar = () => {
  const location = useLocation();
  const logoRef = useRef(null);
  const dispatch = useDispatch();
  const { dropdownOpen, mobileMenuOpen, scrolling } = useSelector(
    (state) => state.navbar
  );

  const alwaysOpaqueRoutes = [
    "/careers",
    "/contact-us",
    "/blogs",
    "/privacy-policy",
    "/terms-and-condition",
    "/login",
  ];
  const isAlwaysOpaque = alwaysOpaqueRoutes.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      dispatch(setScrolling(window.scrollY > 50));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch]);

  const toggleMobileMenuHandler = () => {
    dispatch(toggleMobileMenu());
  };

  const handleDropdownClick = (title) => {
    dispatch(setDropdownOpen(dropdownOpen === title ? null : title));
  };

  const closeMobileMenuAndResetDropdown = () => {
    dispatch(closeMobileMenu());
    dispatch(closeDropdown());
  };

  const closeDropdownOnClick = () => {
    dispatch(closeDropdown());
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 ${
        scrolling || isAlwaysOpaque
          ? "bg-black bg-opacity-90"
          : "bg-transparent"
      } text-white transition-all duration-300`}
    >
      <div className="flex justify-between items-center mx-3 my-6 sm:mx-6 md:mx-12">
        {/* Logo */}
        <div className="flex flex-col items-center ml-4 md:ml-8">
          <Link to="/">
            <motion.img
              src={Logo}
              alt="Company Logo"
              ref={logoRef}
              className="w-[149px] h-[39px] object-contain hover:scale-110 transition-transform duration-300"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-10 mr-6">
          {NavLinks.map((link, index) => (
            <motion.div
              key={link.id}
              className="relative flex items-center"
              onMouseEnter={() =>
                link.dropdown && dispatch(setDropdownOpen(link.title))
              }
              onMouseLeave={() => link.dropdown && dispatch(closeDropdown())}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {link.dropdown ? (
                <>
                  <span
                    className={`text-[16px] font-bold tracking-wide text-white transition duration-200 ${
                      location.pathname === link.path
                        ? "text-blue-400"
                        : "hover:text-blue-400"
                    } hover:scale-110 cursor-pointer`}
                  >
                    {link.title}
                  </span>
                  <button
                    className="ml-2 focus:outline-none"
                    onClick={() => handleDropdownClick(link.title)}
                    aria-haspopup="true"
                    aria-expanded={dropdownOpen === link.title}
                    aria-label={`Toggle dropdown for ${link.title}`}
                  >
                    <FiChevronDown
                      className={`transform transition-transform duration-200 ${
                        dropdownOpen === link.title ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>
                  {dropdownOpen === link.title && link.links && (
                    <div className="absolute top-full left-0 w-60 bg-black bg-opacity-80 text-white rounded-lg shadow-lg py-2 z-50">
                      {link.links.map((dropdownLink) => (
                        <Link
                          key={dropdownLink.title}
                          to={dropdownLink.path}
                          className={`block px-4 py-2 text-white font-normal hover:text-blue-400 transition duration-200 ${
                            location.pathname === dropdownLink.path
                              ? "text-blue-400"
                              : ""
                          }`}
                          onClick={closeDropdownOnClick}
                        >
                          {dropdownLink.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={link.path}
                  className={`text-[16px] font-bold tracking-wide text-white hover:text-blue-400 transition duration-200 ${
                    location.pathname === link.path ? "text-blue-400" : ""
                  } hover:scale-110`}
                >
                  {link.title}
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMobileMenuHandler}
            className="text-white text-2xl hover:text-blue-400 transition duration-200 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden flex flex-col items-center bg-black bg-opacity-90 text-white p-4 space-y-6">
          {NavLinks.map((link) => (
            <div key={link.id} className="relative w-full">
              {link.dropdown ? (
                <>
                  <span
                    className="w-full text-left text-white font-semibold text-lg hover:text-blue-400 transition duration-200 cursor-pointer"
                    onClick={() => handleDropdownClick(link.title)}
                  >
                    {link.title}
                  </span>
                  <button
                    className="w-full text-left mt-2 focus:outline-none flex items-center justify-between"
                    onClick={() => handleDropdownClick(link.title)}
                    aria-haspopup="true"
                    aria-expanded={dropdownOpen === link.title}
                    aria-label={`Toggle dropdown for ${link.title}`}
                  >
                    <span></span>
                    <FiChevronDown
                      className={`transform transition-transform duration-200 ${
                        dropdownOpen === link.title ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>
                  {dropdownOpen === link.title && link.links && (
                    <div className="bg-black bg-opacity-80 text-white rounded-lg shadow-lg py-2 w-full mt-2">
                      {link.links.map((dropdownLink) => (
                        <Link
                          key={dropdownLink.title}
                          to={dropdownLink.path}
                          className={`block px-4 py-2 text-white font-normal hover:text-blue-400 transition duration-200 ${
                            location.pathname === dropdownLink.path
                              ? "text-blue-400"
                              : ""
                          }`}
                          onClick={closeMobileMenuAndResetDropdown}
                        >
                          {dropdownLink.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={link.path}
                  className="w-full text-left text-white font-semibold text-lg hover:text-blue-400 transition duration-200"
                  onClick={closeMobileMenuAndResetDropdown}
                >
                  {link.title}
                </Link>
              )}
            </div>
          ))}
        </div>  
      )}
    </nav>
  );
};
export default Navbar;
