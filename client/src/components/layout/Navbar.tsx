import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/packages", label: "Packages" },
    { href: "/about", label: "About Kashmir" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="bg-primary text-primary-foreground py-2 text-xs md:text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2"><Phone size={14} /> +91 98765 43210</span>
            <span className="flex items-center gap-2 hidden md:flex"><Mail size={14} /> info@kashmirholidaypackage.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Instagram size={14} className="cursor-pointer hover:text-accent" />
            <Facebook size={14} className="cursor-pointer hover:text-accent" />
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-serif font-bold text-primary tracking-tight">
            Kashmir<span className="text-accent">Holidays</span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <a className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location === link.href ? "text-primary font-bold" : "text-muted-foreground"
              )}>
                {link.label}
              </a>
            </Link>
          ))}
          <Link href="/packages">
            <Button size="sm" className="bg-accent hover:bg-accent/90 text-white">Book Now</Button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t bg-background p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <a 
                className="text-lg font-medium py-2 border-b border-border/50 block"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </Link>
          ))}
          <Button className="w-full mt-4 bg-accent text-white">Plan My Trip</Button>
        </div>
      )}
    </header>
  );
}
