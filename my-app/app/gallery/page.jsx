import React from 'react';
import gallery from './gallery.module.css'; 
import gridgallery from './gridgallery.module.css';

const images = [
  { src: "/Chichen_Itza_1.jpg", alt: 'Image 1', description: 'The Chichen Itza, Mexico' },
  { src: '/petra_1.jpg', alt: 'Image 3', description: 'Petra, Jordan' },
  { src: '/taj_mahal_1.jpg', alt: 'Image 11', description: 'Taj Mahal, India' },
  { src: '/Chichen_Itza_2.jpg', alt: 'Image 2', description: 'The Chichen Itza, Mexico' },
  { src: '/petra_2.jpg', alt: 'Image 4', description: 'Petra, Jordan' },
  { src: '/Colosseo_2.jpg', alt: 'Image 6', description: 'The Colosseum, Rome' },
  { src: '/Machu_Picchu_1.jpg', alt: 'Image 7', description: 'Machu Picchu, Peru' },
  { src: '/Colosseo_1.jpg', alt: 'Image 5', description: 'The Colosseum, Rome'},
  { src: '/christ_the_redeemer_1.jpg', alt: 'Image 9', description: 'Christ the Redeemer, Brazil'},
  { src: '/wall_of_china_1.jpg', alt: 'Image 13', description: 'Great Wall of China, China' },
  { src: '/Machu_Picchu_2.jpg', alt: 'Image 8', description: 'Machu Picchu, Peru' },
  { src: '/taj_mahal_2.jpg', alt: 'Image 12', description: 'Taj Mahal, India' },
  { src: '/christ_the_redeemer_2.jpg', alt: 'Image 10', description: 'Christ the Redeemer, Brazil' },
  { src: '/wall_of_china_2.jpg', alt: 'Image 14', description: 'Great Wall of China, China'},
  { src: '/Mountcss.jpg', alt: 'Image 15', description: 'Mount rushmore, USA' },
];

const imagesReversed = [...images].reverse();
const imagesShuffled = [...images].sort(() => Math.random() - 0.5);
const imagesShuffledReversed = [...imagesShuffled].reverse();


export default function Gallery() {
  return (
    <div style={{ 
      position: 'relative', 
      width: '100%', 
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #f5f1e3 0%, #e8e4d8 50%, #dcd8cc 100%)',
      overflow: 'hidden',
      
    }}>
      {/* Animated background layer - now behind navbar */}
      <div
        style={{
          position: 'fixed',
          top: 70,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          display: 'flex',
          flexDirection: 'column',
          opacity: 0.35,
          pointerEvents: 'none', // Prevents interaction with background
        }}
      >
        <div className={gallery.gallerycontainer} style={{ flex: 1 }}>
          <div className={gallery.gallerytrack}>
            {[...images, ...images].map((img, index) => (
              <img
                key={`track1-${index}`}
                src={img.src}
                alt={img.alt}
                className={gallery.galleryimage}
              />
            ))}
          </div>
        </div>

        <div className={gallery.gallerycontainer} style={{ flex: 1 }}>
          <div className={gallery.gallerytrack2}>
            {[...imagesReversed, ...imagesReversed].map((img, index) => (
              <img
                key={`track2-${index}`}
                src={img.src}
                alt={img.alt}
                className={gallery.galleryimage}
              />
            ))}
          </div>
        </div>

        <div className={gallery.gallerycontainer} style={{ flex: 1 }}>
          <div className={gallery.gallerytrack3}> 
            {[...imagesShuffled, ...imagesShuffled].map((img, index) => (
              <img
                key={`track3-${index}`}
                src={img.src}
                alt={img.alt}
                className={gallery.galleryimage}
              />
            ))}
          </div>
        </div>

        <div className={gallery.gallerycontainer} style={{ flex: 1 }}>
          <div className={gallery.gallerytrack4}> 
            {[...imagesShuffledReversed, ...imagesShuffledReversed].map((img, index) => (
              <img
                key={`track4-${index}`}
                src={img.src}
                alt={img.alt}
                className={gallery.galleryimage}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main content layer */}
      <div style={{ 
        position: 'relative', 
        zIndex: 1,
        paddingTop: '2rem',
        paddingBottom: '4rem'
      }}>
        <section className={gridgallery.gallerySection}>
          <h2>Visual Gallery</h2>
          <div className={gridgallery.galleryGrid}>
            {images.map((img, index) => (
              <div 
                key={index} 
                className={`${gridgallery.galleryItem} ${gridgallery[`item${index + 1}`] || ''}`}
              >
                <img src={img.src} alt={img.alt} />
                <div className={gridgallery.caption}>{img.description}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}