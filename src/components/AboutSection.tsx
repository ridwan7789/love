import { motion } from 'framer-motion';
import logoImage from '@/assets/logo.png';
import ScrollReveal from './ScrollReveal';

const AboutSection = () => {
  return (
    <section className="py-20 bg-cream-dark relative overflow-hidden">
      <div className="container mx-auto px-4">
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
              {/* Glow effect behind */}
              <div className="absolute inset-0 bg-gold/20 blur-3xl -z-10 rounded-full" />
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-blush rounded-full animate-pulse-soft opacity-50" />
      <div className="absolute bottom-20 right-10 w-6 h-6 bg-gold rounded-full animate-pulse-soft opacity-40 delay-500" />
    </section>
  );
};

export default AboutSection;
