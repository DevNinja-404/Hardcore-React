import { motion } from "motion/react";

const variants = {
  initial: { opacity: 0 },
  fadeIn: { opacity: 1, transition: { duration: 2, ease: "easeInOut" } },
};

const FadeIn = () => {
  return (
    <motion.div
      className="py-3 px-7 rounded-xl bg-blue-700 text-white"
      variants={variants}
      initial="initial"
      animate="fadeIn"
    >
      Hey Man, It fades in
    </motion.div>
  );
};

export default FadeIn;
