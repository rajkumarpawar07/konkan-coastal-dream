import { motion } from "framer-motion";
import { Camera, Compass, MapPin, Utensils, Music, Waves } from "lucide-react";

const participants = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Navigator",
    icon: Compass,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    funFact: "Has never gotten lost... yet!"
  },
  {
    id: 2,
    name: "Priya Deshmukh",
    role: "Food Explorer",
    icon: Utensils,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face",
    funFact: "Can find the best local food anywhere"
  },
  {
    id: 3,
    name: "Amit Patil",
    role: "Photographer",
    icon: Camera,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    funFact: "Golden hour is his favorite time"
  },
  {
    id: 4,
    name: "Sneha Kulkarni",
    role: "Adventure Seeker",
    icon: Waves,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    funFact: "First to try any water sport"
  },
  {
    id: 5,
    name: "Vikram Joshi",
    role: "Music & Vibes",
    icon: Music,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    funFact: "Creates the perfect road trip playlist"
  },
  {
    id: 6,
    name: "Ananya Rao",
    role: "Trip Planner",
    icon: MapPin,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face",
    funFact: "Has the entire itinerary memorized"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.8
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12
    }
  }
};

const TravelSquad = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background with coastal gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-50 via-background to-sand-100/50" />
      
      {/* Animated wave decorations */}
      <div className="absolute top-0 left-0 right-0 h-20 opacity-20">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-ocean-300">
          <motion.path 
            d="M0,40 C150,80 350,0 500,40 C650,80 850,0 1000,40 C1150,80 1200,40 1200,40 L1200,120 L0,120 Z"
            animate={{ d: [
              "M0,40 C150,80 350,0 500,40 C650,80 850,0 1000,40 C1150,80 1200,40 1200,40 L1200,120 L0,120 Z",
              "M0,60 C150,20 350,80 500,60 C650,20 850,80 1000,60 C1150,20 1200,60 1200,60 L1200,120 L0,120 Z",
              "M0,40 C150,80 350,0 500,40 C650,80 850,0 1000,40 C1150,80 1200,40 1200,40 L1200,120 L0,120 Z"
            ]}}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* Floating decorative elements */}
      <motion.div 
        className="absolute top-20 left-10 text-ocean-200 opacity-30"
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <Waves size={60} />
      </motion.div>
      <motion.div 
        className="absolute bottom-20 right-10 text-sunset-200 opacity-30"
        animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <svg width="80" height="80" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="20" />
          {[...Array(8)].map((_, i) => (
            <rect
              key={i}
              x="48"
              y="10"
              width="4"
              height="15"
              rx="2"
              transform={`rotate(${i * 45} 50 50)`}
            />
          ))}
        </svg>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ocean-100/80 text-ocean-700 text-sm font-medium mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
          >
            <Waves className="w-4 h-4" />
            Meet the Crew
          </motion.div>
          
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Your Travel Squad
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The amazing people making this coastal adventure unforgettable
          </p>

          {/* Animated participant counter */}
          <motion.div 
            className="mt-6 inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-ocean-500/10 to-sunset-500/10 border border-ocean-200/50"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex -space-x-3">
              {participants.slice(0, 4).map((p, i) => (
                <motion.img
                  key={p.id}
                  src={p.image}
                  alt={p.name}
                  className="w-8 h-8 rounded-full border-2 border-background object-cover"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                />
              ))}
            </div>
            <span className="text-foreground font-semibold">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                {participants.length} Adventurers
              </motion.span>
            </span>
          </motion.div>
        </motion.div>

        {/* Connecting lines SVG */}
        <div className="absolute inset-0 pointer-events-none opacity-20 hidden lg:block">
          <svg className="w-full h-full">
            <motion.path
              d="M200,200 Q400,100 600,200 T1000,200"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              strokeDasharray="8 8"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
            />
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--ocean-400))" />
                <stop offset="100%" stopColor="hsl(var(--sunset-400))" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Participant Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {participants.map((participant, index) => (
            <motion.div
              key={participant.id}
              variants={cardVariants}
              animate={{ 
                y: [-5, 5, -5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.3
              }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
              }}
              className="group relative"
            >
              {/* Glassmorphic Card */}
              <div className="relative p-6 rounded-3xl bg-white/60 dark:bg-card/60 backdrop-blur-xl border border-white/50 dark:border-border/50 shadow-xl hover:shadow-2xl transition-all duration-500">
                {/* Ripple effect on hover */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-ocean-400/0 via-transparent to-sunset-400/0 group-hover:from-ocean-400/10 group-hover:to-sunset-400/10 transition-all duration-500" />
                </div>

                {/* Profile Picture with Animated Ring */}
                <div className="relative mx-auto w-28 h-28 mb-5">
                  {/* Rotating gradient ring */}
                  <motion.div 
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: "conic-gradient(from 0deg, hsl(var(--ocean-400)), hsl(var(--sunset-400)), hsl(var(--ocean-400)))",
                      padding: "3px"
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    whileHover={{ 
                      scale: 1.1,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className="w-full h-full rounded-full bg-background" />
                  </motion.div>
                  
                  {/* Profile image */}
                  <img
                    src={participant.image}
                    alt={participant.name}
                    className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-full object-cover border-2 border-background"
                  />

                  {/* Role icon badge */}
                  <motion.div 
                    className="absolute -bottom-1 -right-1 w-10 h-10 rounded-full bg-gradient-to-br from-ocean-500 to-ocean-600 flex items-center justify-center shadow-lg border-2 border-background"
                    whileHover={{ scale: 1.2, rotate: 15 }}
                  >
                    <participant.icon className="w-5 h-5 text-white" />
                  </motion.div>
                </div>

                {/* Name and Role */}
                <div className="text-center relative z-10">
                  <h3 className="font-display text-xl font-bold text-foreground mb-1">
                    {participant.name}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-ocean-100 to-sunset-100 text-ocean-700 text-sm font-medium">
                    <participant.icon className="w-3.5 h-3.5" />
                    {participant.role}
                  </span>
                </div>

                {/* Fun fact (revealed on hover) */}
                <motion.div 
                  className="mt-4 text-center overflow-hidden"
                  initial={{ height: 0, opacity: 0 }}
                  whileHover={{ height: "auto", opacity: 1 }}
                >
                  <p className="text-sm text-muted-foreground italic px-2 py-2 rounded-xl bg-sand-100/50">
                    "{participant.funFact}"
                  </p>
                </motion.div>

                {/* Decorative corner elements */}
                <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-ocean-200/50 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-sunset-200/50 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom wave decoration */}
        <motion.div 
          className="mt-16 flex justify-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-ocean-400"
              animate={{ 
                y: [0, -8, 0],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                delay: i * 0.2 
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TravelSquad;
