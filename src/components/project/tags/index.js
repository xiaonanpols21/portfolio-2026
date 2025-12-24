import styles from "./tags.module.scss";
export default function Tags({data, classes}) {
    return (
        <ul className={`${styles.tags} ${classes}`} aria-label="Vaardigheden die in dit project zijn toegepast">
            {data.acf.tags.map((item, key) => (
                <li key={key}>{item.tag}</li>
            ))}
        </ul>
    )
}