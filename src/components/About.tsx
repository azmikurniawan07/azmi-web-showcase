import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Code, Palette, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with best practices"
    },
    {
      icon: Palette,
      title: "Design Systems",
      description: "Creating consistent, beautiful user interfaces"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed and user experience"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate frontend developer with a keen eye for design and a love for creating 
            exceptional digital experiences that users love to interact with.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over 3 years of experience in frontend development, I specialize in building 
              modern web applications using React, TypeScript, and the latest web technologies. 
              I'm passionate about creating pixel-perfect designs and smooth user experiences.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new design trends, contributing to 
              open-source projects, or sharing my knowledge through blog posts and community meetups.
            </p>

            <div className="flex flex-wrap gap-2 pt-4">
              {["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js", "GraphQL", "PostgreSQL", "Docker"].map((tech) => (
                <Badge key={tech} variant="secondary" className="glass-card hover-glow">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid gap-6 animate-scale-in">
            {highlights.map((item, index) => (
              <Card key={index} className="glass-card p-6 hover-glow">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;