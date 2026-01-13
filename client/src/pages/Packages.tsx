import { PackageCard } from "@/components/ui/PackageCard";
import { packages } from "@/lib/data";

export default function Packages() {
  return (
    <div className="min-h-screen bg-secondary/10 pb-20">
      <div className="bg-primary py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Packages</h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto px-4">Choose from our wide range of meticulously crafted tour packages for Kashmir.</p>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </div>
  );
}
