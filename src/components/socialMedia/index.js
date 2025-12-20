import Link from "next/link";
import Image from "next/image";
import styles from "./socialmedia.module.scss";

export default function SocialMedia({link, aria, img, alt}) {
    return (
        <Link href={link} aria-label={aria} className={`${styles.link}`} target="_blank">
            <Image
                src={img}
                width={24}
                height={24}
                alt={alt}
            />
        </Link>
    )
}