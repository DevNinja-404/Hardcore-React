// In order to consume the value from the context API, we need to import that context in the component where we want to consume it. In this case, we want to consume the value in ComponentC, so we need to import the context in ComponentC.jsx

import { Data, Data1 } from "../App";

const ComponentC = () => {
  // Consumer property on the instance of context will allow us to consume the value from the context API.It takes a callback function as a child and returns the value of the context
  return (
    <Data.Consumer>
      {(name) => {
        return (
          <Data1.Consumer>
            {(age) => {
              return (
                <h1>
                  My name is {name} and age is {age}
                </h1>
              );
            }}
          </Data1.Consumer>
        );
      }}
    </Data.Consumer>
  );
};

// Even though we didn't drill the props from ComponentA to ComponentC, we can still access the value of name from the context API

// We can provide multiple context values in the same component.Here we are provifing two context values name and age in our App component and here we are consuming both the values in ComponentC which is not a good practice but just to show you that we can consume multiple context values in the same component we did this.Even though its a good way to pass our data to the nested child but its still better than prop drilling.

export default ComponentC;
