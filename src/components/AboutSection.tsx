import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import logoImage from '@/assets/logo.png';
import ScrollReveal from './ScrollReveal';

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
      {/* Parallax background blobs */}
      <motion.div 
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blush/10 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <ScrollReveal>
            <h2 className="section-title mb-8">
              Why Crypto Wedding Fund Exists
            </h2>
          </ScrollReveal>

          {/* Content */}
          <div className="space-y-6 mb-12">
            <ScrollReveal delay={0.1}>
              <p className="section-subtitle">
                Crypto Wedding Fund was born from a simple belief: <span className="font-bold text-brown">Love should not be delayed by financial barriers.</span>
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="section-subtitle">
                In a world driven by technology, we chose to use blockchain not for speculation — but for <span className="text-gold-dark font-semibold">purpose</span>.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <p className="section-subtitle">
                Crypto Wedding Fund allows a global community to support real couples, real dreams, and real commitments.
              </p>
            </ScrollReveal>
          </div>

          {/* Logo Image */}
          <ScrollReveal delay={0.4}>
            <div className="relative inline-block">
              <motion.img
                src={logoImage}
                alt="Crypto Wedding Fund Logo"
                className="w-64 md:w-80 mx-auto drop-shadow-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
              {/* Animated glow effect behind */}
              <motion.div 
                className="absolute inset-0 bg-gold/20 blur-3xl -z-10 rounded-full"
                style={{ scale: glowScale }}
              />
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Parallax decorative elements */}
      <motion.div 
        className="absolute top-20 left-10 w-4 h-4 bg-blush rounded-full opacity-50"
        style={{ y: decorY1, x: decorX1 }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-6 h-6 bg-gold rounded-full opacity-40"
        style={{ y: decorY2, x: decorX2 }}
      />
      <motion.div 
        className="absolute top-1/2 left-5 w-3 h-3 bg-gold-light rounded-full opacity-30"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 60]) }}
      />
      <motion.div 
        className="absolute top-1/3 right-8 w-5 h-5 bg-blush rounded-full opacity-25"
        style={{ y: useTransform(scrollYProgress, [0, 1], [30, -30]) }}
      />
    </section>
  );
};

export default AboutSection;
