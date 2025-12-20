import Link from "next/link";

export default function Header() {
    return (
        <>
            <nav>
                <Link href="/">Xiao NaN</Link>
                <label aria-label="Menu knop">
                    <input type="checkbox"/>
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </nav>
        </>
    )
}