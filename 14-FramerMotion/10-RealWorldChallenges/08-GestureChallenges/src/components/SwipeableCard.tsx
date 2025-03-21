import { motion } from "motion/react";
import { useState } from "react";

// Create a card that can be swipped left or right to remove it from the view.

const SwipeableCard = () => {
  const [isRemoved, setIsRemoved] = useState<boolean>(false);

  const handleSwipe = (_: any, info: any) => {
    if (info.offset.x > 100) {
      setIsRemoved(true); //swipe right to remove
    } else if (info.offset.x < -100) {
      setIsRemoved(true); //swipe left to remove
    }
  };

  return (
    <motion.div
      className={`w-64 h-32 bg-blue-500 rounded-lg shadow-lg flex items-center justify-center text-white
        ${isRemoved ? "hidden" : ""}
        `}
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
      onDragEnd={handleSwipe}
    >
      Swipe Me Baby!!!
    </motion.div>
  );
};

export default SwipeableCard;
