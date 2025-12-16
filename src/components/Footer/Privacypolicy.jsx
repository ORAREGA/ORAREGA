import React from "react";
import { motion } from "framer-motion";

const Privacypolicy = () => {
  const sections = [
    {
      title: "INFORMATION COLLECTION:",
      content: [
        "The Company may collect personal information from you when you interact with the Company, such as when you make a purchase, register an account, or contact customer support.", 
        "The types of personal information collected may include, but are not limited to, Your Name and Job Title, Contact Details, Email Address, Demographic Information such as Postcode, Address, Billing Information, and other information necessary to provide the requested services or products.",

      ],
    },
    {
      title: " WHAT WE DO WITH THE INFORMATION WE COLLECT: ",
      content: [
        "The Company may use the collected personal information to provide and improve its services or products, fulfill your requests, process transactions, communicate with you, and personalize your experience. ",
        "The Company may also use the information for internal purposes such as data analysis, research, and improving its services or products. ",
        "The Company may use the collected personal information to provide and improve its services or products, fulfill your requests, process transactions, communicate with you, and personalize your experience.",
        "The Company may also use the information for internal purposes such as data analysis, research, and improving its services or products.",
      ],
    },
    {
      title: "DATA SECURITY",
      content: [
        "The Company takes reasonable measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.",
        "However, no method of data transmission or storage over the internet can be guaranteed as completely secure. Therefore, the Company cannot guarantee the absolute security of your personal information."
      ],
    },
    {
      title: "THIRD-PARTY LINKS AND SERVICES",
      content: [
        "The Company's services or products may contain links to third-party websites or services that are not operated or controlled by the Company.",
        "This Privacy Policy does not apply to any third-party websites or services. The Company encourages you to review the privacy policies of those third parties before interacting with their websites or services."
      ],
    },
    {
      title: " YOUR RIGHTS",
      content: [
       "You have the right to access, correct, and delete your personal information. You also have the right to object to the processing of your personal information and to restrict the processing of your personal information in certain circumstances."
      ],
    },
    {
      title: " CHANGES TO THE PRIVACY POLICY",
      content: [
      "ORAREGA INDIA Pvt. Ltd. may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes. This policy is effective from ___(DATE)____ and the revised effective date will be indicated.",
      "It is your responsibility to review the Privacy Policy periodically for any changes. Your continued use of the Company's services or products after the posting of any modifications to the Privacy Policy constitutes your acceptance of those changes."
      ],
    },
    {
      title: "AGE OF CONSENT",
      content: [
      "By using this site, you affirm that you are of the legal age of consent in your jurisdiction. If you are under the legal age of consent, you must obtain parental or guardian consent before using this site."
      ],
    },
    
  ];

  return (
    <div className="bg-gradient-to-br  text-gray-800 px-6 mt-28 max-w-5xl mx-auto rounded-2xl shadow-xl">
      <motion.h1
        className="text-4xl font-bold text-center mb-14 text-Third drop-shadow-sm"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        PRIVACY POLICY
      </motion.h1>

      <motion.section
        className="mb-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-md leading-relaxed mb-3">
          ORAREGA Technologies Pvt Ltd (hereinafter referred to as "the Company"),
          is the Protecting your privacy is important to <strong>ORAREGA Technologies Pvt Ltd
          Ltd.</strong> This Privacy Policy outlines how the Company collects, uses,
          discloses, and protects your personal information when you use any
          services or products provided by <strong>ORAREGA</strong>. By accessing or using the
          Company's services or products, you consent to the collection and use
          of your personal information as described in this Privacy Policy. The
          Company assures you that it will only use your personal information in
          accordance with this privacy statement.
        </p>
       
      </motion.section>

      {sections.map((section, index) => (
        <motion.section
          key={index}
          className="mb-10 border-b pb-6 last:border-b-0"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.05, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-lg font-semibold mb-2 text-Third">
            {section.title}
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
            {section.content.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </motion.section>
      ))}
    </div>
  );
};

export default Privacypolicy;
