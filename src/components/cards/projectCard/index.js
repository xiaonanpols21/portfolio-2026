import Link from "next/link";
import Image from "next/image";
import styles from "./projectCard.module.scss";

export default function ProjectCard() {
    return (
        <article className={`${styles.article}`}>
            <h2>Shift save</h2>
            <p>Jonge supermarkt medewerkers motiveren om extra te gaan werken!</p>
            <ul className={`${styles.tags}`}>
                <li>Tag</li>
                <li>Tag</li>
                <li>Tag</li>
            </ul>
            <Link href="/" className={`${styles.link}`}>Meer info</Link>
            <Image
                src="/img/thumbnail.webp"
                width={500}
                height={500}
                alt="Picture of the author"
            />
        </article>
    )
}