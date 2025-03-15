import { motion } from "motion/react";

const SlidingText = () => {
  return (
    <div className="w-1/2 h-1/2 flex items-center justify-center bg-black rounded-3xl">
      <motion.p
        className="text-purple-700 text-2xl font-semibold"
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, type: "spring" }}
      >
        Here is the sliding text from left
      </motion.p>
    </div>
  );
};

export default SlidingText;
