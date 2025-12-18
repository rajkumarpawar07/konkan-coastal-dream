import { motion } from "framer-motion";
import { Navigation, MapPin, ExternalLink } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import { Icon, LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default marker icons in Leaflet with Vite
const createCustomIcon = (color: string) => {
  return new Icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
};

const markerColors: Record<string, string> = {
  start: "green",
  temple: "red",
  fort: "gold",
  beach: "blue",
  city: "violet",
};

const destinations = [
  { name: "Pune", day: 0, lat: 18.5204, lng: 73.8567, description: "Starting Point", type: "start" },
  { name: "Kolhapur", day: 1, lat: 16.7050, lng: 74.2433, description: "Heritage & Spirituality", type: "temple" },
  { name: "Panhala Fort", day: 2, lat: 16.8119, lng: 74.1089, description: "Maratha Stronghold", type: "fort" },
  { name: "Malvan", day: 3, lat: 16.0607, lng: 73.4613, description: "Seafood Capital", type: "city" },
  { name: "Sindhudurg Fort", day: 3, lat: 16.0486, lng: 73.4594, description: "Island Fortress", type: "fort" },
  { name: "Tarkarli", day: 4, lat: 16.0147, lng: 73.4661, description: "Scuba Paradise", type: "beach" },
  { name: "Devbaug", day: 4, lat: 15.9847, lng: 73.4833, description: "River Meets Sea", type: "beach" },
  { name: "Vijaydurg Fort", day: 5, lat: 16.5628, lng: 73.3342, description: "Gibraltar of East", type: "fort" },
  { name: "Ratnagiri", day: 5, lat: 16.9944, lng: 73.3002, description: "Coastal Heritage", type: "city" },
  { name: "Ganpatipule", day: 6, lat: 17.1441, lng: 73.2661, description: "Sacred Shore", type: "temple" },
];

const typeLabels = {
  start: { label: "Start", icon: "🚗", color: "bg-forest" },
  city: { label: "City", icon: "🏘️", color: "bg-ocean" },
  fort: { label: "Fort", icon: "🏰", color: "bg-gold" },
  beach: { label: "Beach", icon: "🏖️", color: "bg-accent" },
  temple: { label: "Temple", icon: "🛕", color: "bg-terracotta" },
};

const JourneyMap = () => {
  // Route coordinates for polyline
  const routeCoordinates: LatLngExpression[] = destinations.map((d) => [d.lat, d.lng]);

  // Google Maps directions URL starting from Pune
  const googleMapsDirectionsUrl =
    "https://www.google.com/maps/dir/Pune,+Maharashtra/Kolhapur,+Maharashtra/Panhala+Fort,+Maharashtra/Malvan,+Maharashtra/Sindhudurg+Fort,+Malvan/Tarkarli+Beach,+Maharashtra/Devbaug,+Maharashtra/Vijaydurg+Fort,+Maharashtra/Ratnagiri,+Maharashtra/Ganpatipule,+Maharashtra";

  // Center map on the route
  const mapCenter: LatLngExpression = [16.5, 73.8];

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
            Trace the path from Pune through Kolhapur to the sacred shores of Ganpatipule
          </p>
        </motion.div>

        {/* Leaflet Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-card rounded-3xl overflow-hidden border border-border shadow-elevated"
        >
          <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px]">
            <MapContainer
              center={mapCenter}
              zoom={8}
              scrollWheelZoom={false}
              className="w-full h-full z-0"
              style={{ background: "#e8f4f8" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {/* Route polyline */}
              <Polyline
                positions={routeCoordinates}
                pathOptions={{
                  color: "#FF6B35",
                  weight: 4,
                  opacity: 0.8,
                  dashArray: "10, 10",
                }}
              />

              {/* Markers for each destination */}
              {destinations.map((dest) => (
                <Marker
                  key={dest.name}
                  position={[dest.lat, dest.lng]}
                  icon={createCustomIcon(markerColors[dest.type] || "blue")}
                >
                  <Popup>
                    <div className="text-center p-1">
                      <p className="font-bold text-sm">{dest.name}</p>
                      <p className="text-xs text-gray-600">{dest.description}</p>
                      {dest.day > 0 && (
                        <span className="inline-block mt-1 px-2 py-0.5 bg-ocean/10 text-ocean text-xs rounded-full">
                          Day {dest.day}
                        </span>
                      )}
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>

          {/* Open in Google Maps Button */}
          <div className="absolute top-4 right-4 z-[1000]">
            <a
              href={googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-card/95 backdrop-blur-sm text-foreground px-4 py-2 rounded-full shadow-lg border border-border hover:bg-card transition-colors text-sm font-medium"
            >
              <ExternalLink className="w-4 h-4 text-ocean" />
              Open Route in Google Maps
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
                  <span
                    className={`w-6 h-6 rounded-full ${typeLabels[dest.type as keyof typeof typeLabels].color} flex items-center justify-center text-[10px] font-bold text-primary-foreground shrink-0`}
                  >
                    {dest.day === 0 ? "•" : dest.day}
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
              {Object.entries(typeLabels).map(([type, info]) => (
                <div key={type} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className={`w-3 h-3 rounded-full ${info.color}`} />
                  <span>
                    {info.icon} {info.label}
                  </span>
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
