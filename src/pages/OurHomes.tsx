import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";

const OurHomes = () => {
  const amenities = [
    {
      category: "All Utilities Included",
      items: ["Electricity", "Trash", "Gas", "Cable", "WiFi"],
    },
    {
      category: "Appliances",
      items: ["Washer", "Dryer", "Stove", "Refrigerator", "Microwave", "Dishwasher"],
    },
    {
      category: "Equipped Kitchen",
      items: ["Toaster", "Blender", "Silverware", "Dishware"],
    },
    {
      category: "Toiletries",
      items: ["Toilet Paper", "Paper Towels", "Towels", "Cleaning Supplies"],
    },
    {
      category: "New Bedding",
      items: ["Comforter", "Sheets", "Pillow"],
    },
    {
      category: "Welcome Pack",
      items: ["Toothbrush", "Soaps", "Deodorant", "Hygiene Products"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Our Homes</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Safe, Comfortable, and Fully-Equipped Supportive Housing
          </p>
        </div>

        {/* Capacity Highlight */}
        <div className="mb-16 rounded-lg bg-primary/5 p-8 text-center">
          <p className="text-3xl font-bold text-primary md:text-4xl">
            49+ Clients Served
          </p>
          <p className="mt-2 text-muted-foreground">Across five homes in Riverside County</p>
        </div>

        {/* Amenities */}
        <div>
          <h2 className="mb-8 text-center text-3xl font-bold">What's Included</h2>
          <p className="mb-12 text-center text-muted-foreground">
            Every home comes fully furnished and equipped with everything you need
          </p>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {amenities.map((amenity) => (
              <div
                key={amenity.category}
                className="rounded-lg border bg-card p-6"
              >
                <h3 className="mb-4 text-lg font-semibold">{amenity.category}</h3>
                <ul className="space-y-2">
                  {amenity.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 rounded-lg bg-muted/50 p-8 text-center">
          <h3 className="mb-4 text-2xl font-bold">Ready to Learn More?</h3>
          <p className="mb-6 text-muted-foreground">
            Contact us today to discuss housing availability and how we can help
          </p>
          <a
            href="tel:9512163326"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary/90"
          >
            Call (951) 216-3326
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OurHomes;
