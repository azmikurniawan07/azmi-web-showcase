import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-4' : 'py-6'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className={`glass-card rounded-2xl px-6 py-4 transition-all duration-300 ${
          isScrolled ? 'backdrop-blur-xl bg-background/80' : 'backdrop-blur-md bg-background/60'
        }`}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-2xl font-bold">
              <span className="gradient-text">AK</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button 
                onClick={() => scrollToSection("#contact")}
                className="glass-button hover-glow"
              >
                Let's Talk
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="sm"
              className="md:hidden glass-card"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden mt-6 pt-6 border-t border-border/50">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="text-left text-muted-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                  >
                    {item.label}
                  </button>
                ))}
                <Button 
                  onClick={() => scrollToSection("#contact")}
                  className="glass-button hover-glow mt-4"
                >
                  Let's Talk
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;