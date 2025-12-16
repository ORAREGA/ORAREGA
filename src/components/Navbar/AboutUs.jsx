import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import backgroundImage from "../../assets/Lighting/aboutus.jpg";
import purposeImage from "../../assets/Lighting/ourpurpose.jpg";
import aboutUsImage from "../../assets/Lighting/aboutus.jpg";

const AboutUsPage = () => {
  // Remove leadership state and fetchLeadership dispatch
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.about);  // You can keep loading if needed, otherwise remove it

  useEffect(() => {
    // Removed fetchLeadership since we're not using it anymore
  }, [dispatch]);

  return (
    <div>
      {/* Hero Banner Section */}
      <section
        className="innerPageBanner relative bg-cover bg-center h-[50vh] md:h-screen"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-start items-center h-full">
            <div className="w-full text-left">
              <div className="vertical_center pl-4 md:pl-8">
                <div className="bannerTxt animate-tracking-in-contract-bck">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-semibold text-white">
                    Think IT, <span className="text-primary">Think ORAREGA</span>
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-white mt-4 animate__animated animate__fadeInUp">
                    Transform your business with ORAREGA - The Technology Navigator
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Services */}
      <section className="technicalSupportSection bg-gray-100 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-gray-900 mb-8">
            Technical Services & Support
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
            Our technical team ensures smooth IT operations through proactive support, minimizing downtime and enhancing infrastructure performance.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[ 
              "IT Infrastructure Management", 
              "Onsite Field Support", 
              "Installation & Setup Services", 
              "Annual Maintenance Contracts (AMC)", 
              "Warranty Extension Services", 
            ].map((service, index) => (
              <div key={index} className="bg-white shadow-lg p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900">{service}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section
        className="ourVisionMission py-12 md:py-16 bg-cover bg-center"
        style={{ backgroundImage: `url(${purposeImage})` }}
      >
        <div className="container mx-auto text-center grid grid-cols-1 md:grid-cols-2 gap-8 px-4 text-white">
          <div className="text-left">
            <h2 className="text-2xl sm:text-3xl font-montserrat font-semibold mb-4">Our Vision</h2>
            <p className="text-sm sm:text-base leading-relaxed mb-2">
              At ORAREGA, our vision is to become a leading force in the IT industry by delivering innovative, reliable, and future-ready technology solutions.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mb-2">
              We aim to set new standards in service excellence, empower digital growth, and build a smarter, more connected world for businesses of all sizes.
            </p>
            <p className="font-semibold mt-4 mb-1">We envision a future where:</p>
            <ul className="list-disc list-inside text-sm">
              <li>Technology fuels business success</li>
              <li>Quality service is accessible and affordable</li>
              <li>Every challenge becomes an opportunity through innovation</li>
            </ul>
          </div>

          <div className="text-left">
            <h2 className="text-2xl sm:text-3xl font-montserrat font-semibold mb-4">Our Mission</h2>
            <p className="text-sm sm:text-base leading-relaxed mb-2">
              At ORAREGA, our mission is to deliver cutting-edge IT solutions and dependable support services that empower businesses to thrive in a digital-first world.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mb-2">
              We strive to combine technical excellence, affordability, and rapid response times to become a trusted technology partner for organizations of all sizes.
            </p>
            <p className="font-semibold mt-4 mb-1">We are dedicated to:</p>
            <ul className="list-disc list-inside text-sm">
              <li>Driving innovation through reliable and scalable technology solutions</li>
              <li>Providing world-class service at a reasonable cost</li>
              <li>Ensuring the fastest possible resolution to every customer issue</li>
              <li>Building long-term relationships based on trust, transparency, and results</li>
            </ul>
          </div>
        </div>
      </section>

      {/* IT Solutions */}
      <section className="ourSolutions bg-gray-100 py-12 md:py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-gray-900 mb-8">
            IT Solutions
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6">
            Our IT solutions are designed to enhance business performance, scalability, and digital readiness. We combine deep industry knowledge with the latest technology trends to deliver secure and robust platforms that accelerate your growth.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[ 
              "Website Design & Development", 
              "Custom Software Development", 
              "Mobile Application Development", 
              "API Integration Services", 
              "CRM & ERP Implementation", 
              "Cloud Solutions", 
            ].map((solution, index) => (
              <div key={index} className="solutionItem bg-white shadow-lg p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900">{solution}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section
        className="aboutUs py-12 md:py-16 bg-cover bg-center text-white text-center mb-2"
        style={{ backgroundImage: `url(${aboutUsImage})` }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-montserrat-medium mb-8">
            About Us - ORAREGA
          </h2>
          <p className="max-w-4xl mx-auto leading-relaxed">
            At ORAREGA, we empower businesses through innovative IT solutions and dependable support services...
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
