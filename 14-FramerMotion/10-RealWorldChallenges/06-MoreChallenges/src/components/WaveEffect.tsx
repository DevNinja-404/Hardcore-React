import { motion } from "motion/react";

const WaveEffect = () => {
  return (
    <div className="flex gap-x-2">
      {Array.from({ length: 5 }).map((eachItem, index) => (
        <motion.div
          key={index}
          className="bg-purple-700 h-28 w-28 rounded-3xl"
          initial={{ y: 0 }}
          animate={{ y: [0, -50, 0] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 0.1,
            ease: "linear",
          }}
        ></motion.div>
      ))}
    </div>
  );
};

export default WaveEffect;
