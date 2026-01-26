import styles from "./petra.module.css"


export default function Petra() {
    return (
        <main className={styles.backgroundContainer}>

            <section className={styles.hero}>
                <h1>Petra, Ancient City of Jordan</h1>
            </section>

            <div className={styles.factBar}>
                <div className={styles.factItem}>
                    <img src="/location.png" alt="Location" className={styles.icon} />
                    <div>
                        <span className={styles.label}>Location:</span>
                        <p className={styles.value}>Southern Jordan</p>
                    </div>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.factItem}>
                    <img src="/calender.png" alt="Built" className={styles.icon} />
                    <div>
                        <span className={styles.label}>Built:</span>
                        <p className={styles.value}>4th Century BC</p>
                    </div>
                </div>
            
                <div className={styles.divider}></div>

                <div className={styles.factItem}>
                    <img src="/material.png" alt="Materials" className={styles.icon} />
                    <div>
                        <span className={styles.label}>How was it built:</span>
                        <p className={styles.value}>Carved into cliffs</p>
                    </div>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.factItem}>
                    <img src="/length.png" alt="Length" className={styles.icon} />
                    <div>
                        <span className={styles.label}>Length:</span>
                        <p className={styles.value}>Over 264 square km</p>
                    </div>
                </div>
            </div>

            <section className={styles.details}>
                <div>
                    <img src="/petra_2.jpg" alt="wallPhoto" className={styles.photo} />
                </div>

                <div className={styles.factsGrid}>
                    <div className={styles.factsList}>
                        <h2 className={styles.sectionTitle}>- Interesting Facts -</h2>
                        <ul>
                            <li>
                                <p>Despite being in the desert, the Nabataeans (ancient Arab people centered in Jordan) created a complex, advanced water conduit and cistern system to sustain a population of up to 30,000.</p>
                            </li>
                            <li>
                                <p>Over 85% of the city remains undiscovered, hidden underground and is estimated to be four time the size of Manhatten.</p>
                            </li>
                            <li>
                                <p>Known to local Bedouins (Arabic-speaking nomadic people of the Middle Eastern and North African deserts) for centuries, it was introduced to the Western world in 1812 by Swiss explorer Johann Ludwig Burckhardt, who disguised himself as an Arab scholar to enter.</p>
                            </li>
                            <li>
                                <p>Petra gained further worldwide fame as the location of scenes from movies such as Indiana Jones and the Last Crusade, The Mummy Returns and Lawrence of Arabia</p>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.mapContainer}>
                        <img src="/petraMap.png" className={styles.mapImage} alt="Map of Petra" />
                        <div className={styles.mapLabel}>The Ancient City of Petra</div>
                    </div>
                </div>
            </section>
        </main>
        
    );
}