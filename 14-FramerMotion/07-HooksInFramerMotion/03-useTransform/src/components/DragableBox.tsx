import { motion, useTransform, useMotionValue } from "framer-motion";

const DragableBox = () => {
  // The syntax fo using useTransform() hook:
  // useTransform(motionValue,[inputRangeStart,inputRangeEnd],[outputRangeStart,outputRangeEnd])

  const x = useMotionValue(0);

  const backgroundColor = useTransform(x, [-100, 100], ["#ff0000", "#00ff00"]);

  return (
    <motion.div
      style={{ x, backgroundColor }} //so basically as the value of x tends to 100 we get green and as x value tends to -100 we get red.So we mapped out translation with the bg-color.Damn yr its cool
      className="p-10 rounded-3xl"
      drag
      dragConstraints={{ top: -100, bottom: 100, left: -200, right: 200 }}
      dragElastic={0.3}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <span className="text-white">Drag Me Baby</span>
    </motion.div>
  );
};

export default DragableBox;
