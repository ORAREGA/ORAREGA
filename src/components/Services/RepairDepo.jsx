import React, { useEffect, useState } from 'react';
import RepairDepotImage from '../../assets/offers/RepairDepo.jpg';
import contactInfoBg from '../../assets/Lighting/contactbg.png';

import icon1 from '../../assets/Lighting/icon1.png';
import icon2 from '../../assets/Lighting/icon2.png';
import icon3 from '../../assets/Lighting/icon3.png';

const RepairDepotPage = () => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');
  const [loading, setLoading] = useState(false);

  // Branch data
  const branches = {
    Maharashtra: [
      { name: 'Mumbai - Sakinaka', address: 'Address Sakinaka...' },
      { name: 'Mumbai - Goregaon', address: 'Address Goregaon...' },
      { name: 'Mumbai - Vashi', address: 'Address Vashi...' },
      { name: 'Mumbai - Lamington', address: 'Address Lamington...' },
      { name: 'Mumbai - Thane', address: 'Address Thane...' },
      {
        name: 'Pune',
        address:
          'Wing Sr No. 37 Beverly Hills Society Building‑A, Viva Icon Office no‑202, Phase 1, Pune, Maharashtra',
      },
      { name: 'Nagpur', address: 'Nagpur address...' },
      { name: 'Solapur', address: 'Solapur address...' },
      { name: 'Nashik', address: 'Nashik address...' },
      { name: 'Kolhapur', address: 'Kolhapur address...' },
    ],
    Goa: [{ name: 'Goa', address: 'Goa address...' }],
    Karnataka: [{ name: 'Bangalore (ROM)', address: 'Bangalore ROM address...' }],
  };

  // Handle state and branch changes
  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedBranch(''); // Reset branch when state changes
  };

  const handleBranchChange = (event) => {
    setSelectedBranch(event.target.value);
  };

  // Selected branch data
  const selectedBranchData =
    selectedState && branches[selectedState]
      ? branches[selectedState].find((b) => b.name === selectedBranch)
      : null;

  // Scroll animation for fade-in effect
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    const handleScroll = () => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        el.classList.toggle('fade-in-visible', rect.top < window.innerHeight);
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fake loading state (can be replaced by actual API data fetching logic)
  useEffect(() => {
    const fetchBranches = async () => {
      setLoading(true);
      try {
        // Simulate an async API call here
        setTimeout(() => setLoading(false), 2000);
      } catch (error) {
        console.error('Error fetching branches:', error);
        setLoading(false);
      }
    };

    fetchBranches();
  }, []);

  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <img
          src={RepairDepotImage}
          alt="Repair Depot Services"
          className="w-full h-[700px] object-cover opacity-70"
          loading="lazy"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start pl-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 animate__animated animate__fadeIn">
            Repair Depot Services
          </h1>
          <p className="text-lg max-w-3xl animate__animated animate__fadeIn animate__delay-1s">
            Reliable, expert repair services for your IT hardware—handled at our dedicated repair facility.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-4 md:px-16 fade-in">
        <h2 className="text-4xl font-semibold text-center mb-6">About Our Repair Depot</h2>
        <p className="text-lg text-center max-w-4xl mx-auto">
          Our Repair Depot provides offsite hardware support for laptops, desktops, printers, and more. Devices undergo
          diagnosis, repair, and testing before being returned in optimal working condition.
        </p>
      </section>

      {/* Devices We Service */}
      <section className="bg-white py-12 px-4 md:px-16 fade-in">
        <h2 className="text-4xl font-semibold text-center mb-6">Devices We Service</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {[
            { title: 'Laptops', desc: 'Hardware issues, battery, screen, keyboard repairs.' },
            { title: 'Desktops', desc: 'Component-level repairs and upgrades.' },
            { title: 'Printers', desc: 'Fixes for jamming, ink, and connectivity problems.' },
            { title: 'Peripherals', desc: 'Inspection and repair of monitors, keyboards, etc.' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="text-center p-6 rounded-lg border-2 border-gray-300 hover:border-blue-500 transition"
            >
              <h3 className="text-xl font-medium mb-2">{item.title}</h3>
              <p className="text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Branch Details */}
      <section className="py-6 bg-gray-50 mb-2">
        <div className="container mx-auto px-4 lg:px-0">
          <h2 className="text-2xl font-bold mb-4">Nearest Location</h2>
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
                  {Object.keys(branches).map((st) => (
                    <option key={st} value={st}>
                      {st}
                    </option>
                  ))}
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
                    {branches[selectedState].map((b) => (
                      <option key={b.name} value={b.name}>
                        {b.name}
                      </option>
                    ))}
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
      <section
        className="text-white font-bold mb-4 py-6 bg-cover bg-center"
        style={{ backgroundImage: `url(${contactInfoBg})` }}
      >
        <div className="container mx-auto flex flex-wrap justify-between">
          {[icon1, icon2, icon3].map((ic, idx) => (
            <div key={idx} className="w-full sm:w-1/3 text-center mb-6">
              <img src={ic} alt="" className="mx-auto mb-2 w-10 h-10" />
              <p className="text-sm">{['General Enquiries', 'Services Enquiries', 'Email ID'][idx]} –</p>
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
    </div>
  );
};

export default RepairDepotPage;
