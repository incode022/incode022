import React from "react";
import { motion } from "framer-motion";

const SlideText = ({ text, inview, delay = 0.1 }) => {
  const slide = {
    hidden: {
      opacity: 0,
      x: -100,
      transition: {
        type: "spring",
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        delay: delay
      },
    },
  };
  return (
    <>
      <motion.h1
        variants={slide}
        initial="hidden"
        animate={inview && "visible"}
      >
        { text }
      </motion.h1>
    </>
  );
};

export default SlideText;
