import { motion } from "motion/react";

const PulsingButton = () => {
  return (
    <div className="">
      <motion.button
        className="px-10 py-3 text-white bg-green-800 rounded-2xl"
        initial={{ scale: 1 }}
        animate={{
          scale: [1, 1.1, 1],
          backgroundColor: ["#008000", "#00AA00", "#008000"],
        }}
        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
      >
        Click Me
      </motion.button>
    </div>
  );
};

export default PulsingButton;
