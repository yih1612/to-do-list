import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./AddTodo.module.css";
import { DarkModeContext } from "../../context/DarkModeContext";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");
  const { darkMode } = useContext(DarkModeContext);
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      setText("");
      return;
    }
    onAdd({ id: uuidv4(), text, status: "active" });
    setText("");
  };
  return (
    <form
      className={`${styles.form} ${darkMode === true && styles.form_dark}`}
      onSubmit={handleSubmit}
    >
      <input
        className={styles.input}
        type="text"
        placeholder="Add Todo"
        value={text}
        onChange={handleChange}
      />
      <button className={styles.button}>Add</button>
    </form>
  );
}
