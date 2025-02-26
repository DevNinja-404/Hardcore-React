import { motion } from "motion/react";
import PulsingButton from "./components/PulsingButton";
import BouncingLoader from "./components/BouncingLoader";

// Keyframes:
// keyframes alllows us to create more complex animations by specifying multiple points in an animation sequence.Instead of just animating from one state to another,we can define several intermediate states(frames) to control the animation more precisely.

// Basically, keyframes allows spliting/dividing animation into multiple frames.

const App = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-black gap-x-10">
      {/* <motion.div
        className=" rounded-full w-40 h-40 bg-red-700"
        initial={{ x: 0 }}
        animate={{ scale: [1, 2, 2, 3, 4, 1] }}
        // scale from 1 to 2, 2 to 3,then 3 to 4 and then 4 to 1.We can do it in basically any animation like rotation translation
        transition={{ duration: 3 }}
      /> */}
      <PulsingButton />
      <BouncingLoader />
    </div>
  );
};

export default App;
