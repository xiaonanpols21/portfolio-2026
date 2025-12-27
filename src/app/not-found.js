import Link from "next/link";
import styles from "./404/404.module.scss";

export default function NotFound() {
    return (
        <main className={`${styles.main}`}>
            <div>
                <h1>404</h1>
                <p>Helaas is deze pagina niet te vinden</p>
                <Link href="/">Naar home</Link>
            </div>
        </main>

    )
}