import React, { useState } from "react";
import { MenuIcon } from "../assets";
import { container } from "../utils/Constant";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [active, setActive] = useState(false);
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/",
    },
    {
      name: "Information",
      path: "/",
    },
    {
      name: "Contact",
      path: "/",
    },
  ];
  window.addEventListener("scroll", function () {
    this.window.scrollY > 100 ? setSticky(true) : setSticky(false);
  });

  return (
    <>
      <div
        className={`sticky top-0 w-full z-[30] ${
          sticky
            ? "bg-white/50 backdrop-blur-lg border-b border-white/30"
            : "bg-[#f1f1f1]" 
        } ${
          active && "bg-[#000] backdrop-blur-[0] "
        }`}
      >
        <div className={`${container} flex justify-between py-6`}>
          <div className="brand">
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              animate={
                sticky || active
                  ? { opacity: 1, x: 1 }
                  : { opacity: 0, x: -100 }
              }
              transition={{ type: "spring" }}
              className={`${active && "text-white"} text-xl font-semibold`}
            >
              {"<incode/>"}
            </motion.h2>
          </div>
          <div className="toggle">
            <svg
              style={{
                transition: ".3s",
              }}
              className={`${active && "rotate-45"}`}
              onClick={() => setActive(!active)}
              width="30"
              height="30"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.625 0.875V8.375H27.125V10.25H19.625V17.75H27.125V19.625H19.625V27.125H17.75V19.625H10.25V27.125H8.375V19.625H0.875V17.75H8.375V10.25H0.875V8.375H8.375V0.875H10.25V8.375H17.75V0.875H19.625ZM10.25 10.25V17.75H17.75V10.25H10.25Z"
                fill={active ? "white" : "black"}
              />
            </svg>
          </div>
        </div>
      </div>
      <div
        className={`w-full min-h-[100vh] z-[99] fixed scale-0 ${
          active ? "top-[10%] scale-100" : "top-[100%]"
        } bg-black`}
        style={{
          transition: ".3s",
        }}
      >
        <div
          className={`${container} h-[85vh] flex flex-col gap-y-6 pt-24 justify-between`}
        >
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-y-6">
            {links.map((link, index) => (
              <div key={index} className="text-[#f1f1f1] text-3xl w-[50%] py-2 font-semibold">
                <Link onClick={() => alert("Website Dalam Tahap Pengembangan!")}>{link.name}</Link>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center border-t-2 border-[#333] py-3">
            <p className="text-[#f1f1f1]">incode@gmail.com</p>
            <div className="text-[#f1f1f1] sm:w-auto w-full sm:flex hidden gap-x-6 sm:mx-0 mx-auto sm:justify-none justify-evenly">
              <a className="text-md font-normal">Facebook</a>
              <a className="text-md font-normal">Instagram</a>
              <a className="text-md font-normal">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
