import { motion } from "framer-motion";
import { Clock, MapPin, Camera, Utensils, Car } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import mahalaxmiTemple from "@/assets/mahalaxmi-temple.jpg";
import newPalace from "@/assets/new_palace.png";
import rankalaLake from "@/assets/rankala_lake.png";
import panhalaFort from "@/assets/panhala_fort.png";
import jyotibaTemple from "@/assets/jyotiba_temple.png";
import sindhudurgFort from "@/assets/sindhudurg-fort.jpg";
import sindhudurgFortActual from "@/assets/sindhudurg.png";
import tarkarliScuba from "@/assets/tarkarli_scuba.png";
import devbaugSangam from "@/assets/devbaug-sangam.jpg";
import beach from "@/assets/beach.png";
import vijaydurgFort from "@/assets/vijaydurg_fort.png";
import wayanganiBeach from "@/assets/wayangani_beach.png";
import kasheliBeach from "@/assets/kasheli_beach.png";
import ganpatipuleTemple from "@/assets/ganpatipule.jpg";
import arewareBeach from "@/assets/areware_beach.png";
import geminiPond from "@/assets/gemini_pond.png";

interface TimelineStop {
  time: string;
  place: string;
  description: string;
  icon: string;
}

interface DayData {
  day: number;
  title: string;
  subtitle: string;
  images: string[];
  distance: string;
  highlight: string;
  highlightIcon: "camera" | "food";
  stops: TimelineStop[];
  narrative: string;
  mapUrl?: string;
}

