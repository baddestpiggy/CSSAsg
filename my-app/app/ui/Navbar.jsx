import Link from "next/link";
import styles from "./Navbar.module.css";


export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link className={styles.navitem} href="/">Home</Link>
            <Link className={styles.navitem} href="/about">About</Link>
            <Link className={styles.navitem} href="/namelist">Name List</Link>

        </nav>
    )
}