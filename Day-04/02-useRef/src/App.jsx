import { useRef } from "react";

function App() {
  const inputEleRef = useRef(null);
  console.log(inputEleRef);

  const focusInput = () => {
    inputEleRef.current.focus();
    inputEleRef.current.value = "Bablu";
  };

  return (
    <>
      {/* passing the ref of the input to inputEleRef */}
      <input type="text" ref={inputEleRef} />
      <button onClick={() => focusInput()}>Focus And Write Bablu</button>
    </>
  );
}

export default App;
