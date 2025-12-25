import ProjectCard from "@/components/cards/projectCard";
import styles from "./mobile.module.scss";

export default async function Mobile() {
    const fetchData = await fetch('https://xiaonan.nl/wp-json/wp/v2/projects-2026?acf_format=standard')
    const data = await fetchData.json();

    // Change string date to real date format
    const dateData = data.map((item) => ({
        ...item,
        date: new Date(item.date),
    }));

    // Sort date on date
    // Bron: https://stackoverflow.com/questions/10123953/how-to-sort-an-object-array-by-date-property & Chat gpt to clean up

    const sortedData = dateData.sort((a, b) => a.date - b.date);

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