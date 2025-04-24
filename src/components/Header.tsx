import React, { useState } from 'react';
import { Fish, Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Button from './ui/Button';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Fish Species', path: '/fish-species' },
    { name: 'Contact', onClick: scrollToContact }
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center h-20 px-6">
        <Link 
          to="/" 
          className="flex items-center gap-3 group"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Fish className="w-7 h-7 text-white" />
          </div>
          <span className="text-2xl font-bold highlight">Bharat Matsya</span>
        </Link>
        
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                {link.onClick ? (
                  <button
                    onClick={link.onClick}
                    className="relative px-4 py-2 font-medium text-gray-100 hover:text-blue-400 transition-colors duration-300 group"
                  >
                    {link.name}
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={`relative px-4 py-2 font-medium transition-colors duration-300 group ${
                      isActive(link.path) 
                        ? 'text-blue-400' 
                        : 'text-gray-100 hover:text-blue-400'
                    }`}
                  >
                    {link.name}
                    <span className={`absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transform origin-left transition-transform duration-300 ${
                      isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`} />
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="hidden lg:flex items-center gap-6">
          <a 
            href="tel:7903716957"
            className="flex items-center gap-2 px-4 py-2 text-base font-medium text-gray-100 hover:text-blue-400 transition-colors duration-300"
          >
            <Phone className="w-5 h-5" />
            +91 7903716957
          </a>
          <Button 
            variant="primary" 
            onClick={scrollToContact}
            className="px-6 py-2.5 text-base shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
          >
            Get Free Consultation
          </Button>
        </div>
        
        <button 
          className="lg:hidden w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 text-gray-100 hover:bg-white/10 hover:text-blue-400 transition-all duration-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#001e2e]/95 backdrop-blur-md border-t border-white/10">
          <nav className="container mx-auto py-6 px-6">
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  {link.onClick ? (
                    <button
                      onClick={link.onClick}
                      className="block w-full text-left px-4 py-3 text-base font-medium text-gray-100 hover:text-blue-400 hover:bg-white/5 rounded-lg transition-colors duration-300"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      className={`block w-full px-4 py-3 text-base font-medium rounded-lg transition-colors duration-300 ${
                        isActive(link.path)
                          ? 'text-blue-400 bg-blue-500/10'
                          : 'text-gray-100 hover:text-blue-400 hover:bg-white/5'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
              <li className="pt-4">
                <Button 
                  variant="primary" 
                  fullWidth 
                  onClick={scrollToContact}
                  className="py-3 text-base shadow-lg shadow-blue-500/20"
                >
                  Get Free Consultation
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;