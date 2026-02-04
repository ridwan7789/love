import { Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import logoImage from '@/assets/l2g-token-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img src={logoImage} alt="Crypto Wedding Fund" className="h-10 md:h-12" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-brown hover:text-gold-dark transition-colors font-medium">
              About
            </a>
            <a href="#values" className="text-brown hover:text-gold-dark transition-colors font-medium">
              Values
            </a>
            <a href="#story" className="text-brown hover:text-gold-dark transition-colors font-medium">
              Story
            </a>
            <a href="#community" className="text-brown hover:text-gold-dark transition-colors font-medium">
              Community
            </a>
            <button className="btn-love flex items-center gap-2 py-2 px-6 text-sm">
              <Heart className="w-4 h-4" />
              Support Love
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-brown"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-4">
              <a
                href="#about"
                className="text-brown hover:text-gold-dark transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="#values"
                className="text-brown hover:text-gold-dark transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Values
              </a>
              <a
                href="#story"
                className="text-brown hover:text-gold-dark transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Story
              </a>
              <a
                href="#community"
                className="text-brown hover:text-gold-dark transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Community
              </a>
              <button className="btn-love flex items-center justify-center gap-2 py-3 px-6 mt-2">
                <Heart className="w-4 h-4" />
                Support Love
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
