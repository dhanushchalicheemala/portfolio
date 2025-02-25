import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  SiReact, SiTypescript, SiNodedotjs, 
  SiTailwindcss, SiPython, SiDocker 
} from "react-icons/si";

const skills = [
  { name: "React", level: 90, icon: SiReact },
  { name: "TypeScript", level: 85, icon: SiTypescript },
  { name: "Node.js", level: 80, icon: SiNodedotjs },
  { name: "Tailwind CSS", level: 95, icon: SiTailwindcss },
  { name: "Python", level: 75, icon: SiPython },
  { name: "Docker", level: 70, icon: SiDocker },
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
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <skill.icon className="h-8 w-8 text-primary" />
                      <h3 className="text-lg font-semibold">{skill.name}</h3>
                    </div>
                    <Progress value={skill.level} className="h-2" />
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
