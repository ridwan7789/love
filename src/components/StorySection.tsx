import realLoveImage from '@/assets/real-love.jpg';

const StorySection = () => {
  return (
    <section className="py-20 bg-cream relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Side */}
          <div className="lg:w-1/2 relative">
            <div className="relative">
              <img
                src={realLoveImage}
                alt="Built on Real Love Stories"
                className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl"
              />
              {/* Decorative frame */}
              <div className="absolute -inset-4 border-4 border-gold/30 rounded-3xl -z-10" />
              <div className="absolute -inset-8 border-2 border-blush/20 rounded-3xl -z-20" />
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="section-title">
              Built on Real Love Stories
            </h2>
            
            <div className="space-y-6">
              <p className="section-subtitle">
                This project is inspired by real couples who believe that commitment is worth fighting for.
              </p>
              
              <p className="section-subtitle">
                Crypto Wedding Fund is not about fast profit — it is about <span className="font-bold text-gold-dark">long-term belief</span>, <span className="font-bold text-blush">patience</span>, and <span className="font-bold text-forest">support</span>.
              </p>

              <div className="flex items-center justify-center lg:justify-start gap-2 pt-4">
                <span className="inline-block w-12 h-1 bg-gold rounded-full" />
                <span className="inline-block w-8 h-1 bg-blush rounded-full" />
                <span className="inline-block w-4 h-1 bg-gold-light rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blush/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default StorySection;
