import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();

      if (!data) console.log("Something went wrong while fetching the data");

      setData(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <ul>
        {data.map((eachData) => (
          <li key={eachData.id}>
            <p>Todo {eachData.id}</p>
            <p>{eachData.title}</p>
            <p>Completed : {eachData.completed ? "true" : "false"}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
