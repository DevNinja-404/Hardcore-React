// Define variants for on and off positions of the switch

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const imgVariants = {
  off: { opacity: 0 },
  on: { opacity: 1 },
};

const switchVariants = {
  off: { left: 4 },
  on: { left: "60%" },
};

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState<boolean>(false);

  return (
    <motion.div
      className="bg-white w-20 h-8 rounded-2xl relative flex items-center"
      onClick={() => setIsOn(!isOn)}
    >
      <AnimatePresence mode="popLayout">
        <motion.img
          key={isOn ? "imageOn" : "imageOff"}
          src={
            isOn
              ? "https://imgs.search.brave.com/TuT_WprlWYMHnc6cclhcZIPxgohqtrfXMx05o67Gu0A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzkwLzI1Lzgw/LzM2MF9GXzE5MDI1/ODA3N19UcUh2VUZK/VDQ5MDRGcEdJVmJp/RnduMlFYa0ZtOXhB/VC5qcGc"
              : "https://imgs.search.brave.com/XyYPXWgAT3CYYd12v1_k1kh-445Vh3YQ5jhAIYufeQo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTMx/MjUzNjAwL3Bob3Rv/L3N1bnJpc2UuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWdk/bFphS1djVGpXMWht/VFJOOHZlcVlJVjI1/TzRPZk40TWhOeDJI/NVJnbms9"
          }
          alt="Toggle Image"
          className="object-cover h-full w-full rounded-2xl"
          variants={imgVariants}
          animate="on"
          exit="off"
          transition={{ duration: 1, type: "linear" }}
        />
      </AnimatePresence>
      <motion.div
        className={`absolute rounded-full ${
          !isOn ? "bg-slate-800" : " bg-slate-200"
        } h-7 w-7  transition-all duration-800`}
        variants={switchVariants}
        initial="off"
        animate={isOn ? "on" : "off"}
        transition={{ type: "tween" }}
      ></motion.div>
    </motion.div>
  );
};

export default ToggleSwitch;
