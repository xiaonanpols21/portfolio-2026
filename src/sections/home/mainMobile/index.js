import ProjectCard from "@/components/cards/projectCard";
import styles from "./main.module.scss";

export default function MainMobile() {
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