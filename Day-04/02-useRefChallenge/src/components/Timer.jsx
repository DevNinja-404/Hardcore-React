import { useState, useRef, useEffect } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);

  //   The useRef persists across re-renders and prevents unnecessary re-renders

  // Updating useRef.current does not cause a re-render because React does not track changes in refs for rendering.

  const intervalRef = useRef(null);

  useEffect(() => {
    //   setInterval returns an interval ID, which is stored in intervalRef.current.
    // Since useRef doesn't trigger re-renders, this value remains accessible across renders.
    intervalRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // the intervalRef.current has the id of setInterval when the component first renders.this id persists across re-renders we only need this id to implement the logic of stop timer.since the count is updating each second because of the setinterval we made during the first render the component re-renders every second

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() => clearInterval(intervalRef.current)}>
        Stop Timer
      </button>
    </div>
  );
};

export default Timer;
