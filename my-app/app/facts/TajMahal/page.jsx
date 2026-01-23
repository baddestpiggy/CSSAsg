import styles from "./taj.module.css"


export default function Taj() {
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
                        <p className={styles.value}>India</p>
                    </div>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.factItem}>
                    <img src="/calender.png" alt="Built" className={styles.icon} />
                    <div>
                        <span className={styles.label}>Built:</span>
                        <p className={styles.value}>1653</p>
                    </div>
                </div>
            
                <div className={styles.divider}></div>

                <div className={styles.factItem}>
                    <img src="/material.png" alt="Materials" className={styles.icon} />
                    <div>
                        <span className={styles.label}>Materials:</span>
                        <p className={styles.value}>White marble, Red sandstone, jewels</p>
                    </div>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.factItem}>
                    <img src="/length.png" alt="Length" className={styles.icon} />
                    <div>
                        <span className={styles.label}>Size:</span>
                        <p className={styles.value}>42 acres</p>
                    </div>
                </div>
            </div>

            <section className={styles.details}>
                <div>
                    <img src="/taj_mahal_1.jpg" alt="wallPhoto" className={styles.photo} />
                </div>

                <div className={styles.factsGrid}>
                    <div className={styles.factsList}>
                        <h2 className={styles.sectionTitle}>- Interesting Facts -</h2>
                        <ul>
                            <li>
                                <p>The Taj Mahal was built by Emperor Shah Jahuan in memory of his beloved wife Mumtaz Mahal.</p>
                            </li>
                            <li>
                                <p>The interiors feature intricate carvings, beautiful calligraphy and decorative gardens.</p>
                            </li>
                            <li>
                                <p>It is widely regarded as the ultimate symbol of eternal love and devotion.</p>
                            </li>
                            <li>
                                <p>All four minarets of the Tak Mahal tilt slightly outwards so the towers woudl fall away from the main structure, preserving the central tomb in the event of an earthquake.</p>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.mapContainer}>
                        <img src="/tajMap.jpg" className={styles.mapImage} alt="Map of Taj Mahal" />
                        <div className={styles.mapLabel}>Taj Mahal</div>
                    </div>
                </div>
            </section>
        </main>
        
    );
}