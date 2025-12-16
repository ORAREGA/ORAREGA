import React, { useState } from 'react';
import laptopImg from '../../../src/assets/Lighting/laptop.png';
import desktopImg from '../../../src/assets/Lighting/desktop.png';
import printerImg from '../../../src/assets/Lighting/printer.png';

const services = [
  { title: "Laptop Repair", image: laptopImg },
  { title: "Desktop Repair", image: desktopImg },
  { title: "Printer Repair", image: printerImg },
];

const Repair = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openSections, setOpenSections] = useState({
    customer: false,
    address: false,
    product: false,
  });

  const [selectedService, setSelectedService] = useState(null);

  const toggleSection = (key) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-black mb-10">Repair Services</h1>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-32 w-auto mx-auto mb-4 object-contain"
              />
              <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-6">
                Reliable and fast {service.title.toLowerCase()} service.
              </p>
              <button
                onClick={() => openModal(service)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center px-4">
          <div className="bg-white w-full max-w-4xl rounded-lg overflow-hidden shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-700 hover:text-red-600 text-xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>

            <div className="p-6 max-h-[85vh] overflow-y-auto">
              <h2 className="text-2xl font-semibold mb-4">
                Book a {selectedService?.title}
              </h2>

              {/* FORM SECTIONS */}
              <ToggleSection
                title="Customer Details"
                open={openSections.customer}
                onToggle={() => toggleSection("customer")}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <FormField label="Name *" type="text" />
                  <FormField label="Mobile Number *" type="text" />
                  <FormField label="Email *" type="email" />
                  <FormField label="Organization Name" type="text" />
                  <FormField label="Alternate Mobile Number" type="text" />
                  <FormField label="Customer GST Number" type="text" />
                </div>
              </ToggleSection>

              <ToggleSection
                title="Service Address"
                open={openSections.address}
                onToggle={() => toggleSection("address")}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <FormField label="Address" type="text" />
                  <FormField label="Landmark" type="text" />
                  <FormField label="Pincode" type="text" />
                  <FormField label="City" type="text" />
                  <FormField label="State" type="text" />
                  <FormSelect label="Address Type" options={["Home", "Office", "Other"]} />
                </div>
              </ToggleSection>

              <ToggleSection
                title="Product Details"
                open={openSections.product}
                onToggle={() => toggleSection("product")}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <FormSelect label="Product Type *" options={["Laptop", "Desktop", "Printer", "Monitor"]} />
                  <FormSelect label="Product Make *" options={["HP", "Dell", "Lenovo", "Asus"]} />
                  <FormSelect label="Product Model *" options={["Model A", "Model B", "Model C"]} />
                  <FormSelect label="Product Description *" options={["Display Issue", "Power Issue", "Other"]} />
                  <FormField label="Product Number" type="text" />
                  <FormField label="Product Serial No. *" type="text" />
                  <FormSelect label="Issue Description *" options={["Hardware", "Software"]} />
                  <FormSelect label="Operating System" options={["Windows", "macOS", "Linux", "Other"]} />
                  <FormSelect label="Country of Purchase" options={["India", "USA", "Other"]} />
                  <FormSelect label="Warranty Type *" options={["In Warranty", "Out of Warranty", "AMC"]} />
                  <FormField label="Warranty/AMC Number" type="text" />
                  <FormField label="Comment" type="text" />
                  <FileField label="Issue Snap" />
                  <FileField label="Proof of Purchase" />
                </div>
              </ToggleSection>

              {/* Buttons */}
              <div className="flex justify-end gap-3 pt-4">
                <button
                  className="bg-red-500 text-white px-4 py-1.5 rounded text-sm hover:bg-red-600"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button className="bg-green-600 text-white px-4 py-1.5 rounded text-sm hover:bg-green-700">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// Collapsible Section
const ToggleSection = ({ title, open, onToggle, children }) => (
  <section className="overflow-hidden transition-all duration-300">
    <div
      className="flex justify-between items-center cursor-pointer bg-gray-100 px-3 py-2 rounded mb-2"
      onClick={onToggle}
    >
      <h3 className="text-base font-semibold text-gray-800">{title}</h3>
      <span className="text-lg font-bold">{open ? "−" : "+"}</span>
    </div>
    <div
      className={`transition-all duration-300 ease-in-out ${
        open ? "max-h-[1000px] opacity-100 mt-2" : "max-h-0 opacity-0"
      } overflow-hidden`}
    >
      {children}
    </div>
  </section>
);

// Input Field
const FormField = ({ label, type }) => (
  <div className="flex flex-col text-sm">
    <label className="mb-1 font-medium text-gray-700">{label}</label>
    <input
      type={type}
      className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
    />
  </div>
);

// Select Field
const FormSelect = ({ label, options }) => (
  <div className="flex flex-col text-sm">
    <label className="mb-1 font-medium text-gray-700">{label}</label>
    <select className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500">
      <option value="">Select {label}</option>
      {options.map((opt) => (
        <option key={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

// File Upload
const FileField = ({ label }) => (
  <div className="flex flex-col text-sm">
    <label className="mb-1 font-medium text-gray-700">{label}</label>
    <input
      type="file"
      accept="image/*,.pdf"
      className="border border-gray-300 rounded px-2 py-1 bg-white text-gray-700"
    />
  </div>
);

export default Repair;
