import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Building2, Heart, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Partnerships = () => {
  const services = [
    {
      title: "Short-Term Post-Hospitalization Housing (STPHH)",
      description: "Providing safe, supportive housing immediately following hospital discharge for individuals who need additional support before returning to permanent housing.",
      features: [
        "24/7 on-site support staff",
        "Medication management and reminders",
        "Transportation to follow-up appointments",
        "Connection to ongoing care services",
      ],
    },
    {
      title: "Recuperative Care / Medical Respite",
      description: "Specialized care for individuals who are too ill or frail for shelter but not sick enough to be in a hospital, providing a safe place to recover.",
      features: [
        "Skilled medical oversight",
        "Daily meals and nutrition support",
        "Assistance with activities of daily living",
        "Care coordination with medical providers",
      ],
    },
    {
      title: "Housing Navigation Services",
      description: "Comprehensive support helping individuals find and secure permanent housing throughout Southern California.",
      features: [
        "Coverage from San Diego to San Luis Obispo",
        "Active research and network building",
        "Application assistance and advocacy",
        "Move-in support and follow-up",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">County Partnerships</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            CalAIM-compliant services for county partners
          </p>
        </div>

        {/* Value Proposition */}
        <div className="mb-16 rounded-lg bg-primary/5 p-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <Building2 className="mx-auto mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-2 font-semibold">State-Billable Services</h3>
              <p className="text-sm text-muted-foreground">
                All services are billable to state and county funding sources
              </p>
            </div>

            <div className="text-center">
              <Heart className="mx-auto mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-2 font-semibold">Proven Track Record</h3>
              <p className="text-sm text-muted-foreground">
                Over 10 years serving Riverside County residents
              </p>
            </div>

            <div className="text-center">
              <MapPin className="mx-auto mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-2 font-semibold">Regional Coverage</h3>
              <p className="text-sm text-muted-foreground">
                Services available throughout Southern California
              </p>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mb-16">
          <h2 className="mb-8 text-3xl font-bold">Our Partnership Services</h2>
          <div className="space-y-8">
            {services.map((service) => (
              <div key={service.title} className="rounded-lg border bg-card p-8">
                <h3 className="mb-4 text-2xl font-semibold">{service.title}</h3>
                <p className="mb-6 text-muted-foreground">{service.description}</p>
                <div className="grid gap-3 md:grid-cols-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="rounded-lg bg-muted/50 p-8 text-center">
          <h3 className="mb-4 text-2xl font-bold">Ready to Partner?</h3>
          <p className="mb-6 text-muted-foreground">
            We are actively seeking partnerships with county agencies and health plans. 
            Contact us to discuss how we can work together to serve your community.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/contact">Express Interest in Partnering</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="tel:9512163326">Call (951) 216-3326</a>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Partnerships;
