import ProjectCard from "@/components/cards/projectCard";
import styles from "./mobile.module.scss";

export default function Mobile() {
    return (
        <main className={`${styles.main}`}>
            <ul>
                <li>
                    <ProjectCard/>
                </li>
                <li>
                    <ProjectCard/>
                </li>
                <li>
                    <ProjectCard/>
                </li>
                <li>
                    <ProjectCard/>
                </li>
                <li>
                    <ProjectCard/>
                </li>
                <li>
                    <ProjectCard/>
                </li>
            </ul>
        </main>
    )
}