import React from "react";

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="Todo">
      <p
        onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? "completed" : ""}`}
      >
        {task.task}
      </p>
      <div>
        <button onClick={() => editTodo(task.id)}>Modifier</button>
        <button onClick={() => deleteTodo(task.id)}>Supprimer</button>
      </div>
    </div>
  );
};
