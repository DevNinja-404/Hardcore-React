// Create a notification toast that slides in from the bottom when triggered.

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const App = () => {
  const [notify, setNotify] = useState(false);

  const showNotification = () => {
    setNotify(true);
    setTimeout(() => {
      setNotify(false);
    }, 2000);
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-slate-900 flex justify-center items-center ">
      <button
        className="px-6 py-2 rounded-3xl bg-pink-700"
        onClick={showNotification}
        disabled={notify}
      >
        Notify me
      </button>
      <AnimatePresence>
        {notify && (
          <motion.div
            className="fixed bg-pink-700 px-4 py-2 rounded-xl bottom-0 right-0  text-xl"
            initial={{ y: 100, x: 100 }}
            animate={notify && { y: -10, x: -10 }}
            exit={{ y: 100, x: 100 }}
            transition={{ duration: 0.5 }}
          >
            Hi,This is your notification
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
