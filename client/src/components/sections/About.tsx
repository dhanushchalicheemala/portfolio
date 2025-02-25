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
                src="https://images.unsplash.com/photo-1633412802994-5c058f151b66"
                alt="AI/ML Workspace"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <p className="text-lg leading-relaxed">
                    I'm a passionate Data Science student with a deep interest in Artificial Intelligence and Machine Learning. I specialize in developing AI solutions that solve real-world problems, with particular expertise in computer vision, natural language processing, and predictive analytics.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
                  <ul className="space-y-2">
                    <li>🎓 Data Science Student with focus on AI/ML</li>
                    <li>💡 Experience with TensorFlow, PyTorch, and Scikit-learn</li>
                    <li>🤖 Deep Learning & Neural Networks Enthusiast</li>
                    <li>📊 Data Analysis & Visualization Expert</li>
                    <li>🔬 Research Interest in Computer Vision & NLP</li>
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