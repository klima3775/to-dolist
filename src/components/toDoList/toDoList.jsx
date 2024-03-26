// import React, { useState } from "react";

// function ToDoList() {
//   const [todos, setTodos] = useState([]); // Список дел
//   const [newTodo, setNewTodo] = useState(""); // Новое дело

//   const toggleTodo = (index) => {
//     const newTodos = [...todos];
//     newTodos[index].done = !newTodos[index].done;
//     setTodos(newTodos);
//   };

//   const addTodo = () => {
//     setTodos([...todos, { text: newTodo, done: false }]);
//     setNewTodo("");
//   };

//   return (
//     <div>
//       {todos.map((todo, index) => (
//         <div key={index} onClick={() => toggleTodo(index)}>
//           {todo.text} {todo.done ? "✓" : ""}
//         </div>
//       ))}
//       <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
//       <button onClick={addTodo}>Добавить</button>
//     </div>
//   );
// }
// export default ToDoList;
import React, { useState } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([]);

  // Функція для додавання нової тудушки
  const addTodo = (todoText) => {
    const newTodo = { text: todoText, completed: false };
    setTodos([...todos, newTodo]);
  };

  // Функція для зміни стану тудушки по індексу
  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            onClick={() => toggleTodo(index)}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <form
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
    </div>
  );
}

export default TodoApp;
