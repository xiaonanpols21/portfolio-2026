import ProjectCard from "@/components/cards/projectCard";
import styles from "./mobile.module.scss";

export default async function Mobile() {
    const fetchData = await fetch('https://xiaonan.nl/wp-json/wp/v2/projects-2026?acf_format=standard')
    const data = await fetchData.json();

    return (
        <main className={`${styles.main}`}>
            <ul>
                {data.map((item, key) => (
                    <li key={key}>
                        <ProjectCard
                            title={item.title.rendered}
                            goal={item.acf.goal}
                            img={item.acf.images[0]}
                            alt={item.title.rendered}
                            data={item}
                        />
                    </li>
                ))}
            </ul>
        </main>
    )
}