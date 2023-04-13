import React from "react";
import { container } from "../utils/Constant";
import { CircleImage } from "../assets";

const Hero = () => {
  return (
    <>
      <div className="min-h-[100vh] relative">
        <div
          className="absolute sm:w-[25%] w-[50%] top-[45%] left-[50%]"
          style={{
            transform: "translate(-50%, -50%)",
          }}
        >
          <img src={CircleImage} alt="circle" className="rotate_animation"/>
        </div>
        <div
          className={`${container} absolute top-[45%] left-[50%] w-full `}
          style={{
            transform: "translate(-50%, -50%)",
          }}
        >
          <h1 className="font-bold sm:text-9xl text-6xl text-center">INCODE22</h1>
        </div>
      </div>
      <div
        className={`${container} absolute top-[95%] left-[50%] w-full `}
        style={{
          transform: "translate(-50%, -50%)",
        }}
      >
        <p className="text-center sm:text-lg text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut,
          architecto.
        </p>
      </div>
    </>
  );
};

export default Hero;
