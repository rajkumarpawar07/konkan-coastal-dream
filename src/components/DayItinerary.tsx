import { motion } from "framer-motion";
import { Clock, MapPin, Camera, Utensils, Car } from "lucide-react";
import mahalaxmiTemple from "@/assets/mahalaxmi-temple.jpg";
import sindhudurgFort from "@/assets/sindhudurg-fort.jpg";
import devbaugSangam from "@/assets/devbaug-sangam.jpg";
import ganpatipule from "@/assets/ganpatipule.jpg";

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
  image: string;
  distance: string;
  highlight: string;
  highlightIcon: "camera" | "food";
  stops: TimelineStop[];
  narrative: string;
}

const itinerary: DayData[] = [
  {
    day: 1,
    title: "Kolhapur City Tour",
    subtitle: "Heritage & Spirituality",
    image: mahalaxmiTemple,
    distance: "~30 km",
    highlight: "Must-try: Bawada Misal",
    highlightIcon: "food",
    narrative: "Begin your odyssey in the spiritual heart of Kolhapur, where ancient temples whisper tales of devotion and royal palaces echo with Maratha glory.",
    stops: [
      { time: "6:00 AM", place: "Shree Ambabai Temple", description: "Witness the divine morning aarti at this 9th-century Shakti Peeth", icon: "🛕" },
      { time: "9:00 AM", place: "New Palace Museum", description: "Explore the magnificent Indo-Saracenic palace of the Chhatrapatis", icon: "🏛️" },
      { time: "12:00 PM", place: "Kaneri Math", description: "Experience the unique portrayal of Indian village life and spirituality", icon: "🪷" },
      { time: "5:00 PM", place: "Rankala Lake", description: "Stroll along the promenade as the sun paints the sky golden", icon: "🌅" },
    ],
  },
  {
    day: 2,
    title: "Hill Forts & Temples",
    subtitle: "Maratha Legacy",
    image: sindhudurgFort,
    distance: "~60 km",
    highlight: "Photography spot: Panhala Valley views",
    highlightIcon: "camera",
    narrative: "Ascend into the Western Ghats where mighty fortresses stand sentinel over misty valleys, bearing witness to centuries of Maratha valor.",
    stops: [
      { time: "6:00 AM", place: "Jyotiba Temple", description: "Perched at 3,124 feet with panoramic views of the Sahyadris", icon: "⛰️" },
      { time: "10:00 AM", place: "Panhala Fort", description: "Maharashtra's largest fort with stunning Maratha architecture", icon: "🏰" },
      { time: "2:00 PM", place: "Gaganbawda Ghat", description: "Drive through the breathtaking mountain passes towards the coast", icon: "🛣️" },
      { time: "6:00 PM", place: "Arrive Malvan", description: "Check into your beachside accommodation", icon: "🏨" },
    ],
  },
  {
    day: 3,
    title: "Malvan & Sindhudurg",
    subtitle: "Island Fortress",
    image: sindhudurgFort,
    distance: "~25 km",
    highlight: "Don't miss: Scuba diving at Malvan",
    highlightIcon: "camera",
    narrative: "Navigate the azure waters to reach Shivaji's island fortress, where every stone tells a story of maritime prowess and architectural genius.",
    stops: [
      { time: "8:00 AM", place: "Sindhudurg Fort", description: "Ferry to the sea fort built by Chhatrapati Shivaji in 1664", icon: "⛴️" },
      { time: "12:00 PM", place: "Malvani Lunch", description: "Savor authentic coastal cuisine - surmai, prawns, sol kadhi", icon: "🦐" },
      { time: "3:00 PM", place: "Rock Garden", description: "Relax at this picturesque coastal garden with rocky outcrops", icon: "🌿" },
      { time: "5:00 PM", place: "Chivla Beach", description: "Watch the fishing boats return with the day's catch", icon: "🏖️" },
    ],
  },
  {
    day: 4,
    title: "Tarkarli & Devbaug",
    subtitle: "Water Paradise",
    image: devbaugSangam,
    distance: "~35 km",
    highlight: "Adventure: Scuba & water sports",
    highlightIcon: "camera",
    narrative: "Feel the rhythm of Konkan as river meets sea at Devbaug, where crystal waters reveal an underwater world of coral and colorful fish.",
    stops: [
      { time: "7:00 AM", place: "Tarkarli Beach", description: "India's premier scuba destination with 20-feet visibility", icon: "🤿" },
      { time: "11:00 AM", place: "Devbaug Sangam", description: "Witness the magical confluence of Karli River and Arabian Sea", icon: "🌊" },
      { time: "2:00 PM", place: "Tsunami Island", description: "Banana boats, bumper rides, and jet ski adventures", icon: "🏄" },
      { time: "5:00 PM", place: "Dolphin Spotting", description: "Evening boat ride to spot playful dolphins", icon: "🐬" },
    ],
  },
  {
    day: 5,
    title: "South Ratnagiri",
    subtitle: "Coastal Heritage",
    image: ganpatipule,
    distance: "~120 km",
    highlight: "Hidden gem: Kasheli Beach temple",
    highlightIcon: "camera",
    narrative: "Journey northward along the coast, discovering hidden beaches crowned with ancient temples and forts that once ruled the seas.",
    stops: [
      { time: "7:00 AM", place: "Vijaydurg Fort", description: "The 'Gibraltar of the East' - largest sea fort on the coast", icon: "🏰" },
      { time: "11:00 AM", place: "Kasheli Beach", description: "Ancient Kanakaditya Temple overlooking dramatic cliffs", icon: "🛕" },
      { time: "2:00 PM", place: "Wayangani Beach", description: "Famous crescent-shaped beach with golden sands", icon: "🏖️" },
      { time: "5:00 PM", place: "Ratnagiri City", description: "Evening at the birthplace of Alphonso mangoes", icon: "🥭" },
    ],
  },
  {
    day: 6,
    title: "Ganpatipule & Return",
    subtitle: "Sacred Shores",
    image: ganpatipule,
    distance: "~50 km",
    highlight: "Spiritual: Swayambhu Ganesh darshan",
    highlightIcon: "camera",
    narrative: "Conclude your coastal odyssey at the sacred shores of Ganpatipule, where the 400-year-old Swayambhu Ganesh blesses every traveler.",
    stops: [
      { time: "6:00 AM", place: "Ganpatipule Temple", description: "Home to the miraculous self-manifested Ganesh idol", icon: "🙏" },
      { time: "9:00 AM", place: "Ganpatipule Beach", description: "2km pristine beach with the temple as backdrop", icon: "🏖️" },
      { time: "11:00 AM", place: "Prachin Konkan Museum", description: "Step back in time through recreated village scenes", icon: "🏘️" },
      { time: "2:00 PM", place: "Journey Home", description: "Carry endless memories of Konkan's magic", icon: "🚗" },
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
                <div className="relative h-full min-h-[300px] rounded-3xl overflow-hidden img-zoom">
                  <img
                    src={day.image}
                    alt={`Day ${day.day}: ${day.title}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                  
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
                    <button className="text-sm font-medium text-ocean hover:text-ocean-light transition-colors story-link">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DayItinerary;
