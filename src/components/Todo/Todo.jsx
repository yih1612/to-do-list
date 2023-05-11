import React from "react";
import { BsTrash } from "react-icons/bs";

export default function Todo({ todos, onDelete }) {
  const handleClick = (e) => {
    console.log(e);
  };
  return (
    <div>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            <input type="checkbox" />
            {item.text}
            <button onClick={handleClick}>
              <BsTrash />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
