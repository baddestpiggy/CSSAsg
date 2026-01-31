"use client";

import React, { useEffect } from 'react';
import styles from "./taj.module.css";

export default function TajMahal() {
  useEffect(() => {
    const slug = window.location.pathname.split('/').pop();
    const stored = sessionStorage.getItem('visitedWonders');
    const visitedArray = stored ? JSON.parse(stored) : [];
    if (!visitedArray.includes(slug)) {
      visitedArray.push(slug);
      sessionStorage.setItem('visitedWonders', JSON.stringify(visitedArray));
    }
  }, []);
    return (
        <main className={styles.backgroundContainer}>

            <section className={styles.hero}>
                <h1>Taj Mahal</h1>
            </section>

            <div className={styles.factBar}>
                <div className={styles.factItem}>
                    <img src="/location.png" alt="Location" className={styles.icon} />
                    <div>
                        <span className={styles.label}>Location:</span>
                        <p className={styles.value}>Agra, India</p>
                    </div>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.factItem}>
                    <img src="/calender.png" alt="Built" className={styles.icon} />
                    <div>
                        <span className={styles.label}>Built:</span>
                        <p className={styles.value}>1632 - 1653</p>
                    </div>
                </div>
            
                <div className={styles.divider}></div>

                <div className={styles.factItem}>
                    <img src="/material.png" alt="Materials" className={styles.icon} />
                    <div>
                        <span className={styles.label}>Materials:</span>
                        <p className={styles.value}>White Marble & Precious Stones</p>
                    </div>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.factItem}>
                    <img src="/length.png" alt="Commissioned By" className={styles.icon} />
                    <div>
                        <span className={styles.label}>Commissioned By:</span>
                        <p className={styles.value}>Shah Jahan</p>
                    </div>
                </div>
            </div>

            <section className={styles.details}>
                <div>
                    <img src="/taj_mahal_1.jpg" alt="Taj Mahal Mausoleum" className={styles.photo} />
                </div>

                <div className={styles.factsGrid}>
                    <div className={styles.factsList}>
                        <h2 className={styles.sectionTitle}>- Interesting Facts -</h2>
                        <ul>
                            <li>
                                <p>The Taj Mahal is a white marble mausoleum built by Mughal Emperor Shah Jahan in memory of his favorite wife, Mumtaz Mahal.</p>
                            </li>
                            <li>
                                <p>It is widely considered the finest example of Mughal architecture, blending Indian, Persian, and Islamic styles.</p>
                            </li>
                            <li>
                                <p>The color of the marble appears to change throughout the day, looking pinkish in the morning and golden under the moon.</p>
                            </li>
                            <li>
                                <p>Approximately 20,000 artisans and workers were employed from across India and Central Asia to complete the complex.</p>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.mapContainer}>
                        <img src="/tajMap.jpg" className={styles.mapImage} alt="Map of India" />
                        <div className={styles.mapLabel}>Uttar Pradesh, India</div>
                    </div>
                </div>
            </section>
        </main>
    );
}