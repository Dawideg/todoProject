import { useState } from "react";
import { TodoItem } from "./TodoItem";
export function TodoList({ toDo, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {toDo.length == 0 && "No todos"}
      {toDo.map((e) => {
        return (
          <TodoItem
            id={e.id}
            completed={e.completed}
            title={e.title}
            key={e.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
