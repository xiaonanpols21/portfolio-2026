import NavLink from "../navLink";
import Footer from "@/components/footer";

export default function NavMobile({classes}) {
    return (
        <section className={`mobile-menu ${classes}`}>
            <h3 className="visually-hidden">Menu mobiel</h3>
            <NavLink/>
            <Footer/>
        </section>
    )
}