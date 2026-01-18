import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ValuesSection from '@/components/ValuesSection';
import StorySection from '@/components/StorySection';
import CommunitySection from '@/components/CommunitySection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-cream overflow-x-hidden">
      <Navbar />
      
      <main>
        <HeroSection />
        
        <section id="about">
          <AboutSection />
        </section>
        
        <section id="values">
          <ValuesSection />
        </section>
        
        <section id="story">
          <StorySection />
        </section>
        
        <section id="community">
          <CommunitySection />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
