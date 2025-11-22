import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import bethelLogo from "@/assets/bethel-logo.png";
import heroImage from "@/assets/hero-residents.jpg";
import furnishedRoom from "@/assets/furnished-room.jpg";
import kitchen from "@/assets/kitchen.jpg";
import laundry from "@/assets/laundry.jpg";
import careSupport from "@/assets/care-support.jpg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Home, Utensils, Heart, Users, Clock, Pill, Car, Network, DollarSign, Briefcase, Calculator, FileText } from "lucide-react";

const Index = () => {
  const highlightServices = [
    {
      icon: Home,
      title: "Fully Furnished Housing",
      description: "Shared rooms with two beds, all utilities, appliances, and bedding included",
      image: furnishedRoom,
    },
    {
      icon: Utensils,
      title: "Daily Meals & Kitchen",
      description: "Equipped kitchens and daily meals prepared by certified food handlers",
      image: kitchen,
    },
    {
      icon: Home,
      title: "All Amenities Included",
      description: "Washer, dryer, toiletries, cleaning supplies, and welcome packs provided",
      image: laundry,
    },
    {
      icon: Heart,
      title: "24/7 Support & Care",
      description: "On-site management, medication reminders, transportation, and case management",
      image: careSupport,
    },
  ];

  const dailyCareServices = [
    { icon: Clock, title: "24/7 Live-In Manager", description: "Round-the-clock on-site support" },
    { icon: Utensils, title: "Daily Meals", description: "Prepared by certified food handlers" },
    { icon: Pill, title: "Medication Reminders", description: "Ensuring you stay on track" },
    { icon: Car, title: "Transportation", description: "To medical appointments and grocery" },
    { icon: Pill, title: "Medication Pick-Ups", description: "We help coordinate your prescriptions" },
    { icon: Users, title: "IHSS Worker", description: "If applicable for your needs" },
    { icon: Network, title: "Social Programs", description: "Connections to community resources" },
    { icon: Heart, title: "Mental Health Referrals", description: "Outpatient support connections" },
  ];

  const supportiveServices = [
    { icon: Home, title: "Long-Term Housing Linkages", description: "Connecting to permanent housing" },
    { icon: FileText, title: "Section 8 Assistance", description: "Application help for Riverside County" },
    { icon: Calculator, title: "Credit Repair & Financial Literacy", description: "Build your financial future" },
    { icon: Briefcase, title: "Job Readiness", description: "Resume, interview prep, job search" },
    { icon: DollarSign, title: "Money Management", description: "Budgeting and financial planning" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with Background Image */}
      <section 
        className="relative flex min-h-[90vh] items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage})`,
        }}
      >
        <div className="mx-auto max-w-4xl text-center">
          {/* Logo */}
          <div className="mb-8 flex animate-fade-in justify-center">
            <img 
              src={bethelLogo} 
              alt="Bethel Residency Logo" 
              className="h-32 w-32 object-contain drop-shadow-2xl md:h-40 md:w-40"
            />
          </div>

          {/* Company Name */}
          <h1 className="mb-4 animate-fade-in text-4xl font-bold text-white md:text-5xl lg:text-6xl [animation-delay:0.2s]">
            Bethel Residency
          </h1>

          {/* Tagline */}
          <p className="mb-6 animate-fade-in text-xl text-white md:text-2xl lg:text-3xl [animation-delay:0.4s]">
            Permanent Supportive Housing with Love & Dignity
          </p>

          {/* Mission Statement */}
          <p className="mx-auto mb-12 max-w-2xl animate-fade-in text-lg text-white/90 md:text-xl [animation-delay:0.6s]">
            We are dedicated to providing safe, supportive, and affordable housing solutions for individuals in need of all-inclusive communal living. Our mission is to create family style homes where residents can thrive, regain stability, and build a brighter future.
          </p>

          {/* CTAs */}
          <div className="flex animate-fade-in flex-col items-center justify-center gap-4 sm:flex-row [animation-delay:0.8s]">
            <Button 
              asChild 
              size="lg"
              className="w-full sm:w-auto"
            >
              <Link to="/contact">Refer a Resident</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="w-full border-2 border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 sm:w-auto"
            >
              <Link to="/partnerships">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Highlight Services Section */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">What's Included With Your Housing</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Everything you need for a comfortable, supportive living experience
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {highlightServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group overflow-hidden rounded-lg border bg-card transition-all duration-300 hover:shadow-lg"
                  style={{
                    animation: `fade-in 0.5s ease-out ${index * 0.1}s backwards`,
                  }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Daily Care Services */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Daily Care & Operations</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Comprehensive support services to help you thrive every day
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {dailyCareServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="flex flex-col items-center rounded-lg border bg-card p-6 text-center transition-all hover:shadow-md"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Supportive Services */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Supportive Services</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Building skills and connections for long-term stability
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {supportiveServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="flex flex-col items-center rounded-lg border bg-card p-6 text-center transition-all hover:shadow-md"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-2 text-5xl font-bold text-primary">49+</div>
              <p className="text-lg font-medium">Beds Available</p>
              <p className="text-sm text-muted-foreground">Across five homes</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-5xl font-bold text-primary">10+</div>
              <p className="text-lg font-medium">Years of Service</p>
              <p className="text-sm text-muted-foreground">Since 2013</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-5xl font-bold text-primary">24/7</div>
              <p className="text-lg font-medium">On-Site Support</p>
              <p className="text-sm text-muted-foreground">Always here for you</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Get Started?</h2>
          <p className="mb-8 text-lg opacity-90">
            Contact us today to learn more about our supportive housing programs
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button 
              asChild 
              size="lg" 
              variant="secondary"
            >
              <a href="tel:9512163326">Call (951) 216-3326</a>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary"
            >
              <Link to="/contact">Send a Message</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
