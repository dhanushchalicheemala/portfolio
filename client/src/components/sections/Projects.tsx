import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, Tag } from "lucide-react";

const projects = [
  {
    title: "NeuroVision: Advanced Computer Vision System",
    description: "Developed a real-time object detection and classification system using YOLO v5 and ResNet50. Achieved 94% accuracy on benchmark datasets with optimization for edge devices.",
    image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66",
    tags: ["Python", "PyTorch", "OpenCV", "YOLO", "TensorFlow"],
    github: "https://github.com",
    demo: "https://demo.com",
    date: "Jan 2023 - Apr 2023"
  },
  {
    title: "SentiScope: Social Media Sentiment Analysis",
    description: "Created an end-to-end sentiment analysis platform for monitoring brand perception across social media. Implemented BERT-based transformer model fine-tuned on domain-specific data.",
    image: "https://images.unsplash.com/photo-1501159599894-155982264a55",
    tags: ["Python", "HuggingFace", "BERT", "FastAPI", "React"],
    github: "https://github.com",
    demo: "https://demo.com",
    date: "Aug 2022 - Dec 2022"
  },
  {
    title: "IndustryPred: Predictive Maintenance System",
    description: "Engineered an IoT-connected predictive maintenance system for industrial equipment. Reduced downtime by 35% through anomaly detection and time-series forecasting algorithms.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    tags: ["Python", "Scikit-learn", "Time Series", "IoT", "Docker"],
    github: "https://github.com",
    demo: "https://demo.com",
    date: "Mar 2022 - Jul 2022"
  },
  {
    title: "MedicalGPT: Healthcare Chatbot",
    description: "Developed a privacy-focused medical assistance chatbot using LLM fine-tuning on validated healthcare data. Implemented RAG architecture for accurate information retrieval.",
    image: "https://images.unsplash.com/photo-1676299081847-5c7fe8b15015",
    tags: ["LangChain", "GPT", "Vector DB", "FastAPI", "HIPAA Compliance"],
    github: "https://github.com",
    demo: "https://demo.com",
    date: "Sep 2023 - Present"
  },
  {
    title: "DataViz Dashboard",
    description: "Built an interactive data visualization platform for business intelligence, featuring real-time analytics and customizable dashboards with role-based access control.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    tags: ["React", "D3.js", "Node.js", "MongoDB", "WebSockets"],
    github: "https://github.com",
    demo: "https://demo.com",
    date: "May 2022 - Aug 2022"
  },
  {
    title: "SmartTutor: Personalized Learning System",
    description: "Designed an AI-driven educational platform that adapts content difficulty based on student performance. Implemented recommendation algorithms for personalized learning paths.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
    tags: ["Python", "Recommendation Systems", "Django", "PostgreSQL", "AWS"],
    github: "https://github.com",
    demo: "https://demo.com",
    date: "Nov 2022 - Feb 2023"
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
          <h2 className="text-3xl font-bold mb-8 text-center">Notable Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 bg-black/50 backdrop-blur-sm border-primary/20 h-full flex flex-col">
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover opacity-80 hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute bottom-2 left-2 bg-black/70 text-xs px-2 py-1 rounded-full flex items-center">
                      <Calendar className="h-3 w-3 mr-1 text-primary" />
                      <span>{project.date}</span>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-gradient text-lg">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-between">
                    <div>
                      <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs flex items-center"
                          >
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="px-2 py-1 bg-primary/5 text-primary/80 rounded-full text-xs">
                            +{project.tags.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-3 mt-auto">
                      <Button variant="outline" size="sm" className="border-primary/50 hover:border-primary flex-1" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" className="bg-primary/80 hover:bg-primary flex-1" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-1" />
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