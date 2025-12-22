import Mobile from "@/components/projects/mobile";
import Desktop from "@/components/projects/desktop";
import styles from "./projects.module.scss";

export default function Projects() {
    return (
        <section className={`${styles.section}`}>
            <h2 className="visually-hidden">Mijn projecten</h2>
            <form className={`${styles.form}`}>
                <label>
                    All
                    <input type="radio" name="filter" value="all"/>
                </label>
                <label>
                    Front-end
                    <input type="radio" name="filter" value="front-end"/>
                </label>
                <label>
                    Design
                    <input type="radio" name="filter" value="design"/>
                </label>
            </form>

            {/* Projecten */}
            <Mobile/>
            <Desktop/>

        </section>
    )
}