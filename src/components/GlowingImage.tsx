import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface GlowingImageProps {
  src: string;
  alt: string;
  className?: string;
}

const GlowingImage = ({ src, alt, className = '' }: GlowingImageProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { stiffness: 300, damping: 30 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);
  
  const rotateX = useTransform(y, [-0.5, 0.5], ['5deg', '-5deg']);
  const rotateY = useTransform(x, [-0.5, 0.5], ['-5deg', '5deg']);
  
  const glowX = useTransform(x, [-0.5, 0.5], ['20%', '80%']);
  const glowY = useTransform(y, [-0.5, 0.5], ['20%', '80%']);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative group ${className}`}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Dynamic glow */}
      <motion.div
        className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10"
        style={{
          background: `radial-gradient(ellipse at ${glowX} ${glowY}, rgba(212, 175, 55, 0.4), rgba(255, 182, 193, 0.2), transparent 70%)`,
        }}
      />
      
      {/* Animated border */}
      <motion.div
        className="absolute -inset-[2px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
        style={{
          background: 'linear-gradient(90deg, #d4af37, #f8c291, #ffb6c1, #d4af37)',
          backgroundSize: '300% 100%',
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      <img
        src={src}
        alt={alt}
        className="w-full rounded-3xl shadow-2xl relative z-10"
      />
      
      {/* Shine effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-3xl overflow-hidden z-20 pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <motion.div
          className="absolute inset-0 -translate-x-full"
          animate={{
            translateX: ['-100%', '200%'],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 2,
            ease: 'easeInOut',
          }}
        >
          <div className="h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default GlowingImage;
