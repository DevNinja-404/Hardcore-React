import { useState } from "react";
import "./App.css";

function App() {
  const [movie, setMovie] = useState({
    title: "Blue Box",
    ratings: 10,
  });

  const handleChangeRating = (rating) =>
    setMovie({ ...movie, ratings: rating });

  return (
    <>
      <h1>Title : {movie.title}</h1>
      <p>Ratings : {movie.ratings}</p>
      <button onClick={() => handleChangeRating(100)}>Change Rating</button>
    </>
  );
}

export default App;
