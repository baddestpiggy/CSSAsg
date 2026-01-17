import styles from "./wall.module.css"

export default function China()
{
    
}

function FactBar()
{
    return (
        <div className={styles.factBar}>
            <div className={styles.factItem}>
                <img src="/location.png" alt="Location" className={"styles.icon"} />
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
                <img src="/globe.png" alt="Length" className={styles.icon} />
                <div>
                    <span className={styles.label}>Length:</span>
                    <p className={styles.value}>Over 21,000 km</p>
                </div>
            </div>
        </div>
    );
}