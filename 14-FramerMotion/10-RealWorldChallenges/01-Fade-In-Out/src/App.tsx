import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="bg-slate-900 flex flex-col gap-y-10 items-center justify-center h-[100vh] w-[100vw] text-white">
      <button
        className="bg-red-900 px-4 py-2 rounded-3xl"
        onClick={() => setVisible(!visible)}
      >
        Toggle Fade
      </button>

      <AnimatePresence>
        {visible && (
          <motion.button
            className="px-4 py-2 rounded-2xl bg-green-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            Fadding Button
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
