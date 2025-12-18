import { motion } from "framer-motion";
import { useState } from "react";
import { Images, X } from "lucide-react";
import heroKonkan from "@/assets/hero-konkan.jpg";
import sindhudurgFort from "@/assets/sindhudurg-fort.jpg";
import mahalaxmiTemple from "@/assets/mahalaxmi-temple.jpg";
import malvaniFood from "@/assets/malvani-food.jpg";
import devbaugSangam from "@/assets/devbaug-sangam.jpg";
import ganpatipule from "@/assets/ganpatipule.jpg";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
  location: string;
}

const images: GalleryImage[] = [
  { src: heroKonkan, alt: "Stunning sunset over Konkan coast", category: "Beaches", location: "Tarkarli" },
  { src: sindhudurgFort, alt: "Historic Sindhudurg Fort from the sea", category: "Forts", location: "Malvan" },
  { src: mahalaxmiTemple, alt: "Ancient Mahalaxmi Temple architecture", category: "Temples", location: "Kolhapur" },
  { src: malvaniFood, alt: "Traditional Malvani seafood thali", category: "Food", location: "Malvan" },
  { src: devbaugSangam, alt: "Aerial view of Devbaug Sangam", category: "Beaches", location: "Devbaug" },
  { src: ganpatipule, alt: "Ganpatipule Temple at sunset", category: "Temples", location: "Ganpatipule" },
];

const categories = ["All", "Beaches", "Forts", "Temples", "Food"];

const PhotoGallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = activeCategory === "All" 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium text-ocean mb-4">
            <Images className="w-4 h-4" />
            GALLERY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Capture the <span className="text-gradient-ocean">Magic</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A visual journey through Konkan's most breathtaking moments
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-ocean text-primary-foreground shadow-glow-ocean"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.src}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group ${
                index === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  index === 0 ? "h-[400px] sm:h-full" : "h-[250px]"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-2 py-1 rounded-full bg-ocean/80 text-cream text-xs font-medium mb-2">
                  {image.category}
                </span>
                <p className="text-cream font-medium">{image.location}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 p-2 rounded-full bg-cream/10 text-cream hover:bg-cream/20 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] rounded-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
              <span className="inline-block px-3 py-1 rounded-full bg-ocean/80 text-cream text-sm font-medium mb-2">
                {selectedImage.category}
              </span>
              <p className="text-cream">{selectedImage.location}</p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;
