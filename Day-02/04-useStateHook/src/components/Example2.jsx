import { useState } from "react";

const Example2 = () => {
  const [randomNum, setRandomNum] = useState(() =>
    Math.round(Math.random() * 100)
  );

  const generateNewRandomNumber = () => {
    const newNumber = Math.round(Math.random() * 100);
    setRandomNum(newNumber);
  };

  return (
    <div>
      <h1>RandomNumber is : {randomNum}</h1>
      <button onClick={generateNewRandomNumber}>Generate New Number</button>
    </div>
  );
};

export default Example2;
