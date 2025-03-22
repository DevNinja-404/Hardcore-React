import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../slices/counterSlice";

const Counter = () => {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter :{value}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <br />
      <br />
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
