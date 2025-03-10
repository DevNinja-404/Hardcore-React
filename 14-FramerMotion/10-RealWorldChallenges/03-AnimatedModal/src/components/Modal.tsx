import { AnimatePresence } from "motion/react";
import { useState } from "react";

import { motion } from "motion/react";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <AnimatePresence>
        <button
          className=" bg-green-600 px-4 py-2 rounded-3xl"
          onClick={() => setIsOpen(true)}
        >
          Open Modal
        </button>
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 flex text-black p-10 md:p-0  items-center justify-center bg-black/50 "
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="bg-white p-4 rounded-2xl w-full md:w-1/3 flex flex-col gap-y-4"
              onClick={(e) => e.stopPropagation()}
              initial={{ y: "-100vh" }}
              animate={{ y: 0 }}
              exit={{ y: "80vh" }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <h1 className="text-3xl">A cool Modal,Right?</h1>
              <p>
                This is a really really really really really cool modal which
                surely isn't a reference from that 100 girlfriends who really
                really really really love u.I don't watch those animes.Don't
                judge me now.
              </p>
              <div className="text-center">
                <button
                  className="bg-red-600 px-8 py-2 rounded-4xl w-fit"
                  onClick={() => setIsOpen(false)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SideBar;
