import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setFormData,
  setFormErrors,
  setShowPopup,
  setSelectedState,
  setSelectedBranch,
  resetForm,
} from '../../Redux/Featuers/contactSlice';

import icon1 from '../../assets/Lighting/icon1.png';
import icon2 from '../../assets/Lighting/icon2.png';
import icon3 from '../../assets/Lighting/icon3.png';
import contactInfoBg from '../../assets/Lighting/contactbg.png';

const ContactPage = () => {
  const dispatch = useDispatch();

  const {
    formData,
    formErrors,
    showPopup,
    selectedState,
    selectedBranch,
  } = useSelector(state => state.contact);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFormData({ [name]: value }));
  };

  const handleServiceCheckboxChange = (service) => {
    const services = formData.services.includes(service)
      ? formData.services.filter(s => s !== service)
      : [...formData.services, service];
    dispatch(setFormData({ services }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.customerName) errors.customerName = 'Required';
    if (!formData.email) errors.email = 'Required';
    if (!formData.contactNumber) errors.contactNumber = 'Required';
    if (formData.services.length === 0) errors.services = 'Select at least one service';
    if (!formData.message) errors.message = 'Required';
    dispatch(setFormErrors(errors));
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // API call here if needed

      // Reset form and show popup
      dispatch(resetForm());
      dispatch(setShowPopup(true));
    }
  };

  const closePopup = () => dispatch(setShowPopup(false));

  const handleStateChange = (e) => {
    dispatch(setSelectedState(e.target.value));
  };

  const handleBranchChange = (e) => {
    dispatch(setSelectedBranch(e.target.value));
  };

  // Branches and services same as your code, no change
  const branches = {
    Maharashtra: [
      { name: 'Mumbai - Sakinaka', address: 'Address Sakinaka...' },
      { name: 'Mumbai - Goregaon', address: 'Address Goregaon...' },
      { name: 'Mumbai - Vashi', address: 'Address Vashi...' },
      { name: 'Mumbai - Lamington', address: 'Address Lamington...' },
      { name: 'Mumbai - Thane', address: 'Address Thane...' },
      {
        name: 'Pune',
        address: 'Wing Sr No. 37 Beverly Hills Society Building‑A, Viva Icon Office no‑202, Phase 1, Pune, Maharashtra',
      },
      { name: 'Nagpur', address: 'Nagpur address...' },
      { name: 'Solapur', address: 'Solapur address...' },
      { name: 'Nashik', address: 'Nashik address...' },
      { name: 'Kolhapur', address: 'Kolhapur address...' },
    ],
    Goa: [{ name: 'Goa', address: 'Goa address...' }],
    Karnataka: [{ name: 'Bangalore (ROM)', address: 'Bangalore ROM address...' }],
  };

  const selectedBranchData = selectedState && branches[selectedState]
    ? branches[selectedState].find(b => b.name === selectedBranch) || null
    : null;

  const availableServices = [
    'Web Development', 'Software Development', 'QA & Software Testing',
    'CRM/ERP Development', 'Software Testing',
    'Mobile App Development', "IT infrastructure", "AMC",
  ];

  return (
    // your entire JSX as-is, just change the handlers to the ones defined here
    <div className="bg-gray-100 mt-16">
      {/* Preloader */}
      <div className="preloader preloader-finish"><div className="loading" /></div>

      {/* Heading */}
      <div className="bg-white py-12 text-center">
        <h1 className="text-4xl font-bold text-[#0C2340]">Contact Us</h1>
      </div>

      {/* Branch Details */}
      <section className="py-6 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-0">
          <h2 className="text-2xl font-bold mb-4">Branch Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Select State</label>
                <select
                  className="w-full p-2 border rounded"
                  value={selectedState}
                  onChange={handleStateChange}
                >
                  <option value="">-- Choose State --</option>
                  {Object.keys(branches).map(st => <option key={st} value={st}>{st}</option>)}
                </select>
              </div>
              {selectedState && branches[selectedState] && (
                <div>
                  <label className="block mb-1 font-medium">Select Branch</label>
                  <select
                    className="w-full p-2 border rounded"
                    value={selectedBranch}
                    onChange={handleBranchChange}
                  >
                    <option value="">-- Choose Branch --</option>
                    {branches[selectedState].map(b => <option key={b.name} value={b.name}>{b.name}</option>)}
                  </select>
                </div>
              )}
            </div>
            <div className="bg-white p-6 border rounded shadow min-h-[150px]">
              {!selectedBranchData ? (
                <p>Select a branch to view details.</p>
              ) : (
                <>
                  <h3 className="text-xl font-semibold mb-2">{selectedBranchData.name}</h3>
                  <p>{selectedBranchData.address}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="text-white font-bold py-6 bg-cover bg-center" style={{ backgroundImage: `url(${contactInfoBg})` }}>
        <div className="container mx-auto flex flex-wrap justify-between">
          {[icon1, icon2, icon3].map((ic, idx) => (
            <div key={idx} className="w-full sm:w-1/3 text-center mb-6">
              <img src={ic} alt="" className="mx-auto mb-2 w-10 h-10" />
              <p className="text-sm">
                {['General Enquiries', 'Services Enquiries', 'Email ID'][idx]} –
              </p>
              <h5 className="text-lg font-medium">
                {idx < 2 ? '7030951300' : 'oraregaheadeoffice@gmail.com'}
              </h5>
              {idx < 2 && (
                <span className="block text-xs">
                  {idx === 0 ? '(Mon–Fri, 9:30‑17:00)' : '(Mon–Sat, 10:00‑18:00)'}
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto flex flex-col lg:flex-row gap-12">
          <div className="bg-white p-8 rounded border shadow w-full lg:w-1/2">
            <h3 className="text-2xl font-bold mb-6">Get in Touch with Us</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="text" name="customerName" placeholder="Customer Name*"
                  value={formData.customerName} onChange={handleChange}
                  className="w-full p-3 border rounded"
                />
                <input
                  type="text" name="organizationName" placeholder="Organization Name"
                  value={formData.organizationName} onChange={handleChange}
                  className="w-full p-3 border rounded"
                />
              </div>
              {formErrors.customerName && <p className="text-red-500 text-sm">{formErrors.customerName}</p>}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="email" name="email" placeholder="Email*"
                  value={formData.email} onChange={handleChange}
                  className="w-full p-3 border rounded"
                />
                <input
                  type="tel" name="contactNumber" placeholder="Contact Number*"
                  value={formData.contactNumber} onChange={handleChange}
                  className="w-full p-3 border rounded"
                />
              </div>
              {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
              {formErrors.contactNumber && <p className="text-red-500 text-sm">{formErrors.contactNumber}</p>}

              <div>
                <label className="block font-medium mb-2">Select Services*</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {availableServices.map(service => (
                    <label key={service} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        value={service}
                        checked={formData.services.includes(service)}
                        onChange={() => handleServiceCheckboxChange(service)}
                      />
                      <span>{service}</span>
                    </label>
                  ))}
                </div>
                {formErrors.services && <p className="text-red-500 text-sm">{formErrors.services}</p>}
              </div>

              <textarea
                name="message" placeholder="Message*" rows={5}
                value={formData.message} onChange={handleChange}
                className="w-full p-3 border rounded"
              />
              {formErrors.message && <p className="text-red-500 text-sm">{formErrors.message}</p>}

              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div className="w-full lg:w-1/2 space-y-6">
            <div className="bg-white p-6 rounded border shadow">
              <h5 className="text-xl font-semibold">Head Office Address</h5>
              <h6 className="text-lg mt-2">ORAREGA Technologies Pvt Ltd</h6>
              <p className="mt-2">
                Wing Sr No. 37 Beverly Hills Society Building‑A, Viva Icon
                Office no‑202, Phase 1, Opp. D‑Mart, Pune, Maharashtra
              </p>
            </div>
            <div className="border rounded overflow-hidden shadow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.626092706602!2d73.74058697519341!3d18.590888482516327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb8bcf4df22d%3A0xc8204b2d3b661eca!2sORAREGA%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1734173310401!5m2!1sen!2sin"
                width="100%" height="400" style={{ border: 0 }} loading="lazy"
                title="Head Office Location Map"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-gray-800/50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded w-1/3 text-center">
            <h2 className="text-xl font-semibold">Success!</h2>
            <p className="mt-4">Your form has been submitted successfully.</p>
            <button
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
