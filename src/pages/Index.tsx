import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import bethelLogo from "@/assets/bethel-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-4 py-20 text-center">
        <div className="mx-auto max-w-4xl">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src={bethelLogo} 
              alt="Bethel Residency Logo" 
              className="h-32 w-32 object-contain md:h-40 md:w-40"
            />
          </div>

          {/* Company Name */}
          <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Bethel Residency
          </h1>

          {/* Tagline */}
          <p className="mb-6 text-xl text-primary md:text-2xl lg:text-3xl">
            Permanent Supportive Housing with Love & Dignity
          </p>

          {/* Mission Statement */}
          <p className="mx-auto mb-12 max-w-2xl font-serif text-lg italic text-muted-foreground md:text-xl">
            "To come along side individuals who are struggling to find safe, secure & quality housing 
            while experiencing a loving, supportive, judgement-free environment leading to an abundant life"
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
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
              className="w-full sm:w-auto"
            >
              <Link to="/partnerships">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
