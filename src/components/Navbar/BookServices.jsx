import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateField, resetForm } from "../../Redux/Featuers/bookServiceSlice";
import { useNavigate } from "react-router-dom"; // Navigate for redirect
import banner5 from "../../assets/banner7.jpg"; // Background Image

const BookServicePage = () => {
  const [openSections, setOpenSections] = useState({
    customer: false,
    address: false,
    product: false,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use for navigation to home page

  // Access form data from Redux state using useSelector
  const customer = useSelector((state) => state.bookService.customer);
  const address = useSelector((state) => state.bookService.address);
  const product = useSelector((state) => state.bookService.product);

  // Reset the form and navigate to home page
  const handleReset = () => {
    dispatch(resetForm());
    navigate("/"); // Navigate to home page
  };

  const handleSubmit = () => {
    // Handle form submission logic (e.g., send data to API)
    console.log("Form submitted:", { customer, address, product });
    // You can navigate elsewhere after submission (optional)
    // navigate("/success");
  };

  const toggleSection = (key) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${banner5})` }}
    >
      <div className="bg-black bg-opacity-60 pt-24 px-4 flex justify-center">
        <div className="w-full max-w-3xl bg-white rounded-md shadow-md p-4 md:p-6 space-y-6 transition-all duration-300">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center border-b pb-2">
            Book Services
          </h2>

          {/* Customer Details Section */}
          <ToggleSection title="Customer Details" open={openSections.customer} onToggle={() => toggleSection("customer")}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <FormField label="Name *" section="customer" field="name" value={customer.name} />
              <FormField label="Mobile Number *" section="customer" field="mobile" value={customer.mobile} />
              <FormField label="Email *" section="customer" field="email" value={customer.email} />
              <FormField label="Organization Name" section="customer" field="organization" value={customer.organization} />
              <FormField label="Alternate Mobile Number" section="customer" field="altMobile" value={customer.altMobile} />
              <FormField label="Customer GST Number" section="customer" field="gst" value={customer.gst} />
            </div>
          </ToggleSection>

          {/* Service Address Section */}
          <ToggleSection title="Service Address" open={openSections.address} onToggle={() => toggleSection("address")}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <FormField label="Address" section="address" field="address" value={address.address} />
              <FormField label="State" section="address" field="state" value={address.state} />
              <FormField label="Pincode" section="address" field="pincode" value={address.pincode} />
              <FormField label="City" section="address" field="city" value={address.city} />
              <FormField label="Area" section="address" field="landmark" value={address.landmark} />
            </div>
          </ToggleSection>

          {/* Product Details Section */}
          <ToggleSection title="Product Details" open={openSections.product} onToggle={() => toggleSection("product")}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <FormField label="Product Type *" section="product" field="productType" value={product.productType} />
              <FormField label="Product Make *" section="product" field="productMake" value={product.productMake} />
              <FormField label="Product Model" section="product" field="productModel" value={product.productModel} />
              <FormField label="Product Description" section="product" field="productDescription" value={product.productDescription} />
              <FormField label="Product Number" section="product" field="productNumber" value={product.productNumber} />
              <FormField label="Product Serial Number" section="product" field="productSerialNumber" value={product.productSerialNumber} />
            </div>
          </ToggleSection>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 pt-2">
            <button onClick={handleReset} className="bg-red-500 text-white px-4 py-1.5 rounded text-sm hover:bg-red-600">Cancel</button>
            <button onClick={handleSubmit} className="bg-green-600 text-white px-4 py-1.5 rounded text-sm hover:bg-green-700">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Form Input Field Component
const FormField = ({ label, type = "text", section, field, value }) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const newValue = e.target.value;
    dispatch(updateField({ section, field, value: newValue }));
  };

  return (
    <div className="flex flex-col text-sm">
      <label className="mb-1 font-medium text-gray-700">{label}</label>
      <input
        type={type}
        value={value || ""} // Ensure value is always controlled
        onChange={handleChange}
        className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
    </div>
  );
};

// Accordion Section (Toggle Open/Close)
const ToggleSection = ({ title, open, onToggle, children }) => (
  <section className="overflow-hidden transition-all duration-300">
    <div className="flex justify-between items-center cursor-pointer bg-gray-100 px-3 py-2 rounded mb-2" onClick={onToggle}>
      <h3 className="text-base font-semibold text-gray-800">{title}</h3>
      <span className="text-lg font-bold">{open ? "−" : "+"}</span>
    </div>
    <div className={`transition-all duration-300 ease-in-out ${open ? "max-h-[1000px] opacity-100 mt-2" : "max-h-0 opacity-0"} overflow-hidden`}>
      {children}
    </div>
  </section>
);

export default BookServicePage;
