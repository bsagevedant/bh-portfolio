import React from 'react';
import { Fish, Thermometer, Scale, Timer, Users, Package } from 'lucide-react';

interface FishData {
  name: string;
  scientificName: string;
  feedingHabit: string;
  growthRate: string;
  temperature: string;
  survivalRate: string;
  stockingSize: string;
  idealFor: string;
  image: string;
  advantages: string[];
  packing: {
    type: string;
    capacity: string;
    additional: string;
  };
}

const fishData: FishData[] = [
  {
    name: "Catla Fish Seeds",
    scientificName: "Catla catla",
    feedingHabit: "Column feeder",
    growthRate: "1–1.5 kg in 8–10 months (under optimal conditions)",
    temperature: "25–30°C",
    survivalRate: ">80% with proper care",
    stockingSize: "Fry, fingerlings, advanced fingerlings",
    idealFor: "Polyculture with Rohu and Mrigal",
    image: "https://images.pexels.com/photos/3823/water-animal-fish.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    advantages: [
      "Induced breeding for rapid growth",
      "Carefully graded and sorted for uniform size",
      "High tolerance to water quality fluctuations",
      "Monitored for parasites and diseases",
      "100% in-house hatchery stock with batch traceability"
    ],
    packing: {
      type: "Double-layered oxygenated bags",
      capacity: "400–800 fry per bag (depending on size and route)",
      additional: "Real-time tracking and guidance for farmers"
    }
  },
  {
    name: "Mrigal Fish Seeds",
    scientificName: "Cirrhinus mrigala",
    feedingHabit: "Bottom feeder",
    growthRate: "700–1000g in 10 months",
    temperature: "26–31°C",
    survivalRate: "~85% in balanced ponds",
    stockingSize: "Fry, fingerlings",
    idealFor: "Triple polyculture with Rohu and Catla",
    image: "https://images.pexels.com/photos/8964015/pexels-photo-8964015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    advantages: [
      "Naturally hardy and low-maintenance",
      "Improves pond bottom ecology",
      "Compatible with intensive and semi-intensive culture",
      "Carefully immunized before dispatch",
      "Verified by aquaculture biologists"
    ],
    packing: {
      type: "Aerated, sealed polybags",
      capacity: "500–900 fry per bag",
      additional: "Delivery within 24 hours for eastern India"
    }
  },
  {
    name: "Rohu Fish Seeds",
    scientificName: "Labeo rohita",
    feedingHabit: "Surface feeder",
    growthRate: "800–1200g in 8–10 months",
    temperature: "25–32°C",
    survivalRate: ">85% with proper management",
    stockingSize: "Spawn, fry, fingerlings, advanced fingerlings",
    idealFor: "Polyculture with Catla and Mrigal",
    image: "https://images.pexels.com/photos/2156311/pexels-photo-2156311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    advantages: [
      "Genetically pure and fast-growing strains",
      "Induced breeding using hypophysation techniques",
      "Lab-tested and graded before delivery",
      "High resistance to bacterial infections",
      "Delivered in oxygenated bags with anti-stress treatment"
    ],
    packing: {
      type: "Oxygen-filled sealed polybags",
      capacity: "Up to 500–1000 fry per bag (based on size & distance)",
      additional: "Same-day dispatch with 24/7 customer support"
    }
  }
];

const FishCategory: React.FC = () => {
  return (
    <main className="py-24 px-6 container mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        Our <span className="highlight">Fish Species</span> Catalog
      </h1>
      
      <div className="grid gap-12">
        {fishData.map((fish, index) => (
          <div key={index} className="bg-black/30 border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-colors">
            <div className="flex flex-col md:flex-row gap-8 mb-8">
              <div className="w-full md:w-1/3">
                <img 
                  src={fish.image} 
                  alt={fish.name} 
                  className="w-full h-[300px] object-cover rounded-xl shadow-lg"
                />
              </div>
              
              <div className="w-full md:w-2/3">
                <div className="flex items-center gap-4 mb-6">
                  <Fish className="w-8 h-8 text-blue-500" />
                  <div>
                    <h2 className="text-2xl font-bold">{fish.name}</h2>
                    <p className="text-gray-400 italic">{fish.scientificName}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-blue-400">✅ Key Features</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <Scale className="w-5 h-5 text-blue-500 mt-1" />
                        <div>
                          <span className="font-medium">Feeding Habit:</span>
                          <p className="text-gray-400">{fish.feedingHabit}</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Timer className="w-5 h-5 text-blue-500 mt-1" />
                        <div>
                          <span className="font-medium">Growth Rate:</span>
                          <p className="text-gray-400">{fish.growthRate}</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Thermometer className="w-5 h-5 text-blue-500 mt-1" />
                        <div>
                          <span className="font-medium">Ideal Temperature:</span>
                          <p className="text-gray-400">{fish.temperature}</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Users className="w-5 h-5 text-blue-500 mt-1" />
                        <div>
                          <span className="font-medium">Survival Rate:</span>
                          <p className="text-gray-400">{fish.survivalRate}</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-blue-400">🧪 Our Seed Advantage</h3>
                    <ul className="space-y-2">
                      {fish.advantages.map((advantage, i) => (
                        <li key={i} className="text-gray-400 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                          {advantage}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-blue-400">📦 Packing & Delivery</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <Package className="w-5 h-5 text-blue-500 mt-1" />
                        <div>
                          <span className="font-medium">Packaging:</span>
                          <p className="text-gray-400">{fish.packing.type}</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Scale className="w-5 h-5 text-blue-500 mt-1" />
                        <div>
                          <span className="font-medium">Capacity:</span>
                          <p className="text-gray-400">{fish.packing.capacity}</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Timer className="w-5 h-5 text-blue-500 mt-1" />
                        <div>
                          <span className="font-medium">Additional Info:</span>
                          <p className="text-gray-400">{fish.packing.additional}</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default FishCategory;