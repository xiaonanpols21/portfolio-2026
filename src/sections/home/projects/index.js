import Mobile from "@/components/projects/homeProject/mobile";
import Desktop from "@/components/projects/homeProject/desktop";
import Filter from "@/components/projects/filter";
import styles from "./projects.module.scss";

export default function Projects() {
    return (
        <section className={`${styles.section}`}>
            <h2 className="visually-hidden">Mijn projecten</h2>
            
            <Filter/>

            {/* Projecten */}
            <Mobile/>
            <Desktop/>

        </section>
    )
}