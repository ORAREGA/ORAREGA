import React, { useEffect } from 'react';
import insImage from '../../assets/offers/ins.jpg'; // Update with the correct path

const InsPage = () => {
  // Scroll Animation for Smooth Effects
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    const handleScroll = () => {
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          element.classList.add('fade-in-visible');
        } else {
          element.classList.remove('fade-in-visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on page load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Section 1: Hero Section with Image and Text */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <img
          src={insImage}
          alt="INS Installation Support"
          className="w-full h-[700px] object-cover opacity-70"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-start pl-12">
          <h1 className="text-3xl md:text-3xl font-bold mb-4 animate__animated animate__zoomIn">
            Expert Installation Support for Your Network
          </h1>
          <p className="text-sm md:text-lg text-left max-w-3xl animate__animated animate__zoomIn animate__delay-1s">
            Comprehensive solutions for seamless network setup, integration, and long-term support.
          </p>
        </div>
      </section>

      {/* Section 2: About INS Installation Support */}
      <section className="py-12 px-4 md:px-16 fade-in">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6">
          About Our Installation Support
        </h2>
        <p className="text-lg leading-relaxed text-center max-w-4xl mx-auto">
          We provide expert installation support for Infrastructure Network Services (INS), ensuring smooth network setup, integration, and ongoing optimization.
        </p>
      </section>

      {/* Section 3: Our Installation Process */}
      <section className="bg-white py-12 px-4 md:px-16 fade-in">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6">
          Our Installation Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center card-hover p-6 rounded-lg shadow-xl hover:scale-105 hover:border-2 hover:border-blue-500 transition-all duration-300">
            <h3 className="text-2xl font-medium mb-2">Assessment & Planning</h3>
            <p className="text-lg leading-relaxed">
              We assess your network needs and create a tailored installation plan.
            </p>
          </div>
          <div className="text-center card-hover p-6 rounded-lg shadow-xl hover:scale-105 hover:border-2 hover:border-blue-500 transition-all duration-300">
            <h3 className="text-2xl font-medium mb-2">Setup & Installation</h3>
            <p className="text-lg leading-relaxed">
              Our team installs the necessary hardware and software for optimal performance.
            </p>
          </div>
          <div className="text-center card-hover p-6 rounded-lg shadow-xl hover:scale-105 hover:border-2 hover:border-blue-500 transition-all duration-300">
            <h3 className="text-2xl font-medium mb-2">Ongoing Support</h3>
            <p className="text-lg leading-relaxed">
              We provide continuous support to ensure your network adapts to evolving needs.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Installation Support Services */}
<section className="bg-gray-900 text-white py-12 px-4 md:px-16 fade-in">
  <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
    Our Support Services
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
    {/* Printer Repair */}
    <div className="text-center p-6 bg-gray-800 rounded-lg shadow-xl hover:scale-105 hover:border-2 hover:border-blue-500 transition-all duration-300">
      <h3 className="text-2xl font-semibold">Printer Repair</h3>
    </div>

    {/* Laptop Repair */}
    <div className="text-center p-6 bg-gray-800 rounded-lg shadow-xl hover:scale-105 hover:border-2 hover:border-blue-500 transition-all duration-300">
      <h3 className="text-2xl font-semibold">Laptop Repair</h3>
    </div>

    {/* Desktop Repair */}
    <div className="text-center p-6 bg-gray-800 rounded-lg shadow-xl hover:scale-105 hover:border-2 hover:border-blue-500 transition-all duration-300">
      <h3 className="text-2xl font-semibold">Desktop Repair</h3>
    </div>

    {/* CCTV Repair */}
    <div className="text-center p-6 bg-gray-800 rounded-lg shadow-xl hover:scale-105 hover:border-2 hover:border-blue-500 transition-all duration-300">
      <h3 className="text-2xl font-semibold">CCTV Repair</h3>
    </div>
  </div>
</section>

      {/* Section 5: Explore Our Solutions */}
      <section className="py-12 px-4 md:px-16 fade-in">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">
          Explore Our Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center card-hover p-6 rounded-lg shadow-xl hover:scale-105 hover:border-2 hover:border-blue-500 transition-all duration-300">
            <h3 className="text-2xl font-medium mb-2">24/7 Support</h3>
            <p className="text-lg leading-relaxed">
              Access round-the-clock support to ensure uninterrupted network performance.
            </p>
          </div>
          <div className="text-center card-hover p-6 rounded-lg shadow-xl hover:scale-105 hover:border-2 hover:border-blue-500 transition-all duration-300">
            <h3 className="text-2xl font-medium mb-2">Custom Solutions</h3>
            <p className="text-lg leading-relaxed">
              We offer tailored installation support for your specific network needs.
            </p>
          </div>
          <div className="text-center card-hover p-6 rounded-lg shadow-xl hover:scale-105 hover:border-2 hover:border-blue-500 transition-all duration-300">
            <h3 className="text-2xl font-medium mb-2">Seamless Integration</h3>
            <p className="text-lg leading-relaxed">
              We ensure smooth integration with your existing systems for minimal downtime.
            </p>
          </div>
        </div>
      </section>
      {/* Section 6: Contact Section for Installation Support */}
<section className="py-12 px-6 md:px-12 bg-gray-200 fade-in">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-6">
      Need Professional Installation Support?
    </h2>
    <p className="text-lg text-gray-700 mb-8">
      Our expert technicians are ready to help with seamless and reliable installations. Get in touch today to ensure your systems are set up efficiently and correctly.
    </p>
    <a
      href="/book-services"
      className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
    >
      Book Services
    </a>
  </div>
</section>
    </div>
  );
};

export default InsPage;
