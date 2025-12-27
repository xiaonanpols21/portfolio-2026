import { fetchProjects } from "@/js/fetchProjects";
import Image from "next/image";
import Link from "next/link";
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
                <p>Mijn naam is Xiao Nan Pols en ik heb al meerdere jaren ervaring in webdevelopment. Ik ben gemotiveerd om mezelf verder uit te dagen als front-end developer en om te ontdekken wat er allemaal mogelijk is binnen het web.</p>
                <p>Ik ben flexibel, gedisciplineerd en werk doelgericht. Daarbij ga ik gedetailleerd te werk om mijn doelen te behalen.</p>
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
                    <p>Daarnaast zie ik dat toegankelijkheid online vaak over het hoofd wordt gezien. Ik wil daar graag mijn steentje aan bijdragen. Het is belangrijk dat digitale producten voor iedereen toegankelijk zijn. Om hieraan bij te dragen, kan ik ervoor zorgen dat websites en applicaties inclusiever worden en een breder publiek bedienen.</p>
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
                    <p>Naast mijn passie voor webontwikkeling ben ik ook creatief bezig. Zo heb ik een eigen <Link href="https://xiaodesign.nl/character/">stickershop</Link> waarin ik cartoonversies van klanten maak. Daarnaast werk ik aan een <Link href="https://xiaodesign.nl/obvious/">Webtoon</Link> (online stripverhaal). En tot slot heb ik twee boeken uitgebracht die te bestellen zijn via <Link href="https://www.boekscout.nl/shop2/zoeken?term=xiao+nan+pols">boekscout.nl/yo.</Link></p>
                    <Image
                        src="/img/me.gif"
                        width={500}
                        height={500}
                        alt="Xiao Nan Pols Cartoon"
                        className={`${styles.gif}`}
                    />
                </details>
            </section>
       

        </main>

    )
}