import Image from "next/image";
import styles from "./gallery.module.scss";
export default function Mobile() {
    return (
        <ul className={styles.gallery}>
            <li>
                 <Image
                    src="/img/thumbnail.webp"
                    width={300}
                    height={300}
                    alt="Picture of the author"
                />
            </li>
        </ul>
    )
}