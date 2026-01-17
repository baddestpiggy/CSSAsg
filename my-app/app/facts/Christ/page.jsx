"use client";

import React from "react";
import Image from "next/image";
import styles from "./christ.module.css";

export default function Christ() {
    const wonderData = {
        name: "Christ the Redeemer",
        location: "Rio de Janeiro, Brazil",
        height: "30 meters (98 feet)",
        completed: "1931",
        fact: "The Statue's arms stretch 28 meters (92 feet) wide, making it one of the largest Art Deco statues in the world.",
        description:
            "Christ the Redeemer is an iconic statue of Jesus Christ located atop the Corcovado Mountain in Rio de Janeiro, Brazil. It stands 30 meters tall and has become a symbol of Christianity around the world. The statue was completed in 1931 and is made of reinforced concrete and soapstone. It offers panoramic views of the city and is a popular tourist destination.",
        imageSrc: "/christ_the_redeemer_1.jpg",
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