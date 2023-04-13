import React from "react";
import { container } from "../utils/Constant";
import Example1 from "../assets/example1.webp";
import Example2 from "../assets/example2.webp";
import Example3 from "../assets/example3.webp";
import Example4 from "../assets/example4.webp";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SlideText from "../utils/SlideText";

const Team = () => {
  const { ref: targetRef, inView: isVisible } = useInView({
    triggerOnce: true,
    threshold: 1,
    rootMargin: "150px 0px",
  });
  const profiles = [
    {
      name: "Adam Alexander",
      role: "Leader",
      image: Example1,
    },
    {
      name: "Alicia Germond",
      role: "Co-Leader",
      image: Example2,
    },
    {
      name: "Jake Nackos",
      role: "Manager",
      image: Example3,
    },
    {
      name: "John Doe",
      role: "Support",
      image: Example4,
    },
  ];
  return (
    <>
      <div className={`${container} py-24`}>
        <div ref={targetRef} 
        className="sm:text-6xl text-4xl sm:font-semibold font-bold pb-6">
          <SlideText text="We Have A" inview={isVisible}/>
          <SlideText text="Best Team" delay="0.3" inview={isVisible}/>
          </div>
        <Swiper slidesPerView={3/2}
         spaceBetween={15} 
         grabCursor={"true"}
         centeredSlides={"true"}
         breakpoints = {{
          1024: {
            slidesPerView: 5/2,
            spaceBetween: 30,
          },
         }}
         className="mySwiper">
          {profiles.map((profile, index) => (
            <SwiperSlide key={index}>
                <div>
                  <img
                    className="aspect-square object-cover grayscale"
                    src={profile.image}
                    alt="profile"
                  />
                </div>
                <div className="pt-3">
                  <h2 className="text-lg font-semibold">{profile.name}</h2>
                  <p className="text-sm font-light">{profile.role}</p>
                </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Team;
