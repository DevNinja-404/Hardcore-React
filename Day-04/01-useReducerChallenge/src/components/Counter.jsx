import { useReducer, useState } from "react";
import { initialState, counterReducer } from "../reducers/counterReducer";

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const [amount, setAmount] = useState(1);

  return (
    <div>
      <h1>Count : {state.count}</h1>
      <p>
        Enter the amount by which u want to increase or decrease the counter :
      </p>
      <input
        type="text"
        value={amount}
        placeholder="Enter Amount"
        onChange={(e) => setAmount(Number(e.target.value))}
      />

      <button onClick={() => dispatch({ type: "incrementBy", amount })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrementBy", amount })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default Counter;
