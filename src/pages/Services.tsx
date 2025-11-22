import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, Home, DollarSign, Briefcase, Calculator } from "lucide-react";

const Services = () => {
  const dailyCareServices = [
    "24/7 Live-In Manager",
    "Daily Meals by Certified Food Handler",
    "Medication Reminders",
    "Transportation to Medical/Grocery",
    "Medication Pick-Ups",
    "IHSS Worker if Applicable",
    "Social Programs Connections",
    "Outpatient Mental Health/Substance Abuse Referrals",
  ];

  const supportiveServices = [
    {
      icon: Home,
      title: "Long-Term Housing Linkages",
      description: "Connecting residents with permanent housing opportunities",
    },
    {
      icon: DollarSign,
      title: "Section 8 Application Assistance",
      description: "Help with Riverside County Section 8 applications",
    },
    {
      icon: Calculator,
      title: "Credit Repair & Financial Literacy",
      description: "Building financial skills and improving credit scores",
    },
    {
      icon: Briefcase,
      title: "Job Readiness",
      description: "Resume building, interview prep, and job search assistance",
    },
    {
      icon: Heart,
      title: "Money Management & Budgeting",
      description: "Personal finance coaching and budget planning",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Our Services</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Comprehensive support for long-term stability and success
          </p>
        </div>

        {/* Daily Care Operations */}
        <div className="mb-16">
          <h2 className="mb-8 text-3xl font-bold">Daily Care & Operations</h2>
          <div className="rounded-lg border bg-card p-8">
            <div className="grid gap-4 md:grid-cols-2">
              {dailyCareServices.map((service) => (
                <div key={service} className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                  <span className="text-muted-foreground">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Supportive Services */}
        <div className="mb-16">
          <h2 className="mb-8 text-3xl font-bold">Supportive Services</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {supportiveServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="rounded-lg border bg-card p-6"
                >
                  <Icon className="mb-4 h-8 w-8 text-primary" />
                  <h3 className="mb-2 text-lg font-semibold">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Capacity Highlight */}
        <div className="rounded-lg bg-primary/5 p-8 text-center">
          <p className="text-3xl font-bold text-primary md:text-4xl">
            49+ Clients Supported
          </p>
          <p className="mt-2 text-muted-foreground">
            Comprehensive services helping residents build brighter futures
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
