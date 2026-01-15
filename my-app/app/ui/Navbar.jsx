import Link from "next/link";
import styles from "./Navbar.module.css";


export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link className={styles.navitem} href="/">Home</Link>
            <Link className={styles.navitem} href="/gallery">Gallery</Link>
            <Link className={styles.navitem} href="/facts">Facts</Link>
            <Link className={styles.navitem} href="/about">About</Link>
            <a className={styles.navitem} href="/42.zip" download="website.zip">Download the Mystery File</a>
            

        </nav>
    )
}