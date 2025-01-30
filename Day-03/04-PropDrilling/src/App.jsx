import { useState } from "react";
import ComponentA from "./components/ComponentA";

function App() {
  const [name, setName] = useState("Bikash");

  return (
    <div>
      <ComponentA name={name} />
    </div>
  );
}

export default App;
