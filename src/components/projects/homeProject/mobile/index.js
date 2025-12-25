import { fetchProjects } from "@/js/fetchProjects";
import { sortByDate } from "@/js/sortByDate";
import ProjectCard from "@/components/cards/projectCard";
import styles from "./mobile.module.scss";

export default async function Mobile() {
    const data = await fetchProjects();
    const sortedData = sortByDate(data);

    return (
        <main className={`${styles.main}`}>
            <ul>
                {sortedData.map((item, key) => {
                    const category = item.acf.category.join(",");
                    return (
                        <li key={key} className={`${category}`}>
                            <ProjectCard
                                title={item.title.rendered}
                                goal={item.acf.goal}
                                img={item.acf.images[0]}
                                alt={item.title.rendered}
                                data={item}
                                slug={item.slug}
                            />
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}