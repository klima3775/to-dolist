import React from "react";
import { connect } from "react-redux";
import { toggleTodo, deleteTodo } from "../../redux/actions";
import "./list.scss";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`todo-item ${todo.completed ? "completed" : ""}`}
          onClick={() => toggleTodo(todo.id)}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.text}
          <button
            onClick={(event) => {
              event.stopPropagation(); // Prevents the toggleTodo from being called
              deleteTodo(todo.id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps, { toggleTodo, deleteTodo })(TodoList);
