import { Heart } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const FloatingHearts = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const hearts = [
    { size: 20, left: '10%', top: '20%', speed: 0.3 },
    { size: 16, left: '25%', top: '30%', speed: 0.5 },
    { size: 24, left: '45%', top: '15%', speed: 0.2 },
    { size: 14, left: '65%', top: '45%', speed: 0.6 },
    { size: 18, left: '80%', top: '25%', speed: 0.4 },
    { size: 22, left: '90%', top: '50%', speed: 0.35 },
    { size: 12, left: '5%', top: '60%', speed: 0.55 },
    { size: 16, left: '70%', top: '70%', speed: 0.25 },
  ];

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      {hearts.map((heart, index) => {
        const y = useTransform(scrollYProgress, [0, 1], [heart.speed * -150, heart.speed * 150]);
        const rotate = useTransform(scrollYProgress, [0, 1], [0, heart.speed * 30]);
        
        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: heart.left,
              top: heart.top,
              y,
              rotate,
            }}
          >
            <Heart
              size={heart.size}
              className="text-blush fill-blush opacity-50"
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingHearts;
