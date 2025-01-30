import { useContext } from "react";
import { Data, Data1 } from "../App";

const ComponentC = () => {
  //   We need to tell the useContext hook which context we want to consume. We can do this by passing the context as an argument to the useContext hook. Here we are consuming the Data context in our ComponentC component. We can also consume multiple contexts in the same component by calling the useContext hook multiple times with different contexts as arguments.
  const userName = useContext(Data);
  const age = useContext(Data1);

  //   Doing so will no longer require us to access or consume the context value by using the Consumer property on the instance of the context and passing a callback function as a child. Instead, we can directly access the value of the context by calling the useContext hook and passing the context as an argument to it.

  return (
    <h1>
      My name is {userName} and age is {age}.
    </h1>
  );
};

export default ComponentC;
