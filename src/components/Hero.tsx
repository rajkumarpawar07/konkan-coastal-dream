import { motion } from "framer-motion";
import { ChevronDown, MapPin, Calendar, Route, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-konkan.jpg";

const Hero = () => {
  const scrollToContent = () => {
    document.getElementById("journey")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Stunning sunset over Konkan coast with traditional fishing boats and palm trees"
          className="h-full w-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-2 h-2 rounded-full bg-sunset-gold opacity-60"
          animate={{ y: [0, -20, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-40 right-20 w-3 h-3 rounded-full bg-ocean-light opacity-40"
          animate={{ y: [0, -30, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-2 h-2 rounded-full bg-cream opacity-50"
          animate={{ y: [0, -15, 0], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-cream/10 backdrop-blur-sm px-4 py-2 text-sm font-medium text-cream border border-cream/20">
            <Sparkles className="w-4 h-4" />
            Maharashtra's Coastal Paradise
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 max-w-4xl text-4xl font-heading font-bold tracking-tight text-cream sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Journey Through{" "}
          <span className="text-gradient-ocean-sunset animate-gradient-wave">Konkan</span>
        </motion.h1>


        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-12 max-w-xl text-base text-cream/70 sm:text-lg"
        >
          A 6-Day Road Trip Through Ancient Temples, Majestic Forts & Pristine Beaches
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-12"
        >
          {[
            { icon: Calendar, label: "6 Days", value: "of Adventure" },
            { icon: Route, label: "400+ km", value: "Coastal Route" },
            { icon: MapPin, label: "15+", value: "Destinations" },
          ].map((stat, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-2xl bg-cream/10 backdrop-blur-sm px-5 py-3 border border-cream/20"
            >
              <stat.icon className="w-5 h-5 text-sunset" />
              <div className="text-left">
                <p className="text-sm font-semibold text-cream">{stat.label}</p>
                <p className="text-xs text-cream/70">{stat.value}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          onClick={scrollToContent}
          className="group flex flex-col items-center gap-2 text-cream/80 hover:text-cream transition-colors"
        >
          <span className="text-sm font-medium">Begin Your Odyssey</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.button>
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(35 30% 96%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
