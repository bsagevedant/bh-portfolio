import React from 'react';
import { Layers, Wind, BookOpen, LogIn, Activity, Users } from 'lucide-react';
import FeatureCard from './ui/FeatureCard';

const featuresData = [
  {
    icon: <Layers />,
    title: 'Advanced Hypophysation',
    description: 'Using precise hormone dosages and timing for induced breeding that ensures maximum fertilization rates and healthy fry development.',
    image: 'https://images.pexels.com/photos/8964015/pexels-photo-8964015.jpeg'
  },
  {
    icon: <Wind />,
    title: 'Controlled Spawning',
    description: 'Implementing strict protocols to ensure genetic purity and prevent unwanted hybridization during the reproduction process.',
    image: 'https://images.pexels.com/photos/3029269/pexels-photo-3029269.jpeg'
  },
  {
    icon: <BookOpen />,
    title: 'Scientific Nursery Management',
    description: 'Specialized care for larval and fry stage development in monitored nursery ponds with optimal water quality and feed protocols.',
    image: 'https://images.pexels.com/photos/8964011/pexels-photo-8964011.jpeg'
  },
  {
    icon: <LogIn />,
    title: 'Selective Broodstock Management',
    description: 'Careful selection and maintenance of parent fish to ensure optimal genetic traits, fecundity, and seed quality.',
    image: 'https://images.pexels.com/photos/2156311/pexels-photo-2156311.jpeg'
  },
  {
    icon: <Activity />,
    title: 'Water Quality Monitoring',
    description: 'Regular testing and adjustment of dissolved oxygen, pH, ammonia, and nitrate levels for optimum growth environment.',
    image: 'https://images.pexels.com/photos/3029270/pexels-photo-3029270.jpeg'
  },
  {
    icon: <Users />,
    title: 'Probiotic Supplementation',
    description: 'Using beneficial bacteria and immunostimulants during early developmental stages to boost natural immunity and stress resistance.',
    image: 'https://images.pexels.com/photos/3029265/pexels-photo-3029265.jpeg'
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 px-6 container mx-auto">
      <h2 className="section-title text-center">
        Our Core <span className="highlight">Competencies</span>
      </h2>
      <p className="section-subtitle text-center">
        Scientifically managed seed production with advanced breeding techniques
        for optimal growth and disease resistance.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuresData.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            image={feature.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;