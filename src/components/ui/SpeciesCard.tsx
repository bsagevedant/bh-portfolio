import React from 'react';

interface SpeciesCardProps {
  name: string;
  latin: string;
  description: string;
  image: string;
}

const SpeciesCard: React.FC<SpeciesCardProps> = ({ name, latin, description, image }) => {
  return (
    <div className="glass-card group overflow-hidden">
      <div className="aspect-square w-full overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1 group-hover:text-blue-400 transition-colors">{name}</h3>
        <p className="text-gray-400 italic text-sm mb-4">{latin}</p>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default SpeciesCard;