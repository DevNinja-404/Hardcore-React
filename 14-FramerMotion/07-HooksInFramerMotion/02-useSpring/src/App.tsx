// useSpring:
// The useSpring hook allows us to create smooth,spring-based animations.It provides a way to manage animated values that follow a spring physics model,resulting in more natural and fluid motion compared to linear animations.

import RangeSlider from "./components/RangeSlider";

const App = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center bg-black">
      <RangeSlider />
    </div>
  );
};

export default App;
