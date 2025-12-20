import Link from "next/link";
import NavDesktop from "../navDesktop";
import NavMobile from "../navMobile";
import styles from "./header.module.scss";

export default function Header() {
    return (
        <>
            <header className={`${styles.header}`}>
                <Link href="/" className={`${styles.logo}`}>Xiao NaN</Link>

                <label aria-label="Menu knop" className={`${styles.hamburger}`}>
                    <input type="checkbox"/>
                    <span></span>
                    <span></span>
                    <span></span>
                </label>

                <NavDesktop/>
            </header>
            <NavMobile/>
        </>
    )
}