import { useState } from "react";
import "./App.css";
import TodoListItem from "./components/TodoListItem";

export default function App() {
  const [list, setList] = useState([]);
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setTodo(value);
  };
  const handleAdded = () => {
    setList((prev) => [...prev, { name: todo }]);
    setTodo("");
  };
  return (
    <>
      <TodoListItem list={list} />
      <input onChange={handleChange} value={todo}></input>
      <button onClick={handleAdded}>추가</button>
    </>
  );
}
