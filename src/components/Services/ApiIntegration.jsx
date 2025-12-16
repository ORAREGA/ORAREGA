import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  openPopup,
  closePopup,
  toggleService,
  resetServices,
} from '../../Redux/Featuers/amcSlice'; // ✅ import Redux actions
import apiIntegrationImage from '../../assets/offers/API.jpg';

const APIIntegrationPage = () => {
  const dispatch = useDispatch();
  const showEnquiryPopup = useSelector((state) => state.amc.showEnquiryPopup);
  const selectedServices = useSelector((state) => state.amc.selectedServices);

  const services = [
    'Web Development',
    'CRM/ERP Development',
    'Software Testing & Development',
    'Mobile App Development',
    'API Integration',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your enquiry. We will contact you soon!');
    dispatch(closePopup());
    dispatch(resetServices());
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
          src={apiIntegrationImage}
          alt="API Integration"
          className="w-full h-[700px] object-cover opacity-70"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start bg-black bg-opacity-40" data-aos="fade-up">
          <h1 className="text-2xl md:text-3xl font-bold text-left pl-8 text-white">
            Seamless API Integration Solutions for Modern Businesses
          </h1>
          <p className="mt-4 text-lg md:text-xl text-left pl-8 max-w-3xl text-white">
            Unlock the full potential of your business through efficient, scalable, and secure API integrations.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4">Empowering Your Business with API Integrations</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our API integration services help you build a connected ecosystem, enabling seamless communication between your apps and third-party services. Whether you're automating workflows or expanding your system’s functionality, we’ve got you covered.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 px-6 md:px-12 bg-gray-100">
        <div className="max-w-6xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Orarega Technologies for Your API Integrations?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Custom API Solutions',
                desc: 'We design API integrations that align with your unique business needs and workflows.',
              },
              {
                title: 'End-to-End Integration',
                desc: 'From planning and development to deployment and support, we handle it all for seamless API connections.',
              },
              {
                title: 'Scalability & Flexibility',
                desc: 'Our solutions grow with your business, providing scalable API integration that adapts to changing requirements.',
              },
              {
                title: 'Robust Security',
                desc: 'We ensure your data is transferred securely between systems with the latest encryption protocols and standards.',
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-lg shadow-lg" data-aos="zoom-in" data-aos-delay={i * 100}>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-6 md:px-12 bg-gray-200">
        <div className="max-w-6xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-6">Start Your API Integration Journey Today!</h2>
          <p className="text-lg text-gray-700 mb-8">
            Get in touch with us to transform your business through powerful and seamless API integrations.
          </p>
          <button
            onClick={() => dispatch(openPopup())}
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition"
          >
            Get Enquiry
          </button>
        </div>
      </section>

      {/* Enquiry Popup Modal */}
      {showEnquiryPopup && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => dispatch(closePopup())}
        >
          <div
            className="bg-white p-6 rounded-lg w-full max-w-xl relative overflow-y-auto max-h-[90vh] sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => dispatch(closePopup())}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
              aria-label="Close popup"
            >
              &times;
            </button>

            <h2 className="text-xl font-bold mb-4">Service Enquiry</h2>

            <form onSubmit={handleSubmit}>
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
                        checked={selectedServices.includes(service)}
                        onChange={() => dispatch(toggleService(service))}
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

export default APIIntegrationPage;
