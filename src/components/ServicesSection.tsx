import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Smartphone, Palette, Zap } from "lucide-react";

const services = [
  { icon: Globe, title: "Web Development", desc: "Building fast, responsive, and modern web applications using React and cutting-edge technologies." },
  { icon: Smartphone, title: "Mobile App Development", desc: "Creating cross-platform mobile experiences with React Native and progressive web apps." },
  { icon: Palette, title: "UI/UX Design", desc: "Designing intuitive interfaces with a focus on usability, accessibility, and visual appeal." },
  { icon: Zap, title: "Performance Optimization", desc: "Improving load times, Core Web Vitals, and overall application performance." },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-[200px] pointer-events-none" />

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
            What I offer
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Services I offer to help bring your digital vision to life.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, rotateY: 15 }}
              animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, boxShadow: "0 25px 50px hsl(265 90% 60% / 0.12)" }}
              className="glass-card rounded-xl p-6 group cursor-default relative overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 to-transparent" />

              <motion.div
                whileHover={{ rotate: [0, -15, 15, 0], scale: 1.15 }}
                transition={{ duration: 0.6 }}
                className="w-14 h-14 rounded-xl flex items-center justify-center bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 mb-4 relative z-10"
              >
                <service.icon size={26} />
              </motion.div>
              <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors relative z-10">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed relative z-10">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
