import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Palette, 
  Database, 
  Smartphone, 
  Cloud, 
  Wrench 
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      skills: ["React", "TypeScript", "Next.js", "Vue.js", "JavaScript (ES6+)", "HTML5", "CSS3"],
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Styling",
      icon: Palette,
      skills: ["Tailwind CSS", "SCSS", "Styled Components", "Framer Motion", "CSS Modules", "Bootstrap"],
      color: "from-pink-500 to-rose-600"
    },
    {
      title: "Backend",
      icon: Database,
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma", "GraphQL", "REST APIs"],
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Mobile",
      icon: Smartphone,
      skills: ["React Native", "Expo", "Progressive Web Apps", "Responsive Design"],
      color: "from-orange-500 to-yellow-600"
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["Vercel", "Netlify", "AWS", "Docker", "GitHub Actions", "CI/CD"],
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Tools",
      icon: Wrench,
      skills: ["Git", "Figma", "VS Code", "Webpack", "Vite", "Jest", "Cypress"],
      color: "from-purple-500 to-indigo-600"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="glass-card p-6 hover-glow group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} shadow-lg`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary" 
                    className="glass-card hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;