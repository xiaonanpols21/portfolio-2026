import Link from "next/link";
import Image from "next/image";
import styles from "./projectCard.module.scss";


export default function ProjectCard({title, goal, img, alt, data}) {
    return (
        <article className={`${styles.article}`} >
            <Link href="/">
                <h2>{title}</h2>
                <p>{goal}</p>
                <ul className={`${styles.tags}`}>
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