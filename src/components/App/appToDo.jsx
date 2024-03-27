import React, { useState } from "react";
import TodoList from "../toDoList/toDoList";
import AddTodoForm from "../toDoForm/AddTodoForm";
import "./toDo.scss";
function TodoApp() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoText) => {
    const newTodo = { text: todoText, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </div>
  );
}

export default TodoApp;
