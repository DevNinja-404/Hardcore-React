import Button from "./components/Button";

function App() {
  const handleClick = () => {
    console.log("Got Clicked", Math.floor(Math.random() * 100));
  };

  return (
    <>
      <Button label="Click Me" onClick={handleClick} disabled={false} />
    </>
  );
}

export default App;
