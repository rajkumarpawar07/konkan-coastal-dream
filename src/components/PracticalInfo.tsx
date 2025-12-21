import { motion } from "framer-motion";
import {
  Calendar,
  Car,
  Sun,
  AlertTriangle,
  Clock,
  Camera,
  Droplets,
  MapPin,
  Ship
} from "lucide-react";

const tips = [
  {
    icon: Calendar,
    title: "Best Time to Visit",
    content: "October to March for pleasant weather. June-September for waterfalls and lush greenery.",
    type: "info",
  },
  {
    icon: Car,
    title: "Getting Around",
    content: "Self-drive or hired car recommended. Total route ~400-450 km over 6 days.",
    type: "info",
  },
  {
    icon: AlertTriangle,
    title: "Monday Alert",
    content: "Town Hall Museum in Kolhapur is closed on Mondays. Swap Day 1 with Day 2 if needed.",
    type: "warning",
  },
  {
    icon: Ship,
    title: "Ferry Timings",
    content: "Sindhudurg and Devbaug ferries stop by 5 PM. Plan your fort visits accordingly.",
    type: "warning",
  },
  {
    icon: Droplets,
    title: "Seasonal Attraction",
    content: "Savatkada Waterfall is best during monsoon and post-monsoon (July-October).",
    type: "info",
  },
  {
    icon: Camera,
    title: "Photography Tip",
    content: "Golden hour at Rankala Lake, Ratnadurg Fort, and Ganpatipule beach is magical.",
    type: "tip",
  },
];

const essentials = [
  "Sunscreen & sunglasses",
  "Comfortable walking shoes",
  "Swimwear for beaches",
  "Light cotton clothing",
  "Camera with extra batteries",
  "Cash (limited ATMs in remote areas)",
  "Motion sickness pills (for ghats)",
  "Reusable water bottle",
];

const typeStyles = {
  info: "bg-ocean/10 border-ocean/20 text-ocean",
  warning: "bg-sunset/10 border-sunset/20 text-sunset",
  tip: "bg-forest/10 border-forest/20 text-forest",
};

const PracticalInfo = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium text-ocean mb-4">
            <MapPin className="w-4 h-4" />
            PLAN YOUR TRIP
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Practical <span className="text-gradient-ocean">Information</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know for a smooth and memorable journey
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tips & Alerts */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-heading font-semibold text-lg text-foreground mb-4">Tips & Alerts</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {tips.map((tip, index) => (
                <motion.div
                  key={tip.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`rounded-2xl border p-4 ${typeStyles[tip.type]}`}
                >
                  <div className="flex items-start gap-3">
                    <tip.icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">{tip.title}</h4>
                      <p className="text-sm opacity-90">{tip.content}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Packing Essentials */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-konkan p-6"
          >
            <h3 className="font-heading font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
              <Sun className="w-5 h-5 text-sunset" />
              Packing Essentials
            </h3>
            <ul className="space-y-3">
              {essentials.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-ocean" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Quick Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 bg-gradient-ocean rounded-2xl p-6 sm:p-8"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-primary-foreground">
            {[
              { label: "Total Distance", value: "400+ km" },
              { label: "Best Season", value: "Oct - Mar" },
              { label: "Avg. Daily Budget", value: "₹8,000-10,000" },
              { label: "Ideal Duration", value: "6 Days" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl sm:text-3xl font-heading font-bold mb-1">{stat.value}</p>
                <p className="text-sm opacity-80">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PracticalInfo;
