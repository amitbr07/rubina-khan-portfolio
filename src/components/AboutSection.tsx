import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Heart, Code2, Target } from "lucide-react";

const cards = [
  { icon: Code2, title: "Developer", desc: "Passionate about building modern web applications with clean, efficient code." },
  { icon: GraduationCap, title: "CS Graduate", desc: "Computer Science graduate with a strong foundation in algorithms and data structures." },
  { icon: Heart, title: "UI Enthusiast", desc: "Love creating beautiful, intuitive user interfaces that delight users." },
  { icon: Target, title: "Goal Oriented", desc: "Focused on delivering high-quality solutions that exceed expectations." },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[200px] pointer-events-none" />

      <div className="container-max relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1 rounded-full text-xs font-medium uppercase tracking-wider glass-card text-primary mb-4"
          >
            Get to know me
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A dedicated frontend engineer who transforms ideas into elegant digital experiences.
            I believe great software is born from the intersection of creativity and technical excellence.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              whileHover={{ y: -8, boxShadow: "0 20px 40px hsl(265 90% 60% / 0.15)" }}
              className="glass-card rounded-xl p-6 text-center group cursor-default"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
              >
                <card.icon size={26} />
              </motion.div>
              <h3 className="font-heading font-semibold mb-2 group-hover:text-primary transition-colors">{card.title}</h3>
              <p className="text-sm text-muted-foreground">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
