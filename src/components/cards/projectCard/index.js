"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Tags from "@/components/project/tags";
import styles from "./projectCard.module.scss";


export default function ProjectCard({title, goal, img, alt, data, slug}) {
    // Chat gpt
    const project = {
        title,
        goal,
        img,
        slug,
        tags: data.acf.tags.map(item => item.tag)
    };

    const [isLiked, setIsLiked] = useState(false);

    const toggleProjectInLocalStorage = (project) => {
        const existingProjects =
            JSON.parse(localStorage.getItem("projects")) || [];

        const exists = existingProjects.some(
            (p) => p.slug === project.slug
        );

        let updatedProjects;

        if (exists) {
            // REMOVE
            updatedProjects = existingProjects.filter(
                (p) => p.slug !== project.slug
            );
        } else {
            // ADD
            updatedProjects = [...existingProjects, project];
        }

        localStorage.setItem("projects", JSON.stringify(updatedProjects));
    };

    const handleLikeClick = () => {
        toggleProjectInLocalStorage(project);
        setIsLiked(prev => !prev);
    };

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
                <button aria-label="Like project knop" onClick={handleLikeClick} className={`${isLiked ? styles.liked : ""}`}></button>
        </article>
    )
}