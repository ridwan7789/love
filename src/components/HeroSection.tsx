import { Heart, MessageCircle } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import heroImage from '@/assets/hero.jpg';
import FloatingHearts from './FloatingHearts';
import AnimatedGradient from './AnimatedGradient';
import ShimmerButton from './ShimmerButton';
import GlowingImage from './GlowingImage';
import SparkleEffect from './SparkleEffect';
import MagneticElement from './MagneticElement';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-cream to-cream-dark"
    >
      <FloatingHearts />
      <AnimatedGradient />
      <SparkleEffect count={15} />
      
      {/* Parallax background gradient blobs */}
      <motion.div 
        className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blush/20 rounded-full blur-3xl"
        style={{ y: backgroundY }}
      />
      <motion.div 
        className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-gold/15 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '40%']) }}
      />
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cream/30 to-cream pointer-events-none" />
      
      <motion.div 
        className="container mx-auto px-4 py-12 relative z-10"
        style={{ y: contentY, opacity }}
      >
        <div className="flex flex-col items-center text-center">
          {/* Hero Image with 3D effect */}
          <motion.div 
            className="relative mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <GlowingImage
              src={heroImage}
              alt="Crypto Wedding Fund - Couple with coins"
              className="w-full max-w-3xl"
            />
            
            {/* Animated sparkle effects */}
            <motion.div 
              className="absolute top-10 left-10 w-4 h-4"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <svg viewBox="0 0 24 24" className="w-full h-full fill-gold">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
            </motion.div>
            <motion.div 
              className="absolute top-20 right-16 w-3 h-3"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.6, 1, 0.6],
                rotate: [0, -180, -360]
              }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            >
              <svg viewBox="0 0 24 24" className="w-full h-full fill-gold-light">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
            </motion.div>
            <motion.div 
              className="absolute bottom-20 left-20 w-3 h-3"
              animate={{ 
                scale: [1, 1.4, 1],
                opacity: [0.4, 1, 0.4]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              <svg viewBox="0 0 24 24" className="w-full h-full fill-blush">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
            </motion.div>
          </motion.div>

          {/* Headline with gradient text */}
          <motion.h1 
            className="font-display text-4xl md:text-5xl lg:text-6xl text-brown mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-brown via-gold-dark to-brown bg-clip-text text-transparent">
              This Valentine's, Let Love Go On-Chain
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            className="text-lg md:text-xl text-brown-light max-w-2xl mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            February is the month of love — and this Valentine's, we're proving that crypto can be more than charts and candles. It can be hearts and commitments. Join a movement where every token carries a promise of forever.
          </motion.p>

          {/* CTA Buttons with magnetic effect */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <MagneticElement strength={0.2}>
              <ShimmerButton variant="love">
                <Heart className="w-5 h-5" />
                Be Someone's Valentine
              </ShimmerButton>
            </MagneticElement>
            <MagneticElement strength={0.2}>
              <ShimmerButton variant="community">
                <MessageCircle className="w-5 h-5" />
                Join the Love Movement
              </ShimmerButton>
            </MagneticElement>
          </motion.div>
        </div>
      </motion.div>

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
