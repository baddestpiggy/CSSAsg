import React from 'react';
import gallery from './gallery.module.css'; 

const images = [
  { src: "/Chichen_Itza_1.jpg", alt: 'Image 1' },
  { src: '/Chichen_Itza_2.jpg', alt: 'Image 2' },
  { src: '/petra_1.jpg', alt: 'Image 3' },
  { src: '/petra_2.jpg', alt: 'Image 4' },
  { src: '/Colosseo_1.jpg', alt: 'Image 5' },
  { src: '/Colosseo_2.jpg', alt: 'Image 6' },
  { src: '/Machu_Picchu_1.jpg', alt: 'Image 7' },
  { src: '/Machu_Picchu_2.jpg', alt: 'Image 8' },
  { src: '/christ_the_redeemer_1.jpg', alt: 'Image 9' },
  { src: '/christ_the_redeemer_2.jpg', alt: 'Image 10' },
  { src: '/taj_mahal_1.jpg', alt: 'Image 11' },
  { src: '/taj_mahal_2.jpg', alt: 'Image 12' },
  { src: '/wall_of_china_1.jpg', alt: 'Image 13' },
  { src: '/wall_of_china_2.jpg', alt: 'Image 14' },
  // Add more images as needed (at least 5-6 for smooth looping)
];

export default function Gallery() {
  return (
    <>

      <h1 className={gallery.h1}>GALLERY</h1>
      <div className={gallery.gallerycontainer}>
        <div className={gallery.gallerytrack}>
          {/* Render images twice for infinite loop */}
          {[...images, ...images, ...images, ...images].map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={img.alt}
              className={gallery.galleryimage}
            />
          ))}
        </div>
      </div>
    </>
  );
}