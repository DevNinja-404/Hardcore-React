// Create a box that can be dragged around the screen

import { motion } from "motion/react";

const DragableBox = () => {
  return (
    <motion.div
      className="w-40 h-40 rounded-2xl bg-green-700 text-center"
      drag
      dragConstraints={{ left: -300, right: 300, top: -300, bottom: 300 }}
      dragElastic
    >
      Hey,Drag Me
    </motion.div>
  );
};

export default DragableBox;
