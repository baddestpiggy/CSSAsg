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
  { src: '/wall_of_china_1.jpg', alt: 'Image 13', description: 'Great Wall of China, Japan' },
  { src: '/Machu_Picchu_2.jpg', alt: 'Image 8', description: 'Machu Picchu, Peru' },

  

  { src: '/taj_mahal_2.jpg', alt: 'Image 12' , description: 'Taj Mahal, India' },

  { src: '/christ_the_redeemer_2.jpg', alt: 'Image 10', description: 'Christ the Redeemer, Brazil' },

  { src: '/wall_of_china_2.jpg', alt: 'Image 14' , description: 'Great Wall of China, Japan'},
  
];

const images2 = images.reverse()

export default function Gallery() {
  return (
    <>

      
      <div className={gallery.gallerycontainer}>
        <div className={gallery.gallerytrack}>
          {/* Render images twice for infinite loop */}
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
      <div className={gallery.gallerycontainer}>

        <div className={gallery.gallerytrack2}>
          {/* Render images twice for infinite loop */}
          {[...images2, ...images2].map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={img.alt}
              className={gallery.galleryimage}
            />
          ))}
        </div>
      </div>
      

      

      <section className={gridgallery.gallerySection}>
        <h2>Visual Gallery</h2>
        <div className={gridgallery.galleryGrid}>
          {images.map((img, index) => (
            <div key={index} className={`${gridgallery.galleryItem} ${gridgallery.gridItem} ${gridgallery[`item${index + 1}`]}`}>
              <img src={img.src} alt={img.alt} />
              <div className={gridgallery.caption}>{img.description}</div>
            </div>
          ))}
        </div>
      </section>


      
      
    </>
  );
}