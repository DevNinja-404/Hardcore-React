// The use() hook in react 19 lets us read and load resources asynchronously,such as promises or context.Unlike other hooks,it can be utilized in loops and conditions.

import { Suspense } from "react";
import FetchTodo from "./components/FetchTodo";
import Theme from "./components/Theme";

// In certain situations,it can serve as a replacement for useEffect() when fetching data,and it streamlines context usage by allowing us to use use(context) instead of useContext(context)

const App = () => {
  return (
    <Suspense fallback={<h1>Waiting for the todo...</h1>}>
      {/* <FetchTodo /> */}
      <Theme />
    </Suspense>
  );
};

export default App;
