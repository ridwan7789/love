import { motion } from 'framer-motion';
import ValueCard from './ValueCard';
import ScrollReveal from './ScrollReveal';
import loveDrivenImage from '@/assets/love-driven.jpg';
import transparencyImage from '@/assets/transparency.jpg';
import communityImage from '@/assets/community.jpg';
import noPromisesImage from '@/assets/no-promises.jpg';

const values = [
  {
    title: 'Love-Driven Purpose',
    description: 'Built around real relationships and genuine commitment. This project exists because love matters.',
    image: loveDrivenImage,
  },
  {
    title: 'On-Chain Transparency',
    description: 'All funds are visible, verifiable, and community-tracked directly on the blockchain.',
    image: transparencyImage,
  },
  {
    title: 'Community Powered',
    description: 'Every holder becomes part of a shared love story. Together, we help dreams come true.',
    image: communityImage,
  },
  {
    title: 'No False Promises',
    description: 'No hype. No fake guarantees. Just honesty, transparency, and shared belief.',
    image: noPromisesImage,
  },
];

const ValuesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-cream-dark to-cream relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="section-title">
            Our Core Values
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            What makes Crypto Wedding Fund different from everything else
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

      {/* Decorative coins */}
      <div className="absolute bottom-10 left-5 w-8 h-8 bg-gold rounded-full opacity-30 animate-coin-float" />
      <div className="absolute top-20 right-10 w-6 h-6 bg-gold-light rounded-full opacity-40 animate-coin-float delay-500" />
    </section>
  );
};

export default ValuesSection;
