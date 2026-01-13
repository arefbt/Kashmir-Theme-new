import { BookingForm } from "@/components/ui/BookingForm";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-secondary/10 pb-20">
      <div className="bg-primary py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact Us</h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto px-4">We are here to help you plan your dream vacation to Kashmir.</p>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Our Office</h3>
                    <p className="text-muted-foreground">
                      Kashmir Holiday Packages<br />
                      Boulevard Road, Near Dal Gate<br />
                      Srinagar, Jammu & Kashmir 190001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone Number</h3>
                    <p className="text-muted-foreground">
                      +91 98765 43210<br />
                      +91 12345 67890 (WhatsApp)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email Address</h3>
                    <p className="text-muted-foreground">
                      info@kashmirholidaypackage.com<br />
                      bookings@kashmirholidaypackage.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary text-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4">Need Immediate Assistance?</h3>
              <p className="mb-6 opacity-90">Our support team is available 24/7 to assist you with your queries and bookings.</p>
              <button className="bg-white text-primary font-bold py-3 px-6 rounded-lg w-full hover:bg-accent hover:text-white transition-colors">
                Chat on WhatsApp
              </button>
            </div>
          </div>

          {/* Form */}
          <div>
            <BookingForm />
          </div>
        </div>
      </div>
    </div>
  );
}
