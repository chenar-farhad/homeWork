import { useState } from "react";
import { React } from "react";

export default function Todo() {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="App-header">
      <div className="todo-body">
        <h2 className="TodoTitle">What's the Plan for Today?</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="enter your task"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
}
