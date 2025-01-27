import { useState } from "react";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Blue Box",
      rating: 10,
    },
    {
      id: 2,
      title: "Solo Leveling",
      rating: 9,
    },
    {
      id: 3,
      title: "Kimi No Nawa", //this randomly popped in my mind.
      rating: 7,
    },
  ]);

  const changeName = () =>
    setMovies(
      movies.map((movie) =>
        movie.title === "Kimi No Nawa" ? { ...movie, title: "Kimi" } : movie
      )
    );

  console.log(movies[2]);

  return (
    <>
      <ul>
        {movies.map((movie) => (
          <li key={Math.random()}>
            <h1>Title : {movie.title}</h1>
            <p>Rating : {movie.rating}</p>
          </li>
        ))}
        <button onClick={changeName}>Change Name</button>
      </ul>
    </>
  );
}

export default App;
