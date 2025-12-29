"use client";
import styles from "./hamburger.module.scss";

export default function Hamburger({ isMenuOpen, setIsMenuOpen }) {

    const handleKeyDown = (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsMenuOpen((prev) => !prev);
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
                checked={isMenuOpen}
                onChange={(e) => setIsMenuOpen(e.target.checked)}
            />
            <span></span>
            <span></span>
            <span></span>
        </label>
    );
}
