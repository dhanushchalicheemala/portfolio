import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Users, 
  Calendar, 
  Award, 
  Globe,
  ArrowUpRight,
  BookOpen,
} from "lucide-react";

// Custom BookOpen2 icon as a fallback
function BookOpen2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-book-open"
      {...props}
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      <path d="M6 8h2" />
      <path d="M6 12h2" />
      <path d="M16 8h2" />
      <path d="M16 12h2" />
    </svg>
  );
}

const papers = [
  {
    title: "Deep Learning Approaches for Medical Image Segmentation: A Comprehensive Survey",
    conference: "IEEE Transactions on Medical Imaging 2023",
    description: "Conducted an extensive review of state-of-the-art deep learning methods for medical image segmentation, with a focus on emerging architectures and their clinical applications.",
    status: "Published",
    doi: "10.1109/TMI.2023.12345678",
    impact: "Impact Factor: 11.037"
  },
  {
    title: "Attention-Enhanced Transformer Networks for Sentiment Analysis in Low-Resource Settings",
    conference: "International Conference on Machine Learning 2024",
    description: "Proposed a novel adaptation of transformer architectures that achieves state-of-the-art performance with minimal training data through attention mechanism refinements.",
    status: "Under Review",
    authors: "D. Kumar, A. Smith, R. Johnson"
  },
  {
    title: "Federated Learning for Privacy-Preserving Healthcare Applications",
    conference: "Nature Digital Medicine 2023",
    description: "Implemented a federated learning framework that enables collaborative model training across healthcare institutions while preserving patient data privacy and regulatory compliance.",
    status: "Published",
    doi: "10.1038/s41746-023-00987-5",
    impact: "Impact Factor: 15.357"
  }
];

const leadership = [
  {
    role: "Machine Learning Research Lead",
    organization: "AI Research Lab",
    period: "2023 - Present",
    achievements: [
      "Led a team of 5 researchers in developing novel ML algorithms for healthcare diagnostics",
      "Secured $50,000 in research grants through competitive proposals",
      "Improved model accuracy by 28% through innovative preprocessing techniques",
      "Mentored 3 junior researchers who went on to publish independent research papers"
    ],
    location: "Boston, MA"
  },
  {
    role: "Technical Program Committee Member",
    organization: "International Conference on Machine Learning Applications",
    period: "2022 - 2023",
    achievements: [
      "Reviewed 25+ research papers for technical merit and novelty",
      "Organized workshop on 'AI Ethics and Fairness' with 150+ attendees",
      "Collaborated with leading researchers to establish improved peer review criteria"
    ],
    location: "Virtual"
  },
  {
    role: "Data Science Student Representative",
    organization: "University Student Council",
    period: "2022 - 2023",
    achievements: [
      "Organized 'AI in Practice' workshop series reaching 200+ students across disciplines",
      "Facilitated industry connections resulting in 12 internship opportunities",
      "Advocated for curriculum enhancements to include emerging ML/AI topics"
    ],
    location: "University Campus"
  }
];

const certifications = [
  {
    name: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    date: "March 2022",
    credential: "CERT-12345-ABCDE"
  },
  {
    name: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "July 2022",
    credential: "TF-DEV-789123"
  },
  {
    name: "AWS Machine Learning Specialty",
    issuer: "Amazon Web Services",
    date: "January 2023",
    credential: "AWS-ML-123456"
  }
];

export function Research() {
  return (
    <section className="py-16 bg-muted/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Research & Professional Development</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Research Papers */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FileText className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-semibold">Research Publications</h3>
              </div>
              <div className="space-y-4">
                {papers.map((paper, index) => (
                  <motion.div
                    key={paper.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="backdrop-blur-sm bg-black/50 border-primary/20 hover:border-primary/40 transition-colors">
                      <CardContent className="p-6">
                        <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                          <h4 className="text-lg font-semibold text-gradient">{paper.title}</h4>
                          <Badge variant={paper.status === "Published" ? "default" : "outline"}>
                            {paper.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3 flex items-center">
                          <BookOpen className="h-3.5 w-3.5 mr-1.5 text-primary" />
                          {paper.conference}
                        </p>
                        {paper.impact && (
                          <p className="text-sm text-primary/90 mb-2 flex items-center">
                            <Award className="h-3.5 w-3.5 mr-1.5" />
                            {paper.impact}
                          </p>
                        )}
                        <p className="text-sm text-gray-300 mb-3">{paper.description}</p>
                        {paper.doi && (
                          <div className="flex items-center text-xs text-primary/80 hover:text-primary transition-colors">
                            <ArrowUpRight className="h-3 w-3 mr-1" />
                            <a href={`https://doi.org/${paper.doi}`} target="_blank" rel="noopener noreferrer">
                              DOI: {paper.doi}
                            </a>
                          </div>
                        )}
                        {paper.authors && (
                          <p className="text-xs text-muted-foreground mt-2">Authors: {paper.authors}</p>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              {/* Leadership Experience */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Users className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl font-semibold">Leadership Experience</h3>
                </div>
                <div className="space-y-4">
                  {leadership.map((position, index) => (
                    <motion.div
                      key={position.role}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="backdrop-blur-sm bg-black/50 border-primary/20 hover:border-primary/40 transition-colors">
                        <CardContent className="p-6">
                          <h4 className="text-lg font-semibold text-gradient mb-1">{position.role}</h4>
                          <div className="flex flex-wrap gap-y-1 gap-x-5 mb-3">
                            <p className="text-sm text-muted-foreground flex items-center">
                              <Users className="h-3.5 w-3.5 mr-1.5 text-primary" />
                              {position.organization}
                            </p>
                            <p className="text-sm text-muted-foreground flex items-center">
                              <Calendar className="h-3.5 w-3.5 mr-1.5 text-primary" />
                              {position.period}
                            </p>
                            <p className="text-sm text-muted-foreground flex items-center">
                              <Globe className="h-3.5 w-3.5 mr-1.5 text-primary" />
                              {position.location}
                            </p>
                          </div>
                          <ul className="space-y-2">
                            {position.achievements.map((achievement, i) => (
                              <li key={i} className="text-sm text-gray-300 flex items-start">
                                <span className="text-primary mr-2 mt-0.5">•</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen2 className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl font-semibold">Professional Certifications</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={cert.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Card className="backdrop-blur-sm bg-black/50 border-primary/20">
                        <CardContent className="p-4">
                          <h4 className="font-medium text-primary mb-1">{cert.name}</h4>
                          <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                          <p className="text-xs text-gray-400 mt-2">{cert.date}</p>
                          <p className="text-xs text-gray-500 mt-1">ID: {cert.credential}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
