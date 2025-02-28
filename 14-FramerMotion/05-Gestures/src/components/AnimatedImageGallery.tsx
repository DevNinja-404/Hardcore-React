import { motion } from "motion/react";

type imageType = {
  imageUrl: string;
  caption: string;
};

const AnimatedImageGallery = () => {
  const images: imageType[] = [
    {
      imageUrl:
        "https://imgs.search.brave.com/RkXuWW1j1161CVtZeLaDBZ0Z4FamL2KPHyVBHtkN7RI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXIuZm9yZnVu/LmNvbS9mZXRjaC9m/Yi9mYjIyZmE3NmRi/YmY1YjQzOGU0Mzc2/N2M1NTg0ZTNlZi5q/cGVn",
      caption: "You Okay?",
    },
    {
      imageUrl: "https://4kwallpapers.com/images/walls/thumbs_2t/20236.jpg",
      caption: "Nezuko-Chan",
    },
    {
      imageUrl: "https://4kwallpapers.com/images/walls/thumbs_3t/20184.jpg",
      caption: "Brother & Sister?",
    },
    {
      imageUrl: "https://4kwallpapers.com/images/walls/thumbs_3t/20031.jpg",
      caption: "Death Stare",
    },
    {
      imageUrl: "https://4kwallpapers.com/images/walls/thumbs_3t/19829.png",
      caption: "East or West",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 place-items-center p-10   bg-black rounded-3xl gap-x-8 gap-y-10 w-full">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="relative flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="w-full h-full rounded-2xl overflow-hidden  ">
            <img
              src={image.imageUrl}
              alt=""
              className="object-cover w-[100%] h-[100%]"
            />
          </div>
          <motion.p
            className="text-white text-xl font-semibold absolute inset-0 flex justify-center items-center opacity-0 bg-black/70  h-full    rounded-2xl"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {image.caption}
          </motion.p>
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedImageGallery;
