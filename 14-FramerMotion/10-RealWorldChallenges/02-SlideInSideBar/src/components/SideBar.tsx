import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

import {
  TbLayoutSidebarLeftExpandFilled,
  TbLayoutSidebarRightExpandFilled,
} from "react-icons/tb";

const SideBar = () => {
  const [expand, setExpand] = useState(false);

  return (
    <div className=" w-64 h-[100vh] ">
      <AnimatePresence>
        {!expand && (
          <button
            className=" absolute left-24 top-10"
            onClick={() => setExpand(!expand)}
          >
            <TbLayoutSidebarLeftExpandFilled
              size={50}
              color="white"
              className=""
            />
          </button>
        )}
      </AnimatePresence>
      <motion.div
        className="w-64 h-full absolute bg-black  flex flex-col justify-between items-center  rounded-r-4xl text-white "
        initial={{ left: -300 }}
        animate={{ left: expand ? 0 : -300 }}
        transition={{ duration: 1, ease: "linear" }}
      >
        <button className="mt-10" onClick={() => setExpand(false)}>
          <TbLayoutSidebarRightExpandFilled color="white" size={50} />
        </button>
        <div>Chin Dabak Dam Dam</div>
      </motion.div>
    </div>
  );
};

export default SideBar;
