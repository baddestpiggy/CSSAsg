"use client";

import React from "react";
import Image from "next/image";
import styles from "./itza.module.css";

export default function ChichenItza() {
    const wonderData = {
        name: "Chichen Itza",
        location: "Yucatan Peninsula, Mexico",
        completed: "1200AD",
        type: "Mayan Pyramid",
        fact: "The pyramid's height is 30 meters (98 feet), making it one of the largest pyramids in the Maya world.",
        description:
            "Chichen Itza is a pre-Columbian Maya city built by the Maya people of the Yucatan Peninsula. It is one of the most important archaeological sites in Mexico and is known for its impressive architecture and cultural significance.",
        imageSrc: "/chichen_itza_1.jpg",
    };
    return (
      <main className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src={wonderData.imageSrc}
            alt={wonderData.name}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <h1 className={styles.title}>{wonderData.name}</h1>

        <section>
          <h3>Quick Facts</h3>
        <ul className={styles.infoList}>
          <li><strong>Location:</strong> {wonderData.location}</li>
          <li><strong>Height:</strong> {wonderData.height}</li>
          <li><strong>Completed:</strong> {wonderData.completed}</li>
          <li><strong>Interesting Fact:</strong> {wonderData.fact}</li>
        </ul>
        </section>
        <p className={styles.description}>{wonderData.description}</p>
      </main>
    );
  }