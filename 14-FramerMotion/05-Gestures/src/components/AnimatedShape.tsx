import { motion } from "motion/react";

const AnimatedShape = () => {
  const boxVariants = {
    initial: {
      scale: 1,
      rotate: 0,
      skew: 0,
    },
    hover: {
      scale: 1.2,
      rotate: 15,
      skew: "10deg",
      transition: {
        duration: 0.3,
      },
    },

    click: {
      sclae: 0.9,
      rotate: -15,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className="bg-green-900 rounded-3xl w-60 h-50"
      variants={boxVariants}
      initial="initial"
      whileHover="hover"
      whileTap="click"
    ></motion.div>
  );
};

export default AnimatedShape;
