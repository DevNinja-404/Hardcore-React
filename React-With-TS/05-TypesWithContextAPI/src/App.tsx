import Counter from "./components/Counter";
import MyContextProvider from "./context/MyContext";

const App = () => {
  return (
    <MyContextProvider>
      <Counter />
    </MyContextProvider>
  );
};

export default App;
