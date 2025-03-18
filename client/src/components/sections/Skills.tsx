import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  SiPython, SiTensorflow, SiScikitlearn, 
  SiPandas, SiJupyter, SiOpenai,
  SiReact, SiNextdotjs, SiJavascript,
  SiTypescript, SiFlask, SiDjango,
  SiDocker, SiMongodb,
  SiPostgresql, SiGit
} from "react-icons/si";
import type { IconType } from "react-icons";

// Simple AWS icon component to replace the missing SiAws
function AwsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
      {...props}
    >
      <path d="M18.75 11.25H17.25V9.75H18.75V11.25ZM16.5 11.25H15V9.75H16.5V11.25ZM9.75 11.25H8.25V9.75H9.75V11.25ZM8.02 11.25H6.52V9.75H8.02V11.25ZM12.75 5.25H11.25V3.75H12.75V5.25ZM12.75 8.25H11.25V6.75H12.75V8.25ZM12.75 11.25H11.25V9.75H12.75V11.25ZM12.75 14.25H11.25V12.75H12.75V14.25ZM12.75 17.25H11.25V15.75H12.75V17.25ZM12.75 20.25H11.25V18.75H12.75V20.25Z" />
    </svg>
  );
}

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: IconType | typeof AwsIcon;
}

const skills: Skill[] = [
  // Programming Languages
  { name: "Python", level: 90, icon: SiPython, category: "Programming" },
  { name: "JavaScript", level: 85, icon: SiJavascript, category: "Programming" },
  { name: "TypeScript", level: 80, icon: SiTypescript, category: "Programming" },
  
  // Machine Learning & AI
  { name: "TensorFlow", level: 85, icon: SiTensorflow, category: "Machine Learning" },
  { name: "Scikit-learn", level: 85, icon: SiScikitlearn, category: "Machine Learning" },
  { name: "LLMs & GPT", level: 80, icon: SiOpenai, category: "AI" },
  
  // Data Analysis
  { name: "Pandas", level: 90, icon: SiPandas, category: "Data Analysis" },
  { name: "Jupyter", level: 85, icon: SiJupyter, category: "Data Analysis" },
  
  // Web Development
  { name: "React", level: 85, icon: SiReact, category: "Web Development" },
  { name: "Next.js", level: 80, icon: SiNextdotjs, category: "Web Development" },
  
  // Backend & Deployment
  { name: "Flask", level: 80, icon: SiFlask, category: "Backend" },
  { name: "Django", level: 75, icon: SiDjango, category: "Backend" },
  { name: "Docker", level: 75, icon: SiDocker, category: "DevOps" },
  { name: "AWS", level: 70, icon: AwsIcon, category: "Cloud" },
  
  // Databases
  { name: "MongoDB", level: 75, icon: SiMongodb, category: "Database" },
  { name: "PostgreSQL", level: 80, icon: SiPostgresql, category: "Database" },
  
  // Version Control
  { name: "Git", level: 85, icon: SiGit, category: "DevOps" },
];

export function Skills() {
  // Group skills by category
  const categories = Array.from(new Set(skills.map(skill => skill.category)));
  
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>

          {categories.map((category) => (
            <div key={category} className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-primary">{category}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-4 mb-2">
                            <skill.icon className="h-6 w-6 text-primary" />
                            <h3 className="text-base font-semibold">{skill.name}</h3>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                          <p className="text-xs text-right mt-1 text-muted-foreground">
                            {skill.level}%
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-center"
          >
            <p className="text-muted-foreground">
              Continuously learning and exploring new technologies in AI/ML and software development
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}