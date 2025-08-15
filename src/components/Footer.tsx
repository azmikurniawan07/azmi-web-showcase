import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/azmikurniawan",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/azmikurniawan",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:azmi.kurniawan@email.com",
      label: "Email"
    }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-br from-background to-muted/20 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand & Description */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="gradient-text">Azmi Kurniawan</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Frontend Developer passionate about creating beautiful, 
                functional web experiences. Always learning and growing 
                in the ever-evolving world of web development.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="glass-card hover-glow"
                  onClick={() => window.open(social.href, '_blank')}
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-foreground">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-6 text-foreground">Get In Touch</h4>
            <div className="space-y-3 text-muted-foreground">
              <p>Jakarta, Indonesia</p>
              <p>azmi.kurniawan@email.com</p>
              <p>+62 812-3456-7890</p>
            </div>

            <div className="mt-6">
              <Button 
                onClick={() => scrollToSection("#contact")}
                className="glass-button hover-glow"
              >
                Start a Project
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>© {currentYear} Azmi Kurniawan. Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>and lots of coffee</span>
            </div>

            <button
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;