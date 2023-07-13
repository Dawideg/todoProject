import { useState } from "react";

export function NewTodoForm({ onSubmit }) {
  const [newitem, setNewItem] = useState("");

  function handleClick(e) {
    e.preventDefault();

    onSubmit(newitem);
  }
  return (
    <form onSubmit={handleClick} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newitem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          name=""
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