const itinerary: DayData[] = [
  {
    day: 1,
    title: "Kolhapur City Tour",
    subtitle: "Heritage & Food",
    images: [mahalaxmiTemple, newPalace, rankalaLake],
    distance: "~280 km",
    highlight: "Must-try: Bawada Misal",
    highlightIcon: "food",
    narrative: "Start early to beat the crowds at the temple and explore the royal heritage of Kolhapur.",
    mapUrl: "https://maps.app.goo.gl/eMZ3GqATTga7CqWs7",
    stops: [
      { time: "7:00 AM", place: "Shree Ambabai Temple", description: "Start here early for darshan at this Shakti Peeth", icon: "🛕" },
      { time: "10:30 AM", place: "Town Hall Museum", description: "Explore history near the temple (Check if open)", icon: "🏛️" },
      { time: "12:00 PM", place: "New Palace", description: "Chhatrapati Shahu Museum in Kasaba Bawada", icon: "🏰" },
      { time: "1:30 PM", place: "Bawada Misal", description: "Eat authentic spicy misal for lunch in Bawada", icon: "🌶️" },
      { time: "3:00 PM", place: "Kaneri Math", description: "Siddhagiri Museum - unique village life sculptures", icon: "🚜" },
      { time: "6:00 PM", place: "Rankala Lake", description: "Return to the city for the sunset view", icon: "🌅" },
      { time: "7:30 PM", place: "Rajabhau Bhel", description: "End your day with famous bhel near the lake", icon: "😋" },
    ],
  },
  {
    day: 2,
    title: "The Hill Forts",
    subtitle: "North-West Kolhapur",
    images: [panhalaFort, jyotibaTemple],
    distance: "~40 km",
    highlight: "Explore the Teen Darwaza",
    highlightIcon: "camera",
    narrative: "Explore the majestic hill forts and temples located on the hills outside the city.",
    mapUrl: "https://maps.app.goo.gl/eMZ3GqATTga7CqWs7",
    stops: [
      { time: "8:00 AM", place: "Jyotiba Temple", description: "Wadi Ratnagiri - panoramic views of Sahyadris", icon: "⛰️" },
      { time: "11:00 AM", place: "Panhala Fort", description: "Explore Teen Darwaza, Tabak Udyan, and fort walls", icon: "🏰" },
    ],
  },
  {
    day: 3,
    title: "Malvan",
    subtitle: "History & Sunset",
    images: [sindhudurgFort, sindhudurgFortActual],
    distance: "~200 km",
    highlight: "Ferry to Sindhudurg Fort",
    highlightIcon: "camera",
    narrative: "Drive from Kolhapur to Malvan via Gaganbawda Ghat and visit the island fortress.",
    mapUrl: "https://maps.app.goo.gl/d4wFSFbcNMgkmZKn9",
    stops: [
      { time: "12:00 PM", place: "Reach Malvan", description: "Drive via Gaganbawda Ghat (approx. 3.5 - 4 hours)", icon: "🚗" },
      { time: "2:00 PM", place: "Sindhudurg Fort", description: "Ferry from Dandi Beach (Finish by 4:00 PM)", icon: "⛴️" },
      { time: "5:30 PM", place: "Rock Garden", description: "Relaxing walk and sunset near Malvan jetty", icon: "🌅" },
    ],
  },
  {
    day: 4,
    title: "Tarkarli & Devbaug",
    subtitle: "Water Sports Day",
    images: [beach, devbaugSangam],
    distance: "~20 km",
    highlight: "Scuba Diving & Watersports",
    highlightIcon: "camera",
    narrative: "A day dedicated to water adventures and the magical confluence of river and sea.",
    mapUrl: "https://maps.app.goo.gl/d4wFSFbcNMgkmZKn9",
    stops: [
      { time: "8:00 AM", place: "Tarkarli Beach", description: "Head here early for Scuba Diving", icon: "🤿" },
      { time: "11:00 AM", place: "Devbaug Beach", description: "Drive to the tip where river meets sea (Sangam)", icon: "🌊" },
      { time: "2:00 PM", place: "Tsunami Island", description: "Boat safari and water rides", icon: "🏄" },
    ],
  },
  {
    day: 5,
    title: "South Ratnagiri",
    subtitle: "Forts & Hidden Beaches",
    images: [vijaydurgFort, kasheliBeach, wayanganiBeach],
    distance: "~200 km",
    highlight: "Hidden gem: Kasheli Beach",
    highlightIcon: "camera",
    narrative: "Journey northward along the Coastal Highway discovering ancient forts and hidden beaches.",
    mapUrl: "https://maps.app.goo.gl/bbDBEakU5tmL9FYk8",
    stops: [
      { time: "8:00 AM", place: "Vijaydurg Fort", description: "The southernmost tip of Ratnagiri district", icon: "🏰" },
      { time: "11:00 AM", place: "Purngad Fort", description: " scenic fort on the way north", icon: "🧱" },
      { time: "1:00 PM", place: "Kasheli Beach", description: "Visit Kanakaditya Temple and cliff view", icon: "🛕" },
      { time: "3:00 PM", place: "Wayangani Beach", description: "Known for its curved shoreline", icon: "🏖️" },
      { time: "5:30 PM", place: "Ratnadurg Fort", description: "Sunset at Bhagwati temple inside the fort", icon: "🌅" },
    ],
  },
  {
    day: 6,
    title: "North Ratnagiri",
    subtitle: "Ganpatipule & Jaigad",
    images: [ganpatipuleTemple, arewareBeach, geminiPond],
    distance: "~44 km + 300 km",
    highlight: "Swayambhu Ganesh Darshan",
    highlightIcon: "camera",
    narrative: "Visit sacred temples and scenic spots on your way back towards Mumbai/Pune.",
    mapUrl: "https://maps.app.goo.gl/Vy2i5424WUTjtQLNA",
    stops: [
      { time: "8:00 AM", place: "Areware Beach", description: "Viewpoint and Zipline activity", icon: "🧗" },
      { time: "10:00 AM", place: "Ganpatipule Temple", description: "Darshan of Swayambhu Ganesh", icon: "🙏" },
      { time: "11:30 AM", place: "Prachin Konkan Museum", description: "Opposite Ganpatipule bus stand", icon: "🏺" },
      { time: "2:00 PM", place: "Jai Vinayak Temple", description: "Beautiful modern temple with pagoda-style roof", icon: "🏯" },
      { time: "3:30 PM", place: "Gemini Pond", description: "Located near JSW/Jaigad area", icon: "💧" },
      { time: "5:00 PM", place: "Savatkada Waterfall", description: "Visit near Chiplun if driving towards Mumbai", icon: "🌊" },
    ],
  },
];

