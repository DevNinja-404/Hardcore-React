import { TodoProvider } from "./contexts/TodoContext";
import TodoList from "./components/TodoList";
import InputForTodo from "./components/InputForTodo";

function App() {
  return (
    <TodoProvider>
      <div className="flex flex-col gap-y-20 w-[100vw] h-[100vh] items-center  p-10 bg-slate-900">
        <InputForTodo />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
