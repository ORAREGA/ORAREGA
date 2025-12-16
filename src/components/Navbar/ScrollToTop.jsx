import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import whatsapp from "../../assets/whatsapp.png"; // Ensure this is the correct path

const ScrollToTop = () => {
  const [isScrollVisible, setIsScrollVisible] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Show "Scroll to Top" button when scrolling down
  useEffect(() => {
    const toggleScrollVisibility = () => {
      setIsScrollVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleScrollVisibility);
    return () => window.removeEventListener("scroll", toggleScrollVisibility);
  }, []);

  // Track cursor position
  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateCursorPosition);
    return () => window.removeEventListener("mousemove", updateCursorPosition);
  }, []);

  return (
    <div className="custom-cursor-wrapper">
      {/* Custom Cursor */}
      <motion.div
        className="custom-cursor fixed pointer-events-none z-50"
        style={{
          top: cursorPosition.y - 15,
          left: cursorPosition.x - 15,
        }}
        animate={{
          scale: [1, 1.3, 1], // Slight scale effect
          borderColor: ["#000", "#FFA500", "#fff", "#808080"], // Orange border with slight variation
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <div className="w-8 h-8 border-2 border-solid border-[#f1985c] rounded-full"></div> {/* Orange border */}
      </motion.div>

      {/* WhatsApp Icon with Border */}
      <a
        href="https://wa.me/9156611500"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50"
        aria-label="Chat with us on WhatsApp"
      >
        <div className="relative w-16 h-16">
          {/* WhatsApp Icon with Border */}
          <img
            src={whatsapp}
            alt="WhatsApp"
            className="w-full h-full  shadow-lg border-2 border-[#c5693e]" // Add border to WhatsApp icon
          />
        </div>
      </a>
    </div>
  );
};

export default ScrollToTop;
