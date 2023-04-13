import React, { useState } from "react";
import Icon from "./Icon";
import { motion } from "framer-motion";

const Preloader = () => {
  const [display, setDisplay] = useState(true);

  setTimeout(() => {
    setDisplay(false)
  }, [6300]);
  window.document.body.style.overflowY = `${display ? "hidden" : "scroll"}`

  return (
    <>
      {display && 
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 5, ease: "easeOut" }}
          className="w-full min-h-[100vh] top-0 left-0 bottom-0 fixed bg-black z-[99]"
        >
          <div className="flex justify-center items-center h-full">
            <div className="sm:w-[80%] w-[70%]">
              <div className="sm:rotate-0 rotate-90">
                <Icon />
              </div>
            </div>
          </div>
        </motion.div> 
      }
    </>
  );
};

export default Preloader;
