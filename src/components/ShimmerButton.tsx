import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ShimmerButtonProps {
  children: ReactNode;
  className?: string;
  variant?: 'love' | 'community';
  onClick?: () => void;
}

const ShimmerButton = ({ children, className = '', variant = 'love', onClick }: ShimmerButtonProps) => {
  const baseStyles = variant === 'love' 
    ? 'bg-gradient-to-r from-gold via-gold-light to-gold text-brown font-bold'
    : 'bg-cream border-2 border-gold text-brown-dark font-semibold';

  return (
    <motion.button
      onClick={onClick}
      className={`relative overflow-hidden rounded-full px-8 py-4 ${baseStyles} ${className}`}
      whileHover={{ scale: 1.05, boxShadow: '0 10px 40px -10px rgba(212, 175, 55, 0.5)' }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 -translate-x-full"
        animate={{
          translateX: ['-100%', '200%'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 3,
          ease: 'easeInOut',
        }}
      >
        <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />
      </motion.div>
      
      {/* Glow pulse */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          boxShadow: [
            '0 0 20px rgba(212, 175, 55, 0.3)',
            '0 0 40px rgba(212, 175, 55, 0.5)',
            '0 0 20px rgba(212, 175, 55, 0.3)',
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
};

export default ShimmerButton;
