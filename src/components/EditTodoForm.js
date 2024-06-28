import React, { useState } from "react";

const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    editTodo(value, task.id);
    setValue("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="update task"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      />
      <button className="todo-btn" type="submit">
        {" "}
        update task
      </button>
    </form>
  );
};

export default EditTodoForm;
