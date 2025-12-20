import Link from "next/link";
import styles from "./header.module.scss";

export default function Header() {
    return (
        <>
            <nav className={`${styles.nav}`}>
                <Link href="">Xiao NaN</Link>
                <label aria-label="Menu knop">
                    <input type="checkbox"/>
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </nav>
        </>
    )
}