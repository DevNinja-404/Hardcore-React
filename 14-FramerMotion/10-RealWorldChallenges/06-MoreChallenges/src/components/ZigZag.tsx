import { motion, useMotionValue, useTransform } from "motion/react";

const ZigZag = () => {
  const x = useMotionValue(0);

  const backgroundColor = useTransform(x, [200, -200], ["#ff0000", "#00ff00"]);

  return (
    <motion.div
      style={{ x, backgroundColor }}
      className="w-32 h-32 rounded-3xl "
      initial={{ x: 0, y: 0 }}
      animate={{
        x: [200, 0, -200, 0, 200],
        y: [100, -100, 100, -100, 100],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    ></motion.div>
  );
};

export default ZigZag;
