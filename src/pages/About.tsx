import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Home } from "lucide-react";

const About = () => {
  const homes = [
    { name: "Manfield", location: "Near UC Riverside" },
    { name: "Lone Pine", location: "Moreno Valley" },
    { name: "Grand Central", location: "Riverside" },
    { name: "Walking Beam", location: "High Grove" },
    { name: "Bert Ranch", location: "Woodcrest" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">About Bethel Residency</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Providing safe, supportive housing since 2013
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-16">
          <div className="mx-auto max-w-4xl rounded-lg bg-primary/5 p-8 text-center">
            <p className="text-xl italic leading-relaxed text-foreground md:text-2xl">
              "To come along side individuals who are struggling to find safe, secure & quality housing 
              while experiencing a loving, supportive, judgement-free environment leading to an abundant life"
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="mb-16">
          <h2 className="mb-6 text-3xl font-bold">Our Story</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground">
              Founded in 2013, Bethel Residency has been a beacon of hope for individuals experiencing 
              housing instability in Riverside County. We provide comprehensive supportive housing services 
              including Transitional Housing, Rapid Rehousing, and Housing Navigation to those in need.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our approach combines safe, quality housing with access to social services and personal 
              development resources, creating an environment where every individual has the opportunity 
              to thrive and lead a fulfilling, independent life.
            </p>
          </div>
        </div>

        {/* Capacity */}
        <div className="mb-16 rounded-lg bg-muted/50 p-8 text-center">
          <div className="mb-4 text-5xl font-bold text-primary">49</div>
          <p className="text-xl font-semibold">Beds Across Five Homes</p>
        </div>

        {/* Our Locations */}
        <div>
          <h2 className="mb-8 text-3xl font-bold">Our Locations</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {homes.map((home) => (
              <div
                key={home.name}
                className="flex items-start gap-4 rounded-lg border bg-card p-6"
              >
                <Home className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="mb-1 font-semibold">{home.name}</h3>
                  <p className="text-sm text-muted-foreground">{home.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
