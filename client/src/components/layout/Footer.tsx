import { Link } from "wouter";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8 mb-12">
        <div>
          <h3 className="text-2xl font-serif font-bold mb-4">
            Kashmir<span className="text-accent">Holidays</span>
          </h3>
          <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
            Your trusted partner for exploring the paradise on earth. We craft unforgettable experiences in the valleys of Kashmir.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-accent transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Twitter size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><Link href="/"><a className="hover:text-white transition-colors">Home</a></Link></li>
            <li><Link href="/about"><a className="hover:text-white transition-colors">About Us</a></Link></li>
            <li><Link href="/packages"><a className="hover:text-white transition-colors">Tour Packages</a></Link></li>
            <li><Link href="/contact"><a className="hover:text-white transition-colors">Contact</a></Link></li>
            <li><Link href="/privacy"><a className="hover:text-white transition-colors">Privacy Policy</a></Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4">Popular Packages</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><Link href="/packages"><a className="hover:text-white transition-colors">Srinagar Special</a></Link></li>
            <li><Link href="/packages"><a className="hover:text-white transition-colors">Gulmarg Skiing</a></Link></li>
            <li><Link href="/packages"><a className="hover:text-white transition-colors">Pahalgam Valley</a></Link></li>
            <li><Link href="/packages"><a className="hover:text-white transition-colors">Sonmarg Trek</a></Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4">Contact Us</h4>
          <ul className="space-y-4 text-sm text-primary-foreground/80">
            <li className="flex gap-3 items-start">
              <MapPin size={18} className="shrink-0 mt-1 text-accent" />
              <span>Boulevard Road, Dal Lake, Srinagar, Kashmir 190001</span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone size={18} className="shrink-0 text-accent" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex gap-3 items-center">
              <Mail size={18} className="shrink-0 text-accent" />
              <span>info@kashmirholidaypackage.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/60">
        <p>&copy; {new Date().getFullYear()} Kashmir Holiday Packages. All rights reserved. Designed with ❤️ in Kashmir.</p>
      </div>
    </footer>
  );
}
