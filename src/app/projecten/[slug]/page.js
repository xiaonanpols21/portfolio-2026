import Link from "next/link";
import Mobile from "@/components/project/gallery/mobile";
import Desktop from "@/components/project/gallery/desktop";
import Tags from "@/components/project/tags";
import styles from "./project.module.scss";

export default async function Project({params}) {
    const fetchData = await fetch('https://xiaonan.nl/wp-json/wp/v2/projects-2026?acf_format=standard')
    const data = await fetchData.json();

    const { slug } = await params;
    const item = data.find((item) => item.slug === slug);

    const currentIndex = data.findIndex((item) => item.slug === slug);

    const nextProject = currentIndex !== -1
    ? data[(currentIndex + 1) % data.length] 
    : null;

    return (
        <main className={`${styles.main}`}>
            <h1>{item.title.rendered}</h1>
         
            <Tags data={item} classes={styles.tags}/>

            <Link className={`${styles.demo}`} href={item.acf.live_demo_link} target="_blank">Live demo</Link>

            {/* Gallery */}
            <Mobile data={item}/>
            <Desktop data={item}/>

            <section className={`${styles.progress}`}>
                <h3 className="visually-hidden">Progress</h3>
                <h2>Doel</h2>
                <p>{item.acf.goal}</p>

                {/* Bron: https://blog.logrocket.com/using-dangerouslysetinnerhtml-react-application/ */}
                <div className={`${styles.divDanger}`} dangerouslySetInnerHTML={{__html: item.acf.progress}}/>
            </section>

            <Link href={`/projecten/${nextProject.slug}`} className={`${styles.nextProject}`}>Volgend project</Link>
            
        </main>
    )
}