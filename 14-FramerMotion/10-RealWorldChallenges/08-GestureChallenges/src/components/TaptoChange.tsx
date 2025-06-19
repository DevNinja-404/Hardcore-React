// Create a box that changes color on tap :

import { motion } from "framer-motion";
import { useState } from "react";

const TaptoChange = () => {
  const colors = [
    "bg-blue-500",
    "bg-red-500",
    "bg-yellow-500",
    "bg-cyan-500",
    "bg-green-500",
  ];

  const [colorIndex, setColorIndex] = useState(0);

  const onTapMe = (): void => {
    setColorIndex(Math.floor(Math.random() * colors.length));
    console.log(colorIndex);
  };

  return (
    <motion.div
      className={`w-32 h-32 flex items-center justify-center text-center p-4 rounded-3xl cursor-pointer ${colors[colorIndex]}`}
      onTap={onTapMe}
    >
      Tap me to change dear !!!
    </motion.div>
  );
};

export default TaptoChange;
