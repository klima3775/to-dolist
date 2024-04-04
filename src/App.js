import React from "react";
import TodoList from "./components/toDoList/toDoList";
import TodoForm from "./components/toDoForm/AddTodoForm";
import "./App.scss";
const TodoApp = () => (
  <div>
    <h1>Todo List</h1>
    <TodoList />
    <TodoForm />
  </div>
);

export default TodoApp;
