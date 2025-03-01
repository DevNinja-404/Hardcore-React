// Scroll Animations: we have two types of scroll animation.They are
// 1.Scroll Triggered Animation
// 2.Scroll Driven Animation

import AnimatedScroll from "./components/04-AnimatedScroll";

// import AnimatedCard from "./components/01-AnimatedCard";
// import ScrollAnimation from "./components/03-ScrollAnimation";
// import UseScroll from "./components/02-UseScroll";

// 1.Scroll Triggered Animation:These animations are triggered when the user scrolls to a specific point in the viewport.Once the scroll reaches that point,the animation plays.
// Use Cases: They are great for revealing elements,changing styles,or starting animations at specific sections of a page.

// 2.Scroll Driven Animation:These animations continuously change as the user scrolls,allowing for a smoother,more interactive experience.The animation properties can be mapped directly to the scroll position.
// Use Cases:They are ideal for parallex effects,transforming elements,or adjusting opacity based on scroll depth

// Achieving the scrollTrigger Animation:
// we have to props for this ,they are whileInView prop and also the viewport prop

// 1.whileInView prop:
// The whileInView prop is used to trigger the animations when an elements comes into the viewport.It allows us to define how an element should animate while it is visible on the screen.It enables us to create engaging animations that activate when the user scrolls to a specific part of the webpage.

// 2.Viewport prop:
// The viewport prop is used to customize how animations are triggered based on the visibility of an element in the viewport.It allows us to specify settings that affect when and how animations occur as elements scroll into or out of view.

const App = () => {
  return (
    <div className="   min-h-screen flex flex-col items-center justify-center bg-black ">
      {/* <div className="h-screen flex justify-center items-center">
        <h1 className="text-4xl text-white">
          Scroll Down To See The Scroll Position on the console.
        </h1>
      </div> */}
      {/* <AnimatedCard /> */}
      {/* <UseScroll /> */}
      {/* <ScrollAnimation /> */}
      <AnimatedScroll />
      <div className="h-screen text-white flex justify-center items-center text-4xl">
        So Cool!!!
      </div>
    </div>
  );
};

export default App;
