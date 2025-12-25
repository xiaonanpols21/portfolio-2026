import Image from "next/image";
import SocialMedia from "@/components/socialMedia/link";
import styles from "./me.module.scss";
export default function Me() {
    return (
        <main className={`${styles.main}`}>
            <h1>Xiao Nan Pols</h1>
            <ul className={`${styles.tags}`}>
                <li>Creatief</li>
                <li>Food</li>
                <li>Gym</li>
            </ul>
            <Image
                src="/img/me.jpg"
                width={353}
                height={353}
                alt="Xiao Nan Pols"
                className={`${styles.meImg}`}
            />
            <section className={`${styles.content}`}>
                <h2>Front-end developer / Designer</h2>
                <p>Lorem ipsum dolor sit amet consectetur. Ante pharetra nunc condimentum cras. Ultrices sed nunc ut massa in libero nunc neque. Malesuada placerat tincidunt cras amet. Lorem ipsum dolor sit amet consectetur. Ante pharetra nunc condimentum cras. Ultrices sed nunc ut massa in libero nunc neque. Malesuada placerat tincidunt cras amet.</p>
            </section>
            <ul>
                <li>
                    <SocialMedia/>
                </li>
            </ul>
        </main>

    )
}