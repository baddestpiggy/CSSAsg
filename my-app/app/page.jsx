"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './page.module.css';


export default function HomePage() {
  const [visitedWonders, setVisitedWonders] = useState([]);

  useEffect(() => {
    // Load visited wonders from sessionStorage (resets when browser closes)
    const stored = sessionStorage.getItem('visitedWonders');
    if (stored) {
      setVisitedWonders(JSON.parse(stored));
    }
  }, []);

  const facts = [
    {
      slug: "Wall",
      images: [
        "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&q=80",
        "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800&q=80",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/1280px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg"
      ],
      title: "Great Wall of China",
      subtitle: "The Dragon's Backbone",
      description: "Stretching over 13,000 miles across northern China, this ancient defensive masterpiece is visible from space and represents centuries of imperial ambition.",
      details: [
        "Construction began in the 7th century BC",
        "Took over 2,000 years to complete",
        "Built by millions of workers over dynasties"
      ]
    },
    {
      slug: "Petra",
      images: [
        "https://i.natgeofe.com/n/69e2cf60-ad59-4d20-bdd1-dc96f40ab4e8/petra-world-heritage-jordan_16x9.jpg?w=1200",
        "https://www.ontheluce.com/wp-content/uploads/2025/11/royal-tombs-petra.jpg",
        "https://www.traveltalktours.com/wp-content/uploads/2022/09/sylvain-gllm-GAm_W6UlEZc-unsplash-1024x819.jpg"
      ],
      title: "Petra",
      subtitle: "The Rose City",
      description: "Carved directly into vibrant red sandstone cliffs, this ancient Nabataean city remained hidden from the Western world until 1812.",
      details: [
        "Established around 312 BC",
        "Features over 800 monuments",
        "Famous Treasury stands 40 meters tall"
      ]
    },
    {
      slug: "Colosseo",
      images: [
        "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80",
        "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=800&q=80",
        "https://www.romesightseeing.net/media/zxuhmxih/time-elevator-colosseum.jpg?anchor=center&mode=crop&width=1200&height=800&rnd=132624483859270000"
      ],
      title: "Colosseum",
      subtitle: "Rome's Greatest Arena",
      description: "The largest amphitheater ever built, it hosted gladiatorial contests and public spectacles for 50,000 spectators in ancient Rome.",
      details: [
        "Completed in 80 AD after 8 years",
        "Could be filled with water for naval battles",
        "Used a complex system of underground tunnels"
      ]
    },
    {
      slug: "ChichenItza",
      images: [
        "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=800&q=80",
        "https://images.unsplash.com/photo-1569257334859-8f6b3c5b8e68?w=800&q=80",
        "https://www.thepkpway.com/wp-content/uploads/2016/07/chichen-itza-playa-del-carmen-cancun-mexico-3a.jpg"
      ],
      title: "Chichén Itzá",
      subtitle: "Maya's Sacred City",
      description: "This pre-Columbian city features the iconic stepped pyramid El Castillo, which demonstrates the Maya's astronomical precision and architectural genius.",
      details: [
        "Built between 600-1200 AD",
        "El Castillo has 365 steps (days of year)",
        "Features advanced astronomical observatory"
      ]
    },
    {
      slug: "MachuPicchu",
      images: [
        "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&q=80",
        "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80",
        "https://images.unsplash.com/photo-1531065208531-4036c0dba3ca?w=800&q=80"
      ],
      title: "Machu Picchu",
      subtitle: "Lost City of the Incas",
      description: "Perched high in the Andes Mountains, this 15th-century Incan citadel remained unknown to the outside world until its rediscovery in 1911.",
      details: [
        "Built around 1450 at 7,970 feet elevation",
        "Constructed without mortar using precise stonework",
        "Abandoned during Spanish conquest"
      ]
    },
    {
      slug: "TajMahal",
      images: [
        "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80",
        "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80",
        "https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=800&q=80"
      ],
      title: "Taj Mahal",
      subtitle: "Monument of Eternal Love",
      description: "This ivory-white marble mausoleum was commissioned by Mughal Emperor Shah Jahan as a testament to his love for his wife Mumtaz Mahal.",
      details: [
        "Completed in 1653 after 22 years",
        "Built by 20,000 artisans and craftsmen",
        "Changes color throughout the day"
      ]
    },
    {
      slug: "Christ",
      images: [
        "https://images.unsplash.com/photo-1548963670-aaaa8f73a5e3?w=800&q=80",
        "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/e4/12/c9/visao-privilegiada.jpg?w=600&h=400&s=1"
      ],
      title: "Christ the Redeemer",
      subtitle: "Guardian of Rio",
      description: "Standing atop Corcovado Mountain, this iconic Art Deco statue of Jesus Christ has become a symbol of Brazilian Christianity and welcomes visitors to Rio.",
      details: [
        "Completed in 1931, stands 98 feet tall",
        "Arms stretch 92 feet wide",
        "Made of reinforced concrete and soapstone"
      ]
    }
  ];

  const progressPercentage = (visitedWonders.length / facts.length) * 100;

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.titleBox}>
            <h1 className={styles.title}>THE SEVEN WONDERS OF DIDDY</h1>
          </div>
          <p className={styles.subtitle}>
            Discover the remarkable stories behind the Epstien Island
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

function FactCard({ fact, isVisited }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % fact.images.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [fact.images.length]);

  return (
    <div className={`${styles.card} ${isVisited ? styles.visitedCard : ''}`}>
      {isVisited && (
        <div className={styles.visitedBadge}>
          ✓ Explored
        </div>
      )}
      <div className={styles.imageContainer}>
        {fact.images.map((image, idx) => (
          <div
            key={idx}
            className={`${styles.imageWrapper} ${idx === currentImageIndex ? styles.active : ''}`}
          >
            <img
              src={image}
              alt={`${fact.title} ${idx + 1}`}
              className={styles.image}
            />
          </div>
        ))}
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>{fact.title}</h3>
          <p className={styles.cardSubtitle}>{fact.subtitle}</p>
        </div>
        <div className={styles.descriptionBox}>
          <p className={styles.description}>{fact.description}</p>
          <Link href={`/facts/${fact.slug}`}>
            <button className={styles.learnMoreButton}>
              {isVisited ? 'Visit Again' : 'Learn More'}
            </button>
          </Link>
        </div>
        <div className={styles.detailsBox}>
          <ul className={styles.detailsList}>
            {fact.details.map((detail, idx) => (
              <li key={idx} className={styles.detailItem}>
                <span className={styles.bullet}>▸</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}