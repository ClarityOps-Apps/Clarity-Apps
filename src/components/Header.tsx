import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-xl font-medium text-sky-300">Clarity Apps</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-800 hover:text-purple-600 font-medium">Home</a>
          <a href="#apps" className="text-gray-800 hover:text-purple-600 font-medium">Apps</a>
          <a href="#vision" className="text-gray-800 hover:text-purple-600 font-medium">Vision</a>
          <a href="#contact" className="text-gray-800 hover:text-purple-600 font-medium">Contact</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#" 
              className="text-gray-800 hover:text-purple-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#apps" 
              className="text-gray-800 hover:text-purple-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Apps
            </a>
            <a 
              href="#vision" 
              className="text-gray-800 hover:text-purple-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Vision
            </a>
            <a 
              href="#contact" 
              className="text-gray-800 hover:text-purple-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
