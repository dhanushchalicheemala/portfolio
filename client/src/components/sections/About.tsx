import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

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
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1573496799515-eebbb63814f2"
                alt="Profile"
                className="rounded-lg shadow-lg"
              />
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <p className="text-lg leading-relaxed">
                    I'm a full-stack developer with a passion for creating beautiful and functional web applications. With years of experience in modern web technologies, I specialize in building responsive and user-friendly solutions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
                  <ul className="space-y-2">
                    <li>🎓 Computer Science Graduate</li>
                    <li>💼 5+ Years of Professional Experience</li>
                    <li>🌍 Remote Work Enthusiast</li>
                    <li>📚 Continuous Learner</li>
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
