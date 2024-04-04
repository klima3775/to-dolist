// import "./App.scss";
// import TodoApp from "./components/App/appToDo";
// function App() {
//   return <TodoApp />;
// }

// export default App;
// TodoApp.js

// TodoApp.js

import React from "react";
import TodoList from "./components/toDoList/toDoList";
import TodoForm from "./components/toDoForm/AddTodoForm";

const TodoApp = () => (
  <div>
    <h1>Todo List</h1>
    <TodoList />
    <TodoForm />
  </div>
);

export default TodoApp;
