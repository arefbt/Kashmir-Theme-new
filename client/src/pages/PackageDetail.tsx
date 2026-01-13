import { useParams } from "wouter";
import { packages } from "@/lib/data";
import { BookingForm } from "@/components/ui/BookingForm";
import { Check, Clock, MapPin, Calendar } from "lucide-react";
import NotFound from "./not-found";

export default function PackageDetail() {
  const params = useParams();
  const pkg = packages.find(p => p.slug === params.slug);

  if (!pkg) return <NotFound />;

  return (
    <div className="min-h-screen bg-secondary/10 pb-20">
      {/* Header Image */}
      <div className="relative h-[60vh] min-h-[400px]">
        <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
          <div className="container mx-auto">
            <div className="flex gap-4 text-white/80 mb-2 text-sm font-medium uppercase tracking-wider">
              <span className="flex items-center gap-1"><Clock size={16} /> {pkg.duration}</span>
              <span className="flex items-center gap-1"><MapPin size={16} /> {pkg.location}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">{pkg.title}</h1>
            <div className="text-3xl text-accent font-bold">
              ₹{pkg.price.toLocaleString()} <span className="text-base font-normal text-white/80">/ person</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
        {/* Main Content */}
        <div className="lg:w-2/3 space-y-12">
          
          {/* Overview */}
          <section className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">Overview</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {pkg.description}
            </p>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              {pkg.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-primary font-medium">
                  <span className="bg-secondary p-1 rounded-full"><Check size={14} /></span>
                  {feature}
                </div>
              ))}
            </div>
          </section>

          {/* Itinerary */}
          <section className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-serif font-bold text-primary mb-8">Itinerary</h2>
            <div className="space-y-8 relative before:absolute before:left-[19px] before:top-2 before:h-full before:w-[2px] before:bg-secondary">
              {pkg.itinerary.map((day, i) => (
                <div key={i} className="relative flex gap-6">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold z-10 border-4 border-white shadow-sm">
                    {day.day}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{day.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{day.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:w-1/3">
          <div className="sticky top-24">
            <BookingForm packageName={pkg.title} />
          </div>
        </div>
      </div>
    </div>
  );
}
