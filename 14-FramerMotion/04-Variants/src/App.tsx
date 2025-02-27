// Variants are a way to define different states or styles  for our animations in a more organized way.Think of them as predefined animation setups that we can switch between easily.

// Defining Variants:
// Create a set of named styles (like:"hidden","visible",etc.) that describes how the element should look or behave in each state.

// Using Variants:
// we can apply these variants to our animated component making it easy to switch between states without repeating code.cxc

// Ways to use Variants:
// 1. we can provide it inline.
// 2. create a seperate object and provide a reference of that object to the variant prop.
// 3. create a seperate file to define the variants there.

import { motion } from "motion/react";
import { useState } from "react";

// const variants = {
//   hidden: { opacity: 0, scale: 0.8 },
//   visible: { opacity: 1, scale: 1 },
//   exit: { opacity: 0, scale: 0.5 },
// };

import { variants } from "./variants";

import FlippingCard from "./components/FlippingCard";

const App = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="w-[100vw] h-[100vh] bg-white/90 flex items-center justify-center">
      {/* <motion.div
        className="w-40 h-40 bg-red-900 rounded-full  "
        //
        // variants={{
        //   hidden: { opacity: 0, scale: 0.8 },
        //   visible: { opacity: 1, scale: 1 },
        //   exit: { opacity: 0, scale: 0.5 },
        // }}
        //

        variants={variants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        exit="exit"
        transition={{ duration: 2, ease: "easeInOut" }}
        onClick={() => setIsVisible(false)}
      ></motion.div> */}

      <FlippingCard />
    </div>
  );
};

export default App;
