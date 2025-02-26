import { motion } from "motion/react";
// motion is an object that provides a set of components and hooks for creating animations and transitions in React applications.

// When we use <motion.element> where the element can be any HTML element.we are indicating that we want to animate that specific <element>. Framer Motion then provides additional props and features to facilitate those animations,such as initial,animate,and exit, allowing for more powerful and customixable animations.

// Initial Prop :
// The initial prop is used to define the initial state of an animated component before it enters the DOM,it specify how the element should appear when it first renders.

// Animate Prop:
// The animate prop is used to create animations for a component.It lets us set target values for different css properties ,making it easy to have smooth changes when the component's state updates.

// Exit Prop:
// The exit prop is used to define the animation that occurs when a component is removed from the React tree.This is particularly useful for creating smooth transitions when elements are unmounted/removed,enhancing the user experience by visually indicating that something has disappeared.

// Transformations: Transformations allows us to change the shape,size and the positions of elements on a webpage.

function App() {
  return (
    <div className="w-[100vw] min-h-[100vh] bg-slate-900 flex justify-center items-center">
      {/* the animate prop in motion.element takes the css ,we can provide core/pure css too but we r given many shortcuts for applying those css so better to use those  */}

      {/* For translating about along x-axis or y-axis we can x and y respectively and provide the measure through which we want to translate  as 100 ,100px,90%,10rem,etc. */}
      {/* <motion.div
        className=" bg-yellow-300 rounded-full w-40 h-40"
        animate={{ x: 200, y: 100 }}
      /> */}

      {/* For Rotation: */}
      {/* <motion.div
        className=" bg-green-900 rounded-3xl w-80 h-40"
        animate={
          {
            // rotateY: 40,rotateX:40,
            // rotate: 40,
          }
        }
      /> */}

      {/* Scaling:Multiply/increase the size by specified no. of times. */}
      {/* <motion.div
        className=" bg-green-900 rounded-3xl w-80 h-40"
        animate={{
          // scale: 2,
          scaleX: 1.5,
          scaleY: 1.2,
        }}
      /> */}

      {/* Skew: allows us to tilt our element */}
      <motion.div
        className=" bg-green-900 rounded-3xl w-80 h-40"
        animate={{
          // skew: 20,
          // skewX: 30,
          skewY: 30,
        }}
      />
    </div>
  );
}

export default App;
