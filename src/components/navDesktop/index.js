"use client";
import { usePathname } from "next/navigation";

import Link from "next/link";
import styles from "./navDesktop.module.scss";

export default function NavDesktopp() {
    // Bron: https://www.geeksforgeeks.org/how-to-add-styling-to-an-active-link-in-nextjs/
    const pathname = usePathname()

    return (
        <nav className={`${styles.navDesktop}`}>
            <ul>
                <li><Link className={`${pathname === '/over-mij' ? `${styles.active}` : ''}`} href="/over-mij">Over mij</Link></li>
                <li><Link className={`${pathname === '/' ? `${styles.active}` : ''}`} href="/">Projecten</Link></li>
                <li><Link className={`${pathname === '/cv' ? `${styles.active}` : ''}`} href="/cv">C.V</Link></li>
            </ul>
        </nav>
    )
}