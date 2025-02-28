// Scroll Animations: we have two types of scroll animation.They are
// 1.Scroll Triggered Animation
// 2.Scroll Driven Animation

import AnimatedCard from "./components/AnimatedCard";

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
    <div className="   min-h-[100vh] flex flex-col items-center justify-center bg-black ">
      <div className="h-screen flex justify-center items-center">
        <h1 className="text-4xl text-white">
          Scroll Down To See The Animation❤️
        </h1>
      </div>
      <AnimatedCard />
    </div>
  );
};

export default App;
