import React from "react";
import { useInView } from "react-intersection-observer";
import { container } from "../utils/Constant";
import Counter from "../utils/Counter";
import SlideText from "../utils/SlideText";

const Information = () => {
  const { ref: targetRef, inView: isVisible } = useInView({
    triggerOnce: true,
    threshold: 1,
    rootMargin: "200px 0px",
  });
  const { ref: targetRef2, inView: isVisible2 } = useInView({
    triggerOnce: true,
    threshold: 1,
    rootMargin: "150px 0px",
  });
  return (
    <>
      <div
        className={`${container} flex justify-between sm:flex-row flex-col py-32 gap-x-8`}
      >
        <div className="sm:w-[40%] w-full sm:pb-0 pb-8">
          <div ref={targetRef} className="text-3xl font-bold">
            <SlideText text="Our Gens" inview={isVisible}/>
          </div>
          <div ref={targetRef} className="text-md font-normal pt-2 text-gray-500">
            <SlideText text="Lorem ipsum dolor sit amet, consectetur adipisicing." inview={isVisible} delay="0.3"/>
          </div>
        </div>
        <div className="sm:w-[60%] w-full sm:pt-0 pt-6">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
            <div
              ref={targetRef}
              className="border border-2 border-gray-300 p-8 flex flex-col justify-between sm:h-[350px] h-full"
            >
              <h1 className="sm:text-6xl text-5xl font-light">
                {isVisible ? <Counter from={0} to={180} /> : "0.0"}
              </h1>
              <p className="text-sm pt-8 text-gray-500">Mahasiswa</p>
            </div>
            <div className="border border-2 border-gray-300 p-8 flex flex-col justify-between sm:h-[350px] h-full">
              <h1 className="sm:text-6xl text-5xl font-light">
                {isVisible ? <Counter from={0} to={105} /> : "0.0"}
              </h1>
              <p className="text-sm pt-8 text-gray-500">Laki-laki</p>
            </div>
            <div
              ref={targetRef2}
              className="border border-2 border-gray-300 p-8 flex flex-col justify-between sm:h-[350px] h-full"
            >
              <h1 className="sm:text-6xl text-5xl font-light">
                {isVisible2 ? <Counter from={0} to={75} /> : "0.0"}
              </h1>
              <p className="text-sm pt-8 text-gray-500">Perempuan</p>
            </div>
            <div className="border border-2 border-gray-300 p-8 flex flex-col justify-between sm:h-[350px] h-full">
              <h1 className="sm:text-6xl text-5xl font-light">
                {isVisible2 ? <Counter from={0} to={5} /> : "0.0"}
              </h1>
              <p className="text-sm pt-8 text-gray-500">Kelas</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
