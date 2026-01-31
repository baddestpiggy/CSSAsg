"use client";
import styles from "./christ.module.css"
import React, { useEffect } from 'react';
export default function ChristTheRedeemer() {
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
        <h1>Christ the Redeemer</h1>
      </section>

            <div className={styles.factBar}>
                <div className={styles.factItem}>
                    <img src="/location.png" alt="Location" className={styles.icon} />
                    <div>
                        <span className={styles.label}>Location:</span>
                        <p className={styles.value}>Rio de Janeiro, Brazil</p>
                    </div>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.factItem}>
                    <img src="/calender.png" alt="Built" className={styles.icon} />
                    <div>
                        <span className={styles.label}>Built:</span>
                        <p className={styles.value}>1922 - 1931</p>
                    </div>
                </div>
            
                <div className={styles.divider}></div>

                <div className={styles.factItem}>
                    <img src="/material.png" alt="Materials" className={styles.icon} />
                    <div>
                        <span className={styles.label}>Materials:</span>
                        <p className={styles.value}>Reinforced Concrete & Soapstone</p>
                    </div>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.factItem}>
                    <img src="/length.png" alt="Height" className={styles.icon} />
                    <div>
                        <span className={styles.label}>Height:</span>
                        <p className={styles.value}>30 Meters (98 ft)</p>
                    </div>
                </div>
            </div>

            <section className={styles.details}>
                <div>
                    <img src="/christ_the_redeemer_1.jpg" alt="Christ the Redeemer Statue" className={styles.photo} />
                </div>

                <div className={styles.factsGrid}>
                    <div className={styles.factsList}>
                        <h2 className={styles.sectionTitle}>- Interesting Facts -</h2>
                        <ul>
                            <li>
                                <p>The statue is located at the peak of the 700-meter Corcovado Mountain in the Tijuca Forest National Park.</p>
                            </li>
                            <li>
                                <p>It was designed by French sculptor Paul Landowski and built by Brazilian engineer Heitor da Silva Costa.</p>
                            </li>
                            <li>
                                <p>The outer layers are made of thousands of triangular soapstone tiles, which were chosen for their resistance to extreme weather.</p>
                            </li>
                            <li>
                                <p>In 2007, it was voted as one of the New Seven Wonders of the World.</p>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.mapContainer}>
                        {/* You might want to update this image source to a map of Brazil/Rio */}
                        <img src="/brazilMap.jpg" className={styles.mapImage} alt="Map of Brazil" />
                        <div className={styles.mapLabel}>Mount Corcovado, Brazil</div>
                    </div>
                </div>
            </section>
        </main>
    );
}