import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ValueCardProps {
  title: string;
  description: string;
  image: string;
}

const ValueCard = ({ title, description, image }: ValueCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['12deg', '-12deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-12deg', '12deg']);
  const brightness = useTransform(mouseYSpring, [-0.5, 0.5], [1.1, 0.9]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="group relative"
      whileHover={{ z: 50 }}
    >
      <div 
        className="card-warm rounded-3xl p-6 h-full transition-all duration-300 group-hover:shadow-2xl"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Animated glow on hover */}
        <motion.div
          className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
          style={{
            background: 'radial-gradient(circle, rgba(212, 175, 55, 0.4), transparent 70%)',
          }}
        />
        
        {/* Animated border gradient */}
        <motion.div
          className="absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
          style={{
            background: 'linear-gradient(135deg, #d4af37, #f8c291, #ffb6c1, #d4af37)',
            backgroundSize: '400% 400%',
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
        
        {/* Image */}
        <motion.div 
          className="relative mb-4 overflow-hidden rounded-2xl"
          style={{ transform: 'translateZ(40px)' }}
        >
          <motion.img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            style={{ filter: `brightness(${brightness})` }}
          />
          
          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
          >
            <div className="h-full w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
          </motion.div>
        </motion.div>
        
        {/* Content */}
        <motion.div style={{ transform: 'translateZ(30px)' }}>
          <h3 className="font-display text-xl text-brown mb-2 group-hover:text-gold-dark transition-colors duration-300">
            {title}
          </h3>
          <p className="text-brown-light text-sm leading-relaxed">
            {description}
          </p>
        </motion.div>
        
        {/* Floating decoration */}
        <motion.div
          className="absolute top-4 right-4 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 8, repeat: Infinity, ease: 'linear' },
            scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          <svg viewBox="0 0 24 24" className="w-full h-full fill-gold">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ValueCard;
