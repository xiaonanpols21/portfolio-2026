import Link from "next/link";
import Mobile from "@/components/project/gallery/mobile";
import styles from "./project.module.scss";

export default function Project() {
    return (
        <main className={`${styles.main}`}>
            <h1>Shift savy</h1>
            <ul className={`${styles.tags}`}>
                <li>tag</li>
                <li>tag</li>
                <li>tag</li>
            </ul>
            <Link href="">Live demo</Link>
            <Mobile/>
        </main>
    )
}