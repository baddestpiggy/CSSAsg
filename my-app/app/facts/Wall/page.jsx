"use client";

import React, { useEffect } from 'react';
import styles from "./wall.module.css";

export default function MachuPicchu() {
  useEffect(() => {
    // Get the slug from the current path
    const slug = window.location.pathname.split('/').pop();
    
    // Mark this wonder as visited
    const stored = sessionStorage.getItem('visitedWonders');
    const visitedArray = stored ? JSON.parse(stored) : [];
    
    // Add current wonder's slug if not already visited
    if (!visitedArray.includes(slug)) {
      visitedArray.push(slug);
      sessionStorage.setItem('visitedWonders', JSON.stringify(visitedArray));
    }
  }, []);


    return (
        <main className={styles.backgroundContainer}>

            <section className={styles.hero}>
                <h1>Great Wall of China</h1>
            </section>

            <div className={styles.factBar}>
                <div className={styles.factItem}>
                    <img src="/location.png" alt="Location" className={styles.icon} />
                    <div>
                        <span className={styles.label}>Location:</span>
                        <p className={styles.value}>China</p>
                    </div>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.factItem}>
                    <img src="/calender.png" alt="Built" className={styles.icon} />
                    <div>
                        <span className={styles.label}>Built:</span>
                        <p className={styles.value}>7th Century BC</p>
                    </div>
                </div>
            
                <div className={styles.divider}></div>

                <div className={styles.factItem}>
                    <img src="/material.png" alt="Materials" className={styles.icon} />
                    <div>
                        <span className={styles.label}>Materials:</span>
                        <p className={styles.value}>Stone, Brick, Earth</p>
                    </div>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.factItem}>
                    <img src="/length.png" alt="Length" className={styles.icon} />
                    <div>
                        <span className={styles.label}>Length:</span>
                        <p className={styles.value}>Over 21,000 km</p>
                    </div>
                </div>
            </div>

            <section className={styles.details}>
                <div>
                    <img src="/wall_of_china_1.jpg" alt="wallPhoto" className={styles.photo} />
                </div>

                <div className={styles.factsGrid}>
                    <div className={styles.factsList}>
                        <h2 className={styles.sectionTitle}>- Interesting Facts -</h2>
                        <ul>
                            <li>
                                <p>The Great Wall stretches over 21,000 kilometres across Northern China and took over 2000 years to build.</p>
                            </li>
                            <li>
                                <p>It was built to protect Chinese states and empires from nomadic invaders.</p>
                            </li>
                            <li>
                                <p>Various dynasties contributed to its construction, with the most famous sections built by the Ming Dynasty (1368-1644).</p>
                            </li>
                            <li>
                                <p>It's generally not visible to the naked eye from space, contrary to popular belief.</p>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.mapContainer}>
                        <img src="/chinaMap.jpg" className={styles.mapImage} alt="Map of China" />
                        <div className={styles.mapLabel}>The Great Wall of China</div>
                    </div>
                </div>
            </section>
        </main>
        
    );
}