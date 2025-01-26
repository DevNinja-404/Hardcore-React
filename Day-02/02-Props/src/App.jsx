import "./App.css";
import Card from "./components/Card";
import User from "./components/User";

function App() {
  return (
    <>
      <User
        name="Bikash"
        age={18}
        isMarried={false}
        hobbies={["coding", "reading", "football"]}
      />
      {/* We can also pass the html elements as the props to the child component from the parent component which can be accessed in the child component using the props.children or simply by destructuring props as accessing children directly */}
      <Card>
        <h1>My Card 1</h1>
        <h2>This is the content for my card 1</h2>
      </Card>
      <Card>
        <h1>My Card 2</h1>
        <h2>This is the content for my card 2</h2>
      </Card>
      <Card>
        <h1>My Card 3</h1>
        <h2>This is the content for my card 3</h2>
      </Card>
    </>
  );
}

export default App;
