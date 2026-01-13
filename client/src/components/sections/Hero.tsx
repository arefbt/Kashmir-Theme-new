import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { images } from "@/lib/data";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={images.hero} 
          alt="Dal Lake Sunset" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h2 className="text-lg md:text-xl font-medium tracking-widest uppercase mb-4 text-accent">Welcome to Paradise</h2>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight drop-shadow-lg">
            Experience the Magic of <span className="text-accent">Kashmir</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            From the houseboat sunsets of Dal Lake to the snowy peaks of Gulmarg, let us craft your perfect Kashmiri getaway.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/packages">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg rounded-full">
                View Packages
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 px-8 py-6 text-lg rounded-full">
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
