import React from "react";
import tvsLogo from "../../assets/Ourpatners/TVS.png";
import hpLogo from "../../assets/Ourpatners/Hp.png";
import hpcareLogo from "../../assets/Ourpatners/hpcare.png";
import quikserv from "../../assets/Ourpatners/quikserv.png";

const OurPartners = () => {
  const logos = [
    { name: "TVS", image: tvsLogo },
    { name: "HP", image: hpLogo },
    { name: "HP CARE", image: hpcareLogo },
    { name: "Quikserv", image: quikserv },
  ];

  return (
    <section className="our-partners bg-cover bg-center py-12">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-8">
          <h3 className="text-3xl font-semibold text-black">Our Partners</h3>
        </div>

        {/* 1x4 Row for Partner Logos */}
        <div className="flex justify-center gap-10 mb-8">
          {logos.map((logo) => (
            <div key={logo.name} className="text-center">
              <img
                src={logo.image}
                alt={logo.name}
                className="h-20 object-contain mb-2 mx-auto"
              />
              <h1 className="text-xl text-black">{logo.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
