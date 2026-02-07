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
    <section id="projects" className="section-padding">
      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
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
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-xl overflow-hidden group hover:scale-[1.02] transition-transform"
            >
              {/* Gradient placeholder for project image */}
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                <span className="text-4xl font-heading font-bold text-foreground/20 group-hover:text-foreground/40 transition-colors">
                  {project.title.charAt(0)}
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-heading font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.desc}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary font-medium">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-foreground transition-colors">
                    <ExternalLink size={14} /> Live Demo
                  </button>
                  <button className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors">
                    <Github size={14} /> GitHub
                  </button>
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
