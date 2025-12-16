import React from 'react';
import { motion } from 'framer-motion';

const TermsAndConditions = () => {
  const sections = [
    {
      title: 'Ownership and Intellectual Property',
      content: [
        'All content on this website, including layout, text, images, graphics, sound, and video, is owned by ORAREGA Technologies Pvt Ltd or its licensors and is protected by copyright and other intellectual property laws.',
        'Unauthorized copying, modification, or use of content is prohibited.',
        'All trademarks, logos, and icons are protected.'
      ]
    },
    {
      title: 'Use of Services and Products',
      content: [
        'The use of any services or products provided by the company is subject to these terms and conditions.',
        'The company may change, modify, or discontinue any services or products without notice.'
      ]
    },
    {
      title: 'User Eligibility & Responsibility',
      content: [
        'Services are available only to users who can form legally binding contracts under Indian Contract Act, 1872.',
        'If you are under 18, use the site only with parental or guardian involvement.',
        'Users are responsible for lawful use and must not engage in fraudulent activities.'
      ]
    },
    {
      title: 'Compliance with Laws',
      content: [
        'Users must comply with all applicable laws while using the website and services.',
        'ORAREGA Technologies Pvt Ltd is not responsible for user misconduct.'
      ]
    },
    {
      title: 'Limitation of Liability',
      content: [
        'The company is not liable for any direct, indirect, incidental, or consequential damages resulting from use of its services or products.'
      ]
    },
    {
      title: 'Account & Registration',
      content: [
        'Users must provide accurate and up-to-date account information.',
        'By registering, you agree to receive promotional communications.'
      ]
    },
    {
      title: 'Errors, Inaccuracies, and Omissions',
      content: [
        'We reserve the right to correct any errors, inaccuracies, or omissions and to update information at any time without notice.'
      ]
    },
    {
      title: 'Privacy and Data Protection',
      content: [
        'By using our services, you consent to the collection and use of your personal data as outlined in our Privacy Policy.'
      ]
    },
    {
      title: 'Amendments',
      content: [
        'These terms may be modified or updated at any time without notice.',
        'Continued use of services implies acceptance of the changes.'
      ]
    },
    {
      title: 'Disclaimer & Warranty',
      content: [
        'Quotation valid for 10 days from date of issue.',
        'Warranty of 90 days on repaired parts; 30 days on service charges.',
        'Advance payment required for further processing.'
      ]
    },
    {
      title: 'Termination',
      content: [
        'The company reserves the right to terminate or restrict access to the site or services at any time for any reason.'
      ]
    },
    {
      title: 'Governing Law and Jurisdiction',
      content: [
        'These terms shall be governed by and interpreted in accordance with Indian laws.',
        'Courts in Pune will have exclusive jurisdiction over any disputes.'
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-br  text-gray-800 px-6 mt-28 max-w-5xl mx-auto rounded-2xl shadow-xl">
      <motion.h1 
        className="text-4xl font-bold text-center mb-14 text-Third drop-shadow-sm"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Terms & Conditions
      </motion.h1>

      <motion.section 
        className="mb-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl font-semibold mb-3 text-Second">Welcome</h2>
        <p className="text-md leading-relaxed mb-3">
          Welcome to our website. If you continue to browse and use this website, you agree to comply with and be
          bound by the following terms and conditions of use, which together with our privacy policy govern ORAREGA
          Technologies Pvt Ltd's relationship with you in relation to this website and the services or products offered.
        </p>
        <p className="text-sm text-gray-600">
          <strong>Company Address:</strong> Off-202, Blg-A, Viva Icon, S No-37/1, Hinjewadi Ph-1, Infotech Park, Pune-411057, Maharashtra, India. <br />
          <strong>CIN:</strong> U95111PN2025PTC238490
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
          <h2 className="text-lg font-semibold mb-2 text-Third">{section.title}</h2>
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

export default TermsAndConditions;
