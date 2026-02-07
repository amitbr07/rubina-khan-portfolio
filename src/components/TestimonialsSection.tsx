import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  { name: "Sarah Johnson", role: "Product Manager", text: "Amit delivered an exceptional frontend that exceeded our expectations. His attention to detail and clean code made the project a huge success." },
  { name: "Ahmed Ali", role: "Startup Founder", text: "Working with Amit was a fantastic experience. He brought creative solutions to complex UI challenges and delivered ahead of schedule." },
  { name: "Lisa Chen", role: "Design Lead", text: "Amit perfectly translated our Figma designs into pixel-perfect code. His understanding of UI/UX principles is truly impressive." },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const prev = () => { setDirection(-1); setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1)); };
  const next = () => { setDirection(1); setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1)); };

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 100 : -100, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -100 : 100, opacity: 0, scale: 0.95 }),
  };

  return (
    <section className="section-padding relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[180px] pointer-events-none" />

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
            Testimonials
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            What People <span className="gradient-text">Say</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card rounded-2xl p-8 sm:p-10 text-center relative overflow-hidden min-h-[300px] flex flex-col justify-center">
            {/* Background decoration */}
            <Quote className="absolute top-4 left-4 text-primary/5" size={80} />
            <Quote className="absolute bottom-4 right-4 text-primary/5 rotate-180" size={80} />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * i }}
                    >
                      <Star size={16} className="fill-primary text-primary" />
                    </motion.div>
                  ))}
                </div>

                <p className="text-foreground text-base sm:text-lg leading-relaxed mb-6 italic">
                  "{testimonials[current].text}"
                </p>

                {/* Avatar circle */}
                <div className="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center text-lg font-heading font-bold text-primary-foreground"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  {testimonials[current].name.charAt(0)}
                </div>
                <p className="font-heading font-semibold">{testimonials[current].name}</p>
                <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-6 mt-8 relative z-10">
              <motion.button
                onClick={prev}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </motion.button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                    className={`rounded-full transition-all ${i === current ? "w-6 h-2" : "w-2 h-2"}`}
                    style={{ background: i === current ? "var(--gradient-primary)" : "hsl(var(--muted))" }}
                    whileHover={{ scale: 1.3 }}
                    layout
                  />
                ))}
              </div>

              <motion.button
                onClick={next}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
