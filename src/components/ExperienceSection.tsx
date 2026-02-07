import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const timeline = [
  { year: "2024", title: "Frontend Engineer", org: "Tech Company", desc: "Building scalable web applications and leading UI architecture decisions.", type: "work" },
  { year: "2023", title: "Junior Developer", org: "Startup Inc.", desc: "Developed responsive web apps and collaborated with cross-functional teams.", type: "work" },
  { year: "2022", title: "Freelance Developer", org: "Self-employed", desc: "Delivered 15+ client projects ranging from landing pages to full web apps.", type: "work" },
  { year: "2021", title: "CS Degree Completed", org: "University", desc: "Graduated with honors in Computer Science with a focus on web technologies.", type: "education" },
  { year: "2020", title: "First Internship", org: "Digital Agency", desc: "Gained hands-on experience with React, JavaScript, and agile development.", type: "work" },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[180px] pointer-events-none" />

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
            My path
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of my career and educational milestones.
          </p>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          {/* Animated vertical line */}
          <motion.div
            className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px sm:-translate-x-px"
            style={{ background: "var(--gradient-primary)" }}
            initial={{ scaleY: 0, originY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className={`relative flex items-start mb-10 sm:mb-12 ${
                i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              } flex-row`}
            >
              {/* Animated dot */}
              <motion.div
                className="absolute left-4 sm:left-1/2 w-4 h-4 rounded-full -translate-x-2 mt-1 z-10 ring-4 ring-background"
                style={{ background: "var(--gradient-primary)" }}
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.2, type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-primary"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                />
              </motion.div>

              {/* Content */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`ml-10 sm:ml-0 sm:w-1/2 ${i % 2 === 0 ? "sm:pr-10 sm:text-right" : "sm:pl-10"} glass-card rounded-lg p-4`}
              >
                <div className="flex items-center gap-2 mb-1" style={{ justifyContent: i % 2 === 0 ? "flex-end" : "flex-start" }}>
                  {item.type === "education" ? (
                    <GraduationCap size={14} className="text-primary" />
                  ) : (
                    <Briefcase size={14} className="text-primary" />
                  )}
                  <span className="text-xs font-medium text-primary">{item.year}</span>
                </div>
                <h3 className="font-heading font-semibold">{item.title}</h3>
                <p className="text-sm text-secondary">{item.org}</p>
                <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
