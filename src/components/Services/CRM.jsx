import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AOS from 'aos';
import 'aos/dist/aos.css';
import crmImage from '../../assets/Offers/CRM.jpg';

import {
  openPopup,
  closePopup,
  toggleService,
  resetServices,
} from '../../Redux/Featuers/amcSlice'; // Adjust path if needed

const CRMPage = () => {
  const dispatch = useDispatch();
  const showEnquiryPopup = useSelector((state) => state.amc.showEnquiryPopup);
  const selectedServices = useSelector((state) => state.amc.selectedServices);

  const serviceOptions = [
    "Web Development",
    "CRM/ERP Development",
    "Software Testing & Development",
    "Mobile App Development",
    'API Integration',
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const handleServiceCheckboxChange = (title) => {
    dispatch(toggleService(title));
  };

  const handleOpenPopup = () => dispatch(openPopup());
  const handleClosePopup = () => dispatch(closePopup());
  const handleResetServices = () => dispatch(resetServices());

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">

      {/* Hero Section */}
      <section className="relative bg-black text-white">
        <img
          src={crmImage}
          alt="CRM Solutions"
          className="w-full h-[700px] object-cover opacity-70"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start bg-black bg-opacity-40" data-aos="fade-up">
          <h1 className="text-2xl md:text-3xl font-bold text-left pl-8 text-white">
            Transform Customer Engagement with Smart CRM Solutions
          </h1>
          <p className="mt-4 text-lg md:text-xl text-left pl-8 max-w-3xl text-white">
            Efficiently manage interactions, boost sales, and drive business growth with Orarega's CRM expertise.
          </p>
        </div>
      </section>

      {/* About CRM Section */}
      <section className="py-12 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4">CRM Services by Orarega Technologies </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At Orarega Technologies, we offer end-to-end Customer Relationship Management (CRM) solutions tailored to your unique business needs.
            Our CRM services help build stronger customer relationships, drive sales, and increase productivity with smarter automation.
          </p>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-12 px-6 md:px-12 bg-gray-100">
        <div className="max-w-6xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-6 text-center">What We Offer in Our CRM Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Custom CRM Development',
                desc: 'CRM solutions tailored specifically to your business processes and customer lifecycle.',
              },
              {
                title: 'CRM Integration Services',
                desc: 'Integrate with Outlook, Gmail, WhatsApp, Slack, payment gateways, and more.',
              },
              {
                title: 'Cloud-Based CRM Solutions',
                desc: 'Access customer data securely from anywhere – ideal for remote or field teams.',
              },
              {
                title: 'Sales & Marketing Automation',
                desc: 'Automate lead assignments, email follow-ups, drip campaigns, and performance tracking.',
              },
              {
                title: 'Analytics & Reporting',
                desc: 'Detailed dashboards to track performance, customer behavior, and marketing insights.',
              },
              {
                title: 'User Training & Support',
                desc: 'We provide hands-on training and long-term technical support for your CRM solution.',
              },
            ].map((item, index) => (
              <div className="p-6 bg-white rounded-lg shadow-lg" data-aos="zoom-in" data-aos-delay={index * 100} key={index}>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CRM Development Process */}
      <section className="py-12 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-6 text-center">Our CRM Development Process</h2>
          <div className="space-y-6">
            {[
              {
                step: '1.',
                title: 'Requirement Gathering & Strategy',
                desc: 'We start by identifying your business challenges and CRM goals.',
              },
              {
                step: '2.',
                title: 'Custom Design & Configuration',
                desc: 'We configure your CRM to match your internal workflows and engagement strategy.',
              },
              {
                step: '3.',
                title: 'Integration & Go-Live',
                desc: 'We connect your CRM to other platforms and assist in a smooth rollout.',
              },
              {
                step: '4.',
                title: 'Training & Ongoing Support',
                desc: 'Your team is trained and supported long after CRM deployment.',
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <span className="text-blue-500 text-3xl font-bold mr-4">{item.step}</span>
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
          <h2 className="text-3xl font-bold mb-6">Transform Your Customer Relationships Today!</h2>
          <p className="text-lg text-gray-700 mb-8">
            Get in touch with us to implement a CRM solution that drives growth and improves customer engagement.
          </p>
          <button
            onClick={handleOpenPopup}
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
          onClick={handleClosePopup}
        >
          <div
            className="bg-white p-6 rounded-lg w-full max-w-xl relative overflow-y-auto max-h-[90vh] sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClosePopup}
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
                handleClosePopup();
                handleResetServices();
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

export default CRMPage;
