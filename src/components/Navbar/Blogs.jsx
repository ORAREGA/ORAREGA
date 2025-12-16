import React from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux'; // ✅ Import this

// Animation helper
const getFadeIn = (direction = 'left') => ({
  hidden: {
    opacity: 0,
    x: direction === 'left' ? -50 : 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
});

const BlogListPage = () => {
  // ✅ Get blog data from Redux
  const sections = useSelector((state) => state.blogs);

  // Sort by date descending
  const sortedSections = [...sections].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="bg-white pb-20 pt-28">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={getFadeIn('left')}
          className="text-4xl font-extrabold text-center text-gray-800 mb-16"
        >
          Life at <span className="text-primary">ORAREGA</span>
        </motion.h2>

        {sortedSections.map((section, index) => {
          const isReversed = index % 2 === 1;

          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 mb-14 ${
                isReversed ? 'md:flex-row-reverse' : ''
              }`}
            >
              <motion.div
                className="w-full md:w-5/12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={getFadeIn(isReversed ? 'right' : 'left')}
              >
                <img
                  src={section.img}
                  alt={section.title}
                  className="rounded-lg shadow-md w-full h-[220px] md:h-[240px] object-cover transition-transform duration-300 hover:scale-105"
                />
              </motion.div>

              <motion.div
                className="w-full md:w-7/12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={getFadeIn(isReversed ? 'left' : 'right')}
              >
                <p className="text-sm text-gray-500 mb-1">
                  {new Date(section.date).toLocaleDateString('en-IN', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  {section.title}
                </h3>
                <p className="text-gray-600 text-[17px] leading-relaxed">
                  {section.description}
                </p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogListPage;
