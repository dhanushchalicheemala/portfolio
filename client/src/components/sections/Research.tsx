import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Users } from "lucide-react";

const papers = [
  {
    title: "Sentiment Analysis Using Deep Learning",
    conference: "International Conference on Machine Learning 2024",
    description: "Novel approach to sentiment analysis using transformer architectures and attention mechanisms",
    status: "Under Review"
  },
  {
    title: "Enhanced Object Detection for Autonomous Systems",
    conference: "Computer Vision Conference 2023",
    description: "Improved object detection methodology for real-time autonomous systems",
    status: "Published"
  }
];

const leadership = [
  {
    role: "Machine Learning Research Lead",
    organization: "AI Research Lab",
    period: "2023 - Present",
    achievements: [
      "Led a team of 5 researchers in developing novel ML algorithms",
      "Improved model accuracy by 25% through innovative preprocessing techniques",
      "Published 2 research papers in leading conferences"
    ]
  },
  {
    role: "Data Science Student Representative",
    organization: "University Student Council",
    period: "2022 - 2023",
    achievements: [
      "Organized AI/ML workshops reaching 200+ students",
      "Facilitated industry connections leading to 10+ internship opportunities",
      "Mentored junior students in data science projects"
    ]
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
          <h2 className="text-3xl font-bold mb-8 text-center">Research & Leadership</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Research Papers */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FileText className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-semibold">Research Papers</h3>
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
                    <Card className="backdrop-blur-sm bg-black/50 border-primary/20">
                      <CardContent className="p-6">
                        <h4 className="text-lg font-semibold text-gradient mb-2">{paper.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{paper.conference}</p>
                        <p className="text-sm text-gray-300 mb-2">{paper.description}</p>
                        <span className="inline-block px-2 py-1 text-xs rounded-full bg-primary/20 text-primary">
                          {paper.status}
                        </span>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

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
                    <Card className="backdrop-blur-sm bg-black/50 border-primary/20">
                      <CardContent className="p-6">
                        <h4 className="text-lg font-semibold text-gradient mb-1">{position.role}</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          {position.organization} | {position.period}
                        </p>
                        <ul className="space-y-2">
                          {position.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-gray-300 flex items-start">
                              <span className="text-primary mr-2">•</span>
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
