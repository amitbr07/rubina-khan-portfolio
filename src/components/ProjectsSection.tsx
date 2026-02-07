import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Dashboard",
    desc: "A full-featured admin dashboard with analytics, product management, and real-time order tracking.",
    tech: ["React", "TypeScript", "Tailwind", "Firebase"],
    color: "from-primary/20 to-secondary/20",
  },
  {
    title: "Social Media App",
    desc: "A modern social platform with real-time messaging, stories, and content sharing capabilities.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    color: "from-secondary/20 to-accent/20",
  },
  {
    title: "Portfolio Generator",
    desc: "A drag-and-drop portfolio builder with customizable themes and responsive templates.",
    tech: ["React", "Tailwind", "Framer Motion"],
    color: "from-accent/20 to-primary/20",
  },
  {
    title: "Task Management Tool",
    desc: "Kanban-style project management app with team collaboration and deadline tracking features.",
    tech: ["React", "TypeScript", "REST API", "Redux"],
    color: "from-primary/20 to-accent/20",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[200px] pointer-events-none" />

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
            My work
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of projects that demonstrate my skills and passion for building great software.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="glass-card rounded-xl overflow-hidden group cursor-default"
            >
              {/* Gradient placeholder */}
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <motion.span
                  className="text-6xl font-heading font-bold text-foreground/10 group-hover:text-foreground/30 transition-all duration-500"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  {project.title.charAt(0)}
                </motion.span>
                {/* Hover shine */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                />
              </div>

              <div className="p-6">
                <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.desc}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary font-medium">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ x: 4 }}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-foreground transition-colors"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </motion.button>
                  <motion.button
                    whileHover={{ x: 4 }}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={14} /> GitHub
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
