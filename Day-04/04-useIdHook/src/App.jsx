import "./App.css";
import UniqueId from "./components/UniqueId";

function App() {
  return (
    <>
      {/* The useId() hook wil provide unique Id for this component */}
      <UniqueId />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
        recusandae, repellat magnam ea quos, hic similique eius voluptatem ab
        ratione voluptates reprehenderit quia, iste nulla provident mollitia
        eligendi consequuntur iusto dolorum molestiae aperiam culpa labore. Eos
        repellat nesciunt at quo consequuntur! Natus adipisci odit magni unde, a
        inventore minus voluptate ipsum sequi vero, reiciendis nulla.
      </p>
      {/* The useId() hook wil provide unique Id for this component */}
      <UniqueId />
    </>
  );
}

export default App;
