import React from "react";
import infrastructureImage from '../../assets/offers/ITInfrastructure.jpg';
import { useDispatch, useSelector } from "react-redux";
import {
  openPopup,
  closePopup,
  toggleService,
  resetServices,
} from "../../Redux/Featuers/amcSlice"; // Adjust the path as needed

const services = ["IT infrastructure", "AMC"];

const AMCPage = () => {
  const dispatch = useDispatch();
  const showEnquiryPopup = useSelector((state) => state.amc.showEnquiryPopup);
  const selectedServices = useSelector((state) => state.amc.selectedServices);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your enquiry. We will contact you soon!");
    dispatch(closePopup());
    dispatch(resetServices());
  };

  return (
    <div>
      {/* Hero Banner Section */}
      <section
        className="innerPageBanner relative bg-cover bg-center h-[50vh] md:h-screen"
        style={{ backgroundImage: `url(${infrastructureImage})` }}
      >
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-start items-center h-full">
            <div className="w-full text-left">
              <div className="vertical_center pl-4 md:pl-8">
                <div className="bannerTxt animate-tracking-in-contract-bck">
                  <h1 className="text-3xl sm:text-3xl font-semibold text-white">
                    Annual Maintenance Contract (AMC)
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-white mt-4">
                    Reliable IT Support to Keep Your Business Running Smoothly
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-gray-100 py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-8">
            At ORAREGA, our AMC services are designed to provide continuous,
            worry-free maintenance and support for your IT infrastructure and
            hardware. Whether you're a small business or a large enterprise, our
            AMC ensures that your systems remain up-to-date, secure, and fully
            operational all year round.
          </p>
        </div>
      </section>

      {/* What’s Included Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center font-montserrat text-gray-900 mb-10">
            What’s Included in Our AMC Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Preventive Maintenance",
                desc: "Regular health checks to detect and prevent issues before they impact your operations.",
              },
              {
                title: "Break-Fix Support",
                desc: "Fast and efficient repair services for hardware failures and software issues.",
              },
              {
                title: "Hardware & Software Coverage",
                desc: "AMC coverage includes desktops, laptops, printers, networking equipment, and licensed software support.",
              },
              {
                title: "On-Site & Remote Support",
                desc: "Our skilled engineers provide both on-site visits and remote troubleshooting for quick resolutions.",
              },
              {
                title: "Priority Service Response",
                desc: "Enjoy priority access to our support team, minimizing your downtime during critical situations.",
              },
              {
                title: "Spare Parts Management (Optional)",
                desc: "We manage and supply genuine spare parts as part of extended contracts.",
              },
              {
                title: "Detailed Reporting",
                desc: "Receive periodic reports and insights about system health, performance, and maintenance history.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 shadow-md p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose ORAREGA Section */}
      <section className="py-12 md:py-16 bg-gray-100">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold font-montserrat text-gray-900 mb-6">
            Why Choose ORAREGA for AMC?
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-800 text-lg font-medium max-w-xl mx-auto text-left">
            {[
              "Trusted by businesses across industries",
              "Certified and experienced technical team",
              "Customized AMC plans as per business needs",
              "Cost-effective and reliable support",
            ].map((reason, idx) => (
              <li key={idx}>{reason}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-6 md:px-12 bg-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Get Reliable AMC Services for Your IT Infrastructure
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Contact us to discuss your maintenance needs and let us create a
            custom AMC plan that ensures your systems stay secure, stable, and
            supported year-round.
          </p>
          <button
            onClick={() => dispatch(openPopup())}
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
                        value={service}
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

export default AMCPage;
