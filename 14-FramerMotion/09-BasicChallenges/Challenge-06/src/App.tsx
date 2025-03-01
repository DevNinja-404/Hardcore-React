// Create an animation sequence
// 1.Use multiple elements(eg. circles)
// 2.Animate them in a sequence where one moves right,then the next follows after a delay,using different transformation(e.g. move,rotate)

import { motion } from "motion/react";

const App = () => {
  const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 1,
        staggerDirection: 1, //A value of 1 staggers from the first to the last while -1 staggers from the last to the first.
        duration: 1,
      },
      //The staggerChildren is the duration in which all the child will begin their animation.It basicallly adds delay to each child where each successive child has delay as:
      // delayOFpreceddingCHild + staggerChildrenValue.
    },
  };
  const childVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      rotate: 180,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh] bg-slate-600">
      <motion.div
        className="flex items-center justify-center w-1/2 h-1/2 bg-green-800 rounded-3xl gap-x-10"
        variants={parentVariants}
        initial="hidden"
        animate="visible"
      >
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={index}
            variants={childVariants}
            className="bg-black w-20 h-20 "
            animate={{ skewY: 40 }}
            transition={{ duration: 0.5, delay: index, ease: "easeInOut" }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default App;
