"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./fave.module.scss";
export default function Fave() {
     const [savedFavorite, setSavedFavorite] = useState([]);

    useEffect(() => {
        try {
            const savedFavorite = localStorage.getItem("projects");

            if (savedFavorite) {
                const parsedFavorite = JSON.parse(savedFavorite);
                if (Array.isArray(parsedFavorite)) {
                    setSavedFavorite(parsedFavorite);
                } else {
                    console.error("Invalid data in localStorage: expected an array");
                }
            }
        } catch (error) {
            console.error("Failed to parse localStorage data:", error);
        }
    }, []);

    const removeFromFavorites = (slug) => {
        const updatedFavorites = savedFavorite.filter(
            (item) => item.slug !== slug
        );

        localStorage.setItem("projects", JSON.stringify(updatedFavorites));

        setSavedFavorite(updatedFavorites);
    };

    return (
        <main className={`${styles.main}`}>
            <h1>Mijn favorieten</h1>

            <ul>
                {savedFavorite.map((item, key) => (
                    <li key={key}>
                        <article className={`${styles.article}`} >
                            <h2>{item.title}</h2>
                            <p>{item.goal}</p>

                            <ul  className={`${styles.tags}`} >
                                {item.tags.map((item, key) => (
                                    <li key={key}>{item}</li>
                                ))}
                            </ul>

                            <Link href={`/projecten/${item.slug}`}>
                                <div>
                                    <Image
                                        src={item.img}
                                        width={500}
                                        height={500}
                                        alt={item.title}
                                    />
                                </div>
                                <span className={`${styles.moreInfo}`}>Meer info</span>
                            </Link>
                            <button aria-label="Verwijder project knop" onClick={() => removeFromFavorites(item.slug)}></button>
                        </article>
                    </li>
                ))}
            </ul>
        </main>
    )
}