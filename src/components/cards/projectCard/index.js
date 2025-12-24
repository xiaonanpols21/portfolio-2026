import Link from "next/link";
import Image from "next/image";
import Tags from "@/components/project/tags";
import styles from "./projectCard.module.scss";


export default function ProjectCard({title, goal, img, alt, data, slug}) {
    return (
        <article className={`${styles.article}`} >
            <Link href={`/projecten/${slug}`}>
                <h2>{title}</h2>
                <p>{goal}</p>
                <Tags data={data} classes={styles.tags}/>
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