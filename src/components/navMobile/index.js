import NavLink from "../navLink"

export default function NavMobile({classes}) {
    return (
        <section className={`${classes}`}>
            <h3 className="visually-hidden">Menu mobiel</h3>
            <NavLink/>
        </section>
    )
}