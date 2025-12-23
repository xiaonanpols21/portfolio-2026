import styles from "./hamburger.module.scss";

export default function Hamburger() {
    return (
        <label 
            aria-label="Menu knop" 
            className={`hamburger ${styles.hamburger}`} 
            tabIndex={0}
        >
            <input type="checkbox"/>
            <span></span>
            <span></span>
            <span></span>
        </label>
    )
}