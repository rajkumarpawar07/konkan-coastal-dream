import { motion } from "framer-motion";
import { 
  MapPin, 
  Calendar, 
  Download, 
  Share2, 
  ExternalLink,
  Mail,
  Facebook,
  Twitter,
  Instagram
} from "lucide-react";

const quickLinks = [
  { label: "Day 1: Kolhapur", href: "#day1" },
  { label: "Day 2: Hill Forts", href: "#day2" },
  { label: "Day 3: Malvan", href: "#day3" },
  { label: "Day 4: Tarkarli", href: "#day4" },
  { label: "Day 5: Ratnagiri", href: "#day5" },
  { label: "Day 6: Ganpatipule", href: "#day6" },
];

const resources = [
  { label: "Google Maps Route", href: "#", icon: MapPin },
  { label: "Weather Forecast", href: "#", icon: Calendar },
  { label: "Download PDF", href: "#", icon: Download },
  { label: "Share Trip", href: "#", icon: Share2 },
];

const Footer = () => {
  return (
    <footer className="bg-ocean text-primary-foreground">
      {/* CTA Section */}
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
              Ready to Begin Your Adventure?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Pack your bags, fuel up the car, and let the Konkan coast reveal its secrets to you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sunset text-primary-foreground font-semibold hover:bg-sunset-gold transition-colors shadow-glow-sunset">
                <Download className="w-5 h-5" />
                Download Itinerary
              </button>
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-foreground/10 text-primary-foreground font-semibold hover:bg-primary-foreground/20 transition-colors border border-primary-foreground/20">
                <MapPin className="w-5 h-5" />
                View on Google Maps
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-primary-foreground/10 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-heading font-bold mb-4">Konkan Odyssey</h3>
              <p className="text-primary-foreground/70 text-sm mb-4">
                A curated journey through Maharashtra's most enchanting coastal region, 
                where ancient history meets pristine beaches.
              </p>
              <div className="flex gap-3">
                {[Facebook, Twitter, Instagram, Mail].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors story-link"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                {resources.map((resource) => (
                  <li key={resource.label}>
                    <a
                      href={resource.href}
                      className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      <resource.icon className="w-4 h-4" />
                      {resource.label}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10 py-6 px-4">
        <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>© 2024 Konkan Odyssey. All rights reserved.</p>
          <p>Made with ❤️ for travelers who seek the extraordinary</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
