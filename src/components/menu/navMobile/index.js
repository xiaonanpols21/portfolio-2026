"use client";
import NavLink from "../navLink";
import Footer from "@/components/footer";
import styles from "./navMobile.module.scss";

export default function NavMobile({ classes, isMenuOpen, onClose }) {
    return (
        <section
            className={`mobile-menu ${classes} ${styles.mobileMenu} ${!isMenuOpen ? styles.none : ""}`}
        >
            <h3 className="visually-hidden">Menu mobiel</h3>
            <NavLink onLinkClick={onClose} />
            <Footer />
        </section>
    )
}
