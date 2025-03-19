// Define state for hidden and visible state of the tooltip

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const tooltipVariants = {
  visible: {
    opacity: 1,
    scale: 1,
  },
  invisible: {
    opacity: 0,
    scale: 0.8,
  },
};

const Tooltip = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div
      className="relative rounded-2xl bg-green-700 text-black px-6 py-2 cursor-pointer"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      Hover Me
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className=" bg-black text-white px-10 py-3 rounded-md absolute left-[90%] 
          bottom-[90%] w-80 text-center
          "
            variants={tooltipVariants}
            initial="invisible"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Here is what this button does...
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip;
