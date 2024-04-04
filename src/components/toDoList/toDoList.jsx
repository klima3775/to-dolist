// import React from "react";

// function TodoList({ todos, toggleTodo }) {
//   return (
//     <ul className="todo-list">
//       {todos.map((todo, index) => (
//         <li
//           key={index}
//           className={`todo-item ${todo.completed ? "completed" : ""}`}
//           onClick={() => toggleTodo(index)}
//         >
//           {todo.text}
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default TodoList;
// TodoList.js

import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../../redux/actions";

const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map((todo) => (
      <li
        key={todo.id}
        onClick={() => toggleTodo(todo.id)}
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </li>
    ))}
  </ul>
);

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps, { toggleTodo })(TodoList);
