// Animate a rectangle that skews when clicked and return to normal when clicked again.

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const App = () => {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const [animationKey, setAnimationKey] = useState(1);

  const updateWidth = () => {
    console.log("Y");
    console.log("width", containerRef.current.getBoundingClientRect().width);
    console.log("height", containerRef.current.getBoundingClientRect().height);

    setContainerWidth(containerRef.current.getBoundingClientRect().width);
    setContainerHeight(containerRef.current.getBoundingClientRect().height);
    setAnimationKey((prev) => prev + 1);
  };

  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh] bg-slate-600">
      <div
        className="w-1/2 h-1/2 bg-black rounded-3xl flex justify-center items-center overflow-hidden "
        ref={containerRef}
      >
        <motion.div
          className="bg-red-900 w-20 h-16 rounded-lg"
          key={animationKey}
          animate={{
            x: [0, containerWidth / 2 - 40, 0, -containerWidth / 2 + 40, 0],
            y: [0, containerHeight / 2 - 31, 0, -containerHeight / 2 + 31, 0],
            scale: [0.5, 1, 2, 1, 0.5],
            rotateY: [0, 90, 180, 270, 360],
          }}
          transition={{ duration: 10, ease: "linear", repeat: Infinity }}
        ></motion.div>
      </div>
    </div>
  );
};

export default App;
