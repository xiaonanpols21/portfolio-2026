import Link from "next/link";
import NavLink from "../navLink";
import NavMobile from "../navMobile";
import Hamburger from "../hamburger";
import styles from "./header.module.scss";

export default function Header() {
    return (
        <>
            <header className={`${styles.header}`}>
                <Link href="/" className={`${styles.logo}`}>Xiao NaN</Link>
                
                <Hamburger/>

                <NavLink classes={styles.navList}/>
            </header>
            
            <NavMobile classes={styles.navMobile}/>
        </>
    )
}