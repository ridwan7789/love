import { Heart, Twitter, MessageCircle, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import logoImage from '@/assets/logo.png';
import ScrollReveal from './ScrollReveal';
import MagneticElement from './MagneticElement';
import SparkleEffect from './SparkleEffect';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-cream-dark to-wood-light py-16 relative overflow-hidden">
      <SparkleEffect count={8} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Mini Logo with hover effect */}
          <ScrollReveal>
            <MagneticElement strength={0.15}>
              <motion.img
                src={logoImage}
                alt="Crypto Wedding Fund"
                className="w-32 mb-6 drop-shadow-lg cursor-pointer"
                whileHover={{ scale: 1.1, rotate: [-2, 2, -2, 0] }}
                transition={{ duration: 0.5 }}
              />
            </MagneticElement>
          </ScrollReveal>

          {/* Tagline with gradient animation */}
          <ScrollReveal delay={0.1}>
            <motion.p 
              className="font-display text-2xl md:text-3xl text-brown mb-8"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{
                background: 'linear-gradient(90deg, #5d4e37, #d4af37, #5d4e37)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              From Love to Forever
            </motion.p>
          </ScrollReveal>

          {/* Animated Divider */}
          <ScrollReveal delay={0.2}>
            <div className="flex items-center gap-3 mb-8">
              <motion.span 
                className="w-16 h-0.5 bg-gold/50 rounded-full"
                animate={{ scaleX: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="w-5 h-5 text-blush fill-blush" />
              </motion.div>
              <motion.span 
                className="w-16 h-0.5 bg-gold/50 rounded-full"
                animate={{ scaleX: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
            </div>
          </ScrollReveal>

          {/* Social Links with enhanced effects */}
          <ScrollReveal delay={0.3}>
            <div className="flex items-center gap-6 mb-10">
              {[
                { icon: Twitter, label: 'Twitter' },
                { icon: Send, label: 'Telegram' },
                { icon: MessageCircle, label: 'Discord' },
              ].map((social, index) => (
                <MagneticElement key={social.label} strength={0.3}>
                  <motion.a
                    href="#"
                    className="w-12 h-12 rounded-full bg-card flex items-center justify-center shadow-md group relative overflow-hidden"
                    aria-label={social.label}
                    whileHover={{ 
                      y: -4, 
                      boxShadow: '0 10px 30px -10px rgba(212, 175, 55, 0.5)' 
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="h-full w-full bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
                    </motion.div>
                    
                    <social.icon className="w-5 h-5 text-brown group-hover:text-gold transition-colors relative z-10" />
                  </motion.a>
                </MagneticElement>
              ))}
            </div>
          </ScrollReveal>

          {/* Footer Text */}
          <ScrollReveal delay={0.4}>
            <p className="text-brown-light text-sm max-w-md leading-relaxed">
              Crypto Wedding Fund is a community-powered project built on love, honesty, and shared belief.
            </p>
          </ScrollReveal>

          {/* Copyright */}
          <ScrollReveal delay={0.5}>
            <p className="text-brown-light/60 text-xs mt-6">
              © {new Date().getFullYear()} Crypto Wedding Fund. All rights reserved.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Decorative animated hearts */}
      <motion.div 
        className="absolute bottom-10 left-10 text-blush/30"
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Heart className="w-6 h-6 fill-current" />
      </motion.div>
      <motion.div 
        className="absolute top-10 right-10 text-gold/30"
        animate={{ 
          y: [0, -8, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
      >
        <Heart className="w-4 h-4 fill-current" />
      </motion.div>
      <motion.div 
        className="absolute bottom-20 right-20 text-gold/20"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Heart className="w-5 h-5 fill-current" />
      </motion.div>
    </footer>
  );
};

export default Footer;
