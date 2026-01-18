import { Heart, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImage from '@/assets/hero.jpg';
import FloatingHearts from './FloatingHearts';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-cream to-cream-dark">
      <FloatingHearts />
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cream/30 to-cream pointer-events-none" />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Hero Image */}
          <motion.div 
            className="relative mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <img
              src={heroImage}
              alt="Crypto Wedding Fund - Couple with coins"
              className="w-full max-w-3xl rounded-3xl shadow-2xl"
            />
            {/* Sparkle effects */}
            <div className="absolute top-10 left-10 w-3 h-3 bg-gold rounded-full animate-sparkle" />
            <div className="absolute top-20 right-16 w-2 h-2 bg-gold-light rounded-full animate-sparkle delay-300" />
            <div className="absolute bottom-20 left-20 w-2 h-2 bg-blush rounded-full animate-sparkle delay-500" />
          </motion.div>

          {/* Headline */}
          <motion.h1 
            className="font-display text-4xl md:text-5xl lg:text-6xl text-brown mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Funding Love. Building Forever.
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            className="text-lg md:text-xl text-brown-light max-w-2xl mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A community-powered crypto project designed to help real love stories reach their wedding day — transparently, honestly, and together.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <button className="btn-love flex items-center justify-center gap-2">
              <Heart className="w-5 h-5" />
              Support Love
            </button>
            <button className="btn-community flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Join the Community
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 60L48 54C96 48 192 36 288 42C384 48 480 72 576 78C672 84 768 72 864 60C960 48 1056 36 1152 36C1248 36 1344 48 1392 54L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z"
            className="fill-cream-dark"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
