import Link from "next/link";
import Image from "next/image";
import styles from "./socialmedia.module.scss";
export default function SocialMedia() {
    return (
        <Link href="/" className={`${styles.socialMeidaBtn}`}>
            Github
            <div className={`${styles.socialIcon}`}>
                <Image
                    src="/img/icons/github.svg"
                    width={24}
                    height={24}
                    alt="Social media icon"
                />
            </div>
        </Link>
    )
}