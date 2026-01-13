import { Hero } from "@/components/sections/Hero";
import { PackageCard } from "@/components/ui/PackageCard";
import { packages } from "@/lib/data";
import { ArrowRight, Star, Shield, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-lg bg-secondary/30 flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-accent">
                <Star size={32} fill="currentColor" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2 text-primary">Premium Experience</h3>
              <p className="text-muted-foreground">Handpicked hotels, luxury houseboats, and comfortable transport for a hassle-free trip.</p>
            </div>
            <div className="p-6 rounded-lg bg-secondary/30 flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-accent">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2 text-primary">Safe & Secure</h3>
              <p className="text-muted-foreground">Your safety is our priority. Verified drivers, 24/7 support, and trusted local guides.</p>
            </div>
            <div className="p-6 rounded-lg bg-secondary/30 flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-accent">
                <Heart size={32} fill="currentColor" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2 text-primary">Customized Packages</h3>
              <p className="text-muted-foreground">Tailor-made itineraries to suit your budget, duration, and personal preferences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h4 className="text-accent font-bold uppercase tracking-wider text-sm mb-2">Our Bestsellers</h4>
              <h2 className="text-4xl font-serif font-bold text-primary">Popular Packages</h2>
            </div>
            <Link href="/packages">
              <Button variant="ghost" className="hidden md:flex gap-2 text-primary hover:text-accent">
                View All Packages <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link href="/packages">
              <Button variant="outline" className="w-full">View All Packages</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Why Choose Us?</h2>
            <p className="text-lg text-primary-foreground/90 mb-6 leading-relaxed">
              We are locals who know every hidden gem of Kashmir. From the best saffron shops to the quietest shikara rides, we curate authentic experiences that go beyond standard sightseeing.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3"><span className="w-2 h-2 bg-accent rounded-full"></span> 10+ Years of Experience</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 bg-accent rounded-full"></span> 5000+ Happy Travelers</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 bg-accent rounded-full"></span> Best Price Guarantee</li>
            </ul>
            <Link href="/about">
              <Button className="bg-white text-primary hover:bg-secondary">Read More About Us</Button>
            </Link>
          </div>
          <div className="md:w-1/2 bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/20">
            <h3 className="text-2xl font-serif font-bold mb-4 text-accent">Customer Review</h3>
            <p className="italic text-lg mb-6">"The trip to Gulmarg was magical! The team arranged everything perfectly, from the hotel to the car. The driver was very polite and helpful. Highly recommended!"</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center font-bold text-primary">RD</div>
              <div>
                <p className="font-bold">Rahul & Divya</p>
                <p className="text-sm text-white/70">Mumbai, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
