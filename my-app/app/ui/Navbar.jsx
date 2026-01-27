"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";
import { useState } from "react";

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
                <p className={styles.dropbtn}>Facts</p>
                {isOpen && (
                    <div className={styles.dropdowncontent}>
                        <Link className={styles.dropdowncontentItem} href="/facts/Christ">Christ the Redeemer</Link>
                        <Link className={styles.dropdowncontentItem} href="/facts/ChichenItza">Chichen Itza</Link>
                        <Link className={styles.dropdowncontentItem} href="/facts/Colosseo">Colosseum</Link>
                        <Link className={styles.dropdowncontentItem} href="/facts/MachuPicchu">Machu Picchu</Link>
                        <Link className={styles.dropdowncontentItem} href="/facts/Petra">Petra</Link>
                        <Link className={styles.dropdowncontentItem} href="/facts/TajMahal">Taj Mahal</Link>
                        <Link className={styles.dropdowncontentItem} href="/facts/Wall">Wall</Link>
                    </div>
                )}
            </div>
            
            <Link className={styles.navitem} href="/Quiz">Quiz</Link>
            <Link className={styles.navitem} href="/about">About</Link>
        </nav>
    );
}