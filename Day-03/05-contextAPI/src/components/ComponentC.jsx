// In order to consume the value from the context API, we need to import that context in the component where we want to consume it. In this case, we want to consume the value in ComponentC, so we need to import the context in ComponentC.jsx

import { Data } from "../App";

const ComponentC = () => {
  // Consumer property on the instance of context will allow us to consume the value from the context API.It takes a callback function as a child and returns the value of the context
  return (
    <Data.Consumer>
      {(name) => {
        return <h1>Name : {name}</h1>;

      }}
    </Data.Consumer>
  );
};

// Even though we didn't drill the props from ComponentA to ComponentC, we can still access the value of name from the context API

export default ComponentC;
