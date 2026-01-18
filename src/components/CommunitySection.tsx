import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import commitmentImage from '@/assets/commitment.jpg';
import FloatingHearts from './FloatingHearts';
import ScrollReveal from './ScrollReveal';

const CommunitySection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-cream to-cream-dark relative overflow-hidden">
      <FloatingHearts />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <ScrollReveal>
            <h2 className="section-title mb-6">
              Where Crypto Supports Commitment
            </h2>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal delay={0.1}>
            <p className="section-subtitle mb-12 max-w-2xl mx-auto">
              Holding Crypto Wedding Fund means more than owning a token.
              It means supporting dreams, promises, and futures.
            </p>
          </ScrollReveal>

          {/* Image */}
          <ScrollReveal delay={0.2}>
            <div className="relative inline-block mb-12">
              <motion.img
                src={commitmentImage}
                alt="Where Crypto Supports Commitment"
                className="w-full max-w-2xl rounded-3xl shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              />
              {/* Glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-gold/20 via-blush/20 to-gold/20 rounded-3xl blur-xl -z-10" />
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal delay={0.3}>
            <motion.button 
              className="btn-love flex items-center justify-center gap-2 mx-auto text-xl px-10 py-5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Heart className="w-6 h-6" />
              Become Part of the Story
            </motion.button>
          </ScrollReveal>
        </div>
      </div>

      {/* Stars decoration for night sky effect */}
      <div className="absolute top-10 left-[10%] w-1 h-1 bg-gold rounded-full animate-sparkle" />
      <div className="absolute top-20 left-[30%] w-1.5 h-1.5 bg-gold-light rounded-full animate-sparkle delay-200" />
      <div className="absolute top-15 right-[20%] w-1 h-1 bg-gold rounded-full animate-sparkle delay-400" />
      <div className="absolute top-25 right-[35%] w-2 h-2 bg-gold-light rounded-full animate-sparkle delay-100" />
    </section>
  );
};

export default CommunitySection;
