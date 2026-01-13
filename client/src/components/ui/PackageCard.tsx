import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package } from "@/lib/data";
import { Clock, MapPin } from "lucide-react";
import { Link } from "wouter";

interface PackageCardProps {
  pkg: Package;
}

export function PackageCard({ pkg }: PackageCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-shadow border-none shadow-md flex flex-col h-full">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={pkg.image} 
          alt={pkg.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-bold text-primary shadow-sm">
          ₹{pkg.price.toLocaleString()}
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2 text-xs font-medium text-accent uppercase tracking-wider mb-2">
          <Clock size={14} /> {pkg.duration}
        </div>
        <h3 className="text-xl font-serif font-bold text-primary group-hover:text-accent transition-colors line-clamp-2">
          {pkg.title}
        </h3>
        <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
          <MapPin size={14} /> {pkg.location}
        </div>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-sm line-clamp-3">
          {pkg.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {pkg.features.slice(0, 3).map((feature, i) => (
            <span key={i} className="text-xs bg-secondary text-primary px-2 py-1 rounded-md font-medium">
              {feature}
            </span>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="pt-2 pb-6">
        <Link href={`/package/${pkg.slug}`} className="w-full">
          <Button className="w-full bg-primary hover:bg-primary/90">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
