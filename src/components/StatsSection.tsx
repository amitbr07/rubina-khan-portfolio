import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Briefcase, Calendar, GitCommit, Users } from "lucide-react";

const stats = [
  { icon: Briefcase, label: "Projects Completed", value: 30 },
  { icon: Calendar, label: "Years Learning", value: 5 },
  { icon: GitCommit, label: "GitHub Commits", value: 850 },
  { icon: Users, label: "Happy Clients", value: 20 },
];

const Counter = ({ target, inView }: { target: number; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return <span>{count}+</span>;
};

const StatsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding">
      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card rounded-2xl p-8 sm:p-12 relative overflow-hidden"
        >
          {/* Background shimmer */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 5, repeat: Infinity, repeatDelay: 2 }}
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1 }}
                className="text-center cursor-default"
              >
                <motion.div
                  animate={inView ? { rotate: [0, 10, -10, 0] } : {}}
                  transition={{ delay: 0.8 + i * 0.15, duration: 0.5 }}
                >
                  <stat.icon className="mx-auto mb-3 text-primary" size={28} />
                </motion.div>
                <div className="text-3xl sm:text-4xl font-heading font-bold gradient-text mb-1">
                  <Counter target={stat.value} inView={inView} />
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
