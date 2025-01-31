import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [data, setData] = useState(null);

  // Now suppose we have to fetch in many components and in each component the url from where we need to fetch data is different then we know in each comopnent we would have to write this same logic jsut with the url different which makes our code more redundent.SO what we do is make a custom hook which does this fetching and gives us the data.
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((response) => setData(response));
  }, []);

  return (
    <>
      <ul>
        {data &&
          data.length > 0 &&
          data.map((todo) => <li key={todo.id}>{todo.title}</li>)}
      </ul>
    </>
  );
}

export default App;
