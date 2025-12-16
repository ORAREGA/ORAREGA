import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  openEnquiryPopup,
  closeAllPopups,
  toggleServiceSelection,
} from "../../Redux/Featuers/supportSlice";

// Images
import websiteDesignImage from "../../assets/offers/webdesign.jpg";
import apiIntegrationImage from "../../assets/offers/API.jpg";
import softwareTestingImage from "../../assets/offers/softwaretesting.jpg";
import crmSolutionsImage from "../../assets/offers/CRM.jpg";
import mobileAppDevelopmentImage from "../../assets/offers/MobileApp.jpg";

const DigitalTransformation = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  const dispatch = useDispatch();
  const { showEnquiryPopup, selectedServices } = useSelector(
    (state) => state.support
  );

  const services = [
    "Website Design",
    "Software Development & Testing",
    "CRM Solutions",
    "API Integration",
    "Mobile App Development",
  ];

  const cards = [
    {
      id: 1,
      title: "Website Design",
      img: websiteDesignImage,
      alt: "Website Design",
      desc: "Stunning, user-friendly websites to enhance your online presence.",
      link: "/website-design",
    },
    {
      id: 2,
      title: "API Integration",
      img: apiIntegrationImage,
      alt: "API Integration",
      desc: "Enhance functionality by connecting systems with third-party APIs.",
      link: "/api-integration",
    },
    {
      id: 3,
      title: "Software Development & Testing",
      img: softwareTestingImage,
      alt: "Software Testing",
      desc: "Bug-free, user-friendly software that meets your business needs.",
      link: "/software-testing",
    },
    {
      id: 4,
      title: "CRM Solutions",
      img: crmSolutionsImage,
      alt: "CRM Solutions",
      desc: "Streamline customer relationships and improve communication and sales.",
      link: "/crm-solutions",
    },
    {
      id: 5,
      title: "Mobile App Development",
      img: mobileAppDevelopmentImage,
      alt: "Mobile App Development",
      desc: "Create engaging mobile apps for both iOS and Android platforms.",
      link: "/mobile-app-development",
    },
  ];

  useEffect(() => {
    if (window.$ && window.$(".owl-carousel").owlCarousel) {
      window.$(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
          640: { items: 2 },
          1024: { items: 3 },
        },
      });
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          headingRef.current.classList.add("animate-tracking-in-expand");
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your enquiry. We will contact you soon!");
    dispatch(closeAllPopups());
  };

  return (
    <section ref={sectionRef} className="our-services py-8 mt-0">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <h3
            ref={headingRef}
            className="text-3xl font-bold text-black mt-0 mb-4"
          >
            Digital Transformation
          </h3>
        </div>

        <div className="owl-carousel owl-theme">
          {cards.map((card) => (
            <div
              key={card.id}
              className="item bg-white shadow-lg rounded-lg overflow-hidden flex flex-col"
            >
              <Link
                to={card.link}
                className="no-underline"
                style={{ color: "inherit" }}
              >
                <img
                  src={card.img}
                  alt={card.alt}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-black">{card.title}</h3>
                  <p className="text-gray-700 mt-2">{card.desc}</p>
                </div>
              </Link>
              <div className="px-6 pb-4">
                <button
                  onClick={() => dispatch(openEnquiryPopup([card.title]))}
                  className="text-blue-500 mt-2"
                >
                  Get Enquiry
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enquiry Popup */}
      {showEnquiryPopup && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => dispatch(closeAllPopups())}
        >
          <div
            className="bg-white p-6 rounded-lg w-full max-w-xl relative overflow-y-auto max-h-[90vh] sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => dispatch(closeAllPopups())}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
              aria-label="Close popup"
            >
              &times;
            </button>

            <h2 className="text-xl font-bold mb-4">Service Enquiry</h2>

            <form onSubmit={handleFormSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm w-full">
                <label>
                  Customer Name*:
                  <input
                    type="text"
                    required
                    className="border p-2 w-full mt-1 text-sm"
                  />
                </label>
                <label>
                  Organization Name:
                  <input
                    type="text"
                    className="border p-2 w-full mt-1 text-sm"
                  />
                </label>
                <label>
                  Email*:
                  <input
                    type="email"
                    requiredn
                    className="border p-2 w-full mt-1 text-sm"
                  />
                </label>
                <label>
                  Contact Number:
                  <input
                    type="tel"
                    pattern="[0-9+ ]*"
                    className="border p-2 w-full mt-1 text-sm"
                  />
                </label>
              </div>

              <fieldset className="my-4 text-sm">
                <legend className="font-semibold mb-2">Select Services:</legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-48 overflow-auto border p-2 rounded">
                  {services.map((service) => (
                    <label
                      key={service}
                      className="flex items-center space-x-2 truncate"
                    >
                      <input
                        type="checkbox"
                        value={service}
                        checked={selectedServices.includes(service)}
                        onChange={() =>
                          dispatch(toggleServiceSelection(service))
                        }
                      />
                      <span>{service}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <label className="block mb-4 text-sm">
                Message:
                <textarea
                  className="border p-2 w-full mt-1 text-sm resize-none"
                  rows="3"
                />
              </label>

              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-sm"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default DigitalTransformation;
