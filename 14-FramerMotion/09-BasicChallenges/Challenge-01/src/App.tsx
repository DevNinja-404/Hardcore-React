// Create a box that moves across the screen

import { motion } from "motion/react";

const App = () => {
  const viewportWidth = window.innerWidth;
  console.log(viewportWidth);

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-black overflow-hidden">
      <div className="w-full py-10 ">
        <motion.div
          className="w-32 h-32 rounded-3xl text-white bg-blue-900 flex items-center justify-center "
          animate={{
            x: [
              -300,
              0,
              viewportWidth / 6,
              viewportWidth / 3,
              viewportWidth / 2,
              (2 * viewportWidth) / 3,
              (5 * viewportWidth) / 6,
              viewportWidth,
            ],
            scale: [0.6, 0.8, 1, 1.2, 1.4, 1.4, 1.2, 1, 0.8],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        >
          See Ya!
        </motion.div>
      </div>
    </div>
  );
};

export default App;
