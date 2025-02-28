import { motion } from "motion/react";
import { useState } from "react";

const AnimatedGallery = () => {
  const [showImages, setShowImages] = useState(false);

  const images = [
    "https://imgs.search.brave.com/RkXuWW1j1161CVtZeLaDBZ0Z4FamL2KPHyVBHtkN7RI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXIuZm9yZnVu/LmNvbS9mZXRjaC9m/Yi9mYjIyZmE3NmRi/YmY1YjQzOGU0Mzc2/N2M1NTg0ZTNlZi5q/cGVn",
    "https://4kwallpapers.com/images/walls/thumbs_2t/20236.jpg",
    "https://4kwallpapers.com/images/walls/thumbs_3t/20184.jpg",
    "https://4kwallpapers.com/images/walls/thumbs_3t/20031.jpg",
    "https://4kwallpapers.com/images/walls/thumbs_3t/19829.png",
  ];

  const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: 1,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="flex flex-col gap-y-10 items-center justify-center">
      <button
        onClick={() => setShowImages(!showImages)}
        className={` rounded-lg  px-6 py-2 text-white w-fit ${
          showImages ? "bg-blue-900" : "bg-green-900"
        }`}
      >
        {showImages ? "Hide Images" : "Show Images"}
      </button>
      <motion.div
        className="flex gap-x-10 bg-black p-10 rounded-3xl"
        variants={parentVariants}
        initial="hidden"
        animate={showImages ? "visible" : "hidden"}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="w-[15vw] h-[30vh] rounded-2xl overflow-hidden"
            variants={childVariants}
          >
            <img
              src={image}
              alt=""
              className="object-cover w-[100%] h-[100%]"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedGallery;
