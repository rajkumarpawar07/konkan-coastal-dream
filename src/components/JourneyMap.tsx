import { motion } from "framer-motion";
import { Navigation, MapPin } from "lucide-react";

const destinations = [
  { name: "Kolhapur", day: 1, description: "Heritage & Spirituality", type: "temple" },
  { name: "Panhala Fort", day: 2, description: "Maratha Stronghold", type: "fort" },
  { name: "Malvan", day: 3, description: "Seafood Capital", type: "city" },
  { name: "Sindhudurg", day: 3, description: "Island Fortress", type: "fort" },
  { name: "Tarkarli", day: 4, description: "Scuba Paradise", type: "beach" },
  { name: "Devbaug", day: 4, description: "River Meets Sea", type: "beach" },
  { name: "Vijaydurg", day: 5, description: "Gibraltar of East", type: "fort" },
  { name: "Ratnagiri", day: 5, description: "Coastal Heritage", type: "city" },
  { name: "Ganpatipule", day: 6, description: "Sacred Shore", type: "temple" },
];

const typeColors = {
  city: "bg-ocean",
  fort: "bg-gold",
  beach: "bg-accent",
  temple: "bg-terracotta",
};

const JourneyMap = () => {
  // Google Maps embed URL with route through all destinations
  const googleMapsEmbedUrl = `https://www.google.com/maps/embed?pb=!1m76!1m12!1m3!1d971095.3799635898!2d73.30766347812498!3d16.70595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m61!3e0!4m5!1s0x3bc1001f94c4a9c7%3A0x886c8eb14c0f4a2e!2sKolhapur%2C%20Maharashtra!3m2!1d16.7049873!2d74.2432527!4m5!1s0x3bc1784aafc49d2d%3A0x4d3a7f4c1f5a7e5b!2sPanhala%20Fort%2C%20Maharashtra!3m2!1d16.8119444!2d74.1088889!4m5!1s0x3bc00c33e2fcf7ed%3A0x8b8b8f1f5c8e8f1f!2sMalvan%2C%20Maharashtra!3m2!1d16.0606889!2d73.4612859!4m5!1s0x3bc00c2a1c1c1c1c%3A0x1c1c1c1c1c1c1c1c!2sSindhudurg%20Fort%2C%20Malvan!3m2!1d16.0486!2d73.4594!4m5!1s0x3bc00de68b1f1f1f%3A0x1f1f1f1f1f1f1f1f!2sTarkarli%20Beach%2C%20Maharashtra!3m2!1d16.0147!2d73.4661!4m5!1s0x3bc00f1f1f1f1f1f%3A0x2f2f2f2f2f2f2f2f!2sDevbaug%2C%20Maharashtra!3m2!1d15.9847!2d73.4833!4m5!1s0x3bbf8c8c8c8c8c8c%3A0x3c3c3c3c3c3c3c3c!2sVijaydurg%20Fort%2C%20Maharashtra!3m2!1d16.5628!2d73.3342!4m5!1s0x3bbf95b3b3b3b3b3%3A0x4b4b4b4b4b4b4b4b!2sRatnagiri%2C%20Maharashtra!3m2!1d16.9944!2d73.3002!4m5!1s0x3bbfa5a5a5a5a5a5%3A0x5a5a5a5a5a5a5a5a!2sGanpatipule%2C%20Maharashtra!3m2!1d17.1441!2d73.2661!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin`;

  // Direct Google Maps link for opening in new tab
  const googleMapsDirectionsUrl = "https://www.google.com/maps/dir/Kolhapur,+Maharashtra/Panhala+Fort,+Maharashtra/Malvan,+Maharashtra/Sindhudurg+Fort,+Malvan/Tarkarli+Beach,+Maharashtra/Devbaug,+Maharashtra/Vijaydurg+Fort,+Maharashtra/Ratnagiri,+Maharashtra/Ganpatipule,+Maharashtra";

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

        {/* Google Maps Embed */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-card rounded-3xl overflow-hidden border border-border shadow-elevated"
        >
          <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px]">
            <iframe
              src={googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Konkan Road Trip Route Map"
              className="w-full h-full"
            />
          </div>

          {/* Open in Google Maps Button */}
          <div className="absolute top-4 right-4 z-10">
            <a
              href={googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-card/95 backdrop-blur-sm text-foreground px-4 py-2 rounded-full shadow-lg border border-border hover:bg-card transition-colors text-sm font-medium"
            >
              <MapPin className="w-4 h-4 text-ocean" />
              Open in Google Maps
            </a>
          </div>

          {/* Destinations Legend */}
          <div className="p-6 border-t border-border bg-gradient-to-br from-ocean/5 to-accent/5">
            <h3 className="text-sm font-semibold text-foreground mb-4 text-center">Route Stops</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {destinations.map((dest, index) => (
                <motion.div
                  key={dest.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center gap-2 bg-background/50 rounded-lg p-2 border border-border/50"
                >
                  <span className={`w-6 h-6 rounded-full ${typeColors[dest.type as keyof typeof typeColors]} flex items-center justify-center text-[10px] font-bold text-primary-foreground shrink-0`}>
                    {dest.day}
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-foreground truncate">{dest.name}</p>
                    <p className="text-[10px] text-muted-foreground truncate">{dest.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap justify-center gap-4 mt-6 pt-4 border-t border-border/50">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JourneyMap;
