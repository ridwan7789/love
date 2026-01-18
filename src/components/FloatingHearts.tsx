import { Heart } from 'lucide-react';

const FloatingHearts = () => {
  const hearts = [
    { size: 20, left: '10%', delay: '0s', duration: '4s' },
    { size: 16, left: '25%', delay: '1s', duration: '5s' },
    { size: 24, left: '45%', delay: '0.5s', duration: '4.5s' },
    { size: 14, left: '65%', delay: '1.5s', duration: '5.5s' },
    { size: 18, left: '80%', delay: '0.8s', duration: '4.2s' },
    { size: 22, left: '90%', delay: '2s', duration: '5s' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hearts.map((heart, index) => (
        <div
          key={index}
          className="absolute animate-float-heart"
          style={{
            left: heart.left,
            top: `${20 + index * 10}%`,
            animationDelay: heart.delay,
            animationDuration: heart.duration,
          }}
        >
          <Heart
            size={heart.size}
            className="text-blush fill-blush opacity-60"
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
