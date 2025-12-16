import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import onsiteFieldSupportImage from '../../assets/offers/onsitefield.jpg';

const OnsiteFieldSupportPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
          } else {
            entry.target.classList.remove('fade-in-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleRedirect = () => navigate('/book-services');

  return (
    <div className="bg-gray-100 text-gray-800">
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <img
          src={onsiteFieldSupportImage}
          alt="Onsite Field Support"
          className="w-full h-[700px] object-cover opacity-70"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start pl-12">
          <h1 className="text-3xl md:text-3xl font-bold mb-4 animate__animated animate__fadeIn">
            <span className="word">Onsite</span>{' '}
            <span className="word">Field</span>{' '}
            <span className="word">Support</span>{' '}
            <span className="word">Services</span>
          </h1>
          <p className="text-lg max-w-3xl fade-in">
            Delivering reliable onsite support for critical systems including IT hardware,
            ensuring smooth business operations and minimal downtime.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 md:px-16 fade-in">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6">
          About Onsite Field Support at Orarega Technologies
        </h2>
        <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto">
          At Orarega Technologies, we offer expert onsite field support services tailored to meet
          the operational needs of modern businesses. Our support team handles everything from IT
          hardware (laptops, desktops, printers) to industrial field systems, ensuring your
          infrastructure remains efficient, secure, and up and running.
        </p>
      </section>

      <section className="bg-white py-12 px-4 md:px-16 fade-in">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6">
          IT & Technical Support Coverage
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: 'Assessment & Planning',
              desc: 'We assess your current Field systems and plan an effective support strategy.',
            },
            {
              title: 'Implementation & Maintenance',
              desc: 'We implement solutions and ensure continuous system monitoring.',
            },
            {
              title: 'Troubleshooting & Optimization',
              desc: 'Our team optimizes and resolves system issues for max efficiency.',
            },
          ].map(({ title, desc }, idx) => (
            <div
              key={idx}
              className="text-center p-6 rounded-lg shadow-xl hover:scale-105 hover:border-2 hover:border-blue-500 transition-all duration-300"
            >
              <h3 className="text-xl font-medium mb-2">{title}</h3>
              <p className="text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 px-6 md:px-12 bg-gray-200 fade-in">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Us for Onsite Field Support</h2>
          <p className="text-lg text-gray-700 mb-8">
            Ready to enhance your operations? Reach out to schedule your onsite field support today.
          </p>
          <button
            onClick={handleRedirect}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition"
          >
            Book Services
          </button>
        </div>
      </section>

      <style>{`
        .fade-in {
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }
        .fade-in-visible {
          opacity: 1;
        }
        .word {
          opacity: 0;
          display: inline-block;
          animation: fadeInWord 0.8s ease-in-out forwards;
        }
        .word:nth-child(1) { animation-delay: 0.1s; }
        .word:nth-child(2) { animation-delay: 0.2s; }
        .word:nth-child(3) { animation-delay: 0.3s; }
        .word:nth-child(4) { animation-delay: 0.4s; }

        @keyframes fadeInWord {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default OnsiteFieldSupportPage;
