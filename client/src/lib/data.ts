import heroImage from '@assets/generated_images/cinematic_dal_lake_sunset_with_shikaras_and_mountains.png';
import gulmargImage from '@assets/generated_images/snowy_gulmarg_mountains_with_pine_trees.png';
import pahalgamImage from '@assets/generated_images/lush_green_pahalgam_valley_with_river.png';
import sonmargImage from '@assets/generated_images/sonmarg_meadow_with_glaciers.png';
import houseboatImage from '@assets/generated_images/luxury_kashmiri_houseboat_interior.png';

export const images = {
  hero: heroImage,
  gulmarg: gulmargImage,
  pahalgam: pahalgamImage,
  sonmarg: sonmargImage,
  houseboat: houseboatImage
};

export interface Package {
  id: string;
  title: string;
  slug: string;
  duration: string;
  price: number;
  image: string;
  description: string;
  location: string;
  features: string[];
  itinerary: { day: number; title: string; description: string }[];
}

export const packages: Package[] = [
  {
    id: "1",
    title: "Magical Kashmir Winter Special",
    slug: "magical-kashmir-winter",
    duration: "5 Days / 4 Nights",
    price: 18500,
    image: images.gulmarg,
    location: "Gulmarg & Srinagar",
    description: "Experience the winter wonderland of Gulmarg with skiing, gondola rides, and cozy houseboat stays.",
    features: ["Skiing", "Gondola Ride", "Houseboat Stay", "Breakfast & Dinner"],
    itinerary: [
      { day: 1, title: "Arrival in Srinagar", description: "Pickup from airport, transfer to Houseboat. Shikara ride in the evening." },
      { day: 2, title: "Srinagar to Gulmarg", description: "Day trip to Gulmarg. Enjoy the world's highest gondola ride." },
      { day: 3, title: "Gulmarg Snow Activities", description: "Full day for skiing and snow activities." },
      { day: 4, title: "Return to Srinagar", description: "Visit Mughal Gardens and local market." },
      { day: 5, title: "Departure", description: "Transfer to airport for departure." }
    ]
  },
  {
    id: "2",
    title: "Valley of Shepherds - Pahalgam",
    slug: "valley-of-shepherds",
    duration: "4 Days / 3 Nights",
    price: 15500,
    image: images.pahalgam,
    location: "Pahalgam",
    description: "Relax in the lush green meadows of Pahalgam. Perfect for nature lovers and families.",
    features: ["River Rafting", "Pony Ride", "Betaab Valley", "Aru Valley"],
    itinerary: [
      { day: 1, title: "Arrival & Transfer to Pahalgam", description: "Scenic drive through saffron fields to Pahalgam." },
      { day: 2, title: "Explore Pahalgam", description: "Visit Betaab Valley, Aru Valley and Chandanwari." },
      { day: 3, title: "Pahalgam Leisure", description: "Relax by the Lidder river or take a pony ride to Baisaran." },
      { day: 4, title: "Departure", description: "Drive back to Srinagar airport." }
    ]
  },
  {
    id: "3",
    title: "Golden Meadow Expedition",
    slug: "sonmarg-expedition",
    duration: "3 Days / 2 Nights",
    price: 12000,
    image: images.sonmarg,
    location: "Sonmarg",
    description: "Witness the majestic Thajiwas Glacier and the golden meadows of Sonmarg.",
    features: ["Glacier Trek", "Sledging", "Camping", "Bonfire"],
    itinerary: [
      { day: 1, title: "Srinagar to Sonmarg", description: "Drive to Sonmarg, check in to camp/hotel." },
      { day: 2, title: "Thajiwas Glacier", description: "Trek or pony ride to the glacier. Enjoy snow sledging." },
      { day: 3, title: "Return & Depart", description: "Drive back to Srinagar airport." }
    ]
  },
  {
    id: "4",
    title: "Luxury Houseboat Romance",
    slug: "luxury-houseboat",
    duration: "3 Days / 2 Nights",
    price: 22000,
    image: images.houseboat,
    location: "Dal Lake, Srinagar",
    description: "A romantic getaway in a premium luxury houseboat with candlelight dinners and shikara rides.",
    features: ["Honeymoon Special", "Candlelight Dinner", "Flower Decoration", "Private Shikara"],
    itinerary: [
      { day: 1, title: "Welcome Aboard", description: "Traditional welcome with Kahwa. Sunset Shikara ride." },
      { day: 2, title: "Mughal Gardens Tour", description: "Visit Nishat, Shalimar and Chashme Shahi gardens." },
      { day: 3, title: "Farewell", description: "Breakfast on the deck and transfer to airport." }
    ]
  }
];
