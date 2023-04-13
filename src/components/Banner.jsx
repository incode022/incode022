import React from "react";
import { container } from "../utils/Constant";
import { ClassRoomImage } from "../assets";
import SlideText from "../utils/SlideText";
import { useInView } from "react-intersection-observer";
import TextReveal from "../utils/TextReveal";

const Banner = () => {
  const { ref: targetRef, inView: isVisible } = useInView({
    triggerOnce: true,
    threshold: 1,
    rootMargin: "100px 0px",
  });
  return (
    <>
      <div className="py-24">
        <div
          className="w-full h-[100vh] bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,.5), rgba(0,0,0,.8)), url(${ClassRoomImage})`,
          }}
        >
          <div className={`${container} relative h-full`}>
            <div className="absolute sm:right-0 bottom-[20%] sm:w-[50%] w-[90%]">
              <div ref={targetRef} className="text-white text-md sm:text-right text-left">
                <TextReveal text="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Molestias quisquam perferendis iure odit officiis quidem maxime
                inventore a et ea!" inview={isVisible}/>
              </div>
            </div>
            <div className="absolute top-[20%] sm:w-[50%] w-[90%]">
              <div className="text-white text-3xl font-bold">
                <SlideText text="We Are Unity" inview={isVisible}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
