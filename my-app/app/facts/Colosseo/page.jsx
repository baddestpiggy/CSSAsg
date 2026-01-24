"use client";

import React, { useEffect } from 'react';
import styles from "./cheeks.module.css";

export default function Colosseum() {
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
        <h1>Colosseum</h1>
      </section>

      <div className={styles.factBar}>
        <div className={styles.factItem}>
          <img src="/location.png" alt="Location" className={styles.icon} />
          <div>
            <span className={styles.label}>Location:</span>
            <p className={styles.value}>Rome, Italy</p>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.factItem}>
          <img src="/calender.png" alt="Built" className={styles.icon} />
          <div>
            <span className={styles.label}>Built:</span>
            <p className={styles.value}>72 - 80 AD</p>
          </div>
        </div>
      
        <div className={styles.divider}></div>

        <div className={styles.factItem}>
          <img src="/material.png" alt="Materials" className={styles.icon} />
          <div>
            <span className={styles.label}>Materials:</span>
            <p className={styles.value}>Travertine & Concrete</p>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.factItem}>
          <img src="/length.png" alt="Capacity" className={styles.icon} />
          <div>
            <span className={styles.label}>Capacity:</span>
            <p className={styles.value}>50,000+ Spectators</p>
          </div>
        </div>
      </div>

      <section className={styles.details}>
        <div>
          <img src="/Colosseo_1.jpg" alt="Colosseum in Rome" className={styles.photo} />
        </div>

        <div className={styles.factsGrid}>
          <div className={styles.factsList}>
            <h2 className={styles.sectionTitle}>- Interesting Facts -</h2>
            <ul>
              <li>
                <p>Also known as the Flavian Amphitheatre, it is the largest ancient amphitheatre ever built.</p>
              </li>
              <li>
                <p>It was used for gladiatorial contests, animal hunts, and even simulated sea battles.</p>
              </li>
              <li>
                <p>The structure features a complex system of underground tunnels called the Hypogeum to hold animals and gladiators.</p>
              </li>
              <li>
                <p>Despite damage by earthquakes and stone-robbers, it remains an iconic symbol of Imperial Rome.</p>
              </li>
            </ul>
          </div>

          <div className={styles.mapContainer}>
            <img src="/italyMap.jpg" className={styles.mapImage} alt="Map of Italy" />
            <div className={styles.mapLabel}>Rome, Italy</div>
          </div>
        </div>
      </section>
    </main>
  );
}