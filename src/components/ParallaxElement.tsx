import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface ParallaxElementProps {
  children: ReactNode;
  className?: string;
  speed?: number; // Positive = moves slower, Negative = moves faster
  direction?: 'vertical' | 'horizontal';
}

const ParallaxElement = ({ 
  children, 
  className = '', 
  speed = 0.5,
  direction = 'vertical'
}: ParallaxElementProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed * -100, speed * 100]);
  const x = useTransform(scrollYProgress, [0, 1], [speed * -50, speed * 50]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={direction === 'vertical' ? { y } : { x }}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxElement;
