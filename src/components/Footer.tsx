import { Heart, Twitter, MessageCircle, Send } from 'lucide-react';
import logoImage from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-cream-dark to-wood-light py-16 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Mini Logo */}
          <img
            src={logoImage}
            alt="Crypto Wedding Fund"
            className="w-32 mb-6 drop-shadow-lg"
          />

          {/* Tagline */}
          <p className="font-display text-2xl md:text-3xl text-brown mb-8">
            From Love to Forever
          </p>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-8">
            <span className="w-16 h-0.5 bg-gold/50 rounded-full" />
            <Heart className="w-5 h-5 text-blush fill-blush" />
            <span className="w-16 h-0.5 bg-gold/50 rounded-full" />
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 mb-10">
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-card flex items-center justify-center shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-brown group-hover:text-gold transition-colors" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-card flex items-center justify-center shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              aria-label="Telegram"
            >
              <Send className="w-5 h-5 text-brown group-hover:text-gold transition-colors" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-card flex items-center justify-center shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              aria-label="Discord"
            >
              <MessageCircle className="w-5 h-5 text-brown group-hover:text-gold transition-colors" />
            </a>
          </div>

          {/* Footer Text */}
          <p className="text-brown-light text-sm max-w-md leading-relaxed">
            Crypto Wedding Fund is a community-powered project built on love, honesty, and shared belief.
          </p>

          {/* Copyright */}
          <p className="text-brown-light/60 text-xs mt-6">
            © {new Date().getFullYear()} Crypto Wedding Fund. All rights reserved.
          </p>
        </div>
      </div>

      {/* Decorative hearts */}
      <div className="absolute bottom-10 left-10 text-blush/30">
        <Heart className="w-6 h-6 fill-current" />
      </div>
      <div className="absolute top-10 right-10 text-gold/30">
        <Heart className="w-4 h-4 fill-current" />
      </div>
    </footer>
  );
};

export default Footer;
