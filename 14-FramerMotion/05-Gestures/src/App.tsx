// Gestures:
// Gestures allows us to add interactive animations based on user actions like dragging,hovering,tapping.It makes our components respond to how users interact with them.

// import { motion } from "motion/react";
// import AnimatedCard from "./components/AnimatedCard";
// import AnimatedImageGallery from "./components/AnimatedImageGallery";
import AnimatedShape from "./components/AnimatedShape";

function App() {
  return (
    <div className="w-[100vw] min-h-[100vh] flex justify-center items-center bg-white/10 p-10">
      {/* <motion.div
        className="bg-yellow-700 rounded-3xl w-40 h-40 "
        //  whileHover :
        // whileHover={{ scale: 1.2, rotate: 180 }}

        // whileTap :
        // whileTap={{ scale: 0.8, backgroundColor: "green" }}

        // whileDrag:
        // drag="x" makes the element be dragable only on the X-axis.
        // drag="y" makes the element be draggable only on the Y-axis.
        drag
        // Providing constraints for the draggable region: we can drag but onReleaase it will bring the component in the boundary/constraint.
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
        transition={{ type: "spring", stiffness: 300, duration: 1, delay: 0.2 }}
      /> */}
      {/* <AnimatedCard /> */}
      {/* <AnimatedImageGallery /> */}
      <AnimatedShape />
    </div>
  );
}

export default App;
