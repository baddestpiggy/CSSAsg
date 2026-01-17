"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import styles from './wonder.module.css';

export default function WonderDetailPage() {
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
    <div className={styles.container}>
      <div className={styles.backButton}>
        <Link href="/">← Back to Home</Link>
      </div>
      <h1>Wonder Detail Page</h1>
      <p>Add your content here for this wonder!</p>
    </div>
  );
}