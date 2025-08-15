import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [heroRef, isHeroVisible] = useScrollAnimation(0.2);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 hero-background"></div>
      </div>

      {/* Content */}
      <div 
        ref={heroRef}
        className={`relative z-10 text-center px-6 max-w-4xl mx-auto animate-reveal ${isHeroVisible ? 'visible' : ''}`}
      >
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="gradient-text">Azmi Kurniawan</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto">
            Frontend Developer & UI/UX Enthusiast
          </p>
          
          <p className="text-lg text-muted-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Creating beautiful, modern web experiences with React, TypeScript, and cutting-edge technologies. 
            Passionate about clean code, user experience, and bringing designs to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="glass-button hover-glow px-8 py-6 text-lg font-medium group focus-visible"
              onClick={() => scrollToSection("#projects")}
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-all duration-300" />
            </Button>
            
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                size="lg" 
                className="glass-card hover-glow hover-scale"
                onClick={() => window.open("https://github.com/azmikurniawan", "_blank")}
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="glass-card hover-glow hover-scale"
                onClick={() => window.open("https://linkedin.com/in/azmikurniawan", "_blank")}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="glass-card hover-glow hover-scale"
                onClick={() => scrollToSection("#contact")}
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="scroll-indicator cursor-pointer"
        onClick={() => scrollToSection("#about")}
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center hover:border-primary transition-colors duration-300">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-float"></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 animate-float opacity-20">
        <div className="w-20 h-20 border border-primary/30 rounded-lg backdrop-blur-sm"></div>
      </div>
      <div className="absolute bottom-1/4 right-10 animate-float opacity-20" style={{ animationDelay: '1s' }}>
        <div className="w-16 h-16 border border-primary/30 rounded-full backdrop-blur-sm"></div>
      </div>
    </section>
  );
};

export default Hero;