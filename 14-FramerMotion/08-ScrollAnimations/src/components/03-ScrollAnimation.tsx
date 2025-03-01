// using useScroll() with useTransform():

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";

const ScrollAnimation = () => {
  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [0, 700], [1.5, 1]); //when the value of scrollY is 0 scale is 1 and when scrollY is 300 ,the scale is 1.5,so 0-600 jada gradually 1.5 to 1 janxa scale
  const opacity = useTransform(scrollY, [0, 700], [1, 0]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log(latest);
  });

  return (
    <div className="h-screen   flex  items-center justify-center ">
      <motion.div
        className="w-32 h-52 rounded-3xl bg-green-900 "
        style={{ scale, opacity }}
      ></motion.div>
      <div className=" w-full h-[300vh]  "></div>
    </div>
  );
};

export default ScrollAnimation;
