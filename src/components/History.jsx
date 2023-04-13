import React from "react";
import { useInView } from "react-intersection-observer";
import { container } from "../utils/Constant";
import TextReveal from "../utils/TextReveal";

const History = () => {
  const { ref: targetRef, inView: isVisible } = useInView({
    triggerOnce: true,
    threshold: 1,
    rootMargin: "200px 0px"
  });
  return (
    <>
      <div ref={targetRef} className="bg-black mt-32">
        <div className={`${container} sm:py-40 py-20`}>
          <h2 className="sm:text-2xl text-lg text-white">
            <TextReveal text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
            illum distinctio sunt in harum, esse molestias nobis repellendus
            voluptatibus dolorem, voluptate accusantium ipsa impedit. Ab
            sapiente ipsum animi illo fuga aliquid reiciendis nam, atque
            numquam, cum saepe excepturi tempora amet?" inview={isVisible}/> 
          </h2>
        </div>
      </div>
    </>
  );
};

export default History;
