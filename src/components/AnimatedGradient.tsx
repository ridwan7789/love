import { motion } from 'framer-motion';

interface AnimatedGradientProps {
  className?: string;
}

const AnimatedGradient = ({ className = '' }: AnimatedGradientProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-gold/20 via-blush/15 to-gold/20 blur-3xl"
        animate={{
          x: ['-10%', '10%', '-10%'],
          y: ['-5%', '15%', '-5%'],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ top: '10%', left: '20%' }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blush/15 via-sunset/10 to-blush/15 blur-3xl"
        animate={{
          x: ['10%', '-10%', '10%'],
          y: ['10%', '-10%', '10%'],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ bottom: '20%', right: '15%' }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-forest/10 via-gold/10 to-forest/10 blur-3xl"
        animate={{
          x: ['-5%', '5%', '-5%'],
          y: ['5%', '-5%', '5%'],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
      />
    </div>
  );
};

export default AnimatedGradient;
