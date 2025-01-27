const Component2 = ({ count, onClickHandler }) => {
  const handleClick = () => onClickHandler();

  return (
    <div>
      <p>count : {count}</p>
      <button onClick={handleClick}>Decrement</button>
    </div>

    // Since count is the same state which was defined in the parent component App.jsx and was passed to the child components and we r updating that state from the child components.So the count gets updated in Parent and then the updated Value of count is passed to the child components.
  );
};

export default Component2;
