import { useState } from "react";

type TodoInfo = {
  id: number;
  todo: string;
  isCompleted: boolean;
};

const TodoList = () => {
  const [todos, setTodos] = useState<TodoInfo[]>([
    { id: 1, todo: "Do Ding Dong", isCompleted: false },
    { id: 2, todo: "Do Ding Ding", isCompleted: true },
  ]);

  return (
    <div>
      TodoList :
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <div>
              <p>Todo : {todo.todo}</p>
              <p>isCompleted : {String(todo.isCompleted)}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
