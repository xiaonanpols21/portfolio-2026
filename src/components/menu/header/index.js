import Link from "next/link";
import NavLink from "../navLink";
import NavMobile from "../navMobile";
import styles from "./header.module.scss";

export default function Header() {
    return (
        <>
            <header className={`${styles.header}`}>
                <Link href="/" className={`${styles.logo}`}>Xiao NaN</Link>
                
                <label aria-label="Menu knop" className={`hamburger ${styles.hamburger}`} tabIndex={0}>
                    <input type="checkbox"/>
                    <span></span>
                    <span></span>
                    <span></span>
                </label>

                <NavLink classes={styles.navList}/>
            </header>
            
            <NavMobile classes={styles.navMobile}/>
        </>
    )
}