import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Lightbulb, Languages, UserCircle } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <UserCircle className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-semibold">Professional Summary</h3>
                  </div>
                  <p className="text-base leading-relaxed">
                    I'm a passionate Data Science student with a deep interest in Artificial Intelligence and Machine Learning. 
                    I specialize in developing AI solutions that solve real-world problems, with expertise in computer vision, 
                    natural language processing, and full-stack development. My goal is to create scalable and efficient AI 
                    systems that make a meaningful impact across industries.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-semibold">Education</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">B.Tech in Data Science</h4>
                      <p className="text-sm text-muted-foreground">Prestigious Technical University</p>
                      <p className="text-sm">2020 - 2024</p>
                      <p className="text-sm mt-1">CGPA: 3.9/4.0</p>
                    </div>
                    <div>
                      <h4 className="font-medium">AI Specialization Certificate</h4>
                      <p className="text-sm text-muted-foreground">DeepLearning.AI & Stanford Online</p>
                      <p className="text-sm">2022</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Lightbulb className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-semibold">Areas of Interest</h3>
                  </div>
                  <ul className="grid grid-cols-2 gap-2">
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-primary rounded-full"></span>
                      <span>Computer Vision</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-primary rounded-full"></span>
                      <span>Natural Language Processing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-primary rounded-full"></span>
                      <span>Generative AI</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-primary rounded-full"></span>
                      <span>Deep Learning</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-primary rounded-full"></span>
                      <span>Data Analysis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-primary rounded-full"></span>
                      <span>Full-Stack Development</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-semibold">Achievements</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      <span>Top 5% in National AI Challenge 2023</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      <span>University Research Grant for ML Project ($5,000)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      <span>1st Place in Hackathon for Social Impact</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      <span>Dean's List for Academic Excellence (3 consecutive semesters)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Languages className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-semibold">Languages</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex justify-between items-center">
                      <span>English</span>
                      <span className="text-sm text-muted-foreground">Professional Proficiency</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>Hindi</span>
                      <span className="text-sm text-muted-foreground">Native</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>Tamil</span>
                      <span className="text-sm text-muted-foreground">Native</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}