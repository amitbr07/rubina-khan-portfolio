import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  { name: "Sarah Johnson", role: "Product Manager", text: "Rubina delivered an exceptional frontend that exceeded our expectations. Her attention to detail and clean code made the project a huge success." },
  { name: "Ahmed Ali", role: "Startup Founder", text: "Working with Rubina was a fantastic experience. She brought creative solutions to complex UI challenges and delivered ahead of schedule." },
  { name: "Lisa Chen", role: "Design Lead", text: "Rubina perfectly translated our Figma designs into pixel-perfect code. Her understanding of UI/UX principles is truly impressive." },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="section-padding">
      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
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
          <div className="glass-card rounded-2xl p-8 sm:p-10 text-center relative">
            <Quote className="mx-auto mb-6 text-primary/30" size={40} />
            <p className="text-foreground text-base sm:text-lg leading-relaxed mb-6 italic">
              "{testimonials[current].text}"
            </p>
            <p className="font-heading font-semibold">{testimonials[current].name}</p>
            <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>

            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
