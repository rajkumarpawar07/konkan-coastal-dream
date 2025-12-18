import { motion } from "framer-motion";
import { MapPin, Navigation, Waves, Mountain, Ship } from "lucide-react";

interface Destination {
  id: string;
  name: string;
  day: number;
  x: number;
  y: number;
  description: string;
  type: "city" | "fort" | "beach" | "temple";
}

const destinations: Destination[] = [
  { id: "kolhapur", name: "Kolhapur", day: 1, x: 15, y: 25, description: "Heritage & Spirituality", type: "temple" },
  { id: "panhala", name: "Panhala Fort", day: 2, x: 20, y: 35, description: "Maratha Stronghold", type: "fort" },
  { id: "malvan", name: "Malvan", day: 3, x: 35, y: 55, description: "Seafood Capital", type: "city" },
  { id: "sindhudurg", name: "Sindhudurg", day: 3, x: 40, y: 60, description: "Island Fortress", type: "fort" },
  { id: "tarkarli", name: "Tarkarli", day: 4, x: 45, y: 68, description: "Scuba Paradise", type: "beach" },
  { id: "devbaug", name: "Devbaug", day: 4, x: 50, y: 72, description: "River Meets Sea", type: "beach" },
  { id: "vijaydurg", name: "Vijaydurg", day: 5, x: 60, y: 55, description: "Gibraltar of East", type: "fort" },
  { id: "ratnagiri", name: "Ratnagiri", day: 5, x: 70, y: 45, description: "Coastal Heritage", type: "city" },
  { id: "ganpatipule", name: "Ganpatipule", day: 6, x: 80, y: 35, description: "Sacred Shore", type: "temple" },
];

const typeColors = {
  city: "bg-ocean",
  fort: "bg-gold",
  beach: "bg-accent",
  temple: "bg-terracotta",
};

const JourneyMap = () => {
  return (
    <section id="journey" className="py-20 px-4 bg-background pattern-waves">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium text-ocean mb-4">
            <Navigation className="w-4 h-4" />
            YOUR ROUTE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            The <span className="text-gradient-ocean">Coastal</span> Journey
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trace the path from the spiritual heart of Kolhapur to the sacred shores of Ganpatipule
          </p>
        </motion.div>

        {/* Interactive Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-ocean/5 to-accent/5 rounded-3xl p-6 sm:p-10 border border-border overflow-hidden"
        >
          {/* Map Background Pattern */}
          <div className="absolute inset-0 opacity-30">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              {/* Sea pattern */}
              <defs>
                <pattern id="waves" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M0 5 Q2.5 3 5 5 T10 5" fill="none" stroke="hsl(185 85% 31% / 0.3)" strokeWidth="0.3" />
                </pattern>
              </defs>
              <rect x="30" y="0" width="70" height="100" fill="url(#waves)" />
              
              {/* Land mass */}
              <path
                d="M0 0 L30 0 L35 20 L40 40 L45 50 L50 60 L55 70 L60 75 L70 70 L80 60 L85 50 L90 40 L100 30 L100 100 L0 100 Z"
                fill="hsl(140 25% 40% / 0.1)"
                stroke="hsl(140 25% 40% / 0.3)"
                strokeWidth="0.5"
              />
            </svg>
          </div>

          {/* Route Path */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path
              d="M15 25 Q17 30 20 35 Q30 45 35 55 L40 60 Q42 64 45 68 L50 72 Q55 65 60 55 L70 45 L80 35"
              fill="none"
              stroke="hsl(18 100% 60%)"
              strokeWidth="0.8"
              strokeDasharray="2 1"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>

          {/* Destinations */}
          <div className="relative h-[400px] sm:h-[500px]">
            {destinations.map((dest, index) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="absolute group cursor-pointer"
                style={{ left: `${dest.x}%`, top: `${dest.y}%`, transform: "translate(-50%, -50%)" }}
              >
                {/* Pulse Ring */}
                <div className={`absolute inset-0 rounded-full ${typeColors[dest.type]} animate-ping opacity-30`} />
                
                {/* Marker */}
                <div className={`relative w-4 h-4 sm:w-5 sm:h-5 rounded-full ${typeColors[dest.type]} shadow-lg flex items-center justify-center transition-transform group-hover:scale-125`}>
                  <span className="text-[8px] sm:text-[10px] font-bold text-primary-foreground">{dest.day}</span>
                </div>

                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20">
                  <div className="bg-card rounded-lg shadow-elevated p-3 text-center whitespace-nowrap border border-border">
                    <p className="font-heading font-semibold text-sm text-foreground">{dest.name}</p>
                    <p className="text-xs text-muted-foreground">{dest.description}</p>
                    <p className="text-xs text-ocean font-medium mt-1">Day {dest.day}</p>
                  </div>
                  <div className="w-2 h-2 bg-card border-r border-b border-border rotate-45 mx-auto -mt-1" />
                </div>
              </motion.div>
            ))}

            {/* Map Icons */}
            <Waves className="absolute text-ocean/20 w-8 h-8" style={{ left: "60%", top: "80%" }} />
            <Mountain className="absolute text-forest/20 w-6 h-6" style={{ left: "10%", top: "40%" }} />
            <Ship className="absolute text-ocean/20 w-6 h-6" style={{ left: "42%", top: "65%" }} />
          </div>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-4 mt-6 pt-6 border-t border-border">
            {[
              { type: "temple", label: "Temple", icon: "🛕" },
              { type: "fort", label: "Fort", icon: "🏰" },
              { type: "beach", label: "Beach", icon: "🏖️" },
              { type: "city", label: "City", icon: "🏘️" },
            ].map((item) => (
              <div key={item.type} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className={`w-3 h-3 rounded-full ${typeColors[item.type as keyof typeof typeColors]}`} />
                <span>{item.icon} {item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JourneyMap;
