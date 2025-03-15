import { motion } from "motion/react";

const BouncingBall = () => {
  return (
    <div className="flex justify-center items-center bg-black/40 rounded-2xl h-1/2 w-1/2">
      <motion.div
        className="rounded-full h-20 w-20 bg-red-700"
        initial={{ y: 0 }}
        animate={{ y: [206.5, -206.5, 206.5] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "loop",
        }}
      ></motion.div>
    </div>
  );
};

export default BouncingBall;
