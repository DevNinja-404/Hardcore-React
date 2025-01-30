import { createContext, useState } from "react";
import "./App.css";
import ComponentA from "./components/ComponentA";

// We created an instance of createContext and stored it in Data
export const Data = createContext();

function App() {
  const [name, setName] = useState("Bikash");

  return (
    <div>
      {/* Provider property on the instance of context will allow us to share our data/value in multiple components */}
      <Data.Provider value={name}>
        <ComponentA />
      </Data.Provider>
    </div>
  );
}

export default App;
