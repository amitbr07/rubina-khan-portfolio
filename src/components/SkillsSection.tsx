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
    <section id="skills" className="section-padding">
      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to build exceptional digital products.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical skills with progress bars */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-heading font-semibold text-lg mb-6 text-primary">Technical Skills</h3>
            <div className="space-y-5">
              {technicalSkills.map((skill, i) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-xs text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ background: "var(--gradient-primary)" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4 text-primary">Tools</h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 rounded-lg text-sm font-medium glass-card hover:scale-105 transition-transform"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-lg mb-4 text-primary">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-lg text-sm font-medium glass-card hover:scale-105 transition-transform"
                  >
                    {skill}
                  </span>
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
