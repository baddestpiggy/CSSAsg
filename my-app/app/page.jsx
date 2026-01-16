"use client";
import styles from './page.module.css';

import React, { useState, useEffect } from 'react';
import styles from './page.module.css';

export default function FactsPage() {
  const facts = [
    {
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
      images: [
        "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=800&q=80",
        "data:image/jpeg;base64,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",
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

      <div className={styles.factsGrid}>
        {facts.map((fact, index) => (
          <FactCard key={index} fact={fact} />
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
        <p>© 2026 CSS uwu Project</p>
      </footer>
    </div>
  );
}

function FactCard({ fact }) {
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
    <div className={styles.card}>
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