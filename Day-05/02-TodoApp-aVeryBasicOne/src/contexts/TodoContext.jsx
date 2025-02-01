import { createContext, useContext, useEffect, useState } from "react";

const TodoContext = createContext({
  todos: [
    {
      id: null,
      todo: "Todo Message",
      isCompleted: false,
    },
  ],
  addTodo: () => {},
  removeTodo: () => {},
  modifyTodo: () => {},
  toogleIsCompleted: () => {},
});

export const useTodo = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos && savedTodos.length > 0) setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random(), todo, isCompleted: false },
    ]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const modifyTodo = (id, todoMessage) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, todo: todoMessage } : todo
      )
    );
  };

  const toogleIsCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: todo.isCompleted ? false : true }
          : todo
      )
    );
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        addTodo,
        removeTodo,
        modifyTodo,
        toogleIsCompleted,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
