"use client";
import Link from "next/link";
import NavLink from "../navLink";
import NavMobile from "../navMobile";
import Hamburger from "../hamburger";
import styles from "./header.module.scss";
import { useState } from "react";

export default function Header() {
    // shared state
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // callback voor NavLink / NavMobile
    const handleCloseMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <header className={`${styles.header}`}>
                <Link href="/" className={`${styles.logo}`}>Xiao NaN</Link>
                
                <Hamburger
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                />

                <NavLink
                    classes={styles.navList}
                    onLinkClick={handleCloseMenu} // sluit menu als link geklikt
                />
            </header>
            
            <NavMobile
                classes={styles.navMobile}
                isMenuOpen={isMenuOpen}
                onClose={handleCloseMenu} // niet verplicht, kan ook direct via NavLink callback
            />
        </>
    )
}
