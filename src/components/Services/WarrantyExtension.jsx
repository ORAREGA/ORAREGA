import React, { useState, useEffect } from 'react';
import warrantyExtensionImage from '../../assets/offers/Warranty-Extension.jpg'; // Update path if needed

const WarrantyExtensionPage = () => {
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);

  // New states for the popup form
  const [product, setProduct] = useState('');
  const [brand, setBrand] = useState('');
  const [invoiceDate, setInvoiceDate] = useState('');
  const [invoiceDateError, setInvoiceDateError] = useState(false);
  const [price, setPrice] = useState('');
  const [serialNumber, setSerialNumber] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerGST, setCustomerGST] = useState('');
  const [error, setError] = useState(false);

  const openPopup = () => setShowEnquiryPopup(true);
  const closePopup = () => setShowEnquiryPopup(false);

  const handleViewPlans = () => {
    if (!invoiceDate) {
      setInvoiceDateError(true);
      return;
    } else {
      setInvoiceDateError(false);
    }

    if (price < 1000 || price > 500000) {
      setError(true);
    } else {
      setError(false);
      alert('Form submitted successfully!');
      setShowEnquiryPopup(false);
      // Clear form fields
      setProduct('');
      setBrand('');
      setInvoiceDate('');
      setPrice('');
      setSerialNumber('');
      setCustomerName('');
      setCustomerEmail('');
      setCustomerPhone('');
      setCustomerGST('');
    }
  };

  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    const handleScroll = () => {
      elements.forEach((element) => {
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

      {/* Section 1: Hero */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <img
          src={warrantyExtensionImage}
          alt="Warranty Extension Solutions"
          className="w-full h-[700px] object-cover opacity-70"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-start pl-12">
          <h1 className="text-3xl md:text-3xl font-bold mb-4 fade-in-header">
            Extend Your Warranty, Protect Your Investment
          </h1>
          <p className="text-sm md:text-lg text-left max-w-3xl fade-in-text">
            Secure long-term coverage for your valuable assets with our comprehensive warranty extension plans.
          </p>
        </div>
      </section>

      {/* Section 2: About */}
      <section className="py-12 px-4 md:px-16 fade-in">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6">
          About Warranty Extension at Orarega Technologies
        </h2>
        <p className="text-lg leading-relaxed text-center max-w-4xl mx-auto">
          At Orarega Technologies, we offer top-tier warranty extension services to help you safeguard your equipment, devices, and assets. Our customizable plans allow you to extend coverage beyond the manufacturer’s warranty, ensuring continued protection against unforeseen issues and repair costs.
        </p>
      </section>

      {/* Section 3: Process */}
      <section className="bg-white py-12 px-4 md:px-16 fade-in">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6">
          Our Warranty Extension Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[{
            title: "Assessment of Existing Coverage",
            desc: "We begin by assessing your current warranty status and identifying areas where additional coverage may be needed."
          }, {
            title: "Customizable Warranty Plans",
            desc: "Based on your needs, we offer tailored warranty extension plans that provide protection for critical parts, devices, and systems."
          }, {
            title: "Easy Activation & Support",
            desc: "Our team helps you activate the extended warranty quickly and provides ongoing support to ensure your coverage remains valid."
          }].map(({ title, desc }) => (
            <div key={title} className="text-center p-6 rounded-lg shadow-xl hover:scale-105 hover:border-2 hover:border-blue-500 transition-all duration-300">
              <h3 className="text-2xl font-medium mb-2">{title}</h3>
              <p className="text-lg leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Highlights */}
      <section className="py-12 px-4 md:px-16 fade-in">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">
          Explore Our Warranty Extension Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[{
            title: "Comprehensive Coverage",
            desc: "Our warranty extensions offer comprehensive coverage for a wide range of products, from electronics to industrial equipment."
          }, {
            title: "Affordable Plans",
            desc: "Choose from a variety of affordable warranty extension plans designed to suit your budget and coverage needs."
          }, {
            title: "Flexible Terms",
            desc: "Enjoy the flexibility of customized warranty extension terms, so you only pay for the coverage you truly need."
          }].map(({ title, desc }) => (
            <div key={title} className="text-center p-6 rounded-lg shadow-xl hover:scale-105 hover:border-2 hover:border-blue-500 transition-all duration-300">
              <h3 className="text-2xl font-medium mb-2">{title}</h3>
              <p className="text-lg leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 px-6 md:px-12 bg-gray-200 fade-in">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Extend Your Warranty Coverage?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Contact us today to explore our reliable and flexible warranty extension plans designed to give your assets long-term protection and peace of mind.
          </p>
          <button
            onClick={openPopup}
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold  transition"
          >
            Get Enquiry
          </button>
        </div>
      </section>
 {/* Popup form with customer details section */}
      {showEnquiryPopup && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={closePopup}
        >
          <div
            className="bg-white p-6 rounded-lg w-full max-w-2xl relative overflow-y-auto max-h-[90vh] sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
              aria-label="Close popup"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-4 text-center">Explore Plans for Your Device</h2>

            {/* Customer Details Section */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Customer Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Customer Name</label>
                  <input
                    type="text"
                    className="border border-gray-300 rounded px-4 py-2 w-full"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input
                    type="email"
                    className="border border-gray-300 rounded px-4 py-2 w-full"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    type="text"
                    className="border border-gray-300 rounded px-4 py-2 w-full"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Customer GST Number</label>
                  <input
                    type="text"
                    className="border border-gray-300 rounded px-4 py-2 w-full"
                    value={customerGST}
                    onChange={(e) => setCustomerGST(e.target.value)}
                    placeholder="Enter your GST number"
                  />
                </div>
              </div>
            </div>

            {/* Product Details Section (ordered as per request) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Product Type</label>
                <select
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                >
                  <option value="">Select Product</option>
                  <option value="laptop">Laptop</option>
                  <option value="printer">Printer</option>
                  <option value="mobile">Mobile</option>
                  <option value="desktop">Desktop</option>
                  <option value="cctv">CCTV</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Product Make</label>
                <select
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                >
                  <option value="">Select Brand</option>
                  <option value="hp">HP</option>
                  <option value="dell">Dell</option>
                  <option value="wect">Wect</option>
                  <option value="samsung">Samsung</option>
                  <option value="lenovo">Lenovo</option>
                </select>
              </div>
            </div>

            {/* Other Product Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Price</label>
                <input
                  type="number"
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Serial Number</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                  value={serialNumber}
                  onChange={(e) => setSerialNumber(e.target.value)}
                />
              </div>
            </div>

            {/* Date and Upload Invoice */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Purchase Date</label>
                <input
                  type="date"
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                  value={invoiceDate}
                  onChange={(e) => setInvoiceDate(e.target.value)}
                />
                {invoiceDateError && (
                  <p className="text-red-600 text-sm mt-1">Please select a purchase date.</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Upload Invoice</label>
                <input
                  type="file"
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                  accept="image/*,application/pdf"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                onClick={handleViewPlans}
                className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-6 py-2 rounded-full font-bold"
              >
                Submit
              </button>
            </div>

            {/* Error message */}
            {error && (
              <p className="mt-4 text-red-600 text-center">
                Device Price entered is outside the plan purchase limit.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default WarrantyExtensionPage;
