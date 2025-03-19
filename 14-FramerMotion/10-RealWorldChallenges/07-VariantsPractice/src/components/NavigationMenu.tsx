// Define varinats for the open and closed state of the menu and animate it to slide in from the side

import { motion } from "motion/react";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

const NavVariants = {
  closed: { left: -200 },
  open: {
    left: 0,
  },
};

const NavigationMenu = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <motion.div
      className="absolute h-full w-60 bg-gray-700 rounded-r-3xl"
      variants={NavVariants}
      initial="closed"
      animate={open ? "open" : "closed"}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <div className="h-full  w-full pr-10 pl-5 py-10 ">
        "Your Nav Items Here"
      </div>

      <motion.div
        className={`absolute right-0 top-0 h-full flex items-center justify-center bg-black transition-all duration-500 ${
          open ? "rounded-3xl " : "rounded-r-3xl"
        } `}
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <FaChevronLeft size={40} color="white" />
        ) : (
          <FaChevronRight size={40} color="white" />
        )}
      </motion.div>
    </motion.div>
  );
};

export default NavigationMenu;
