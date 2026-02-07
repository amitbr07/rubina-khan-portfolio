import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Heart, Code2, Target } from "lucide-react";

const cards = [
  { icon: Code2, title: "Developer", desc: "Passionate about building modern web applications with clean, efficient code." },
  { icon: GraduationCap, title: "CS Graduate", desc: "Computer Science graduate with a strong foundation in algorithms and data structures." },
  { icon: Heart, title: "UI Enthusiast", desc: "Love creating beautiful, intuitive user interfaces that delight users." },
  { icon: Target, title: "Goal Oriented", desc: "Focused on delivering high-quality solutions that exceed expectations." },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding">
      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A dedicated frontend engineer who transforms ideas into elegant digital experiences.
            I believe great software is born from the intersection of creativity and technical excellence.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-xl p-6 text-center hover:scale-105 transition-transform group"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <card.icon size={24} />
              </div>
              <h3 className="font-heading font-semibold mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
