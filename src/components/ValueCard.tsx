interface ValueCardProps {
  title: string;
  description: string;
  image: string;
  delay?: string;
}

const ValueCard = ({ title, description, image, delay = '0s' }: ValueCardProps) => {
  return (
    <div 
      className="card-warm p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
      style={{ animationDelay: delay }}
    >
      {/* Image */}
      <div className="relative overflow-hidden rounded-xl mb-6">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
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
    </div>
  );
};

export default ValueCard;
