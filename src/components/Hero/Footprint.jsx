import React, { useState, useEffect, useRef } from 'react';

const Footprint = () => {
  const headingRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          headingRef.current.classList.add('animate-tracking-in-expand');
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="hm-footprint pt-20 mb-14 pb-8 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(../images/footprint-bg.jpg)' }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center text-white">
          <h3 ref={headingRef} className="text-3xl font-semibold pb-2 mb-2">
            The ORAREGA Delivery Footprint
          </h3>
          <p className="text-lg mb-12">A team of 300+ experts reaching you across India</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
            <div className="text-center mb-4">
              <h3 className="text-3xl font-bold mb-1">4+</h3>
              <p>States</p>
            </div>
            <div className="text-center mb-4">
              <h3 className="text-3xl font-bold mb-1">21+</h3>
              <p>Branch & Services Location</p>
            </div>
            <div className="text-center mb-4">
              <h3 className="text-3xl font-bold mb-1">2500+</h3>
              <p>Pincode</p>
            </div>
            <div className="text-center mb-4">
              <h3 className="text-3xl font-bold mb-1">300+</h3>
              <p>Engineers</p>
            </div>
            <div className="text-center mb-4">
              <h3 className="text-3xl font-bold mb-1">10,00,00+</h3>
              <p>Customers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes tracking-in-expand {
          0% {
            letter-spacing: -0.5em;
            opacity: 0;
          }
          40% {
            opacity: 0.6;
          }
          100% {
            opacity: 1;
          }
        }

        .animate-tracking-in-expand {
          animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
        }
      `}</style>
    </section>
  );
};

export default Footprint;
