import { motion } from "framer-motion";
import { Utensils, Star } from "lucide-react";
import malvaniFood from "@/assets/malvani-food.jpg";

const foodItems = [
  {
    name: "Bawada Misal",
    description: "The legendary Kolhapuri breakfast - spicy moth bean curry with farsan, pav, and a fiery tarri that locals swear by",
    location: "Kolhapur",
    mustTry: true,
  },
  {
    name: "Malvani Fish Curry",
    description: "Fresh surmai or bangda in a coconut-based curry with Malvani masala, served with steaming rice",
    location: "Malvan",
    mustTry: true,
  },
  {
    name: "Sol Kadhi",
    description: "The refreshing pink drink made from kokum and coconut milk - Konkan's natural digestif",
    location: "Throughout Konkan",
    mustTry: true,
  },
  {
    name: "Kombdi Vade",
    description: "Traditional chicken curry with fluffy fried bread - a Malvani specialty you can't miss",
    location: "Malvan",
    mustTry: false,
  },
  {
    name: "Kolambi Bhaat",
    description: "Fragrant prawn rice cooked with coconut and spices - coastal comfort food at its finest",
    location: "Ratnagiri",
    mustTry: false,
  },
  {
    name: "Alphonso Aamras",
    description: "The king of mangoes in its purest form - available only in season (April-June)",
    location: "Ratnagiri",
    mustTry: true,
  },
];

const FoodCulture = () => {
  return (
    <section className="py-20 px-4 bg-background pattern-palm">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium text-sunset mb-4">
            <Utensils className="w-4 h-4" />
            TASTE OF KONKAN
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Culinary <span className="text-gradient-sunset">Treasures</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From fiery Kolhapuri spices to fresh Malvani seafood, embark on a gastronomic journey
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Food Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden img-zoom"
          >
            <img
              src={malvaniFood}
              alt="Traditional Malvani seafood thali with prawns, fish curry, rice, and sol kadhi"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl font-heading font-bold text-cream mb-2">Traditional Malvani Thali</h3>
              <p className="text-cream/80 text-sm">A complete coastal feast served on banana leaf</p>
            </div>
          </motion.div>

          {/* Food Items */}
          <div className="space-y-4">
            {foodItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card-konkan p-4 hover:shadow-elevated transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-heading font-semibold text-foreground">{item.name}</h4>
                      {item.mustTry && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-sunset/10 text-sunset text-xs font-medium">
                          <Star className="w-3 h-3 fill-current" />
                          Must Try
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                    <span className="text-xs font-medium text-ocean">📍 {item.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodCulture;
