import { motion } from "motion/react";

// Transitions:
// Transitions are the effects that control how animations happen.Think of them as the "rules" for how an element moves or changes

// Transition Properties:
// 1.Duration => How llong the animation takes.
// 2.Easing => The speed curve of the animation.
// 3. Delay => How long to wait before starting the animation

function App() {
  return (
    <div className="w-[100vw] h-[100vh] bg-slate-900 flex justify-center items-center">
      <motion.div
        className="rounded-full w-40 h-40 bg-fuchsia-500"
        initial={{ x: 0 }}
        animate={{ x: 90 }}
        transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
      ></motion.div>
    </div>
  );
}

export default App;
