import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const technicalSkills = [
  { name: "React", level: 90 },
  { name: "JavaScript", level: 88 },
  { name: "TypeScript", level: 82 },
  { name: "Tailwind CSS", level: 92 },
  { name: "Firebase", level: 75 },
  { name: "REST APIs", level: 85 },
  { name: "Git", level: 80 },
];

const tools = ["VS Code", "Figma", "Postman", "Chrome DevTools", "GitHub"];
const softSkills = ["Problem Solving", "Creativity", "Communication", "Team Collaboration", "Adaptability"];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[180px] pointer-events-none" />

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
            What I know
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to build exceptional digital products.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical skills */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="font-heading font-semibold text-lg mb-6 text-primary">Technical Skills</h3>
            <div className="space-y-5">
              {technicalSkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                >
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <motion.span
                      className="text-xs text-muted-foreground"
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.8 + i * 0.1 }}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>
                  <div className="h-2.5 rounded-full bg-muted overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1.2, delay: 0.4 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full relative overflow-hidden"
                      style={{ background: "var(--gradient-primary)" }}
                    >
                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1.5 + i * 0.1, repeatDelay: 3 }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4 text-primary">Tools</h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, i) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.08, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.1, boxShadow: "0 0 20px hsl(265 90% 60% / 0.2)" }}
                    className="px-4 py-2 rounded-lg text-sm font-medium glass-card cursor-default"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-lg mb-4 text-primary">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.7 + i * 0.08, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.1, boxShadow: "0 0 20px hsl(265 90% 60% / 0.2)" }}
                    className="px-4 py-2 rounded-lg text-sm font-medium glass-card cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
