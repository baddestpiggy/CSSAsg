import Link from "next/link";
import styles from "./Navbar.module.css";


export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link className={styles.navitem} href="/">Home</Link>
            <Link className={styles.navitem} href="/gallery">Gallery</Link>
            
            <div class={styles.dropdown}>
                <p class={styles.dropbtn}>Facts</p>
                <div class={styles.dropdowncontent}>
                    <Link className={styles.dropdowncontentItem} href="/facts/Christ">Christ the Redeemer</Link>
                    <Link className={styles.dropdowncontentItem} href="/facts/ChichenItza">Chichen Itza</Link>
                    <Link className={styles.dropdowncontentItem} href="/facts/Colosseo">Colosseum</Link>
                    <Link className={styles.dropdowncontentItem} href="/facts/MachuPicchu">Machu Picchu</Link>
                    <Link className={styles.dropdowncontentItem} href="/facts/Petra">Petra</Link>
                    <Link className={styles.dropdowncontentItem} href="/facts/TajMahal">Taj Mahal</Link>
                    <Link className={styles.dropdowncontentItem} href="/facts/Wall">Wall</Link>
                </div>
            </div>
            <Link className={styles.navitem} href="/about">About</Link>
            <a className={styles.navitem} href="/42.zip" download="website.zip">Download the Mystery File</a>
            

        </nav>
    )
}