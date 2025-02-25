import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  SiPython, SiTensorflow, SiScikitlearn, 
  SiPandas, SiJupyter, SiOpenai 
} from "react-icons/si";

const skills = [
  { name: "Python", level: 90, icon: SiPython, category: "Programming" },
  { name: "TensorFlow", level: 85, icon: SiTensorflow, category: "Machine Learning" },
  { name: "Scikit-learn", level: 85, icon: SiScikitlearn, category: "Machine Learning" },
  { name: "Pandas", level: 90, icon: SiPandas, category: "Data Analysis" },
  { name: "Jupyter", level: 85, icon: SiJupyter, category: "Development" },
  { name: "LLMs & GPT", level: 80, icon: SiOpenai, category: "AI" },
];

export function Skills() {
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

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <skill.icon className="h-8 w-8 text-primary" />
                      <div>
                        <h3 className="text-lg font-semibold">{skill.name}</h3>
                        <p className="text-sm text-muted-foreground">{skill.category}</p>
                      </div>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                    <p className="text-sm text-right mt-2 text-muted-foreground">
                      {skill.level}%
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground">
              Continuously learning and exploring new technologies in AI/ML
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}