import { motion } from "motion/react";

const PulsatingEffect = () => {
  return (
    <div>
      <motion.button
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 1,
          ease: "easeInOut",
        }}
        className="bg-green-700 text-black px-6 py-2 rounded-2xl"
      >
        Pulsating Button
      </motion.button>
    </div>
  );
};

export default PulsatingEffect;
