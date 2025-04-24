import React from 'react';
import { Phone } from 'lucide-react';

const Founder: React.FC = () => {
  return (
    <section className="py-24 px-6 container mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2">
          <div className="aspect-square w-[320px] mx-auto overflow-hidden rounded-2xl border-4 border-blue-500/30">
            <img 
              src="/images/founder.jpg" 
              alt="Prakash - Founder of Bharat Matsya" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-bold mb-6">
            Meet Our <span className="highlight">Founder</span>
          </h2>
          
          <h3 className="text-2xl font-semibold mb-4">Prakash</h3>
          
          <p className="text-gray-400 text-lg mb-8">
            With years of experience in aquaculture and a passion for sustainable fish farming, 
            Prakash leads Bharat Matsya with innovative breeding techniques and a commitment to 
            quality fish seed production.
          </p>
          
          <div className="space-y-4">
            <p className="text-xl font-medium">For more information, contact Prakash:</p>
            <a 
              href="tel:7903716957" 
              className="inline-flex items-center gap-2 text-lg text-blue-400 hover:text-blue-300 transition-colors"
            >
              <Phone size={20} />
              +91 7903716957
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;