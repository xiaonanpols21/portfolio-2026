"use client";
import { usePathname } from "next/navigation";

import Link from "next/link";
import styles from "./navLink.module.scss";

export default function NavLink({classes}) {
    // Bron: https://www.geeksforgeeks.org/how-to-add-styling-to-an-active-link-in-nextjs/
    const pathname = usePathname()

    return (
        <nav className={`${styles.nav} ${classes}`}>
            <ul>
                <li><Link className={`${pathname === '/over-mij' ? `${styles.active}` : ''}`} href="/over-mij">Over mij</Link></li>
                <li><Link className={`${pathname === '/' ? `${styles.active}` : ''}`} href="/">Projecten</Link></li>
                <li><Link href="/cv.pdf" target="_blank">C.V</Link></li>
            </ul>
        </nav>
    )
}