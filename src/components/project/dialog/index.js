import Image from "next/image";
import styles from "./dialog.module.scss";
export default function Dialog({selectedImage, handleClose, dialogRef, data}) {
    return (
        <dialog ref={dialogRef} className={styles.dialog} aria-label="De gekozen afbeelding">
            {/* Only show when Image exist */}
            {selectedImage && (
                <Image
                    src={selectedImage}
                    width={300}
                    height={300}
                    alt={data.title.rendered}
                />
            )}
            <button aria-label="Sluit afbeelding" onClick={handleClose}></button>
        </dialog>
    )
}