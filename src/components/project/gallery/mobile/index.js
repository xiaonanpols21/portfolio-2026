"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./gallery.module.scss";
export default function Mobile({data}) {
    const dialogRef = useRef(null);

    useEffect(() => {
        // dialogRef.current.showModal();
    }, []);

    const handleClose = () => {
        dialogRef.current.close(); 
    };

    return (
        <section className={styles.section}>
            <h3 className="visually-hidden">Mobile gallerij slider</h3>
            <ul className={styles.gallery}>
                {data.acf.images.map((item, key) => (
                    <li key={key}>
                        <Image
                            src={item}
                            width={300}
                            height={300}
                            alt="Picture of the author"
                        />
                    </li>
                ))}
            </ul>

            <dialog ref={dialogRef} className={styles.dialog} aria-label="De gekozen afbeelding">
                <Image
                    src="/img/thumbnail.webp"
                    width={300}
                    height={300}
                    alt="Picture of the author"
                />
                <button aria-label="Sluit afbeelding" onClick={handleClose}></button>
            </dialog>
        </section>


    )
}