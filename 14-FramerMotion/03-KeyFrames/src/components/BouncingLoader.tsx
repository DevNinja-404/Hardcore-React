import { motion } from "motion/react";

const BouncingLoader = () => {
  return (
    <div className="flex justify-center items-center space-x-2">
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          className="w-4 h-4 bg-slate-400 rounded-full"
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: (index + 1) * 0.2,
          }}
        />
      ))}
    </div>
  );
};

export default BouncingLoader;
