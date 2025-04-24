import React from 'react';
import { ArrowRight, Clock, Check, TrendingUp, Phone } from 'lucide-react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative py-20 px-6 lg:py-24 container mx-auto">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        <div className="w-full lg:w-1/2 z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight md:leading-tight lg:leading-tight mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Premium <span className="highlight">Freshwater Fish Seed</span> Production
          </h1>
          
          <p className="text-gray-400 text-lg mb-8 max-w-xl">
            Bharat Matsya Hatchery specializes in mass fish breeding, larval rearing, and fingerling supply with 100% in-house biosecure hatchery management to ensure superior quality seed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button variant="primary">
              Request Pricing
              <ArrowRight size={18} />
            </Button>
            
            <Button variant="secondary">
              View Species Catalog
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a 
              href="https://wa.me/7091013557" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-6 py-2.5 font-medium rounded-full bg-green-600 hover:bg-green-700 text-white transition-all duration-300 hover:-translate-y-1"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
            
            <a 
              href="tel:7091013557" 
              className="inline-flex items-center gap-2 px-6 py-2.5 font-medium rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:-translate-y-1"
            >
              <Phone size={18} className="shrink-0" />
              Call Now
            </a>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-gray-400 text-sm">Trusted by over 500+ fish farmers across India</span>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/8964011/pexels-photo-8964011.jpeg" 
                alt="Fish hatchery operations" 
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mt-8">
              <img 
                src="https://images.pexels.com/photos/3029265/pexels-photo-3029265.jpeg" 
                alt="Aquaculture facility" 
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/8964015/pexels-photo-8964015.jpeg" 
                alt="Fish breeding" 
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mt-8">
              <img 
                src="https://images.pexels.com/photos/2156311/pexels-photo-2156311.jpeg" 
                alt="Fish farming" 
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
          
          <div className="floating-card top-5 left-5 lg:-top-4 lg:left-8">
            <div className="card-icon">
              <Clock className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <strong className="block text-white text-sm">Fast Growth Rate</strong>
              <span className="text-gray-400 text-xs">30% above industry standard</span>
            </div>
          </div>
          
          <div className="floating-card top-1/2 -right-2 lg:right-0 transform -translate-y-1/2">
            <div className="card-icon">
              <Check className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <strong className="block text-white text-sm">Quality Certified</strong>
              <span className="text-gray-400 text-xs">ISO 9001:2015 standards</span>
            </div>
          </div>
          
          <div className="floating-card -bottom-2 right-10 lg:-bottom-4 lg:right-16">
            <div className="card-icon">
              <TrendingUp className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <strong className="block text-white text-sm">95% Survival Rate</strong>
              <span className="text-gray-400 text-xs">Industry-leading quality</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;