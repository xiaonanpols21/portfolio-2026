import Image from "next/image";
import styles from "./gallery.module.scss";
export default function Desktop() {
    return (
        <section className={styles.section}>
            <h3 className="visually-hidden">Desktop gallerij</h3>
            <Image
                src="/img/thumbnail.webp"
                width={500}
                height={500}
                alt="Picture of the author"
                className={styles.heroImg}
            />
            <form className={styles.form}>
                <label>
                    <input type="radio"/>
                       <Image
                            src="/img/thumbnail.webp"
                            width={500}
                            height={500}
                            alt="Picture of the author"
                        />
                </label>
                <label>
                    <input type="radio"/>
                       <Image
                            src="/img/thumbnail.webp"
                            width={500}
                            height={500}
                            alt="Picture of the author"
                        />
                </label>
                <label>
                    <input type="radio"/>
                       <Image
                            src="/img/thumbnail.webp"
                            width={500}
                            height={500}
                            alt="Picture of the author"
                        />
                </label>
            </form>
        </section>
    )
}