import Fruit from "./components/Fruit";
import User from "./components/User";

const App = () => {
  return (
    <div>
      <User name={"Bikash"} age={20} isHappy={true} />
      <Fruit>
        <p>Mango</p>
      </Fruit>
    </div>
  );
};

export default App;
