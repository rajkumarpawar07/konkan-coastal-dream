import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MapPin } from "lucide-react";

const navItems = [
  { label: "Journey", href: "#journey" },
  { label: "Itinerary", href: "#itinerary" },
  { label: "Food", href: "#food" },
  { label: "Gallery", href: "#gallery" },
  { label: "Plan", href: "#plan" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-card/95 backdrop-blur-xl shadow-soft border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto max-w-6xl px-4">
          <nav className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                isScrolled ? "bg-gradient-ocean" : "bg-cream/20"
              }`}>
                <MapPin className={`w-4 h-4 ${isScrolled ? "text-primary-foreground" : "text-cream"}`} />
              </div>
              <span className={`font-heading font-bold text-lg ${
                isScrolled ? "text-foreground" : "text-cream"
              }`}>
                Konkan Odyssey
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium transition-colors story-link ${
                    isScrolled
                      ? "text-muted-foreground hover:text-foreground"
                      : "text-cream/80 hover:text-cream"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#"
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  isScrolled
                    ? "bg-gradient-ocean text-primary-foreground hover:shadow-glow-ocean"
                    : "bg-cream/20 text-cream hover:bg-cream/30 border border-cream/30"
                }`}
              >
                Start Journey
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled
                  ? "text-foreground hover:bg-muted"
                  : "text-cream hover:bg-cream/10"
              }`}
            >
              <Menu className="w-6 h-6" />
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 md:hidden"
          >
            <div 
              className="absolute inset-0 bg-foreground/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="absolute right-0 top-0 bottom-0 w-3/4 max-w-sm bg-card shadow-elevated"
            >
              <div className="p-4 border-b border-border flex items-center justify-between">
                <span className="font-heading font-bold">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 rounded-xl text-foreground hover:bg-muted transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl bg-gradient-ocean text-primary-foreground text-center font-semibold mt-4"
                >
                  Start Journey
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
