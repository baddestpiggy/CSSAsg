"use client";

import React, { useEffect } from 'react';
import styles from "./petra.module.css";

export default function MachuPicchu() {
  useEffect(() => {
    // Get the slug from the current path
    const slug = window.location.pathname.split('/').pop();
    
    // Mark this wonder as visited
    const stored = localStorage.getItem('visitedWonders');
    const visitedArray = stored ? JSON.parse(stored) : [];
    
    // Add current wonder's slug if not already visited
    if (!visitedArray.includes(slug)) {
      visitedArray.push(slug);
      localStorage.setItem('visitedWonders', JSON.stringify(visitedArray));
    }
  }, []);

    return (
        <main className={styles.backgroundContainer}>

            <section className={styles.hero}>
                <h1>Petra</h1>
            </section>

            <div className={styles.factBar}>
                <div className={styles.factItem}>
                    <img src="/location.png" alt="Location" className={styles.icon} />
                    <div>
                        <span className={styles.label}>Location:</span>
                        <p className={styles.value}>Ma'an, Jordan</p>
                    </div>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.factItem}>
                    <img src="/calender.png" alt="Built" className={styles.icon} />
                    <div>
                        <span className={styles.label}>Built:</span>
                        <p className={styles.value}>c. 4th Century BC</p>
                    </div>
                </div>
            
                <div className={styles.divider}></div>

                <div className={styles.factItem}>
                    <img src="/material.png" alt="Materials" className={styles.icon} />
                    <div>
                        <span className={styles.label}>Materials:</span>
                        <p className={styles.value}>Red Sandstone</p>
                    </div>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.factItem}>
                    <img src="/length.png" alt="Type" className={styles.icon} />
                    <div>
                        <span className={styles.label}>Type:</span>
                        <p className={styles.value}>Rock-cut Architecture</p>
                    </div>
                </div>
            </div>

            <section className={styles.details}>
                <div>
                    <img src="/petra_1.jpg" alt="Al-Khazneh (The Treasury) in Petra" className={styles.photo} />
                </div>

                <div className={styles.factsGrid}>
                    <div className={styles.factsList}>
                        <h2 className={styles.sectionTitle}>- Interesting Facts -</h2>
                        <ul>
                            <li>
                                <p>Petra is often called the "Rose City" due to the color of the stone from which it is carved.</p>
                            </li>
                            <li>
                                <p>It was the capital of the Nabataean Kingdom and a major hub for trade routes between Egypt and Mesopotamia.</p>
                            </li>
                            <li>
                                <p>The most famous structure is Al-Khazneh (The Treasury), which was actually a tomb carved into the sandstone cliff.</p>
                            </li>
                            <li>
                                <p>The city features an incredibly advanced water conduit system that allowed 30,000 people to live in the desert.</p>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.mapContainer}>
                        <img src="/jordanMap.jpg" className={styles.mapImage} alt="Map of Jordan" />
                        <div className={styles.mapLabel}>Arabah Valley, Jordan</div>
                    </div>
                </div>
            </section>
        </main>
    );
}