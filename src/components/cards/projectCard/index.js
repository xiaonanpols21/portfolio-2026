import Link from "next/link";
import Image from "next/image";
import styles from "./projectCard.module.scss";


export default function ProjectCard({title, goal, img, alt, data}) {
    return (
        <article className={`${styles.article}`} >
            <Link href="/">
                <h2>{title}</h2>
                <p>{goal}</p>
                {/* TODO: Change this to a component */}
                <ul className={`${styles.tags}`} aria-label="Vaardigheden die in dit project zijn toegepast">
                    {data.acf.tags.map((item, key) => (
                        <li key={key}>{item.tag}</li>
                    ))}
                </ul>
                <span className={`${styles.moreInfo}`}>Meer info</span>
                <div>
                    <Image
                        src={img}
                        width={500}
                        height={500}
                        alt={alt}
                    />
                </div>
           
            </Link>
        </article>
    )
}