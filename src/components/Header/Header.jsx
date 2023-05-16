import React from "react";
import styles from "./Header.module.css";
import { HiMoon, HiSun } from "react-icons/hi";
import { useDarkmode } from "../../context/DarkModeContext";

export default function Header({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkmode();
  return (
    <header
      className={`${styles.header} ${darkMode === true && styles.header_dark}`}
    >
      <button className={styles.icon} onClick={toggleDarkMode}>
        {darkMode ? <HiSun /> : <HiMoon />}
      </button>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              className={`${styles.filter} ${
                filter === value && styles.selected
              } ${darkMode === true && styles.selected_dark}`}
              onClick={() => onFilterChange(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
