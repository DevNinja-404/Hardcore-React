// Animate a rectangle that skews when clicked and return to normal when clicked again.

import { motion } from "motion/react";
import { useState } from "react";

const App = () => {
  const [shouldSkew, setShouldSkew] = useState(false);

  const handleClick = () => {
    setShouldSkew(!shouldSkew);
  };

  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh] bg-slate-600">
      <motion.div
        className="bg-red-900 w-52 h-32 rounded-2xl "
        onClick={handleClick}
        animate={shouldSkew ? { skewX: 30, skewY: 10 } : { skewX: 0, skewY: 0 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};

export default App;
