// useTransform:
// The useTransform hook is used to map one range of values to another.It's great for creating smooth animations and effects based on input value,like scroll position or mouse movements.

import DragableBox from "./components/DragableBox";

const App = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center bg-black">
      <DragableBox />
    </div>
  );
};

export default App;
