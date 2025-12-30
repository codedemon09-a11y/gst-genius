import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 bg-background/50 backdrop-blur-sm mt-auto">
      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6">
        <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:justify-between md:items-center">
          <p className="text-xs sm:text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} BillCraft Invoice Generator. All rights reserved.
          </p>
          <nav className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
            <Link 
              to="/about" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact Us
            </Link>
            <Link 
              to="/privacy-policy" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms & Conditions
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
