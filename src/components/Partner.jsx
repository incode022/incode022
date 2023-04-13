import React from "react";
import { container } from "../utils/Constant";
import {
  InforLogo,
  SiLogo,
  MesinLogo,
  MekatroLogo,
  ElektroLogo,
  IndustriLogo,
} from "../assets";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SlideText from "../utils/SlideText";

const Partner = () => {
  const { ref: targetRef, inView: isVisible } = useInView({
    triggerOnce: true,
    threshold: 1
  })

  const pop = {
    hidden: {
      opacity: 0,
      scale: 0,
      transition: {
        type: "spring",
      },
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  const partners = [
    {
      name: "Informatika",
      logo: InforLogo,
      time: 0,
    },
    {
      name: "SI",
      logo: SiLogo,
      time: 0.1,
    },
    {
      name: "Mesin",
      logo: MesinLogo,
      time: 0.2,
    },
    {
      name: "Mekatro",
      logo: MekatroLogo,
      time: 0.3,
    },
    {
      name: "Elektro",
      logo: ElektroLogo,
      time: 0.4,
    },
    {
      name: "Industri",
      logo: IndustriLogo,
      time: 0.5,
    },
  ];

  return (
    <>
      <div className={`${container} py-24`}>
        <div ref={targetRef}>
          <div className="text-3xl font-bold">
            <SlideText text="Our Partner" inview={isVisible}/>
          </div>
        </div>
        <div ref={targetRef} className="grid sm:grid-cols-6 grid-cols-3 sm:gap-x-32 gap-x-24 gap-y-12 py-24">
          {partners.map((partner, index) => (
            <motion.div key={index}
            variants={pop}
            initial="hidden"
            animate={isVisible && "visible"}
            transition={{ type: "spring", delay: partner.time }}
            >
              <img
                className="grayscale hover:grayscale-0"
                src={partner.logo}
                alt={partner.name}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Partner;
