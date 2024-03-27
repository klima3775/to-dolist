import React from "react";
function AddTodoForm({ addTodo }) {
  return (
    <form
      className="add-todo-form"
      onSubmit={(e) => {
        e.preventDefault();
        const todoText = e.target.elements.todoText.value.trim();
        if (todoText) {
          addTodo(todoText);
          e.target.elements.todoText.value = "";
        }
      }}
    >
      <input type="text" name="todoText" />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default AddTodoForm;
