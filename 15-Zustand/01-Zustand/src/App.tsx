import { useCounter } from "./store/store";

const App = () => {
  // Ways to access the store items:
  // 1.
  // const count = useCounter((state) => state.count);

  // 2.
  // const { count, increment, decrement } = useCounter((state) => state);

  // 3.
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      Count :{count}
      <br />
      <br />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default App;
