import React, { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import styles from "./Todo.module.css";
import { DarkModeContext } from "../../context/DarkModeContext";

export default function Todo({ todo, onUpdate, onDelete }) {
  const { text, status } = todo;
  const { darkMode } = useContext(DarkModeContext);
  const handleChange = (e) => {
    console.log(e.target);
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };
  const handleDelete = () => onDelete(todo);
  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id="checkbox"
        checked={status === "completed"}
        onChange={handleChange}
      />
      <label
        className={`${styles.text} ${darkMode === true && styles.text_dark}`}
        htmlFor="checkbox"
      >
        {text}
      </label>
      <span className={styles.icon}>
        <button className={styles.button} onClick={handleDelete}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
}
