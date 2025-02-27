import { motion } from "motion/react";
import { useState } from "react";

const variants = {
  front: { rotateY: 0 },
  back: { rotateY: 180 },
};

const FlippingCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="perspective-1000 "
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        variants={variants}
        initial="front"
        animate={isFlipped ? "back" : "front"}
        transition={{ duration: 2, ease: "easeInOut" }}
        className=" w-60 h-80 bg-slate-900 text-white rounded-3xl p-2  transform-style-preserve-3d shadow-2xl  shadow-black overflow-hidden relative"
      >
        <div
          className={`absolute inset-0  bg-green-900 flex items-center justify-center text-xl font-bold   transition-all duration-2000 ${
            isFlipped ? "opacity-0" : "opacity-100"
          }`}
        >
          Front Side
        </div>
        <div
          className={` absolute inset-0 bg-blue-900 flex items-center justify-center text-xl font-bold rotate-y-180 transition-all duration-2000 ${
            isFlipped ? "opacity-100" : "opacity-0"
          }`}
        >
          Back Side
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FlippingCard;
