import React from 'react';
import gallery from './gallery.module.css'; 
import gridgallery from './gridgallery.module.css';

const images = [
  { src: "/Chichen_Itza_1.jpg", alt: 'Image 1', description: 'The Chichen Itza, Mexico' },
  { src: '/petra_1.jpg', alt: 'Image 3' , description: 'Petra, Jordan' },
  { src: '/taj_mahal_1.jpg', alt: 'Image 11' , description: 'Taj Mahal, India' },
  { src: '/Chichen_Itza_2.jpg', alt: 'Image 2', description: 'The Chichen Itza, Mexico' },
  { src: '/petra_2.jpg', alt: 'Image 4' , description: 'Petra, Jordan' },
  { src: '/Colosseo_2.jpg', alt: 'Image 6', description: 'The Colosseum, Rome' },
  { src: '/Machu_Picchu_1.jpg', alt: 'Image 7', description: 'Machu Picchu, Peru' },
  { src: '/Colosseo_1.jpg', alt: 'Image 5' , description: 'The Colosseum, Rome'},
  { src: '/christ_the_redeemer_1.jpg', alt: 'Image 9' , description: 'Christ the Redeemer, Brazil'},
  { src: '/wall_of_china_1.jpg', alt: 'Image 13', description: 'Great Wall of China, China' },  // Fixed country from Japan to China
  { src: '/Machu_Picchu_2.jpg', alt: 'Image 8', description: 'Machu Picchu, Peru' },
  { src: '/taj_mahal_2.jpg', alt: 'Image 12' , description: 'Taj Mahal, India' },
  { src: '/christ_the_redeemer_2.jpg', alt: 'Image 10', description: 'Christ the Redeemer, Brazil' },
  { src: '/wall_of_china_2.jpg', alt: 'Image 14' , description: 'Great Wall of China, China'},  // Fixed country
];

// Create non-mutating reversed versions for variety across tracks
const imagesReversed = [...images].reverse();
const imagesShuffled = [...images].sort(() => Math.random() - 0.5); // Optional shuffle for third track
const imagesShuffledReversed = [...imagesShuffled].reverse(); // For fourth track

export default function Gallery() {
  return (
    // Wrapper div to contain everything and enable positioning
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden', minHeight: '100vh' }}>  {/* Added minHeight for full viewport */}
      {/* Background layer: Contains the four rotating galleries, positioned absolutely to fill the container */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0, // Low z-index to place it behind the grid
          display: 'flex',
          flexDirection: 'column', // Stack the four tracks vertically
          opacity: 0.4, // Slightly reduced opacity for subtler background
        }}
      >
        {/* First rotating track - flex: 1 to take 25% height */}
        <div className={gallery.gallerycontainer} style={{ flex: 1 }}>
          <div className={gallery.gallerytrack}>
            {[...images, ...images].map((img, index) => (
              <img
                key={index}
                src={img.src}
                alt={img.alt}
                className={gallery.galleryimage}
              />
            ))}
          </div>
        </div>

        {/* Second rotating track - flex: 1 */}
        <div className={gallery.gallerycontainer} style={{ flex: 1 }}>
          <div className={gallery.gallerytrack2}>
            {[...imagesReversed, ...imagesReversed].map((img, index) => (
              <img
                key={index}
                src={img.src}
                alt={img.alt}
                className={gallery.galleryimage}
              />
            ))}
          </div>
        </div>

        {/* Third rotating track */}
        <div className={gallery.gallerycontainer} style={{ flex: 1 }}>
          <div className={gallery.gallerytrack3}> 
            {[...imagesShuffled, ...imagesShuffled].map((img, index) => (
              <img
                key={index}
                src={img.src}
                alt={img.alt}
                className={gallery.galleryimage}
              />
            ))}
          </div>
        </div>

        {/* Fourth rotating track - flex: 1 */}
        <div className={gallery.gallerycontainer} style={{ flex: 1 }}>
          <div className={gallery.gallerytrack4}> 
            {[...imagesShuffledReversed, ...imagesShuffledReversed].map((img, index) => (
              <img
                key={index}
                src={img.src}
                alt={img.alt}
                className={gallery.galleryimage}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Foreground layer: The grid gallery, positioned relatively with higher z-index */}
      <section
        className={gridgallery.gallerySection}
        style={{
          position: 'relative',
          zIndex: 10, // Higher than background
          //backgroundColor: 'transparent', // Transparent to see rotating backgrounds
        }}
      >
        <h2>Visual Gallery</h2>
        <div className={gridgallery.galleryGrid}>
          {images.map((img, index) => (
            <div key={index} className={`${gridgallery.galleryItem} ${gridgallery[`item${index + 1}`] || ''}`}>
              <img src={img.src} alt={img.alt} />
              <div className={gridgallery.caption}>{img.description}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}