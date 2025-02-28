import { motion } from "motion/react";

const AnimatedCard = () => {
  return (
    <div>
      <div className="h-[200vh] flex justify-center items-center ">
        <motion.div
          className="w-full h-2/12 rounded-3xl p-4 text-white bg-slate-700 flex flex-col gap-y-4 items-center justify-center"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{
            scale: 1,
            opacity: 1,
            y: -200,
          }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <p className="text-2xl font-semibold">Amazing Card</p>
          <p className="text-xl text-center">
            This is the card which animates in the scroll by using the
            whileInView hook
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedCard;
