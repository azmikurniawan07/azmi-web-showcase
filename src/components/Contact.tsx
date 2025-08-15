import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  MessageSquare, 
  Linkedin, 
  Github, 
  Twitter, 
  Phone,
  MapPin,
  Send
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "azmi.kurniawan@email.com",
      href: "mailto:azmi.kurniawan@email.com",
      color: "from-red-500 to-pink-600"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+62 812-3456-7890",
      href: "tel:+6281234567890",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Jakarta, Indonesia",
      href: "#",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: MessageSquare,
      label: "WhatsApp",
      value: "Chat on WhatsApp",
      href: "https://wa.me/6281234567890",
      color: "from-green-400 to-green-600"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/azmikurniawan",
      color: "hover:text-gray-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/azmikurniawan",
      color: "hover:text-blue-400"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/azmikurniawan",
      color: "hover:text-sky-400"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss your next project or just say hello. I'm always open to interesting conversations and collaboration opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm currently available for freelance work and full-time opportunities. 
                Whether you have a project in mind or just want to chat about technology, 
                feel free to reach out through any of the channels below.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactMethods.map((method, index) => (
                <Card 
                  key={index} 
                  className="glass-card p-6 hover-glow group cursor-pointer"
                  onClick={() => window.open(method.href, '_blank')}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${method.color} shadow-lg`}>
                      <method.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{method.label}</p>
                      <p className="text-sm text-muted-foreground">{method.value}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="lg"
                    className="glass-card hover-glow"
                    onClick={() => window.open(social.href, '_blank')}
                  >
                    <social.icon className={`h-5 w-5 ${social.color} transition-colors`} />
                  </Button>
                ))}
              </div>
            </div>

            {/* Status */}
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <Badge variant="secondary" className="glass-card">
                Available for new projects
              </Badge>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="glass-card p-8 hover-glow animate-scale-in">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input 
                    placeholder="Your name" 
                    className="glass-card border-0 bg-background/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="glass-card border-0 bg-background/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <Input 
                  placeholder="What's this about?" 
                  className="glass-card border-0 bg-background/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  placeholder="Tell me about your project or just say hello..." 
                  rows={6}
                  className="glass-card border-0 bg-background/50 resize-none"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="glass-button hover-glow w-full group"
              >
                <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;