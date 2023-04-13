import { animate } from "framer-motion";
import React, { useEffect, useRef } from "react";

const Counter = ({from, to}) => {
  const ref = useRef();
  useEffect(() => {
    const controls = animate(from, to, {
      duration: 1,
      onUpdate(value) {
        ref.current.textContent = value.toFixed(1);
      },
    });
    return () => controls.stop();
  }, [from, to]);

  return <p ref={ref} />;
};

export default Counter;
