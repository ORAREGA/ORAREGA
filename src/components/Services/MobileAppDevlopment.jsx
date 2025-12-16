import React, { useEffect, useState } from 'react';
import mobileAppDevelopmentImage from '../../assets/offers/mobileApp.jpg'; // Update path if needed

const MobileAppDevelopmentPage = () => {
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);

  // Full list of services for checkbox options
  const services = [
    'Web Development',
    'CRM/ERP Development',
    'Software Testing & Development',
    'Mobile App Development',
    'API Integration',

  ];

  const openPopup = () => setShowEnquiryPopup(true);
  const closePopup = () => setShowEnquiryPopup(false);

  const handleServiceCheckboxChange = (service) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  // Scroll animation effect
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    const handleScroll = () => {
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          element.classList.add('fade-in-visible');
        } else {
          element.classList.remove('fade-in-visible');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gray-100 text-gray-800">

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <img
          src={mobileAppDevelopmentImage}
          alt="Mobile App Development"
          className="w-full h-[700px] object-cover opacity-70"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-start pl-12">
          <h1 className="text-3xl md:text-3xl font-bold mb-4 animate__animated animate__zoomIn">
            Next-Generation Mobile App Development
          </h1>
          <p className="text-sm md:text-lg text-left max-w-3xl animate__animated animate__zoomIn animate__delay-1s">
            Delivering smooth, innovative mobile solutions that keep your business ahead in a rapidly evolving digital landscape.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-4 md:px-16 fade-in">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6">
         Mobile App Solutions at Orarega Technologies
        </h2>
        <p className="text-lg leading-relaxed text-center max-w-4xl mx-auto">
          At Orarega Technologies, we craft mobile applications tailored to the needs of today’s agile businesses. Our experienced team develops apps for both iOS and Android, ensuring flawless performance across all devices. We employ cutting-edge technologies and
          industry-leading practices to create mobile apps that are secure, scalable, and high-performing.
        </p>
      </section>

      {/* Process Section */}
      <section className="bg-white py-12 px-4 md:px-16 fade-in">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6">
          Our Proven Mobile App Development Workflow
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center p-6 rounded-lg shadow-xl hover:scale-105 hover:border-2 hover:border-gray-500 transition-all duration-300">
            <div className="text-3xl mb-4 text-gray-600">
              <i className="fas fa-search"></i>
            </div>
            <h3 className="text-2xl font-medium mb-2">Research & Planning</h3>
            <p className="text-lg leading-relaxed text-gray-700">
            We begin by gathering insights into your goals, end users, and functional requirements to shape a well-defined development strategy.            </p>
          </div>
          <div className="text-center p-6 rounded-lg shadow-xl hover:scale-105 hover:border-2 hover:border-gray-500 transition-all duration-300">
            <div className="text-3xl mb-4 text-gray-600">
              <i className="fas fa-pencil-alt"></i>
            </div>
            <h3 className="text-2xl font-medium mb-2">UI/UX Design & Prototyping</h3>
            <p className="text-lg leading-relaxed text-gray-700">
            Our creative team designs intuitive, attractive interfaces with a strong emphasis on user experience. Early-stage prototypes ensure your expectations align with the final product.            </p>
          </div>
          <div className="text-center p-6 rounded-lg shadow-xl hover:scale-105 hover:border-2 hover:border-gray-500 transition-all duration-300">
            <div className="text-3xl mb-4 text-gray-600">
              <i className="fas fa-cogs"></i>
            </div>
            <h3 className="text-2xl font-medium mb-2">Coding & Quality Testing</h3>
            <p className="text-lg leading-relaxed text-gray-700">
             We develop the application using the most modern technologies and tools, performing extensive testing to validate its performance, security, and usability before launch.            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-12 px-4 md:px-16 fade-in">
  <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">
    Key Technologies at Orarega Technologies
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

    {/* Frontend Frameworks */}
    <div className="text-center p-6 rounded-lg shadow-xl hover:scale-105 hover:border-2 hover:border-gray-500 transition-all duration-300 bg-gray-700">
      <h3 className="text-2xl font-medium mb-2">Frontend Frameworks</h3>
      <p className="text-lg leading-relaxed text-gray-300">
        Flutter, React Native, Swift (iOS), Kotlin (Android)
      </p>
    </div>

    {/* Backend Technologies */}
    <div className="text-center p-6 rounded-lg shadow-xl hover:scale-105 hover:border-2 hover:border-gray-500 transition-all duration-300 bg-gray-700">
      <h3 className="text-2xl font-medium mb-2">Backend Technologies</h3>
      <p className="text-lg leading-relaxed text-gray-300">
        Node.js, Django, Firebase, Ruby on Rails
      </p>
    </div>

    {/* Databases */}
    <div className="text-center p-6 rounded-lg shadow-xl hover:scale-105 hover:border-2 hover:border-gray-500 transition-all duration-300 bg-gray-700">
      <h3 className="text-2xl font-medium mb-2">Databases</h3>
      <p className="text-lg leading-relaxed text-gray-300">
        Firebase Realtime DB, PostgreSQL, MongoDB, SQLite
      </p>
    </div>

    {/* APIs & Networking */}
    <div className="text-center p-6 rounded-lg shadow-xl hover:scale-105 hover:border-2 hover:border-gray-500 transition-all duration-300 bg-gray-700">
      <h3 className="text-2xl font-medium mb-2">APIs & Networking</h3>
      <p className="text-lg leading-relaxed text-gray-300">
        REST, GraphQL, gRPC
      </p>
    </div>

    {/* DevOps & CI/CD */}
    <div className="text-center p-6 rounded-lg shadow-xl hover:scale-105 hover:border-2 hover:border-gray-500 transition-all duration-300 bg-gray-700">
      <h3 className="text-2xl font-medium mb-2">DevOps & CI/CD</h3>
      <p className="text-lg leading-relaxed text-gray-300">
        Fastlane, GitHub Actions, Bitrise
      </p>
    </div>

    {/* Testing Tools */}
    <div className="text-center p-6 rounded-lg shadow-xl hover:scale-105 hover:border-2 hover:border-gray-500 transition-all duration-300 bg-gray-700">
      <h3 className="text-2xl font-medium mb-2">Testing Tools</h3>
      <p className="text-lg leading-relaxed text-gray-300">
        Appium, XCTest, Espresso
      </p>
    </div>

  </div>
</section>


      {/* Mobile App Solutions */}
      <section className="py-12 px-4 md:px-16 fade-in">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6">
          Explore Our Mobile App Solutions
        </h2>
        <p className="max-w-3xl mx-auto text-center text-lg text-gray-700 leading-relaxed">
          We specialize in delivering Custom Mobile Applications, E-Commerce Platforms, On-Demand Service Apps, 
          Healthcare & Fitness Solutions, and FinTech & Banking Applications tailored to meet your business needs.
        </p>
      </section>


      {/* Contact Section */}
      <section className="py-12 px-6 md:px-12 bg-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Start Your Mobile App Development Journey Today!</h2>
          <p className="text-lg text-gray-700 mb-8">
            Contact us to discuss how we can help build innovative and custom mobile applications tailored to your business needs.
          </p>
          <button
            onClick={openPopup}
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold  transition"
          >
            Get Enquiry
          </button>
        </div>
      </section>

      {/* Enquiry Popup Modal */}
      {showEnquiryPopup && (
  <div
    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
    onClick={closePopup}
  >
    <div
      className="bg-white p-6 rounded-lg w-full max-w-xl relative overflow-y-auto max-h-[90vh] sm:p-8"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={closePopup}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
        aria-label="Close popup"
      >
        &times;
      </button>

      <h2 className="text-xl font-bold mb-4">Service Enquiry</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert('Thank you for your enquiry. We will contact you soon!');
          setShowEnquiryPopup(false);
          setSelectedServices([]);
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm w-full">
          <label>
            Customer Name*:
            <input type="text" required className="border p-2 w-full mt-1 text-sm" />
          </label>
          <label>
            Organization Name:
            <input type="text" className="border p-2 w-full mt-1 text-sm" />
          </label>
          <label>
            Email*:
            <input type="email" required className="border p-2 w-full mt-1 text-sm" />
          </label>
          <label>
            Contact Number:
            <input type="tel" pattern="[0-9+ ]*" className="border p-2 w-full mt-1 text-sm" />
          </label>
        </div>

        <fieldset className="my-4 text-sm">
          <legend className="font-semibold mb-2">Select Services:</legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-48 overflow-auto border p-2 rounded">
            {services.map((service) => (
              <label key={service} className="flex items-center space-x-2 truncate">
                <input
                  type="checkbox"
                  value={service}
                  checked={selectedServices.includes(service)}
                  onChange={() => handleServiceCheckboxChange(service)}
                />
                <span>{service}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <label className="block mb-4 text-sm">
          Message:
          <textarea className="border p-2 w-full mt-1 text-sm resize-none" rows="3" />
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

    </div>
  );
};

export default MobileAppDevelopmentPage;
