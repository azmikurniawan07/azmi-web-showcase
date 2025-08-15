import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const Experience = () => {
  const [titleRef, isTitleVisible] = useScrollAnimation(0.3);
  const [expRef, animatedItems] = useStaggeredAnimation(3, 0.3);

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Solutions",
      location: "Remote",
      period: "2023 - Present",
      description: "Leading frontend development for enterprise applications, mentoring junior developers, and implementing modern development practices.",
      achievements: [
        "Improved application performance by 40% through optimization",
        "Led migration to TypeScript across 5 major projects",
        "Mentored 3 junior developers and established code review processes"
      ],
      technologies: ["React", "TypeScript", "Next.js", "GraphQL", "AWS"]
    },
    {
      title: "Frontend Developer",
      company: "StartupHub Inc",
      location: "Jakarta, Indonesia",
      period: "2021 - 2023",
      description: "Developed and maintained multiple client projects, collaborated with design teams, and contributed to the company's design system.",
      achievements: [
        "Built 10+ responsive web applications from scratch",
        "Reduced development time by 30% with reusable components",
        "Collaborated with 5+ cross-functional teams"
      ],
      technologies: ["React", "JavaScript", "SCSS", "Node.js", "MongoDB"]
    },
    {
      title: "Junior Frontend Developer",
      company: "Digital Agency Co",
      location: "Bandung, Indonesia",
      period: "2020 - 2021",
      description: "Started my professional journey building websites and learning modern web development practices under senior developer guidance.",
      achievements: [
        "Delivered 15+ client websites with pixel-perfect designs",
        "Learned React and modern JavaScript frameworks",
        "Contributed to open-source projects"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React", "WordPress"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-4xl mx-auto">
        <div 
          ref={titleRef}
          className={`text-center mb-16 animate-reveal ${isTitleVisible ? 'visible' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey and the impact I've made at each step
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>

          <div ref={expRef} className="space-y-12">
            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className={`glass-card p-8 hover-glow hover-lift relative md:ml-20 stagger-item ${
                  animatedItems.has(index) ? 'visible' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute -left-12 top-8 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-glow animate-pulse-glow hidden md:block"></div>

                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-primary">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-lg font-semibold text-foreground mt-1">
                        <Building className="h-4 w-4" />
                        {exp.company}
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:items-end gap-2">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>

                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3 text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="glass-card hover:bg-primary/10 hover:border-primary/30 transition-all"
                      >
                        {tech}
                      </Badge>
                    ))}
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

export default Experience;