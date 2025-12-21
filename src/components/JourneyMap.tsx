import { motion, useInView } from "framer-motion";
import { Navigation, ExternalLink } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const destinations = [
  { name: "Pune", day: 0, x: 85, y: 8, description: "Starting Point", type: "start" },
  { name: "Kolhapur", day: 1, x: 58, y: 35, description: "Heritage & Spirituality", type: "city" },
  { name: "Panhala Fort", day: 2, x: 48, y: 28, description: "Maratha Stronghold", type: "fort" },
  { name: "Malvan", day: 3, x: 22, y: 62, description: "Seafood Capital", type: "city" },
  { name: "Sindhudurg Fort", day: 3, x: 15, y: 65, description: "Island Fortress", type: "fort" },
  { name: "Tarkarli", day: 4, x: 18, y: 72, description: "Scuba Paradise", type: "beach" },
  { name: "Devbaug", day: 4, x: 12, y: 78, description: "River Meets Sea", type: "beach" },
  { name: "Vijaydurg Fort", day: 5, x: 8, y: 55, description: "Gibraltar of East", type: "fort" },
  { name: "Ratnagiri", day: 5, x: 5, y: 42, description: "Coastal Heritage", type: "city" },
  { name: "Ganpatipule", day: 6, x: 3, y: 28, description: "Sacred Shore", type: "destination" },
];

const typeConfig = {
  start: { color: "#22c55e", bgColor: "rgba(34, 197, 94, 0.2)", icon: "🚗", label: "Start" },
  city: { color: "#a855f7", bgColor: "rgba(168, 85, 247, 0.2)", icon: "🏘️", label: "City" },
  fort: { color: "#f59e0b", bgColor: "rgba(245, 158, 11, 0.2)", icon: "🏰", label: "Fort" },
  beach: { color: "#14b8a6", bgColor: "rgba(20, 184, 166, 0.2)", icon: "🏖️", label: "Beach" },
  destination: { color: "#ec4899", bgColor: "rgba(236, 72, 153, 0.2)", icon: "🛕", label: "Destination" },
};

