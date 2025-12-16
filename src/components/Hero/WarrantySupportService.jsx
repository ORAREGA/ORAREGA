import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  openEnquiryPopup,
  openWarrantyForm,
  closeAllPopups,
  toggleServiceSelection,
} from "../../Redux/Featuers/supportSlice";

// Images
import onsitefluid from "../../assets/Offers/onsitefield.jpg";
import ITinfrastructure from "../../assets/offers/ITInfrastructure.jpg";
import WarrantyExtension from "../../assets/offers/Warranty-Extension.jpg";
import INS from "../../assets/offers/ins.jpg";
import RepairDepo from "../../assets/offers/RepairDepo.jpg";
import banner6 from "../../assets/banner6.png";

const WarrantySupportServices = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  const dispatch = useDispatch();
  const { showEnquiryPopup, showWarrantyForm, selectedServices } = useSelector(
    (state) => state.support
  );

  // Warranty form fields (still local)
  const [product, setProduct] = useState("");
  const [brand, setBrand] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [invoiceDateError, setInvoiceDateError] = useState(false);
  const [price, setPrice] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (window.$ && window.$(".owl-carousel").owlCarousel) {
      window.$(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        margin: 10,
        nav: true,
        dots: false,
        responsive: { 640: { items: 2 }, 1024: { items: 3 } },
      });
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && headingRef.current) {
          headingRef.current.classList.add("animate-tracking-in-expand");
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  const cards = [
    {
      id: 1,
      title: "Onsite Field Support",
      img: onsitefluid,
      alt: "Onsite Field Support",
      desc: "Custom solutions to optimize field management. Enhance operational efficiency and minimize downtime.",
      cardLink: "/book-services",
      enquiryPopup: false,
    },
    {
      id: 2,
      title: "IT Infrastructure",
      img: banner6,
      alt: "IT Infrastructure",
      desc: "Build secure, scalable IT infrastructures for your business. Ensure seamless performance and reliability.",
      cardLink: "/it-infrastructure",
      enquiryPopup: true,
    },
    {
      id: 3,
      title: "Warranty Extension",
      img: WarrantyExtension,
      alt: "Warranty Extension",
      desc: "Extend your product's life with comprehensive warranty support. Keep your systems running smoothly.",
      cardLink: "/warranty-extension",
      enquiryPopup: true,
    },
    {
      id: 4,
      title: "Installation Support",
      img: INS,
      alt: "Installation Support",
      desc: "Comprehensive warranty support to ensure flawless product performance. Keep your business running without interruptions.",
      cardLink: "/book-services",
      enquiryPopup: false,
    },
    {
      id: 5,
      title: "Repair Depot",
      img: RepairDepo,
      alt: "Repair Depot",
      desc: "Expert repair services to maintain your products. Ensure long-term performance with our maintenance solutions.",
      cardLink: "/repair-depo",
      enquiryPopup: false,
    },
    {
      id: 6,
      title: "AMC",
      img: ITinfrastructure,
      alt: "AMC Services",
      desc: "Comprehensive annual maintenance plans for your IT assets. Ensure peace of mind with our proactive service contracts.",
      cardLink: "/amc",
      enquiryPopup: true,
    },
  ];

  const handleButtonClick = (e, card) => {
    e.preventDefault();
    if (card.title === "Warranty Extension") {
      dispatch(openWarrantyForm());
    } else if (card.enquiryPopup) {
      dispatch(openEnquiryPopup([card.title]));
    } else {
      window.location.href = card.cardLink;
    }
  };

  const closePopup = () => {
    dispatch(closeAllPopups());
    // Reset local form data
    setProduct("");
    setBrand("");
    setInvoiceDate("");
    setInvoiceDateError(false);
    setPrice("");
    setSerialNumber("");
    setError(false);
  };

  const handleViewPlans = () => {
    if (!invoiceDate) {
      setInvoiceDateError(true);
      return;
    }
    if (+price < 1000 || +price > 100000) {
      setError(true);
      return;
    }
    alert(
      "Your device details were submitted successfully. We’ll share plans with you shortly."
    );
    closePopup();
  };

  return (
    <section ref={sectionRef} className="our-services mt-0 pt-0 pb-0">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <h3
            ref={headingRef}
            className="text-3xl font-bold text-black mt-0 mb-4"
          >
            Support & Services
          </h3>
        </div>
        <div className="owl-carousel owl-theme">
          {cards.map((card) => (
            <div
              key={card.id}
              className="item bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full"
            >
              <Link
                to={card.cardLink}
                className="no-underline"
                style={{ color: "inherit" }}
              >
                <img
                  src={card.img}
                  alt={card.alt}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-black">
                    {card.title}
                  </h3>
                  <p className="text-gray-700 mt-2">{card.desc}</p>
                </div>
              </Link>
              <div className="px-6 pb-4">
                {card.title === "Repair Depot" ? (
                  <span className="text-blue-500 mt-4 inline-block cursor-default">
                    Get Enquiry
                  </span>
                ) : (
                  <button
                    onClick={(e) => handleButtonClick(e, card)}
                    className="text-blue-500 mt-4 inline-block bg-transparent border-none cursor-pointer p-0"
                  >
                    {card.enquiryPopup || card.title === "Warranty Extension"
                      ? "Get Enquiry"
                      : "Book Service"}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* === Enquiry Popup === */}
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
                alert("Thank you for your enquiry. We will contact you soon!");
                closePopup();
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm w-full">
                <label>
                  Customer Name*:
                  <input
                    type="text"
                    required
                    className="border p-2 w-full mt-1 text-sm"
                  />
                </label>
                <label>
                  Organization Name:
                  <input
                    type="text"
                    className="border p-2 w-full mt-1 text-sm"
                  />
                </label>
                <label>
                  Email*:
                  <input
                    type="email"
                    required
                    className="border p-2 w-full mt-1 text-sm"
                  />
                </label>
                <label>
                  Contact Number:
                  <input
                    type="tel"
                    pattern="[0-9+ ]*"
                    className="border p-2 w-full mt-1 text-sm"
                  />
                </label>
              </div>
              <fieldset className="my-4 text-sm">
                <legend className="font-semibold mb-2">Select Services:</legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-48 overflow-auto border p-2 rounded">
                  {cards
                    .filter((c) => c.enquiryPopup)
                    .map((c) => (
                      <label
                        key={c.title}
                        className="flex items-center space-x-2 truncate"
                      >
                        <input
                          type="checkbox"
                          value={c.title}
                          checked={selectedServices.includes(c.title)}
                          onChange={() =>
                            dispatch(toggleServiceSelection(c.title))
                          }
                        />
                        <span>{c.title}</span>
                      </label>
                    ))}
                </div>
              </fieldset>
              <label className="block mb-4 text-sm">
                Message:
                <textarea
                  className="border p-2 w-full mt-1 text-sm resize-none"
                  rows="3"
                />
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

      {/* === Warranty Form Popup === */}
      {showWarrantyForm && (
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
            <h2 className="text-2xl font-bold mb-4 text-center">
              Explore Plans for Your Device
            </h2>

            {/* Warranty Form Content (unchanged) */}
            {/* ... You already had this logic, keeping it as-is ... */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Product Type
                </label>
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
                <label className="block text-sm font-medium text-gray-700">
                  Product Make
                </label>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Purchase Date
                </label>
                <input
                  type="date"
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                  value={invoiceDate}
                  onChange={(e) => {
                    setInvoiceDate(e.target.value);
                    setInvoiceDateError(false);
                  }}
                />
                {invoiceDateError && (
                  <p className="text-red-600 text-sm mt-1">
                    Please select a purchase date.
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Upload Invoice
                </label>
                <input
                  type="file"
                  accept="image/*,application/pdf"
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Price
                </label>
                <input
                  type="number"
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                    setError(false);
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Serial Number
                </label>
                <input
                  type="text"
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                  value={serialNumber}
                  onChange={(e) => setSerialNumber(e.target.value)}
                />
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={handleViewPlans}
                className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-6 py-2 rounded-full font-bold"
              >
                Submit
              </button>
            </div>
            {error && (
              <p className="mt-4 text-red-600 text-center">
                Device Price entered is outside the plan purchase limit.
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
export default WarrantySupportServices;
