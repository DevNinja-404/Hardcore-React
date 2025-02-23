// import { useEffect, useState } from "react";

// interface Todo {
//   title: string;
// }

// const FetchTodo = () => {
//   const [todo, setTodo] = useState<null | Todo>(null);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/todos/1"
//         );
//         if (!response.ok) throw new Error("Network response was not ok");
//         const data: Todo = await response.json();
//         setTodo(data);
//       } catch (error) {
//         console.log("ERROR : ", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   if (loading) return <h1>LOADING...</h1>;

//   return (
//     <div>
//       <h1>{todo?.title}</h1>
//     </div>
//   );
// };

// export default FetchTodo;

// React-19 Magic :
import { use } from "react";

const fetchData = fetch("https://jsonplaceholder.typicode.com/todos/1").then(
  (res) => res.json()
);

// Why does this go to infinite renders??? I will come back to this...
// const fetchData = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const result = await response.json();
//   return result;
// };

const FetchTodo = () => {
  const data = use(fetchData);
  return <div>{data?.title}</div>;
};

export default FetchTodo;
