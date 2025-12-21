import styles from "./hero.module.scss";

export default function Hero() {
    return (
        <section className={`${styles.section}`}>
            <h1>Front-end / designer</h1>
            <p>Een creatieve front-end developer met oog voor design waarbij toegankelijkheid belangrijk is voor iedereen!</p>
        </section>
    )
}