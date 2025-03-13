import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const Accordion = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      question: "What is your name?",
      answer: "My name is DamDam.",
      isExpanded: false,
    },
    {
      id: 2,
      question: "What is your purpose?",
      answer: "I assist with answering questions and providing information.",
      isExpanded: false,
    },
    {
      id: 3,
      question: "How do I use JavaScript?",
      answer:
        "You can use JavaScript to create dynamic web pages by writing scripts in a .js file or inside HTML using <script> tags.",
      isExpanded: false,
    },
    {
      id: 4,
      question: "What is React?",
      answer:
        "React is a JavaScript library for building user interfaces, mainly used for single-page applications.",
      isExpanded: false,
    },
    {
      id: 5,
      question: "How does MongoDB store data?",
      answer:
        "MongoDB stores data in BSON format, a binary representation of JSON.",
      isExpanded: false,
    },
  ]);

  const handleChangeExpansion = (id) =>
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, isExpanded: !item.isExpanded } : item
      )
    );

  return (
    <div className="text-white flex flex-col items-center gap-y-6 bg-black p-10 rounded-3xl ">
      {items.map((item) => (
        <motion.div
          key={item.id}
          className="flex flex-col gap-y-4 bg-blue-700 pl-6 p-3 rounded-3xl w-96 text-center "
          onClick={() => handleChangeExpansion(item.id)}
        >
          <motion.div
            className="flex flex-col "
            initial={{ height: 25 }}
            animate={{ height: item.isExpanded ? "" : 25 }}
            transition={{ duration: 1, type: "spring" }}
          >
            <div className="flex justify-between items-center ">
              <p>{item.question}</p>
              <span>{!item.isExpanded ? "👇" : "☝️"}</span>
            </div>
            <AnimatePresence>
              {item.isExpanded && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={
                    item.isExpanded ? { opacity: 1, y: 0 } : { opacity: 0 }
                  }
                  transition={{ duration: 0.5 }}
                >
                  {item.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default Accordion;
