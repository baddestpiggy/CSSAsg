
"use client";


import styles from "./page.module.css";

export default function App() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.titleBox}>
            <h1 className={styles.title}>THE SEVEN WONDERS OF THE WORLD</h1>
          </div>
          <p className={styles.subtitle}>
            Discover the remarkable stories behind the wonders of the world!
          </p>
        </div>
      </div>

      {/* Progress Tracker */}
      <div className={styles.progressTracker}>
        <div className={styles.progressHeader}>
          <h3 className={styles.progressTitle}>🗺️ Your Exploration Progress</h3>
          <span className={styles.progressCount}>
            {visitedWonders.length} / {facts.length} Wonders Explored
          </span>
        </div>
        <div className={styles.wondersImageGrid}>
          {facts.map((fact) => (
            <div 
              key={fact.slug}
              className={`${styles.wonderImageItem} ${visitedWonders.includes(fact.slug) ? styles.revealed : ''}`}
            >
              <div className={styles.wonderImageWrapper}>
                <img
                  src={fact.images[0]}
                  alt={fact.title}
                  className={styles.wonderImage}
                />
                {!visitedWonders.includes(fact.slug) && (
                  <div className={styles.blackOverlay}>
                    <span className={styles.questionMark}>?</span>
                  </div>
                )}
              </div>
              <p className={styles.wonderImageTitle}>{fact.title}</p>
            </div>
          ))}
        </div>
        {visitedWonders.length === facts.length && (
          <div className={styles.completionMessage}>
            🎉 Congratulations! You've explored all Seven Wonders! 🏆
          </div>
        )}
      </div>

      

      <div className={styles.factsGrid}>
        {facts.map((fact, index) => (
          <FactCard 
            key={index} 
            fact={fact}
            isVisited={visitedWonders.includes(fact.slug)}
          />
        ))}
      </div>

      <div className={styles.infoSection}>
        <div className={styles.infoContent}>
          <h2 className={styles.infoTitle}>The New Seven Wonders</h2>
          <p className={styles.infoText}>
            In 2007, more than 100 million people worldwide voted to choose the New Seven Wonders 
            of the World from a selection of 200 existing monuments. These magnificent structures 
            represent the diversity of human achievement across continents and centuries, showcasing 
            the creativity, engineering prowess, and cultural significance of civilizations past and present.
          </p>
        </div>
      </div>

      <footer className={styles.footer}>
        <p>© 2026 CSS Project</p>
      </footer>
    </div>
    
    
  );
}
