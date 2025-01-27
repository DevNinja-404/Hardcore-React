import { useState } from "react";
import "./App.css";

import Component1 from "./components/Component1";
import Component2 from "./components/Component2";

function App() {
  // We are defining our state inside our App component and we r sharing that state with the component1 and component2 by passing the state as the props
  const [count, setCount] = useState(0);

  return (
    <>
      {/* We want to share our state to this components,for that we use props */}
      <Component1 count={count} onClickHandler={() => setCount(count + 1)} />
      <Component2 count={count} onClickHandler={() => setCount(count - 1)} />
    </>
  );
}

export default App;
