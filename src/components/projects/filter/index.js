"use client";
import { useState } from "react";
import styles from "./filter.module.scss";

export default function Filter() {
  const [filter, setFilter] = useState("all");

  const handleKeyDown = (value) => (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setFilter(value);
    }
  };

  return (
    <form className={styles.filter}>
      <label tabIndex={0} onKeyDown={handleKeyDown("all")}
      >
        Alle projecten
        <input
          type="radio"
          name="filter"
          value="all"
          checked={filter === "all"}
          onChange={() => setFilter("all")}
        />
      </label>

      <label tabIndex={0} onKeyDown={handleKeyDown("front-end")}
      >
        Front-end
        <input
          type="radio"
          name="filter"
          value="front-end"
          checked={filter === "front-end"}
          onChange={() => setFilter("front-end")}
        />
      </label>

      <label tabIndex={0} onKeyDown={handleKeyDown("design")}
      >
        Design
        <input
          type="radio"
          name="filter"
          value="design"
          checked={filter === "design"}
          onChange={() => setFilter("design")}
        />
      </label>
    </form>
  );
}
