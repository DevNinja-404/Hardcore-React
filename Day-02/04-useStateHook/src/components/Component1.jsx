const Component1 = ({ count, onClickHandler }) => {
  const handleClick = () => onClickHandler();

  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default Component1;
