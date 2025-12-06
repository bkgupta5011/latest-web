import { Link } from "react-router-dom";
import { Dumbbell, Youtube, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Dumbbell className="w-8 h-8 text-primary" />
              <span className="font-display text-2xl tracking-wide">
                TheFit<span className="text-primary">Bhaskar</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Documenting my fitness journey and helping others transform their
              lives through fitness, nutrition, and mindset.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link
                to="/workouts"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Workouts
              </Link>
              <Link
                to="/diet"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Diet Plans
              </Link>
              <Link
                to="/lifestyle"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Lifestyle
              </Link>
              <Link
                to="/blog"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Blog
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display text-lg mb-4">Resources</h4>
            <div className="flex flex-col gap-2">
              <Link
                to="/tools"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                BMI Calculator
              </Link>
              <Link
                to="/self-development"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Self Development
              </Link>
              <Link
                to="/about"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                About Me
              </Link>
              <Link
                to="/contact"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-lg mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://youtube.com/@TheFitBhaskar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/thefitbhaskar/"
                target="_blank"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <Link
                to="/contact"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} TheFitBhaskar. All rights
            reserved. Built with passion for fitness.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
