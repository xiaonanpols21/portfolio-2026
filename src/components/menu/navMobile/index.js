import NavLink from "../navLink";
import Footer from "@/components/footer";
import styles from "./navMobile.module.scss";

export default function NavMobile({classes}) {
    return (
        <section className={`mobile-menu ${classes} ${styles.mobileMenu}`}>
            <h3 className="visually-hidden">Menu mobiel</h3>
            <NavLink/>
            <Footer/>
        </section>
    )
}