import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern, full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include real-time inventory, payment processing, and admin dashboard.",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      status: "Completed",
      category: "Full Stack"
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, team collaboration features, and beautiful drag-and-drop interface.",
      technologies: ["React", "Next.js", "Prisma", "Socket.io", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      status: "In Progress",
      category: "Frontend"
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather application with location-based forecasts, interactive charts, and responsive design for all devices.",
      technologies: ["Vue.js", "TypeScript", "Chart.js", "OpenWeather API", "PWA"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      status: "Completed",
      category: "Frontend"
    },
    {
      title: "Social Media Analytics",
      description: "A comprehensive analytics dashboard for social media management with real-time data visualization and automated reporting.",
      technologies: ["React", "D3.js", "Node.js", "MongoDB", "Redis", "Docker"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      status: "Completed",
      category: "Full Stack"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating problem-solving skills and technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="glass-card overflow-hidden hover-glow group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute top-4 right-4 flex gap-2">
                  <Badge 
                    variant="secondary" 
                    className={`glass-card ${project.status === 'Completed' ? 'text-green-400' : 'text-yellow-400'}`}
                  >
                    {project.status}
                  </Badge>
                  <Badge variant="outline" className="glass-card">
                    {project.category}
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="glass-card text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button size="sm" className="glass-button hover-glow flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="outline" size="sm" className="glass-card hover-glow">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="glass-card hover-glow px-8">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;