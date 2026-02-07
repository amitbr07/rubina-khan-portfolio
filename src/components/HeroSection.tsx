import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ExternalLink, Sparkles } from "lucide-react";
import { useRef } from "react";
import profileImg from "@/assets/profile.png";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

const HeroSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated background orbs */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[150px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-secondary/10 blur-[150px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[120px]"
        />
      </motion.div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/40"
          style={{ top: `${20 + i * 12}%`, left: `${10 + i * 15}%` }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}

      <motion.div style={{ opacity }} className="container-max px-4 sm:px-6 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0, duration: 0.8, ease: easeOut }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase glass-card text-primary mb-6"
            >
              <Sparkles size={12} /> Welcome to my portfolio
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.15, duration: 0.8, ease: easeOut }}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-4"
            >
              Hi, I'm{" "}
              <span className="gradient-text relative">
                Amit Kumar Sahu
                <motion.span
                  className="absolute -bottom-2 left-0 h-1 rounded-full"
                  style={{ background: "var(--gradient-primary)" }}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.3, duration: 0.8, ease: easeOut }}
              className="text-lg sm:text-xl text-secondary font-heading font-medium mb-4"
            >
              Frontend Engineer | UI Specialist
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.45, duration: 0.8, ease: easeOut }}
              className="text-muted-foreground text-base sm:text-lg max-w-lg mb-8 leading-relaxed"
            >
              Crafting pixel-perfect, accessible, and performant web experiences
              that bring ideas to life through clean code and thoughtful design.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.6, duration: 0.8, ease: easeOut }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(265 90% 60% / 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm text-primary-foreground transition-all"
                style={{ background: "var(--gradient-primary)" }}
              >
                View Projects <ExternalLink size={16} />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, borderColor: "hsl(265 90% 60%)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm glass-card text-foreground transition-all border border-border"
              >
                Hire Me
              </motion.a>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: easeOut }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Rotating rings */}
              <motion.div
                className="absolute -inset-6 rounded-full border border-dashed border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -inset-12 rounded-full border border-dashed border-secondary/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-primary/30 glow-effect relative"
              >
                <img
                  src={profileImg}
                  alt="Amit Kumar Sahu"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500" />
              </motion.div>

              {/* Orbiting dots */}
              {[0, 120, 240].map((deg, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full"
                  style={{
                    background: "var(--gradient-primary)",
                    top: "50%",
                    left: "50%",
                  }}
                  animate={{
                    x: [
                      Math.cos((deg * Math.PI) / 180) * 160,
                      Math.cos(((deg + 360) * Math.PI) / 180) * 160,
                    ],
                    y: [
                      Math.sin((deg * Math.PI) / 180) * 160,
                      Math.sin(((deg + 360) * Math.PI) / 180) * 160,
                    ],
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: i * 0.3 }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-xs tracking-widest uppercase">Scroll Down</span>
            <ArrowDown size={16} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