const DayItinerary = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium text-sunset mb-4">
            <Clock className="w-4 h-4" />
            DAY BY DAY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Your <span className="text-gradient-sunset">Itinerary</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Six days of discovery through Maharashtra's most enchanting coastal region
          </p>
        </motion.div>

        <div className="space-y-12">
          {itinerary.map((day, index) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-stretch`}
            >
              {/* Image Section */}
              <div className="lg:w-1/2">
                <div className="relative h-full min-h-[300px] rounded-3xl overflow-hidden img-zoom group">
                  <Carousel
                    className="w-full h-full"
                    opts={{ loop: true }}
                    plugins={[
                      Autoplay({
                        delay: 3000,
                      }),
                    ]}
                  >
                    <CarouselContent className="-ml-0 h-full">
                      {day.images.map((image, imgIndex) => (
                        <CarouselItem key={imgIndex} className="pl-0 h-full">
                          <div className="h-full w-full overflow-hidden">
                            <img
                              src={image}
                              alt={`${day.title} - Image ${imgIndex + 1}`}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    {day.images.length > 1 && (
                      <>
                        <CarouselPrevious className="left-4 bg-black/20 hover:bg-black/40 border-none text-white backdrop-blur-sm" />
                        <CarouselNext className="right-4 bg-black/20 hover:bg-black/40 border-none text-white backdrop-blur-sm" />
                      </>
                    )}
                  </Carousel>

                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent pointer-events-none" />

                  {/* Day Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="day-badge">
                      <span className="text-lg">Day {String(day.day).padStart(2, "0")}</span>
                    </div>
                  </div>

                  {/* Highlight Badge */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 bg-card/90 backdrop-blur-sm rounded-xl px-4 py-2">
                      {day.highlightIcon === "camera" ? (
                        <Camera className="w-4 h-4 text-ocean" />
                      ) : (
                        <Utensils className="w-4 h-4 text-sunset" />
                      )}
                      <span className="text-sm font-medium text-foreground">{day.highlight}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-1/2 flex flex-col">
                <div className="card-konkan p-6 sm:p-8 flex-1">
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-2">
                      {day.title}
                    </h3>
                    <p className="text-ocean font-medium">{day.subtitle}</p>
                    <p className="text-muted-foreground text-sm mt-3 italic">
                      "{day.narrative}"
                    </p>
                  </div>

                  {/* Timeline */}
                  <div className="relative">
                    <div className="timeline-line" />
                    <div className="space-y-4 pl-12">
                      {day.stops.map((stop, stopIndex) => (
                        <motion.div
                          key={stopIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: stopIndex * 0.1 }}
                          className="relative"
                        >
                          <div className="timeline-dot" style={{ top: "0.25rem" }} />
                          <div className="bg-muted/50 rounded-xl p-4">
                            <div className="flex items-center gap-2 mb-1">
                              <Clock className="w-3 h-3 text-muted-foreground" />
                              <span className="text-xs font-medium text-muted-foreground">{stop.time}</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-lg">{stop.icon}</span>
                              <div>
                                <h4 className="font-semibold text-foreground">{stop.place}</h4>
                                <p className="text-sm text-muted-foreground">{stop.description}</p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Car className="w-4 h-4" />
                      <span>Distance: {day.distance}</span>
                    </div>
                    {day.mapUrl ? (
                      <Button asChild className="bg-gradient-ocean text-white shadow-lg hover:shadow-glow-ocean hover:-translate-y-0.5 transition-all duration-300 rounded-full px-6 group border-none">
                        <a
                          href={day.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <MapPin className="w-4 h-4" />
                          View Route
                          <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                      </Button>
                    ) : (
                      <Button className="bg-gradient-ocean text-white shadow-lg hover:shadow-glow-ocean hover:-translate-y-0.5 transition-all duration-300 rounded-full px-6 group border-none">
                        View Details
                        <span className="group-hover:translate-x-1 transition-transform ml-2">→</span>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div >
          ))}
        </div >
      </div >
    </section >
  );
};

export default DayItinerary;
