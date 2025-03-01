import { motion, useScroll, useTransform } from "motion/react";

const AnimatedScroll = () => {
  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [0, 1000], [1, 0.5]);
  const borderRadius = useTransform(scrollY, [0, 1000], ["0%", "50%"]);

  return (
    <div className="relative h-screen overflow-hidden w-full bg-white">
      <motion.img
        src="https://4kwallpapers.com/images/walls/thumbs_3t/18785.jpg"
        alt="Background.png"
        style={{ scale, borderRadius }}
        className="absolute inset-0 object-cover w-full h-full "
      />
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <h1 className="text-white text-4xl ">Scroll To Animate</h1>
      </div>
    </div>
  );
};

export default AnimatedScroll;
