import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, image }) => {
  return (
    <div className="glass-card group overflow-hidden">
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-8">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <div className="text-blue-500">
            {icon}
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;