import React from "react";

function TodoList({ todos, toggleTodo }) {
  return (
    <ul className="todo-list">
      {" "}
      {todos.map((todo, index) => (
        <li
          key={index}
          className={`todo-item ${todo.completed ? "completed" : ""}`}
          onClick={() => toggleTodo(index)}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
