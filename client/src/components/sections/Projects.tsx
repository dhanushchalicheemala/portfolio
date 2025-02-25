import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Sentiment Analysis Platform",
    description: "Deep learning model for real-time sentiment analysis of social media data using BERT",
    image: "https://images.unsplash.com/photo-1501159599894-155982264a55",
    tags: ["Python", "PyTorch", "Transformers", "FastAPI"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Computer Vision Object Detection",
    description: "Real-time object detection system using YOLO and OpenCV for video streams",
    image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66",
    tags: ["Python", "TensorFlow", "OpenCV", "YOLO"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Predictive Analytics Dashboard",
    description: "Machine learning powered dashboard for predictive maintenance in manufacturing",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    tags: ["Scikit-learn", "Pandas", "Plotly", "Flask"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "AI-Powered Chatbot",
    description: "Intelligent chatbot using GPT and custom fine-tuning for domain-specific responses",
    image: "https://images.unsplash.com/photo-1676299081847-5c7fe8b15015",
    tags: ["OpenAI", "LangChain", "Python", "FastAPI"],
    github: "https://github.com",
    demo: "https://demo.com"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">AI/ML Projects</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 bg-black/50 backdrop-blur-sm border-primary/20">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover opacity-80 hover:opacity-100 transition-opacity"
                  />
                  <CardHeader>
                    <CardTitle className="text-gradient">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button variant="outline" size="sm" className="border-primary/50 hover:border-primary" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" className="bg-primary/80 hover:bg-primary" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}