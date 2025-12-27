import { fetchProjects } from "@/js/fetchProjects";
import Image from "next/image";
import SocialMedia from "@/components/socialMedia/link";
import styles from "./me.module.scss";
export default async function Me() {
    const data = await fetchProjects();
    console.log(data)

    // Chat gpt
    const tags = [
        ...new Set(
            data
            .flatMap(item => item.acf.tags)
            .map(tagObj => tagObj.tag)
        )
    ];

    return (
        <main className={`${styles.main}`}>
            <div className={`${styles.meContent}`}>
                <h1>Xiao Nan Pols</h1>
                <ul className={`${styles.tags}`}>
                    <li>Creatief</li>
                    <li>Food</li>
                    <li>Gym</li>
                </ul>
            </div>
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
            <ul className={`${styles.socialMedia}`}>
                <li>
                    <SocialMedia
                        name={"Github"}
                        link={"https://github.com/xiaonanpols21"}
                        img={"/img/icons/github.svg"}
                    />
                </li>
                <li>
                    <SocialMedia
                        name={"Linkedin"}
                        link={"https://www.linkedin.com/in/xiao-nan-pols-b839951b5/"}
                        img={"/img/icons/linkedin.svg"}
                    />
                </li>
                <li>
                    <SocialMedia
                        name={"Instagram"}
                        link={"https://www.instagram.com/xiaonanpols21/"}
                        img={"/img/icons/instagram.svg"}
                    />
                </li>
            </ul>

            <section className={`${styles.faq}`}>
                <h3 className="visually-hidden">Kenmerken</h3>
                <details>
                    <summary>toegankelijkheid</summary>
                </details>
                <details>
                    <summary>skills</summary>
                    <ul className={`${styles.tags}`}>
                    {tags.map((item, key) => (
                        <li key={key}>{item}</li>
                    ))}
                    </ul>
                </details>
                <details>
                    <summary>creatief</summary>
                </details>
            </section>
       

        </main>

    )
}