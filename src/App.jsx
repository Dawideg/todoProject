import { useEffect, useState } from "react";
import { NewTodoForm } from "./NewTodoForm";
import "./style.css";
import { TodoList } from "./TodoList";

function App() {
  const [toDo, setToDo] = useState(() => {
    const localValue = localStorage.getItem("Item");
    if (localValue == null) {
      return [];
    }
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("Item", JSON.stringify(toDo));
  }, [toDo]);
  function toggleTodo(id, completed) {
    setToDo((currentTodos) => {
      return currentTodos.map((toDo) => {
        if (toDo.id == id) {
          return { ...toDo, completed };
        }
        return toDo;
      });
    });
  }
  function addTodo(title) {
    setToDo((currentTodo) => {
      return [
        ...currentTodo,
        {
          id: crypto.randomUUID(),
          title,
          completed: false,
        },
      ];
    });
  }

  function deleteTodo(id) {
    setToDo((currentTodos) => {
      return currentTodos.filter((toDo) => toDo.id !== id);
    });
  }
  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo list</h1>

      <TodoList toDo={toDo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}
export default App;
