import { useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JourneyMap } from "@/components/JourneyMap";
import { ItineraryItem } from "@/components/ItineraryItem";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { itineraryData } from "@/data/itinerary";

const categories = [
  { id: "all", label: "All Stops" },
  { id: "beach", label: "Beaches" },
  { id: "fort", label: "Forts" },
  { id: "food", label: "Food" },
  { id: "temple", label: "Temples" },
  { id: "nature", label: "Nature" },
];

const Index = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Sync active filter with URL search parameter 'category'
  const activeFilter = searchParams.get("category") || "all";

  const handleFilterChange = (id: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (id === "all") {
      newParams.delete("category");
    } else {
      newParams.set("category", id);
    }
    setSearchParams(newParams, { replace: true });
  };

  const filteredItinerary = useMemo(() => {
    if (activeFilter === "all") return itineraryData;
    return itineraryData.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  // Scroll to itinerary section if a filter is applied (optional UX improvement)
  useEffect(() => {
    if (searchParams.has("category") && window.location.hash !== "#itinerary") {
      const element = document.getElementById("itinerary");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [activeFilter, searchParams]);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Konkan Trip - Explore the Coastal Beauty"
        description="Plan your perfect journey along the Konkan coast with our interactive map and detailed itinerary."
      />
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero & Map Section */}
        <section className="pt-24 pb-12 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                Your Ultimate <span className="text-primary">Konkan</span> Adventure
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore the hidden gems, pristine beaches, and historic forts along the beautiful Konkan coast.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex flex-col items-center gap-4">
                <p className="text-muted-foreground">Explore the stops along the beautiful Konkan coast</p>
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={activeFilter === category.id ? "default" : "outline"}
                      onClick={() => handleFilterChange(category.id)}
                      className={cn(
                        "rounded-full px-6 transition-all duration-300",
                        activeFilter === category.id ? "shadow-md" : "hover:bg-primary/10"
                      )}
                    >
                      {category.label}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-xl border border-border bg-card">
                <JourneyMap locations={filteredItinerary} />
              </div>
            </div>
          </div>
        </section>

        {/* Itinerary List Section */}
        <section id="itinerary" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Journey</h2>
              <p className="text-muted-foreground">
                A curated list of stops for your coastal road trip.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-12">
              {filteredItinerary.length > 0 ? (
                filteredItinerary.map((item, index) => (
                  <ItineraryItem 
                    key={item.id} 
                    item={item} 
                    index={index} 
                  />
                ))
              ) : (
                <div className="text-center py-20">
                  <p className="text-xl text-muted-foreground mb-4">No locations found for this category.</p>
                  <Button 
                    variant="link"
                    onClick={() => handleFilterChange("all")}
                  >
                    Clear all filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;