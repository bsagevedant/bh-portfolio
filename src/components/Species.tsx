import React from 'react';
import SpeciesCard from './ui/SpeciesCard';

const speciesData = [
  {
    name: 'Rohu',
    latin: 'Labeo rohita',
    description: 'Fast-growing surface feeder with excellent taste and market demand. Ideal for polyculture systems.',
    image: 'https://images.pexels.com/photos/3029269/pexels-photo-3029269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    name: 'Catla',
    latin: 'Catla catla',
    description: 'Large-bodied column feeder highly demanded in the market with rapid growth potential.',
    image: 'https://images.pexels.com/photos/8964015/pexels-photo-8964015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    name: 'Mrigal',
    latin: 'Cirrhinus mrigala',
    description: 'Bottom-dwelling species ideal for polyculture, utilizing detritus and organic matter.',
    image: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    name: 'Grass Carp',
    latin: 'Ctenopharyngodon idella',
    description: 'Herbivorous fish that helps control aquatic vegetation while providing good growth rates.',
    image: 'https://images.pexels.com/photos/3029269/pexels-photo-3029269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    name: 'Silver Carp',
    latin: 'Hypophthalmichthys molitrix',
    description: 'Filter-feeder with high feed conversion ratio, excellent for algae control in ponds.',
    image: 'https://images.pexels.com/photos/3029270/pexels-photo-3029270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    name: 'Common Carp',
    latin: 'Cyprinus carpio',
    description: 'Hardy and adaptable omnivorous species suitable for various culture systems.',
    image: 'https://images.pexels.com/photos/2156311/pexels-photo-2156311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    name: 'Tilapia',
    latin: 'Oreochromis niloticus',
    description: 'Fast-growing species ideal for tank and cage culture with excellent feed conversion.',
    image: 'https://images.pexels.com/photos/3029265/pexels-photo-3029265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    name: 'Magur',
    latin: 'Clarias batrachus',
    description: 'Air-breathing catfish suitable for high-density culture with premium market price.',
    image: 'https://images.pexels.com/photos/8964011/pexels-photo-8964011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const Species: React.FC = () => {
  return (
    <section id="species" className="py-24 px-6 container mx-auto bg-black/30">
      <h2 className="section-title text-center">
        Available <span className="highlight">Fish Species</span>
      </h2>
      <p className="section-subtitle text-center">
        We produce and supply fry, fingerlings, and advanced fingerlings of various major Indian and exotic carp species.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {speciesData.map((species, index) => (
          <SpeciesCard
            key={index}
            name={species.name}
            latin={species.latin}
            description={species.description}
            image={species.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Species;