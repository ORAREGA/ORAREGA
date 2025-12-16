import React, { useState, useEffect } from "react";
import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.png";
import banner4 from "../../assets/banner4.png";
import banner5 from "../../assets/banner5.png";
import DigitalTransformation from "./DigitalTransformation";
import Repair from "./Repair";
import Ourpartners from "./Ourpatners";
import Ourservices from "./WarrantySupportService";
import backgroundImage from "../../assets/dots-section6.png";
import backgroundImage3 from "../../assets/footprintimg.png";
import Footprint from "./Footprint";

// Global reset of margins and paddings
const globalResetCSS = `
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
  }
`;

const Home = () => {
  const banners = [
    {
      src: banner1,
      title: "Banner 1",
      // content: (
      //   <div>
      //     <h3 className="banner-heading">We're all about Excellence</h3>
      //     <h4 className="banner-title">in IT Infrastructure Management</h4>
      //     <p className="banner-text">Creating value in every customer experience, every day</p>
      //   </div>
      // ),
    },
    {
      src: banner2,
      title: "Banner 2",
      // content: (
      //   <div>
      //     <h3 className="banner-heading">We're Energized by</h3>
      //     <h4 className="banner-title">Experience in IT Solutions</h4>
      //     <p className="banner-text">Supporting critical business applications - We are your trusted partners</p>
      //   </div>
      // ),
    },
    {
      src: banner3,
      title: "Banner 3",
      // content: (
      //   <div>
      //     <h3 className="banner-heading">We're Proud of our extensive</h3>
      //     <h4 className="banner-title">Service Footprint</h4>
      //     <p className="banner-text">
      //       We are present countrywide, even in remote locations - <br />
      //       We are there when you need us
      //     </p>
      //   </div>
      // ),
    },
    {
      src: banner4,
      title: "Banner 4",
      // content: (
      //   <div>
      //     <h3 className="banner-heading">We're Passionate about our</h3>
      //     <h4 className="banner-title">robust Service Delivery model</h4>
      //     <p className="banner-text">Onsite, Remote & Hybrid service delivery - We are customer-centric</p>
      //   </div>
      // ),
    },
    {
      src: banner5,
      title: "Banner 5",
      // content: (
      //   <div>
      //     <h3 className="banner-heading">We're Excited about our</h3>
      //     <h4 className="banner-title">Service Management</h4>
      //     <p className="banner-text">Enabled by technology and expertise - We power your business</p>
      //   </div>
      // ),
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 4000); // Image change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      <style>{globalResetCSS}</style>

      <div className="relative w-full h-[450px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden">
        <div className="w-full h-full relative">
          <img
            src={banners[currentIndex].src}
            alt={banners[currentIndex].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute left-4 right-4 sm:left-6 sm:right-auto top-1/2 transform -translate-y-1/2 text-white p-2 sm:p-4 md:p-6 lg:p-8 xl:p-12 max-w-xl text-center sm:text-left">
            {banners[currentIndex].content}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {banners.map((_, index) => (
          <label key={index} className="mx-2">
            <input
              type="radio"
              name="banner"
              checked={currentIndex === index}
              onChange={() => setCurrentIndex(index)}
              className="form-radio text-white"
            />
          </label>
        ))}
      </div>

      <section
        className="offering-section"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          margin: 0,
          padding: 0,
        }}
      >
        <DigitalTransformation />
      </section>

      <section className="our-services bg-gray-50" style={{ margin: 0, padding: 0 }}>
        <Ourservices />
      </section>

      <section className="reapir-section bg-white" style={{ margin: 0, padding: 0 }}>
        <Repair />
      </section>

      <section className="how-it-works-section bg-white" style={{ margin: 0, padding: 0 }}>
        <Ourpartners />
      </section>

      <section
        className="how-it-works-section bg-gray-50"
        style={{
          backgroundImage: `url(${backgroundImage3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          margin: 0,
        }}
      >
        <Footprint />
      </section>

  

      {/* Responsive text size for banners */}
      <style>
        {`
          .banner-heading {
            font-size: 1.25rem;
            font-weight: 600;
            font-family: 'Montserrat', sans-serif;
          }
          .banner-title {
            font-size: 2rem;
            font-weight: 700;
            font-family: 'Montserrat', sans-serif;
          }
          .banner-text {
            font-size: 1rem;
            font-family: 'Montserrat', sans-serif;
          }

          @media (max-width: 1024px) {
            .banner-heading { font-size: 1.125rem; }
            .banner-title { font-size: 1.75rem; }
            .banner-text { font-size: 0.95rem; }
          }

          @media (max-width: 768px) {
            .banner-heading { font-size: 1rem; }
            .banner-title { font-size: 1.5rem; }
            .banner-text { font-size: 0.875rem; }
          }

          @media (max-width: 480px) {
            .banner-heading { font-size: 0.9rem; }
            .banner-title { font-size: 1.25rem; }
            .banner-text { font-size: 0.8rem; }
          }
        `}
      </style>
    </div>
  );
};

export default Home;
