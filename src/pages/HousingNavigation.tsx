import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Map, Search, Network, Home } from "lucide-react";

const HousingNavigation = () => {
  const counties = [
    "San Diego",
    "Imperial",
    "Riverside",
    "San Bernardino",
    "Orange",
    "Los Angeles",
    "Ventura",
    "Santa Barbara",
    "San Luis Obispo",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Housing Navigation</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Connecting individuals with housing opportunities across Southern California
          </p>
        </div>

        {/* Service Overview */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Map className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-2 font-semibold">Region-Wide Service</h3>
            <p className="text-sm text-muted-foreground">
              Covering 9 counties from San Diego to San Luis Obispo
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Search className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-2 font-semibold">Active Research</h3>
            <p className="text-sm text-muted-foreground">
              Continuously researching housing opportunities and resources
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Network className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-2 font-semibold">Network Building</h3>
            <p className="text-sm text-muted-foreground">
              Strong partnerships with housing providers and agencies
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Home className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-2 font-semibold">Successful Placements</h3>
            <p className="text-sm text-muted-foreground">
              Helping individuals find housing throughout Southern CA
            </p>
          </div>
        </div>

        {/* Coverage Area */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold">Our Coverage Area</h2>
          <div className="rounded-lg border bg-card p-8">
            <p className="mb-6 text-center text-muted-foreground">
              We serve the following counties in Southern California:
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              {counties.map((county) => (
                <div
                  key={county}
                  className="flex items-center justify-center rounded-md bg-muted/50 p-4 text-center font-medium"
                >
                  {county} County
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="mb-8 text-3xl font-bold">How We Help</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border bg-card p-6">
              <div className="mb-4 text-2xl font-bold text-primary">1</div>
              <h3 className="mb-2 font-semibold">Initial Assessment</h3>
              <p className="text-sm text-muted-foreground">
                We learn about your housing needs, preferences, and any special requirements
              </p>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <div className="mb-4 text-2xl font-bold text-primary">2</div>
              <h3 className="mb-2 font-semibold">Housing Search</h3>
              <p className="text-sm text-muted-foreground">
                We research available housing options that match your needs across our coverage area
              </p>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <div className="mb-4 text-2xl font-bold text-primary">3</div>
              <h3 className="mb-2 font-semibold">Placement Support</h3>
              <p className="text-sm text-muted-foreground">
                We assist with applications, coordinate with providers, and support your move-in process
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-lg bg-muted/50 p-8 text-center">
          <h3 className="mb-4 text-2xl font-bold">Need Housing Navigation Services?</h3>
          <p className="mb-6 text-muted-foreground">
            Contact us to learn how we can help you find housing in Southern California
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

export default HousingNavigation;
