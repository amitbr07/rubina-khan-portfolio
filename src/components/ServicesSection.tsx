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
    <section id="services" className="section-padding">
      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
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
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-xl p-6 hover:scale-[1.02] transition-transform group"
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                <service.icon size={24} />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
