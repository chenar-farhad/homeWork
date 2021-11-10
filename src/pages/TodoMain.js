import React from "react";
import TodoForm from "./TodoForm";
import TodoItems from "./TodoItems";

export default function TodoMain() {
  const [todos, setTodos] = React.useState([
    {
      text: "row 1",
      isDone: false,
    },
    {
      text: "row 2",
      isDone: false,
    },
    {
      text: "row 3",
      isDone: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const doneTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <div className="todo-body pt-5">
        {todos.map((todo, index) => (
          <TodoItems
            key={index}
            index={index}
            todo={todo}
            doneTodo={doneTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}
