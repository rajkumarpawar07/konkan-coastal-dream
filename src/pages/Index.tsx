import Navigation from "@/components/Navigation";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import JourneyMap from "@/components/JourneyMap";
import TravelSquad from "@/components/TravelSquad";
import DayItinerary from "@/components/DayItinerary";
import FoodCulture from "@/components/FoodCulture";
import PracticalInfo from "@/components/PracticalInfo";
import PhotoGallery from "@/components/PhotoGallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navigation />
      
      <main>
        <Hero />
        
        <section id="journey">
          <JourneyMap />
        </section>

        <section id="squad">
          <TravelSquad />
        </section>
        
        <section id="itinerary">
          <DayItinerary />
        </section>
        
        <section id="food">
          <FoodCulture />
        </section>
        
        <section id="plan">
          <PracticalInfo />
        </section>
        
        <section id="gallery">
          <PhotoGallery />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
