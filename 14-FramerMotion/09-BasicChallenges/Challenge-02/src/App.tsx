// Make a circle bounce up and down within a container

import { motion } from "motion/react";

const App = () => {
  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh] bg-slate-600">
      <div className="w-1/2 h-1/2 flex justify-center items-center bg-black rounded-3xl">
        <motion.div
          className="w-16 h-16 rounded-full bg-red-700"
          initial={{ y: 0 }}
          animate={{ y: [214, -214, 214] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default App;
