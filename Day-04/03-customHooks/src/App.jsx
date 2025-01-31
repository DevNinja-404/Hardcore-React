import useFetch from "./hooks/useFetch";

function App() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

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
