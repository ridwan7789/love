import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import logoImage from '@/assets/logo.png';
import ScrollReveal from './ScrollReveal';
import SparkleEffect from './SparkleEffect';
import MagneticElement from './MagneticElement';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const decorY1 = useTransform(scrollYProgress, [0, 1], [-50, 100]);
  const decorY2 = useTransform(scrollYProgress, [0, 1], [-30, 80]);
  const decorX1 = useTransform(scrollYProgress, [0, 1], [-20, 40]);
  const decorX2 = useTransform(scrollYProgress, [0, 1], [20, -40]);
  const glowScale = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.8, 1.2, 0.9]);

  return (
    <section ref={sectionRef} className="py-20 bg-cream-dark relative overflow-hidden">
      <SparkleEffect count={10} />
      
      {/* Animated background blobs */}
      <motion.div 
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blush/10 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <ScrollReveal>
            <h2 className="section-title mb-8">
              What is $L2G (LOVE 2 GIFT)?
            </h2>
          </ScrollReveal>

          {/* Content with hover effects */}
          <div className="space-y-6 mb-12">
            <ScrollReveal delay={0.1}>
              <motion.p 
                className="section-subtitle"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <motion.span 
                  className="font-bold text-gold-dark inline-block"
                  whileHover={{ scale: 1.1 }}
                >
                  $L2G
                </motion.span>{' '}
                isn't just another token — it's a{' '}
                <motion.span 
                  className="font-bold text-brown inline-block"
                  whileHover={{ scale: 1.1, color: '#d4af37' }}
                >
                  gift of love that never expires
                </motion.span>
                .
              </motion.p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <motion.p 
                className="section-subtitle"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                Every $L2G token you hold or gift becomes{' '}
                <motion.span 
                  className="text-gold-dark font-semibold inline-block"
                  animate={{ 
                    textShadow: ['0 0 0px #d4af37', '0 0 10px #d4af37', '0 0 0px #d4af37']
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  an eternal promise on the blockchain
                </motion.span>
                {' '}— helping real couples fund their wedding dreams.
              </motion.p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <motion.p 
                className="section-subtitle"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                Be part of a global love letter — written in code, sealed with $L2G, and destined to make "happily ever after" a reality.
              </motion.p>
            </ScrollReveal>
          </div>

          {/* Logo Image with magnetic effect */}
          <ScrollReveal delay={0.4}>
            <MagneticElement strength={0.1} className="relative inline-block">
              <motion.img
                src={logoImage}
                alt="Crypto Wedding Fund Logo"
                className="w-64 md:w-80 mx-auto drop-shadow-xl cursor-pointer"
                whileHover={{ scale: 1.08, rotate: [0, -2, 2, 0] }}
                transition={{ duration: 0.5 }}
              />
              {/* Animated glow effect behind */}
              <motion.div 
                className="absolute inset-0 bg-gold/20 blur-3xl -z-10 rounded-full"
                style={{ scale: glowScale }}
              />
              {/* Animated ring */}
              <motion.div
                className="absolute inset-0 border-4 border-gold/20 rounded-full -z-10"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </MagneticElement>
          </ScrollReveal>
        </div>
      </div>

      {/* Parallax decorative elements with pulse */}
      <motion.div 
        className="absolute top-20 left-10 w-4 h-4 bg-blush rounded-full opacity-50"
        style={{ y: decorY1, x: decorX1 }}
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-6 h-6 bg-gold rounded-full opacity-40"
        style={{ y: decorY2, x: decorX2 }}
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
      />
      <motion.div 
        className="absolute top-1/2 left-5 w-3 h-3 bg-gold-light rounded-full opacity-30"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 60]) }}
        animate={{ scale: [1, 2, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div 
        className="absolute top-1/3 right-8 w-5 h-5 bg-blush rounded-full opacity-25"
        style={{ y: useTransform(scrollYProgress, [0, 1], [30, -30]) }}
        animate={{ scale: [1, 1.4, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
      />
    </section>
  );
};

export default AboutSection;
