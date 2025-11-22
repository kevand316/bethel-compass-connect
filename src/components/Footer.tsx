import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import bethelLogo from "@/assets/bethel-logo.png";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Logo & Mission */}
          <div>
            <Link to="/" className="mb-4 flex items-center gap-2">
              <img src={bethelLogo} alt="Bethel Residency" className="h-12 w-12" />
              <span className="text-lg font-semibold">Bethel Residency</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Permanent Supportive Housing with Love & Dignity
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/about" className="text-muted-foreground hover:text-primary">
                About Us
              </Link>
              <Link to="/our-homes" className="text-muted-foreground hover:text-primary">
                Our Homes
              </Link>
              <Link to="/services" className="text-muted-foreground hover:text-primary">
                Services
              </Link>
              <Link to="/partnerships" className="text-muted-foreground hover:text-primary">
                Partnerships
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 font-semibold">Contact Us</h3>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-primary" />
                <a href="tel:9512163326" className="text-muted-foreground hover:text-primary">
                  (951) 216-3326
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 text-primary" />
                <a href="mailto:info@bethelresidency.com" className="text-muted-foreground hover:text-primary">
                  info@bethelresidency.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <span className="text-muted-foreground">
                  Riverside County, CA
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Bethel Residency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
