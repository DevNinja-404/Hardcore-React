import { motion } from "motion/react";

const AnimatedCard = () => {
  return (
    <motion.div
      className="text-white max-w-96 w-[80vw] bg-slate-700 rounded-3xl flex flex-col gap-y-2  justify-center p-2 cursor-pointer shadow-2xl shadow-purple-900"
      animate={{}}
      initial={{}}
      whileHover={{ skew: 2, rotate: -5, rotateX: 5, scale: 1.05 }}
      whileTap={{ scale: 0.8 }}
      drag
      dragConstraints={{ top: -50, right: 100, left: -100, bottom: 50 }}
      dragElastic={0.5}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="w-full max-h-80  rounded-3xl overflow-hidden">
        <img
          src="https://imgs.search.brave.com/qJFCUICSuhAGFLNBvcENRsxrBEOBE46zgHMhWf4wDnA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9waXhs/ci5jb20vaW1hZ2Vz/L2luZGV4L3Byb2R1/Y3QtaW1hZ2Utb25l/LndlYnA"
          alt="image.jpg"
          className="object-cover w-[100%] h-[100%]"
        />
      </div>
      <div className="flex flex-col  p-1 text-2xl">
        <p className=" font-bold ">Card</p>
        <p className="text-base md:text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet,
          nesciunt ullam? Laborum dolor temporibus repellendus ad voluptatibus
          nisi sequi itaque, doloremque quas necessitatibus.
        </p>
        <motion.button
          className=" mt-3 text-base w-fit px-4 py-2 rounded-3xl bg-black cursor-pointer "
          whileHover={{ skew: [0, 20, -20, 0] }}
          animate={{ scale: [1, 1.05, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Find More <span className="text-white">...</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default AnimatedCard;
