import { Heart } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import commitmentImage from '@/assets/commitment.jpg';
import FloatingHearts from './FloatingHearts';
import ScrollReveal from './ScrollReveal';
import GlowingImage from './GlowingImage';
import ShimmerButton from './ShimmerButton';
import MagneticElement from './MagneticElement';
import SparkleEffect from './SparkleEffect';
import AnimatedGradient from './AnimatedGradient';

const CommunitySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const glowOpacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.1, 0.3, 0.1]);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-cream to-cream-dark relative overflow-hidden">
      <FloatingHearts />
      <AnimatedGradient />
      <SparkleEffect count={18} />
      
      {/* Parallax background blobs */}
      <motion.div 
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blush/10 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
      />
      <motion.div 
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gold/10 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [80, -80]) }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <ScrollReveal>
            <h2 className="section-title mb-6">
              Make This Valentine's Unforgettable
            </h2>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal delay={0.1}>
            <p className="section-subtitle mb-12 max-w-2xl mx-auto">
              This February, be more than a holder — be a believer. 
              Join thousands of hearts united by one mission: helping real love stories find their happily ever after.
            </p>
          </ScrollReveal>

          {/* Image */}
          <ScrollReveal delay={0.2}>
            <div className="relative inline-block mb-12">
              <GlowingImage
                src={commitmentImage}
                alt="Valentine's Love Community"
                className="w-full max-w-2xl"
              />
              
              {/* Animated glow effect with parallax */}
              <motion.div 
                className="absolute -inset-2 bg-gradient-to-r from-gold/20 via-blush/20 to-gold/20 rounded-3xl blur-xl -z-10"
                style={{ opacity: glowOpacity }}
              />
              <motion.div 
                className="absolute -inset-6 bg-gradient-to-r from-blush/10 via-gold/10 to-blush/10 rounded-3xl blur-2xl -z-20"
                style={{ 
                  y: useTransform(scrollYProgress, [0, 1], [10, -10]),
                  scale: useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.95, 1.05, 0.95])
                }}
              />
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal delay={0.3}>
            <MagneticElement strength={0.15}>
              <ShimmerButton variant="love" className="text-xl px-10 py-5">
                <Heart className="w-6 h-6" />
                Be Someone's Valentine Today
              </ShimmerButton>
            </MagneticElement>
          </ScrollReveal>
        </div>
      </div>

      {/* Parallax stars decoration with pulse animation */}
      <motion.div 
        className="absolute top-10 left-[10%] w-1 h-1 bg-gold rounded-full"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-20, 40]) }}
        animate={{ scale: [1, 2, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div 
        className="absolute top-20 left-[30%] w-1.5 h-1.5 bg-gold-light rounded-full"
        style={{ y: useTransform(scrollYProgress, [0, 1], [10, -30]) }}
        animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
      />
      <motion.div 
        className="absolute top-[15%] right-[20%] w-1 h-1 bg-gold rounded-full"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-30, 50]) }}
        animate={{ scale: [1, 2, 1], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.6 }}
      />
      <motion.div 
        className="absolute top-[25%] right-[35%] w-2 h-2 bg-gold-light rounded-full"
        style={{ y: useTransform(scrollYProgress, [0, 1], [20, -20]) }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.9 }}
      />
      <motion.div 
        className="absolute bottom-[20%] left-[15%] w-1.5 h-1.5 bg-blush rounded-full opacity-60"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-15, 35]) }}
        animate={{ scale: [1, 1.8, 1] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-[30%] right-[10%] w-2 h-2 bg-gold rounded-full opacity-50"
        style={{ y: useTransform(scrollYProgress, [0, 1], [25, -25]) }}
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
      />
    </section>
  );
};

export default CommunitySection;
