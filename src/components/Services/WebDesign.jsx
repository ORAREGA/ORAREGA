import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import websiteDesignImage from '../../assets/offers/webdesign.jpg';

const WebsiteDesignPage = () => {
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);

  const openPopup = () => setShowEnquiryPopup(true);
  const closePopup = () => setShowEnquiryPopup(false);

  const services = [
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

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative bg-black text-white">
        <img
          src={websiteDesignImage}
          alt="Website Design"
          className="w-full h-[700px] object-cover opacity-70"
        />
        <div
          className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start bg-black bg-opacity-40"
          data-aos="fade-up"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-left pl-8 text-white">
           Professional Website Design Services
          </h1>
          <p className="mt-4 text-lg md:text-xl text-left pl-8 max-w-3xl text-white">
            Build responsive, high-impact websites that captivate visitors and drive business growth.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4">About Orarega Technologies Website Design Services</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At Orarega Technologies, we specialize in delivering custom website design solutions that empower businesses to establish a strong and lasting online presence. 
            In today's digital world, your website is often the first impression your audience has of your brand — and we make sure it's a great one.
          </p>
          <p>We understand that every business is unique, and so are its digital needs. Thats why we dont rely on templates or one-size-fits-all approaches. Our experienced team of designers and developers works closely with each client to create fully customized, visually stunning,
          and highly functional websites that reflect your brand identity and engage your target audience.</p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 px-6 md:px-12 bg-gray-100">
        <div className="max-w-6xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Partner with Orarega Technologies?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg" data-aos="zoom-in">
              <h3 className="text-xl font-bold mb-2">Mobile-Responsive Designs</h3>
              <p>We ensure your website looks and performs flawlessly across smartphones, tablets, and desktops.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg" data-aos="zoom-in" data-aos-delay="100">
              <h3 className="text-xl font-bold mb-2">Tailored to Your Brand</h3>
              <p>Every website we build is uniquely designed to match your brand’s personality, values, and goals.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg" data-aos="zoom-in" data-aos-delay="200">
              <h3 className="text-xl font-bold mb-2">Exceptional User Experience (UX)</h3>
              <p>We focus on intuitive layouts and clean navigation, creating a smooth and satisfying experience for your visitors.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg" data-aos="zoom-in" data-aos-delay="300">
              <h3 className="text-xl font-bold mb-2">SEO-Optimized Structure</h3>
              <p>Our websites are built with SEO best practices in mind, giving you a strong foundation for better visibility on Google and other search engines.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-12 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Web Design Process</h2>
          <div className="space-y-6">
            {[
              { step: '1.', title: 'Discovery & Strategy', desc: 'We begin by understanding your business, your audience, and what you want your website to achieve.' },
              { step: '2.', title: 'Design Mockups & Prototyping', desc: 'We create visual wireframes and design concepts for your feedback and approval.' },
              { step: '3.', title: 'Development & Integration', desc: 'Once approved, we build your site using modern web technologies — ensuring speed, security, and responsiveness.' },
              { step: '4.', title: 'Launch & Continuous Support', desc: 'We deploy your website and provide ongoing technical support, updates, and maintenance.' },
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <span className="text-black-500 text-3xl font-bold mr-4">{item.step}</span>
                <div>
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-6 md:px-12 bg-gray-200">
        <div className="max-w-6xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-6">Ready to Design Your Dream Website?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Contact Orarega Technologies to bring your website vision to life.
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

export default WebsiteDesignPage;
