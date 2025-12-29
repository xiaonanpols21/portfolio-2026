"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./navLink.module.scss";

export default function NavLink({ classes, onLinkClick }) {
    const pathname = usePathname();

    return (
        <nav className={`${styles.nav} ${classes}`}>
            <ul>
                <li>
                    <Link
                        href="/over-mij"
                        className={pathname === "/over-mij" ? styles.active : ""}
                        onClick={onLinkClick}
                    >
                        Over mij
                    </Link>
                </li>

                <li>
                    <Link
                        href="/"
                        className={pathname === "/" ? styles.active : ""}
                        onClick={onLinkClick}
                    >
                        Projecten
                    </Link>
                </li>

                <li>
                    <Link href="/cv.pdf" target="_blank" onClick={onLinkClick}>
                        C.V
                    </Link>
                </li>

                <li>
                    <Link
                        href="/mijn-favorieten"
                        className={pathname === "/mijn-favorieten" ? styles.active : ""}
                        onClick={onLinkClick}
                    >
                        Mijn favorieten
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
