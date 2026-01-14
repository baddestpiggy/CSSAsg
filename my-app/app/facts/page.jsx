"use client";

import React, { useState, useEffect } from 'react';


export default function FactsPage() {
  const facts = [
    {
      images: [
        "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&q=80",
        "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800&q=80",
        "https://www.thoughtco.com/thmb/y2yphoYGkvjdV1JcVfGFJucHK1E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/inigoarza-5c72cffe46e0fb0001b68224.jpg"
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
        "https://i.natgeofe.com/n/5ba0cd81-b859-40a0-93f1-2d26ff6d5ef9/DHHXC2.jpg",
        "https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=800&q=80",
        "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800&q=80"
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
        "https://images.unsplash.com/photo-1549041441-3ccf1f7a0b5e?w=800&q=80"
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
        "https://images.unsplash.com/photo-1569257334859-8f6b3c5b8e68?w=800&q=80",
        "https://images.unsplash.com/photo-1583257544667-8f3e17e1f6a2?w=800&q=80"
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
        "https://images.unsplash.com/photo-1544989164-fb0cd6dd91fa?w=800&q=80"
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
    <div className="min-h-screen bg-amber-50">
      {/* Your Navbar Component */}
     

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-amber-100 to-amber-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif text-slate-800 mb-4 tracking-wide">
            FASCINATING FACTS
          </h1>
          <p className="text-slate-600 text-lg italic">
            Discover the remarkable stories behind the Seven Wonders of the World
          </p>
        </div>
      </div>

      {/* Facts Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facts.map((fact, index) => (
            <FactCard key={index} fact={fact} />
          ))}
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="bg-slate-700 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif mb-6">The New Seven Wonders</h2>
          <p className="text-slate-300 max-w-3xl mx-auto leading-relaxed">
            In 2007, more than 100 million people worldwide voted to choose the New Seven Wonders 
            of the World from a selection of 200 existing monuments. These magnificent structures 
            represent the diversity of human achievement across continents and centuries, showcasing 
            the creativity, engineering prowess, and cultural significance of civilizations past and present.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-800 text-slate-400 py-8 text-center">
        <p>© 2024 World History Project</p>
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
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [fact.images.length]);

  return (
    <div className="bg-white border-2 border-slate-200 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:border-amber-400 group">
      <div className="h-64 overflow-hidden relative">
        {fact.images.map((image, idx) => (
          <img
            key={idx}
            src={image}
            alt={`${fact.title} ${idx + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              idx === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-serif text-slate-800 mb-2 border-b-2 border-slate-300 pb-2">
          {fact.title}
        </h3>
        <p className="text-sm text-amber-600 italic mb-4">
          {fact.subtitle}
        </p>
        <p className="text-slate-600 mb-4 leading-relaxed">
          {fact.description}
        </p>
        <div className="mt-4 pt-4 border-t border-slate-200">
          <ul className="space-y-2">
            {fact.details.map((detail, idx) => (
              <li key={idx} className="text-sm text-slate-600 flex items-start">
                <span className="text-amber-500 mr-2 font-bold">▸</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}