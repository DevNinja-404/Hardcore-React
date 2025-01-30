import { createContext, useState } from "react";
import "./App.css";
import ComponentA from "./components/ComponentA";

// We created an instance of createContext and stored it in Data
export const Data = createContext();
export const Data1 = createContext();

function App() {
  const [name, setName] = useState("Bikash");
  const [age, setAge] = useState(20);

  return (
    <div>
      {/* Provider property on the instance of context will allow us to share our data/value in multiple components */}
      <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <ComponentA />
        </Data1.Provider>
      </Data.Provider>
    </div>
  );
}

export default App;
