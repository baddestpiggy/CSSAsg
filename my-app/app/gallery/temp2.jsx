"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import gallery from './gallery.module.css';
import React from "react";
import Slider from "react-slick";

// Define your images as an array of objects or strings
const images = [
  { src: "/Chichen_Itza_1.jpg", alt: 'Image 1' },
  { src: '/Chichen_Itza_2.jpg', alt: 'Image 2' },
  { src: '/petra_1.jpg', alt: 'Image 3' },
  { src: '/petra_2.jpg', alt: 'Image 4' },
  { src: '/Colosseo_1.jpg', alt: 'Image 5' },
  { src: '/Colosseo_2.jpg', alt: 'Image 5' },
  { src: '/Machu_Picchu_1.jpg', alt: 'Image 5' },
  { src: '/Machu_Picchu_2.jpg', alt: 'Image 5' },
  { src: '/christ_the_redeemer_1.jpg', alt: 'Image 5' },
  { src: '/christ_the_redeemer_2.jpg', alt: 'Image 5' },
  { src: '/taj_mahal_1.jpg', alt: 'Image 5' },
  { src: '/taj_mahal_2.jpg', alt: 'Image 5' },
  { src: '/wall_of_china_1.jpg', alt: 'Image 5' },
  { src: '/wall_of_china_2.jpg', alt: 'Image 5' },
  // Add more images as needed (at least 5-6 for smooth looping)
];

export default function ImageGallery() {
        // Configuration settings for the slider
        const settings = {
        infinite: true,
        autoplay: true,
        // speed determines how long it takes to move from one slide to the next
        speed: 5000, 
        // autoplaySpeed must be 0 for a continuous, non-stop motion
        autoplaySpeed: 1, 
        // slidesToScroll must be 1 to keep the movement incremental
        slidesToScroll: 1, 
        // slidesToShow should be enough to fill the screen
        slidesToShow: 4, 
        cssEase: "linear",
        pauseOnHover: true,
    };

  return (
    
    
    <div className="gallery-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={`Slide ${index + 1}`} className={gallery.galleryimage} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
