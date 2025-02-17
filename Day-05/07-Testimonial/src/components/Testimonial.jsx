import { useState } from "react";

const Testimonial = () => {
  const testimonials = [
    { quote: "This is the best product ever!!!", author: "Bikash Shah" },
    { quote: "This is the Amazing!!!", author: "Bablu Shah" },
    { quote: "This is Legendary!!!", author: "Sita Shah" },
    { quote: "This is the not so great!!!", author: "Ram Shah" },
    { quote: "This is the Phenominal!!!", author: "Shyam Shah" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="w-[100vw] min-h-[100vh] flex items-center justify-center bg-white/5">
      <div className="min-w-1/2 lg:min-w-1/3 min-h-[40vh] rounded-3xl bg-slate-800 p-10 flex flex-col gap-y-10 justify-around">
        <div className="text-center text-white text-xl flex flex-col gap-y-4 ">
          <p className="text-2xl">{testimonials[currentIndex].quote}</p>
          <p>{testimonials[currentIndex].author}</p>
        </div>
        <div className="flex flex-col md:flex-row gap-y-6 w-full justify-around ">
          <button
            className={`bg-green-600 px-6 py-3 rounded-xl ${
              currentIndex === 0 ? "bg-white/30" : ""
            }`}
            {...(currentIndex !== 0 && {
              onClick: () => setCurrentIndex(currentIndex - 1),
            })}
          >
            Prev
          </button>
          <button
            className={`bg-green-600 px-6 py-3 rounded-xl  ${
              currentIndex === testimonials.length - 1 ? "bg-white/30" : ""
            }`}
            {...(currentIndex !== testimonials.length - 1 && {
              onClick: () => setCurrentIndex(currentIndex + 1),
            })}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
