"use client";

import React, { useEffect } from 'react';
import styles from "./machu.module.css";

export default function MachuPicchu() {
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
                <h1>Machu Picchu</h1>
            </section>

            <div className={styles.factBar}>
                <div className={styles.factItem}>
                    <img src="/location.png" alt="Location" className={styles.icon} />
                    <div>
                        <span className={styles.label}>Location:</span>
                        <p className={styles.value}>Cusco Region, Peru</p>
                    </div>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.factItem}>
                    <img src="/calender.png" alt="Built" className={styles.icon} />
                    <div>
                        <span className={styles.label}>Built:</span>
                        <p className={styles.value}>c. 1450 AD</p>
                    </div>
                </div>
            
                <div className={styles.divider}></div>

                <div className={styles.factItem}>
                    <img src="/material.png" alt="Materials" className={styles.icon} />
                    <div>
                        <span className={styles.label}>Materials:</span>
                        <p className={styles.value}>Polished Dry-Stone</p>
                    </div>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.factItem}>
                    <img src="/length.png" alt="Elevation" className={styles.icon} />
                    <div>
                        <span className={styles.label}>Elevation:</span>
                        <p className={styles.value}>2,430 Meters</p>
                    </div>
                </div>
            </div>

            <section className={styles.details}>
                <div>
                    <img src="/Machu_Picchu_1.jpg" alt="Machu Picchu Citadel" className={styles.photo} />
                </div>

                <div className={styles.factsGrid}>
                    <div className={styles.factsList}>
                        <h2 className={styles.sectionTitle}>- Interesting Facts -</h2>
                        <ul>
                            <li>
                                <p>It was built by the Inca Empire under the reign of Pachacuti and is often referred to as the "Lost City of the Incas."</p>
                            </li>
                            <li>
                                <p>The stones are cut so precisely (Ashlar technique) that they fit together without mortar; even a knife blade cannot fit between them.</p>
                            </li>
                            <li>
                                <p>The site is divided into an agricultural sector, with terraces, and an urban sector with temples and plazas.</p>
                            </li>
                            <li>
                                <p>It remained unknown to the outside world until American historian Hiram Bingham was led there by locals in 1911.</p>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.mapContainer}>
                        <img src="/peruMap.jpg" className={styles.mapImage} alt="Map of Peru" />
                        <div className={styles.mapLabel}>Andes Mountains, Peru</div>
                    </div>
                </div>
            </section>
        </main>
    );
}