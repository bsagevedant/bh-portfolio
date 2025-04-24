import React from 'react';
import Button from './ui/Button';

const CtaSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 container mx-auto text-center">
      <h2 className="section-title">
        Partner With <span className="highlight">Experts</span>
      </h2>
      <p className="section-subtitle">
        At Bharat Matsya Hatchery, we don't just sell fish seed — we deliver results for long-term sustainability.
      </p>
      
      <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl p-10 sm:p-16 border border-blue-500/30 mt-12">
        <h3 className="text-3xl font-bold mb-6">Ready to increase your aquaculture yield?</h3>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
          Connect with our experts for consultation on stocking density, feed management, and pond preparation.
        </p>
        
        <Button variant="primary" className="px-8 py-3 text-lg">
          Schedule Free Consultation
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;