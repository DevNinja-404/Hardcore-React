// create a motion.div that represents a box and use the onDrag event on the div to rotate the div while dragging

import { motion } from "motion/react";
import { useState } from "react";

const RotateOnDrag = () => {
  const [value, setValue] = useState(0);

  const handleDrag = (_, info) => {
    const newValue = info.offset.x;
    setValue(newValue);
  };

  return (
    <motion.div
      className="bg-cyan-700 rounded-2xl w-60 h-60 flex items-center justify-center"
      drag
      dragConstraints={{
        top: -200,
        left: -100,
        right: 100,
        bottom: 200,
      }}
      onDrag={handleDrag}
      style={{ rotate: value }}
    >
      Drag Me!
    </motion.div>
  );
};

export default RotateOnDrag;
