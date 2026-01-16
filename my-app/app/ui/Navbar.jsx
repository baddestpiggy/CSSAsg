"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";
import {useState} from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <Link className={styles.navitem} href="/">Home</Link>
            <Link className={styles.navitem} href="/gallery">Gallery</Link>
            <div 
            className={styles.dropdown}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            >
                <Link className={styles.navitem} href="/facts">
                Facts {isOpen ? '▴' : '▾'}
                </Link>

                {isOpen && (
                    <div className={styles.dropdownMenu}>
                        <Link href="/facts/China" className={styles.dropdownItem}>Great Wall of China</Link>
                        <Link href="/facts/Petra" className={styles.dropdownItem}>Petra</Link>
                        <Link href="/facts/Colosseum" className={styles.dropdownItem}>Colosseum</Link>
                        <Link href="/facts/Chichén Itzá" className={styles.dropdownItem}>Chichén Itzá</Link>
                        <Link href="/facts/Machu Picchu" className={styles.dropdownItem}>Machu Picchu</Link>
                        <Link href="/facts/Taj Mahal" className={styles.dropdownItem}>Taj Mahal</Link>
                        <Link href="/facts/Christ" className={styles.dropdownItem}>Christ the Redemeer</Link>
                    </div>
                )}
            </div>
            <Link className={styles.navitem} href="/about">About</Link>
        </nav>
    );
}