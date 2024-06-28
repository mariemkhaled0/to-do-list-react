import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    addTodo(value);
    setValue("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="what is the task today?"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      />
      <button className="todo-btn" type="submit">
        {" "}
        Add task
      </button>
    </form>
  );
};

export default TodoForm;
