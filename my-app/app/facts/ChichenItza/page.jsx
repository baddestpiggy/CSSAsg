"use client";

import React, { useEffect } from 'react';
import styles from "./itza.module.css";

export default function ChichenItza() {
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
        <h1>Chichen Itza</h1>
      </section>

      <div className={styles.factBar}>
        <div className={styles.factItem}>
          <img src="/location.png" alt="Location" className={styles.icon} />
          <div>
            <span className={styles.label}>Location:</span>
            <p className={styles.value}>Yucatán, Mexico</p>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.factItem}>
          <img src="/calender.png" alt="Built" className={styles.icon} />
          <div>
            <span className={styles.label}>Built:</span>
            <p className={styles.value}>600 AD</p>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.factItem}>
          <img src="/material.png" alt="Materials" className={styles.icon} />
          <div>
            <span className={styles.label}>Materials:</span>
            <p className={styles.value}>Limestone</p>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.factItem}>
          <img src="/height.png" alt="Height" className={styles.icon} />
          <div>
            <span className={styles.label}>Height:</span>
            <p className={styles.value}>30 meters (98 feet)</p>
          </div>
        </div>
      </div>

      <section className={styles.details}>
        <div>
          <img src="/chichen_itza_1.jpg" alt="chichenItzaPhoto" className={styles.photo} />
        </div>

        <div className={styles.factsGrid}>
          <div className={styles.factsList}>
            <h2 className={styles.sectionTitle}>- Interesting Facts -</h2>
            <ul>
              <li>Chichen Itza was a major focal point in the Northern Maya Lowlands from the Late Classic through the Terminal Classic and into the early portion of the Postclassic period.</li>
              <li>The name "Chichen Itza" means "At the mouth of the well of the Itza," referring to the nearby cenote (natural sinkhole) that was a significant water source for the city.</li>
              <li>The site features a large pyramid known as El Castillo or the Temple of Kukulcan, which is famous for its astronomical significance and architectural precision.</li>
              <li>During the spring and autumn equinoxes, the setting sun casts a series of triangular shadows on the pyramid's staircase, creating the illusion of a serpent descending the steps.</li>
              <li>Chichen Itza was designated a UNESCO World Heritage Site in 1988 and is one of the New Seven Wonders of the World.</li>
            </ul>
          </div>

          <div className={styles.mapContainer}>
            <img src="/chichen_itza_map.jpg" alt="Chichen Itza Map" className={styles.map} />
            <div className={styles.mapCaption}>Map of Chichen Itza</div>
          </div>
        </div>
      </section>
    </main>
  );
}