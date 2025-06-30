import { motion } from "framer-motion";
import React from "react";

const ScrollLink = ({ to, children }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const element = document.querySelector(to);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href={to}
      onClick={handleClick}
    >
      {children}
    </motion.a>
  );
};

export default ScrollLink;
