"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Tags from "@/components/project/tags";
import styles from "./projectCard.module.scss";

export default function ProjectCard({ title, goal, img, alt, data, slug }) {
    const project = {
        title,
        goal,
        img,
        slug,
        tags: data.acf.tags.map(item => item.tag)
    };

    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        const existingProjects =
            JSON.parse(localStorage.getItem("projects")) || [];

        const exists = existingProjects.some(
            (p) => p.slug === slug
        );

        setIsLiked(exists);
    }, [slug]);

    const toggleProjectInLocalStorage = (project) => {
        const existingProjects =
            JSON.parse(localStorage.getItem("projects")) || [];

        const exists = existingProjects.some(
            (p) => p.slug === project.slug
        );

        const updatedProjects = exists
            ? existingProjects.filter(p => p.slug !== project.slug)
            : [...existingProjects, project];

        localStorage.setItem("projects", JSON.stringify(updatedProjects));
    };

    const handleLikeClick = () => {
        toggleProjectInLocalStorage(project);
        setIsLiked(prev => !prev);
    };

    return (
        <article className={styles.article}>
            <h2>{title}</h2>
            <p>{goal}</p>
            <Tags data={data} classes={styles.tags} />

            <Link href={`/projecten/${slug}`}>
                <Image src={img} width={500} height={500} alt={alt} />
                <span className={styles.moreInfo}>Meer info</span>
            </Link>

            <button
                aria-label="Like project knop"
                onClick={handleLikeClick}
                className={isLiked ? styles.liked : ""}
            />
        </article>
    );
}
