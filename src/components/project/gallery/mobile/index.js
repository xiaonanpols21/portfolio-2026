"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import Dialog from "../../dialog";
import styles from "./gallery.module.scss";
export default function Mobile({data}) {
    const dialogRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleOpen = (img) => {
        setSelectedImage(img); 
        dialogRef.current.showModal();
    };

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
                            onClick={() => handleOpen(item)}
                        />
                    </li>
                ))}
            </ul>

            <Dialog 
                selectedImage={selectedImage} 
                handleClose={handleClose}
                dialogRef={dialogRef}
                data={data}
            />

    
        </section>


    )
}