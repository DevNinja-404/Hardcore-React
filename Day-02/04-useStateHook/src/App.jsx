import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [friends, setFriends] = useState(["Bikash", "Manish", "Rahul"]);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  // If we update the value of count as below without using the setCount,well the value of count does infact update but it doesn't get reflected on the UI because using setCount not only changes the state but infact also reflects or makes react known that the state has changed and the component needs to be reloaded/rerendered
  // const increment = () => {
  //   return count + 1;
  // };
  // const decrement = () => {
  //   return count - 1;
  // };

  // updating Array:
  const addOneFriend = (friendToAdd) => setFriends([...friends, friendToAdd]);
  const removeOneFriend = (friendToRemove) =>
    setFriends(friends.filter((friend) => friend !== friendToRemove));
  const updateOneFriend = (friendToUpdate, updateTo) =>
    setFriends(
      friends.map((friend) => (friend === friendToUpdate ? updateTo : friend))
    );

  // updating Object:

  // const

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>

      {/* updating Array */}
      <div>
        <ul>
          {friends.map((friend, index) => (
            <li key={index}>{friend}</li>
          ))}
        </ul>
        <button onClick={() => addOneFriend("Bablu")}>Add One Friend</button>
        <button onClick={() => removeOneFriend("Manish")}>
          Remove One Friend
        </button>
        <button onClick={() => updateOneFriend("Bablu", "Bablu Prasad")}>
          Update One Friend
        </button>
      </div>

      {/* updating Objects */}
      <div>
        <ul>
          {friends.map((friend, index) => (
            <li key={index}>{friend}</li>
          ))}
        </ul>
        <button onClick={() => addOneFriend("Bablu")}>Add One Friend</button>
        <button onClick={() => removeOneFriend("Manish")}>
          Remove One Friend
        </button>
        <button onClick={() => updateOneFriend("Bablu", "Bablu Prasad")}>
          Update One Friend
        </button>
      </div>
    </>
  );
}

export default App;
