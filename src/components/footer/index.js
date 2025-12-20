
import SocialMedia from "../socialMedia";
import styles from "./footer.module.scss";

export default function Footer() {
    return (
        <footer className={`${styles.footer}`}>
            <div className={`${styles.divider}`}></div>
            <ul>
                <li>
                    <SocialMedia
                        link={"https://github.com/xiaonanpols21"}
                        aria="Github knop"
                        img={"../../img/icons/github.svg"}
                        alt={"Github icoon"}
                    />
                </li>
                <li>
                    <SocialMedia
                        link={"https://www.linkedin.com/in/xiao-nan-pols-b839951b5/"}
                        aria="Linkedin knop"
                        img={"../../img/icons/linkedin.svg"}
                        alt={"Linkedin icoon"}
                    />
                </li>
                <li>
                    <SocialMedia
                        link={"https://www.instagram.com/xiaonanpols21/"}
                        aria="Instagram knop"
                        img={"../../img/icons/instagram.svg"}
                        alt={"Instagram icoon"}
                    />
                </li>
            </ul>
            <p className={`${styles.copyright}`}>© 2026 <span>Xiao NaN</span></p>
        </footer>
    )
}