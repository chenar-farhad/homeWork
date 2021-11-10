import React from "react";
// import TodoMain from "./TodoMain"
export default function TodoItems({ index, todo, doneTodo, deleteTodo }) {
  return (
    <div
      className="todo-item"
      style={{ textDecoration: todo.isDone ? "line-through" : "" }}
    >
     <h3> {todo.text}</h3>
      <div>
        <button className="btn-done" onClick={() => doneTodo(index)}>
          Done!
        </button>
        <button className="btn-delete" onClick={() => deleteTodo(index)}>
          Delete
        </button>
      </div>
    </div>
  );
}
