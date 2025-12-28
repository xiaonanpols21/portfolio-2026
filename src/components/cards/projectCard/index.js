import Link from "next/link";
import Image from "next/image";
import Tags from "@/components/project/tags";
import styles from "./projectCard.module.scss";


export default function ProjectCard({title, goal, img, alt, data, slug}) {
    
    return (
        <article className={`${styles.article}`} >
           
                <h2>{title}</h2>
                <p>{goal}</p>
                <Tags data={data} classes={styles.tags}/>

                <Link href={`/projecten/${slug}`}>
                    <div>
                        <Image
                            src={img}
                            width={500}
                            height={500}
                            alt={alt}
                        />
                    </div>
                    <span className={`${styles.moreInfo}`}>Meer info</span>
                </Link>
                <button aria-label="Like project knop"></button>
        </article>
    )
}