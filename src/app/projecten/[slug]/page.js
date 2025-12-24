import Link from "next/link";
import Mobile from "@/components/project/gallery/mobile";
import Desktop from "@/components/project/gallery/desktop";
import styles from "./project.module.scss";

export default async function Project({params}) {
    const fetchData = await fetch('https://xiaonan.nl/wp-json/wp/v2/projects?acf_format=standard')
    const data = await fetchData.json();

    const { slug } = await params;
    const item = data.find((item) => item.slug === slug);

    return (
        <main className={`${styles.main}`}>
            <h1>{item.title.rendered}</h1>

            <ul className={`${styles.tags}`}>
                <li>tag</li>
                <li>tag</li>
                <li>tag</li>
            </ul>

            <Link href="">Live demo</Link>

            {/* Gallery */}
            <Mobile data={item}/>
            <Desktop/>
            
        </main>
    )
}