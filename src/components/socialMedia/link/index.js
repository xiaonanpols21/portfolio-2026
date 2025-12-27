import Link from "next/link";
import Image from "next/image";
import styles from "./socialmedia.module.scss";
export default function SocialMedia({name, link, img}) {
    return (
        <Link href={link} className={`${styles.socialMeidaBtn}`} target="_blank">
            {name}
            <div className={`${styles.socialIcon}`}>
                <Image
                    src={img}
                    width={24}
                    height={24}
                    alt="Social media icon"
                />
            </div>
        </Link>
    )
}