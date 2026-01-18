import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import realLoveImage from '@/assets/real-love.jpg';
import ScrollReveal from './ScrollReveal';

const StorySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const frameY = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const frameRotate = useTransform(scrollYProgress, [0, 1], [-2, 2]);

  return (
    <section ref={sectionRef} className="py-20 bg-cream relative overflow-hidden">
      {/* Parallax background blobs */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-blush/10 rounded-full blur-3xl -z-10"
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], [-80, 80]),
          x: useTransform(scrollYProgress, [0, 1], [0, -40])
        }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -z-10"
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], [60, -60]),
          x: useTransform(scrollYProgress, [0, 1], [0, 30])
        }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/3 w-80 h-80 bg-forest/5 rounded-full blur-3xl -z-10"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-40, 40]) }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Side */}
          <ScrollReveal direction="left" className="lg:w-1/2 relative">
            <div className="relative">
              <motion.img
                src={realLoveImage}
                alt="Built on Real Love Stories"
                className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              />
              {/* Parallax decorative frames */}
              <motion.div 
                className="absolute -inset-4 border-4 border-gold/30 rounded-3xl -z-10"
                style={{ y: frameY, rotate: frameRotate }}
              />
              <motion.div 
                className="absolute -inset-8 border-2 border-blush/20 rounded-3xl -z-20"
                style={{ 
                  y: useTransform(scrollYProgress, [0, 1], [-10, 10]),
                  rotate: useTransform(scrollYProgress, [0, 1], [1, -1])
                }}
              />
            </div>
          </ScrollReveal>

          {/* Content Side */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <ScrollReveal direction="right">
              <h2 className="section-title">
                Built on Real Love Stories
              </h2>
            </ScrollReveal>
            
            <div className="space-y-6">
              <ScrollReveal direction="right" delay={0.1}>
                <p className="section-subtitle">
                  This project is inspired by real couples who believe that commitment is worth fighting for.
                </p>
              </ScrollReveal>
              
              <ScrollReveal direction="right" delay={0.2}>
                <p className="section-subtitle">
                  Crypto Wedding Fund is not about fast profit — it is about <span className="font-bold text-gold-dark">long-term belief</span>, <span className="font-bold text-blush">patience</span>, and <span className="font-bold text-forest">support</span>.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.3}>
                <div className="flex items-center justify-center lg:justify-start gap-2 pt-4">
                  <motion.span 
                    className="inline-block w-12 h-1 bg-gold rounded-full"
                    style={{ scaleX: useTransform(scrollYProgress, [0.3, 0.6], [0.5, 1]) }}
                  />
                  <motion.span 
                    className="inline-block w-8 h-1 bg-blush rounded-full"
                    style={{ scaleX: useTransform(scrollYProgress, [0.35, 0.65], [0.5, 1]) }}
                  />
                  <motion.span 
                    className="inline-block w-4 h-1 bg-gold-light rounded-full"
                    style={{ scaleX: useTransform(scrollYProgress, [0.4, 0.7], [0.5, 1]) }}
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>

      {/* Extra parallax decorative elements */}
      <motion.div 
        className="absolute top-20 left-10 w-3 h-3 bg-gold rounded-full opacity-40"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-30, 50]) }}
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-4 h-4 bg-blush rounded-full opacity-30"
        style={{ y: useTransform(scrollYProgress, [0, 1], [20, -40]) }}
      />
    </section>
  );
};

export default StorySection;
