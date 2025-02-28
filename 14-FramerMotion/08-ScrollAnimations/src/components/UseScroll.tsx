// useScroll :
// The useScroll hook helps to track scroll position of the page.It makes it easy to create animations or effects that responds to how much the user has scrolled.

import { useMotionValueEvent, useScroll } from "motion/react";

const UseScroll = () => {
  const { scrollY } = useScroll(); //the useScroll() hook gives us the object MotionValue which are scrollX,scrollXProgress,scrollY,scrollYProgress.

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Scroll Position", latest);
  });

  return (
    <div className="h-[200vh] flex justify-center items-center text-9xl text-white">
      UseScroll
    </div>
  );
};

export default UseScroll;
