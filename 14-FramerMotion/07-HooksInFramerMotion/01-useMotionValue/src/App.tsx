// useMotionValue: useMotionValue enables fine control over animations,allowing us to trigger animations programmatically based on component state or events.It allows for the integration of more complex animation logic that goes beyond what can be achieved with just props on a motion component.

import { motion, useMotionValue, useMotionValueEvent } from "motion/react";
import RangeSlider from "./components/RangeSlider";

const App = () => {
  // We can define our own motionValue using the useMotionValue() hook:
  const x = useMotionValue(100);

  // We have eventHandlers which helps us to debug our animations:
  // useMotionValueEvent(motionValue,eventName,cb to execute when that event occurs)

  useMotionValueEvent(x, "animationStart", () => {
    console.log("Animation started on x");
  });

  useMotionValueEvent(x, "change", (latest) => {
    console.log("x changed to", latest);
  });

  return (
    <div className="bg-cyan-900 w-[100vw] h-[100vh] flex items-center justify-center">
      {/* <motion.div
        className="bg-yellow-600 rounded-full w-50 h-40"
        // So when i translate x by 100 or any value why we get smooth transition/animation even though we haven't provided any transition explicitly,it is because the animation prop implicitly provides motionValue
        // animate={{ x: 100 }}

        // To provide the custom motionValue we use inline-css:
        style={{ x }} //This translates x by 100 using the motionValue 100.
        drag
        dragConstraints={{
          top: -50,
          bottom: 50,
          left: -50,
          right: 50,
        }}
      ></motion.div> */}

      <RangeSlider />
    </div>
  );
};

export default App;
