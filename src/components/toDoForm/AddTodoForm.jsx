// import React from "react";
// function AddTodoForm({ addTodo }) {
//   return (
//     <form
//       className="add-todo-form"
//       onSubmit={(e) => {
//         e.preventDefault();
//         const todoText = e.target.elements.todoText.value.trim();
//         if (todoText) {
//           addTodo(todoText);
//           e.target.elements.todoText.value = "";
//         }
//       }}
//     >
//       <input type="text" name="todoText" />
//       <button type="submit">Add Todo</button>
//     </form>
//   );
// }

// export default AddTodoForm;
// TodoForm.js

import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../../redux/actions";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      addTodo(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default connect(null, { addTodo })(TodoForm);
