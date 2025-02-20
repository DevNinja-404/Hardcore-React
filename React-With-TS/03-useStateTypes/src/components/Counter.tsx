import { useState } from "react";

const Counter = () => {
  //We see that although it doesn't give us any warning because it implicity annotates the state as the type of its initialValue ,regardless we can explicitly provid the type using the generics as:
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
