"use client";

import React from "react";
import Image from "next/image";
import styles from "./cheeks.module.css";



export default function Colosseo() {
    const wonderData = {
        name: "The Colosseum",
        location: "Rome, Italy",
        capacity: "50,000 - 80,000 spectators",
        completed: "80 AD",
        fact: "The Colosseum could be flooded to stage mock naval battles.",
        description:
            "The Colosseum, also known as the Flavian Amphitheatre, is an iconic symbol of ancient Rome. It was used for gladiatorial contests and public spectacles such as animal hunts, executions, and dramas based on Classical mythology. The Colosseum is an architectural marvel, showcasing the engineering prowess of the Romans.",
        imageSrc: "/Colosseo_1.jpg",
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
          <li><strong>Capacity:</strong> {wonderData.capacity}</li>
          <li><strong>Completed:</strong> {wonderData.completed}</li>
          <li><strong>Interesting Fact:</strong> {wonderData.fact}</li>
        </ul>
        </section>
        <p className={styles.description}>{wonderData.description}</p>
      </main>
    );
}