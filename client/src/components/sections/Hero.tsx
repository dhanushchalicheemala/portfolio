import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen pt-16 flex items-center relative overflow-hidden bg-black">
      {/* Neural network background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.1)_0,transparent_100%)]" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Neural Network Animation */}
      <div className="absolute inset-0 z-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: [0.8, 1, 0.8],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 1,
              ease: "easeInOut",
            }}
            style={{
              left: `${45 + i * 5}%`,
              top: `${35 + i * 5}%`,
              width: "50px",
              height: "50px",
              background: `radial-gradient(circle, rgba(147,51,234,0.3) 0%, rgba(147,51,234,0) 70%)`,
              borderRadius: "50%",
            }}
          />
        ))}
      </div>

      {/* Floating data particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-primary/50 rounded-full"
          animate={{
            y: ["0%", "100%"],
            x: ["-50%", "50%"],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `-${Math.random() * 20}%`,
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-4 mb-6">
            {/* Neural Network Node Animation */}
            <motion.div
              className="relative w-12 h-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {/* Central Node */}
              <motion.div
                className="absolute inset-0 bg-primary rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Orbiting Nodes */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`node-${i}`}
                  className="absolute w-2 h-2 bg-primary/80 rounded-full"
                  animate={{
                    rotate: 360,
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    rotate: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.5,
                    },
                    scale: {
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.3,
                    },
                  }}
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: `rotate(${i * 120}deg) translateX(20px)`,
                  }}
                />
              ))}

              {/* Connecting Lines */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`line-${i}`}
                  className="absolute left-1/2 top-1/2 w-[1px] h-[20px] bg-primary/30 origin-bottom"
                  animate={{
                    rotate: 360,
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    rotate: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.5,
                    },
                    opacity: {
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.3,
                    },
                  }}
                  style={{
                    transform: `rotate(${i * 120}deg)`,
                  }}
                />
              ))}
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Dhanush
              </span>
            </h1>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            A passionate Data Science student exploring the frontiers of AI/ML to solve real-world problems
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="h-8 w-8 text-primary animate-pulse" />
      </motion.div>
    </section>
  );
}