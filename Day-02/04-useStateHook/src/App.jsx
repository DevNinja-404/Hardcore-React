import { useState } from "react";
import "./App.css";

import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Example1 count={count} onClickHandler={() => setCount(count + 1)} />
      <Example2 />
      <Example3 />
    </>
  );
}

export default App;
