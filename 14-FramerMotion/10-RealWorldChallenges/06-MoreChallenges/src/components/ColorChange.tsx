import { motion } from "motion/react";

const ColorChange = () => {
  const colors = [];

  const getRandomColors = () => {
    let color = "#";
    const options = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    for (let i = 0; i < 6; i++) {
      color += options[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  for (let i = 0; i < 10; i++) {
    colors.push(getRandomColors());
  }

  return (
    <motion.div
      className="w-1/2 h-1/2 rounded-3xl"
      initial={{ backgroundColor: "blue" }}
      animate={{
        backgroundColor: [...colors],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      }}
    ></motion.div>
  );
};

export default ColorChange;
