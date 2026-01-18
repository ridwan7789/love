import { motion } from 'framer-motion';

interface ValueCardProps {
  title: string;
  description: string;
  image: string;
}

const ValueCard = ({ title, description, image }: ValueCardProps) => {
  return (
    <motion.div 
      className="card-warm p-6 transition-shadow duration-500 group"
      whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)' }}
      transition={{ duration: 0.3 }}
    >
      {/* Image */}
      <div className="relative overflow-hidden rounded-xl mb-6">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-brown/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-bold text-brown mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-brown-light leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default ValueCard;
