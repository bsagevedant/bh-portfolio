import React from 'react';
import { Fish, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold mb-6">
              <Fish className="w-8 h-8 text-blue-500" />
              <span className="highlight">Bharat Matsya</span>
            </div>
            <p className="text-gray-400 mb-4">
              Premium fish seed producer with a commitment to quality, sustainability, and farmer success.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-blue-400 transition-colors">Our Features</a></li>
              <li><a href="#species" className="text-gray-400 hover:text-blue-400 transition-colors">Fish Species</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Fish Farming Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Pond Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Disease Prevention</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Water Quality</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Feed Management</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-r-lg px-4 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Bharat Matsya Hatchery. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <a href="#" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
              <Facebook size={16} />
            </a>
            <a href="#" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
              <Twitter size={16} />
            </a>
            <a href="#" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
              <Instagram size={16} />
            </a>
            <a href="#" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;