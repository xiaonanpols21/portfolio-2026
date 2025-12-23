"use client";
import { useState } from "react";
import styles from "./hamburger.module.scss";

export default function Hamburger() {

  // Learn Satates Scrimba Course
  const [checked, setChecked] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setChecked((prev) => !prev);
    }
  };

  return (
    <label
      aria-label="Menu knop"
      className={`hamburger ${styles.hamburger}`}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
}
