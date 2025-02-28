// Stagger Animation:
// Stagger animation refers to a technique where multiple elements animate in a sequence rather than all at once.This creates a more dynamic and visually appealing effect,as each elements appears or moves slightly after the previous one,adding a sense of rhythm and flow to the animation.

import { motion } from "motion/react";

const parentVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 1 } }, //staggerChildren property helps us to add delay between each element
};

const childVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const StaggerAnimation = () => {
  return (
    <motion.div
      className=""
      variants={parentVariants}
      initial="hidden"
      animate="visible"
    >
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          className="mt-4 rounded-full w-30 h-30 bg-green-900"
          variants={childVariants}
        />
      ))}
    </motion.div>
  );
};

export default StaggerAnimation;
