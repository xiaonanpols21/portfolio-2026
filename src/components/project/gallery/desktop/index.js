"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Dialog from "../../dialog";
import styles from "./gallery.module.scss";
export default function Desktop({data}) {
    const dialogRef = useRef(null);  
    const [selectedImage, setSelectedImage] = useState(data.acf.images[0]);

    const changeImg = (img) => {
        setSelectedImage(img); 
    };

    const handleOpen = (img) => {
        setSelectedImage(img); 
        dialogRef.current.showModal();
    };

    const handleClose = () => {
        dialogRef.current.close(); 
    }; 

    return (
        <section className={styles.section}>
            <h3 className="visually-hidden">Desktop gallerij</h3>
            <div className={styles.sticky}>
                {selectedImage && ( 
                    <>
                        <Image
                            src={selectedImage}
                            width={500}
                            height={500}
                            alt={"Project foto Xiao Design"}
                            className={styles.heroImg}
                            onClick={() => handleOpen(selectedImage)}
                        />

                        <Dialog 
                            selectedImage={selectedImage} 
                            handleClose={handleClose}
                            dialogRef={dialogRef}
                            data={data}
                        />
                    </>
                )}

                {data.acf.images.length > 1 && (
                    <form className={styles.form}>
                        {data.acf.images.map((item, key) => (
                            <label key={key}>
                                <input type="radio"  onClick={() => changeImg(item)} />
                                <Image
                                    src={item}
                                    width={500}
                                    height={500}
                                    alt={"Project foto Xiao Design"}
                                />
                            </label>
                        ))}
                    </form>
                )}
            </div>
        </section>
    )
}