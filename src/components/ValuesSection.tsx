import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ValueCard from './ValueCard';
import ScrollReveal from './ScrollReveal';
import loveDrivenImage from '@/assets/love-driven.jpg';
import transparencyImage from '@/assets/transparency.jpg';
import communityImage from '@/assets/community.jpg';
import noPromisesImage from '@/assets/no-promises.jpg';

const values = [
  {
    title: "Gift of Forever",
    description: 'Every $L2G token is a gift that keeps on giving — funding real love stories that last a lifetime.',
    image: loveDrivenImage,
  },
  {
    title: '$L2G on Chain',
    description: 'Every $L2G transaction is a love letter — visible, verifiable, and forever etched on the blockchain.',
    image: transparencyImage,
  },
  {
    title: 'Community of Givers',
    description: "Join a movement of $L2G holders helping real couples turn their wedding dreams into reality.",
    image: communityImage,
  },
  {
    title: 'Genuine Gifting',
    description: 'No empty promises. No hype. Just $L2G — genuine support for real love stories, honest and true.',
    image: noPromisesImage,
  },
];

const ValuesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-cream-dark to-cream relative overflow-hidden">
      {/* Parallax background elements */}
      <motion.div 
        className="absolute -top-20 left-1/4 w-[300px] h-[300px] bg-gold/10 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 100]) }}
      />
      <motion.div 
        className="absolute top-1/2 -right-20 w-[400px] h-[400px] bg-blush/10 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="section-title">
            Why $L2G Changes Everything
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Four pillars that make LOVE 2 GIFT the most meaningful token in crypto
          </p>
        </ScrollReveal>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.15,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              <ValueCard
                title={value.title}
                description={value.description}
                image={value.image}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Parallax decorative coins */}
      <motion.div 
        className="absolute bottom-10 left-5 w-8 h-8 bg-gold rounded-full opacity-30"
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], [0, 80]),
          rotate: useTransform(scrollYProgress, [0, 1], [0, 45])
        }}
      />
      <motion.div 
        className="absolute top-20 right-10 w-6 h-6 bg-gold-light rounded-full opacity-40"
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], [0, -60]),
          x: useTransform(scrollYProgress, [0, 1], [0, -30])
        }}
      />
      <motion.div 
        className="absolute top-1/2 left-8 w-4 h-4 bg-blush rounded-full opacity-25"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-20, 40]) }}
      />
      <motion.div 
        className="absolute bottom-1/3 right-6 w-5 h-5 bg-gold rounded-full opacity-35"
        style={{ y: useTransform(scrollYProgress, [0, 1], [30, -30]) }}
      />
    </section>
  );
};

export default ValuesSection;
