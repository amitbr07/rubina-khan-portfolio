import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
    <section id="experience" className="section-padding">
      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of my career and educational milestones.
          </p>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-border sm:-translate-x-px" />

          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative flex items-start mb-10 sm:mb-12 ${
                i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              } flex-row`}
            >
              {/* Dot */}
              <div className="absolute left-4 sm:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-1.5 z-10 ring-4 ring-background" />

              {/* Content */}
              <div className={`ml-10 sm:ml-0 sm:w-1/2 ${i % 2 === 0 ? "sm:pr-10 sm:text-right" : "sm:pl-10"}`}>
                <span className="text-xs font-medium text-primary">{item.year}</span>
                <h3 className="font-heading font-semibold mt-1">{item.title}</h3>
                <p className="text-sm text-secondary">{item.org}</p>
                <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
