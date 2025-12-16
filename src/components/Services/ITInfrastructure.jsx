import React, { useEffect, useState } from 'react';
import banner6 from "../../assets/banner6.png"; // Update with correct path

const ITInfrastructurePage = () => {
  // Scroll Animation for Smooth Effects
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
    handleScroll(); // Trigger on page load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // State for enquiry popup and selected services
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);

  // List of IT Infrastructure services
  const services = [

    "IT infrastructure",
     "AMC",
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

  return (
    <div className="bg-gray-100 text-gray-800">

      {/* Section 1: Hero Section with Image and Unique Text */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <img
          src={banner6}
          alt="IT Infrastructure Solutions"
          className="w-full h-[700px] object-cover opacity-70"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-start pl-12">
          <h1 className="text-3xl md:text-3xl font-bold mb-4 animate__animated animate__fadeIn">
            Power Your Business with Robust IT Infrastructure
          </h1>
          <p className="text-sm md:text-lg text-left max-w-3xl animate__animated animate__fadeIn animate__delay-1s">
            Comprehensive IT infrastructure solutions to ensure scalability, security, and optimal performance for your business operations.
          </p>
        </div>
      </section>

      {/* Section 2: About IT Infrastructure at Orarega Technologies */}
      <section className="py-12 px-4 md:px-16 fade-in">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6">
          About IT Infrastructure at Orarega Technologies
        </h2>
        <p className="text-lg leading-relaxed text-center max-w-4xl mx-auto">
          At Orarega Technologies, we specialize in providing state-of-the-art IT infrastructure solutions. From cloud computing to network management, our services ensure your business remains agile, secure, and future-proof. We offer scalable, reliable, and cost-effective solutions to meet the growing demands of your organization.
        </p>
      </section>

      {/* Section 3: Our IT Infrastructure Development Process */}
      <section className="bg-white py-12 px-4 md:px-16 fade-in">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6">
          Our IT Infrastructure Development Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center p-6 rounded-lg shadow-xl border-2 border-gray-300">
            <h3 className="text-2xl font-medium mb-2">Assessment & Planning</h3>
            <p className="text-lg leading-relaxed">
              We begin by assessing your current infrastructure and understanding your business needs, enabling us to develop a tailored infrastructure strategy.
            </p>
          </div>
          <div className="text-center p-6 rounded-lg shadow-xl border-2 border-gray-300">
            <h3 className="text-2xl font-medium mb-2">Design & Architecture</h3>
            <p className="text-lg leading-relaxed">
              We design and architect scalable, high-performance IT infrastructure solutions that ensure security, reliability, and efficiency for your operations.
            </p>
          </div>
          <div className="text-center p-6 rounded-lg shadow-xl border-2 border-gray-300">
            <h3 className="text-2xl font-medium mb-2">Implementation & Integration</h3>
            <p className="text-lg leading-relaxed">
              We implement and integrate all necessary hardware, software, and cloud solutions, ensuring a seamless transition and minimal downtime.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Technologies We Use */}
      <section className="bg-gray-900 text-white py-12 px-4 md:px-16 fade-in">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">
          Technologies We Use for IT Infrastructure Development
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center p-6 rounded-lg shadow-xl border-2 border-gray-300">
            <h3 className="text-2xl font-medium mb-2">Amazon Web Services (AWS)</h3>
            <p className="text-lg leading-relaxed">
              A powerful suite of cloud computing services that provides everything from computing power to storage, ideal for scalable infrastructure solutions.
            </p>
          </div>
          <div className="text-center p-6 rounded-lg shadow-xl border-2 border-gray-300">
            <h3 className="text-2xl font-medium mb-2">Microsoft Azure</h3>
            <p className="text-lg leading-relaxed">
              A robust cloud platform that enables businesses to deploy and manage applications, data, and services in a secure and scalable environment.
            </p>
          </div>
          <div className="text-center p-6 rounded-lg shadow-xl border-2 border-gray-300">
            <h3 className="text-2xl font-medium mb-2">Google Cloud</h3>
            <p className="text-lg leading-relaxed">
              A cloud computing platform offering cutting-edge tools for data management, machine learning, and application deployment at scale.
            </p>
          </div>
          <div className="text-center p-6 rounded-lg shadow-xl border-2 border-gray-300">
            <h3 className="text-2xl font-medium mb-2">Cisco Systems</h3>
            <p className="text-lg leading-relaxed">
              Leading networking hardware and software solutions to build secure, reliable, and scalable IT networks.
            </p>
          </div>
          <div className="text-center p-6 rounded-lg shadow-xl border-2 border-gray-300">
            <h3 className="text-2xl font-medium mb-2">VMware</h3>
            <p className="text-lg leading-relaxed">
              A platform for virtualization that allows businesses to create and manage virtual environments, improving efficiency and scalability.
            </p>
          </div>
          <div className="text-center p-6 rounded-lg shadow-xl border-2 border-gray-300">
            <h3 className="text-2xl font-medium mb-2">Linux</h3>
            <p className="text-lg leading-relaxed">
              An open-source operating system that provides a stable, secure, and customizable platform for servers and enterprise environments.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Explore Our IT Infrastructure Solutions */}
      <section className="py-12 px-4 md:px-16 fade-in">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">
          Explore Our IT Infrastructure Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center p-6 rounded-lg shadow-xl border-2 border-gray-300">
            <h3 className="text-2xl font-medium mb-2">Cloud Infrastructure</h3>
            <p className="text-lg leading-relaxed">
              Scalable and flexible cloud solutions to reduce costs and improve efficiency with services like AWS, Azure, and Google Cloud.
            </p>
          </div>
          <div className="text-center p-6 rounded-lg shadow-xl border-2 border-gray-300">
            <h3 className="text-2xl font-medium mb-2">Network Infrastructure</h3>
            <p className="text-lg leading-relaxed">
              Build and maintain a secure, reliable, and high-performance network infrastructure tailored to your organization’s needs.
            </p>
          </div>
          <div className="text-center p-6 rounded-lg shadow-xl border-2 border-gray-300">
            <h3 className="text-2xl font-medium mb-2">Data Center Solutions</h3>
            <p className="text-lg leading-relaxed">
              Efficient data center solutions to store, process, and manage data securely, supporting your business continuity needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-6 md:px-12 bg-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Start Your IT Infrastructure Journey Today!
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Contact us to discuss how we can help build scalable, secure, and custom IT infrastructure solutions tailored to your business needs.
          </p>
          <button
            onClick={openPopup}
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold  transition"
          >
            Get Enquiry
          </button>
        </div>
      </section>
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

export default ITInfrastructurePage;
