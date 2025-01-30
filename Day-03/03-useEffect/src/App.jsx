import { useState, useEffect } from "react";

function App() {
  const [value, setValue] = useState(0);

  // No dependency Array->The callback function  inside the useEffect will run every time our component re-renders.
  // useEffect(() => {
  //   console.log("call useEffect");
  //   document.title = `Increment ${value}`;
  // });

  // Empty dependency Array->The callback function  inside the useEffect will run only once when our component renders for the first time i.e when our component is mounted
  // useEffect(() => {
  //   console.log("call useEffect");
  //   document.title = `Increment ${value}`;
  // }, []);

  // some states in the dependency Array->The callback function  inside the useEffect will run every time any one of the states present in the dependency array changes.
  useEffect(() => {
    console.log("call useEffect");
    document.title = `Increment ${value}`;
  }, [value]);

  // NOTE:
  // Hooks cannot be wrapped within another function or condition.

  return (
    <>
      <h2>Value: {value}</h2>
      <button onClick={() => setValue(value + 1)}>Increment</button>
    </>
  );
}

export default App;
