import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: "123", text: "장보기", status: "active" },
    { id: "124", text: "공부하기", status: "active" },
  ]);
  const handleAdd = (todo) => setTodos([...todos, todo]);

  return (
    <div>
      <section>
        <Todo todos={todos} />
        <AddTodo onAdd={handleAdd} />
      </section>
    </div>
  );
}