const JourneyMap = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });
  const [hoveredStop, setHoveredStop] = useState<number | null>(null);
  const [animationKey, setAnimationKey] = useState(0);

  // Restart animation when in view
  useEffect(() => {
    if (isInView) {
      setAnimationKey(prev => prev + 1);
    }
  }, [isInView]);

  // Generate smooth SVG path through all points
  const generatePath = () => {
    const points = destinations.map(d => ({ x: d.x, y: d.y }));
    if (points.length < 2) return "";

    let path = `M ${points[0].x} ${points[0].y}`;
    
    for (let i = 0; i < points.length - 1; i++) {
      const current = points[i];
      const next = points[i + 1];
      const midX = (current.x + next.x) / 2;
      const midY = (current.y + next.y) / 2;
      
      // Create smooth curves
      const cp1x = current.x + (midX - current.x) * 0.5;
      const cp1y = current.y;
      const cp2x = midX;
      const cp2y = midY - (next.y - current.y) * 0.2;
      
      path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${next.x} ${next.y}`;
    }
    
    return path;
  };

  const pathD = generatePath();

  // Google Maps directions URL starting from Pune
  const googleMapsDirectionsUrl = "https://maps.app.goo.gl/mCkQsb1aNb74Cec26";

  return (
    <section id="journey" className="py-20 px-4 bg-background pattern-waves overflow-hidden">
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

        {/* Animated Route Map */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-cyan-950 rounded-3xl overflow-hidden border border-border/30 shadow-elevated"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Gradient orbs */}
            <motion.div
              className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
              style={{ background: "radial-gradient(circle, #0ea5e9 0%, transparent 70%)", top: "10%", right: "10%" }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute w-80 h-80 rounded-full blur-3xl opacity-15"
              style={{ background: "radial-gradient(circle, #f97316 0%, transparent 70%)", bottom: "20%", left: "5%" }}
              animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Animated Waves */}
            <svg className="absolute bottom-0 left-0 w-full h-32 opacity-30" preserveAspectRatio="none" viewBox="0 0 1200 120">
              <motion.path
                d="M0,60 C150,90 350,30 600,60 C850,90 1050,30 1200,60 L1200,120 L0,120 Z"
                fill="url(#waveGradient)"
                animate={{ d: [
                  "M0,60 C150,90 350,30 600,60 C850,90 1050,30 1200,60 L1200,120 L0,120 Z",
                  "M0,60 C150,30 350,90 600,60 C850,30 1050,90 1200,60 L1200,120 L0,120 Z",
                  "M0,60 C150,90 350,30 600,60 C850,90 1050,30 1200,60 L1200,120 L0,120 Z"
                ]}}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0ea5e9" />
                  <stop offset="50%" stopColor="#14b8a6" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Second wave layer */}
            <svg className="absolute bottom-0 left-0 w-full h-24 opacity-20" preserveAspectRatio="none" viewBox="0 0 1200 120">
              <motion.path
                d="M0,80 C200,50 400,100 600,70 C800,40 1000,90 1200,60 L1200,120 L0,120 Z"
                fill="#0891b2"
                animate={{ d: [
                  "M0,80 C200,50 400,100 600,70 C800,40 1000,90 1200,60 L1200,120 L0,120 Z",
                  "M0,60 C200,90 400,50 600,80 C800,100 1000,50 1200,70 L1200,120 L0,120 Z",
                  "M0,80 C200,50 400,100 600,70 C800,40 1000,90 1200,60 L1200,120 L0,120 Z"
                ]}}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
            </svg>

            {/* Floating particles */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-cyan-400/40"
                style={{ left: `${10 + i * 8}%`, top: `${20 + (i % 4) * 20}%` }}
                animate={{
                  y: [-10, 10, -10],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3 + (i % 3),
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>

          {/* SVG Route */}
          <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] p-4 sm:p-8">
            <svg
              key={animationKey}
              className="w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                {/* Route gradient */}
                <linearGradient id="routeGradient" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#22c55e" />
                  <stop offset="25%" stopColor="#a855f7" />
                  <stop offset="50%" stopColor="#f59e0b" />
                  <stop offset="75%" stopColor="#14b8a6" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>

                {/* Glow filter */}
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="1" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* Marker glow filters */}
                {Object.entries(typeConfig).map(([type, config]) => (
                  <filter key={type} id={`glow-${type}`} x="-100%" y="-100%" width="300%" height="300%">
                    <feDropShadow dx="0" dy="0" stdDeviation="0.5" floodColor={config.color} floodOpacity="0.8" />
                  </filter>
                ))}
              </defs>

              {/* Background path (static) */}
              <path
                d={pathD}
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="0.8"
                strokeDasharray="2,2"
              />

              {/* Animated route path */}
              <motion.path
                d={pathD}
                fill="none"
                stroke="url(#routeGradient)"
                strokeWidth="0.6"
                strokeLinecap="round"
                strokeDasharray="1.5,1"
                filter="url(#glow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 4, ease: "easeInOut" }}
              />

              {/* Animated markers */}
              {destinations.map((dest, index) => {
                const config = typeConfig[dest.type as keyof typeof typeConfig];
                const delay = (index / destinations.length) * 4;

                return (
                  <g key={dest.name}>
                    {/* Ping effect */}
                    <motion.circle
                      cx={dest.x}
                      cy={dest.y}
                      r="0"
                      fill="none"
                      stroke={config.color}
                      strokeWidth="0.2"
                      initial={{ r: 0, opacity: 0 }}
                      animate={isInView ? {
                        r: [0, 3, 4],
                        opacity: [0, 0.6, 0],
                      } : { r: 0, opacity: 0 }}
                      transition={{
                        delay: delay + 0.2,
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                    />

                    {/* Outer glow ring */}
                    <motion.circle
                      cx={dest.x}
                      cy={dest.y}
                      r="2"
                      fill={config.bgColor}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                      transition={{
                        delay,
                        duration: 0.5,
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                      }}
                    />

                    {/* Main marker */}
                    <motion.circle
                      cx={dest.x}
                      cy={dest.y}
                      r="1.2"
                      fill={config.color}
                      filter={`url(#glow-${dest.type})`}
                      style={{ cursor: "pointer" }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={isInView ? { 
                        scale: hoveredStop === index ? 1.3 : 1, 
                        opacity: 1 
                      } : { scale: 0, opacity: 0 }}
                      transition={{
                        delay,
                        duration: 0.4,
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      onMouseEnter={() => setHoveredStop(index)}
                      onMouseLeave={() => setHoveredStop(null)}
                    />

                    {/* Inner dot */}
                    <motion.circle
                      cx={dest.x}
                      cy={dest.y}
                      r="0.4"
                      fill="white"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{
                        delay: delay + 0.2,
                        duration: 0.3,
                      }}
                    />
                  </g>
                );
              })}
            </svg>

            {/* Hover Cards (Glassmorphism) */}
            {destinations.map((dest, index) => {
              const config = typeConfig[dest.type as keyof typeof typeConfig];
              const isHovered = hoveredStop === index;

              return (
                <motion.div
                  key={`card-${dest.name}`}
                  className="absolute pointer-events-none z-20"
                  style={{
                    left: `${dest.x}%`,
                    top: `${dest.y}%`,
                    transform: "translate(-50%, -100%)",
                  }}
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    y: isHovered ? -20 : 10,
                    scale: isHovered ? 1 : 0.9,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className="px-4 py-3 rounded-xl backdrop-blur-xl border border-white/20 shadow-2xl min-w-[160px]"
                    style={{
                      background: "rgba(15, 23, 42, 0.85)",
                      boxShadow: `0 8px 32px ${config.color}40`,
                    }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">{config.icon}</span>
                      <span className="text-white font-semibold text-sm">{dest.name}</span>
                    </div>
                    <p className="text-gray-300 text-xs">{dest.description}</p>
                    {dest.day > 0 && (
                      <span
                        className="inline-block mt-2 px-2 py-0.5 rounded-full text-xs font-medium"
                        style={{ background: config.bgColor, color: config.color }}
                      >
                        Day {dest.day}
                      </span>
                    )}
                  </div>
                  {/* Arrow */}
                  <div
                    className="w-3 h-3 mx-auto -mt-1.5 rotate-45"
                    style={{ background: "rgba(15, 23, 42, 0.85)" }}
                  />
                </motion.div>
              );
            })}

            {/* Labels */}
            {destinations.map((dest, index) => {
              const config = typeConfig[dest.type as keyof typeof typeConfig];
              const delay = (index / destinations.length) * 4 + 0.3;

              return (
                <motion.div
                  key={`label-${dest.name}`}
                  className="absolute pointer-events-none"
                  style={{
                    left: `${dest.x}%`,
                    top: `${dest.y}%`,
                    transform: `translate(${dest.x > 50 ? "-110%" : "10%"}, -50%)`,
                  }}
                  initial={{ opacity: 0, x: dest.x > 50 ? 10 : -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: dest.x > 50 ? 10 : -10 }}
                  transition={{ delay, duration: 0.4 }}
                >
                  <div className={`flex items-center gap-1.5 ${dest.x > 50 ? "flex-row-reverse" : ""}`}>
                    <span
                      className="px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium backdrop-blur-sm border whitespace-nowrap"
                      style={{
                        background: config.bgColor,
                        color: config.color,
                        borderColor: `${config.color}30`,
                      }}
                    >
                      {dest.name}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Open in Google Maps Button */}
          <div className="absolute top-4 right-4 z-30">
            <a
              href={googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl text-white px-4 py-2 rounded-full shadow-lg border border-white/20 hover:bg-white/20 transition-all text-sm font-medium group"
            >
              <ExternalLink className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              Open in Google Maps
            </a>
          </div>

          {/* Legend */}
          <div className="relative z-10 p-6 border-t border-white/10 bg-gradient-to-t from-slate-900/80 to-transparent backdrop-blur-sm">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {Object.entries(typeConfig).map(([type, config]) => (
                <motion.div
                  key={type}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full border"
                  style={{
                    background: config.bgColor,
                    borderColor: `${config.color}40`,
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: config.color, boxShadow: `0 0 8px ${config.color}80` }}
                  />
                  <span className="text-xs sm:text-sm text-white/90 font-medium">
                    {config.icon} {config.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Route Stops List */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {destinations.map((dest, index) => {
            const config = typeConfig[dest.type as keyof typeof typeConfig];
            return (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative bg-card/50 backdrop-blur-sm rounded-xl p-3 border border-border/50 hover:border-border transition-all cursor-pointer overflow-hidden"
                onMouseEnter={() => setHoveredStop(index)}
                onMouseLeave={() => setHoveredStop(null)}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: `radial-gradient(circle at center, ${config.bgColor} 0%, transparent 70%)` }}
                />
                
                <div className="relative flex items-center gap-2">
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                    style={{ background: config.color, color: "white" }}
                  >
                    {dest.day === 0 ? "•" : dest.day}
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-foreground truncate">{dest.name}</p>
                    <p className="text-[10px] text-muted-foreground truncate">{dest.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JourneyMap;
