import React, { useEffect, useState } from 'react';
import softwareTestingImage from '../../assets/offers/Softwaretesting.jpg';

const SoftwareTestingDevelopmentPage = () => {
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);

  const serviceOptions = [
    'Web Development',
    'CRM/ERP Development',
    'Software Testing & Development',
    'Mobile App Development',
    'API Integration',
  ];

  const handleServiceCheckboxChange = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const openPopup = () => setShowEnquiryPopup(true);
  const closePopup = () => setShowEnquiryPopup(false);

  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    const handleScroll = () => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          el.classList.add('fade-in-visible');
        } else {
          el.classList.remove('fade-in-visible');
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
          src={softwareTestingImage}
          alt="Software Testing and Development Solutions"
          className="w-full h-[700px] object-cover opacity-70"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start pl-6 md:pl-12 fade-in">
          <h1 className="text-3xl font-bold mb-4 animate__animated animate__zoomIn">
            Building the Future of Software Development & Testing
          </h1>
        </div>
      </section>

      {/* About + Services Section */}
      <section className="py-12 px-4 md:px-16 fade-in">
        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">

          {/* About */}
          <div className="flex-1 bg-white p-4">
            <h2 className="text-2xl font-semibold text-center mb-4 animate__animated animate__fadeInUp">
              Our Expertise
            </h2>
            <p className="text-base text-center leading-relaxed mb-4 animate__animated animate__zoomIn max-w-xl mx-auto">
              At Oraega Technologies, we blend innovation and precision to offer high-quality software development and testing solutions that ensure performance, security, and reliability.
            </p>
          </div>

          {/* Services */}
          <div className="flex-1 bg-white text-black p-6 rounded-md">
            <h2 className="text-2xl font-semibold text-center mb-6 animate__animated animate__fadeInUp">
              Services We Offer
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Web Development',
                'CRM/ERP Development',
                'Software Testing & Development',
                'Mobile App Development',
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="bg-gray-200 rounded-md p-3 text-center text-sm hover:bg-blue-600 transition duration-300"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Workflow Section */}
      <section className="bg-white py-12 px-4 md:px-16 fade-in">
        <h2 className="text-4xl font-semibold text-center mb-6 animate__animated animate__fadeInUp">
          Our Workflow
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: 'Requirement Analysis & Planning',
              description: 'Stakeholder collaboration, tech selection, roadmap & test planning.',
            },
            {
              title: 'Design & Implementation',
              description: 'UI/UX design, agile development, code review & version control.',
            },
            {
              title: 'Testing & Optimization',
              description: 'Manual, automated, performance & security testing.',
            },
            {
              title: 'Final Delivery & Support',
              description: 'Deployment, monitoring, feedback integration, and maintenance.',
            },
          ].map((step, idx) => (
            <div key={idx} className="text-center p-6 rounded-lg shadow-xl hover:scale-105 hover:border-2 hover:border-blue-500 transition-all duration-300">
              <h3 className="text-2xl font-medium mb-2">{step.title}</h3>
              <p className="text-lg leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Solutions */}
      <section className="py-12 px-4 md:px-16 fade-in">
        <h2 className="text-4xl font-semibold text-center mb-8 animate__animated animate__fadeInUp">
          Innovative Software Solutions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            'Custom Software Development',
            'Automated Testing Solutions',
            'Cloud-Based Testing',
          ].map((title, idx) => (
            <div key={idx} className="text-center p-6 rounded-lg shadow-xl hover:scale-105 hover:border-2 hover:border-blue-500 transition-all duration-300">
              <h3 className="text-2xl font-medium mb-2">{title}</h3>
              <p className="text-lg leading-relaxed">Tailored to meet your digital goals and ensure quality across all platforms.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 px-6 md:px-12 bg-white fade-in">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your Software Quality?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Connect with us to explore tailored development and testing solutions.
          </p>
          <button
            onClick={openPopup}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition"
          >
            Get Enquiry
          </button>
        </div>
      </section>

      {/* Enquiry Modal */}
      {showEnquiryPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={closePopup}>
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
                  {serviceOptions.map((service) => (
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

export default SoftwareTestingDevelopmentPage;
