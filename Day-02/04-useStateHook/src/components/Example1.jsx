import { useState } from "react";

const Example1 = () => {
  // Callback inside the useState :
  // The callBack function inside the useState only runs when our component first renders.
  const [count, setCount] = useState(() => {
    const initialCount = 10;
    return initialCount;
  });

  // When u use setCount(count+1) then it uses the currentValue of count from the function handleIncrement scope and updates by adding 1.
  // React batches state updates, so if multiple updates happen in the same render cycle, this might cause stale state issues.
  // If setCount is called multiple times in quick succession, only the last one may be applied correctly.
  // const handleIncrement = () => setCount(count + 1);

  // using stateCount like this uses the functional form or setCount where React passes the lastState and then increases by 1
  // This ensures that even if multiple updates are scheduled, each update gets the correct latest state.
  const handleIncrement = () => setCount((prevCount) => prevCount + 1);

  // We can use any one setCount here, it doesn't matter for the current logic.

  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default Example1;
