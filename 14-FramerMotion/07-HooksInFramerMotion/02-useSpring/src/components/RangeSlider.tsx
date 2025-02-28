import { motion, useSpring } from "motion/react";
import { ChangeEvent } from "react";

const RangeSlider = () => {
  const scale = useSpring(1);

  //  useSpring() hook provides much more realistic animation,smooth,spring-based animations resulting in more natural and fluid motion compared to linear animations.

  const setScale = (e: ChangeEvent<HTMLInputElement>) => {
    scale.set(parseFloat(e.target.value));
  };

  return (
    <div className=" flex flex-col h-full justify-around">
      <motion.div
        className="w-1/2  mx-auto p-1 bg-white rounded-3xl  "
        style={{ scale }}
      >
        <img
          src="https://4kwallpapers.com/images/walls/thumbs_2t/18405.jpg "
          alt=""
          className="object-cover w-[100%] h-[100%] rounded-3xl"
        />
      </motion.div>
      <div className="mx-auto w-1/2">
        <span className="text-white text-xl font-bold">
          Drag to Scale Image :
        </span>
        <input
          type="range"
          min={0.2}
          max={2.5}
          step={0.1}
          defaultValue={1}
          className="w-full"
          onChange={setScale}
        />
      </div>
    </div>
  );
};

export default RangeSlider;
