import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, Phone, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error("Please enter a valid email");
      return;
    }
    setSending(true);
    setTimeout(() => {
      toast.success("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
      setSending(false);
    }, 1000);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "amit.sahu@email.com" },
    { icon: Phone, label: "Phone", value: "+91 98765 43210" },
    { icon: MapPin, label: "Location", value: "India" },
  ];

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[200px] pointer-events-none" />

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
            Let's talk
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ x: 6 }}
                className="flex items-start gap-4 group cursor-default"
              >
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 flex-shrink-0"
                >
                  <item.icon size={20} />
                </motion.div>
                <div>
                  <h3 className="font-heading font-semibold text-sm">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4"
          >
            {[
              { key: "name", type: "text", placeholder: "Your Name", maxLength: 100 },
              { key: "email", type: "email", placeholder: "Your Email", maxLength: 255 },
            ].map((field) => (
              <motion.div
                key={field.key}
                whileFocus={{ scale: 1.01 }}
                className="relative"
              >
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  value={form[field.key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                  onFocus={() => setFocused(field.key)}
                  onBlur={() => setFocused(null)}
                  maxLength={field.maxLength}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
                />
                {focused === field.key && (
                  <motion.div
                    layoutId="focus-indicator"
                    className="absolute -bottom-px left-0 right-0 h-[2px] rounded-full"
                    style={{ background: "var(--gradient-primary)" }}
                  />
                )}
              </motion.div>
            ))}

            <div className="relative">
              <textarea
                placeholder="Your Message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                maxLength={1000}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 resize-none"
              />
              {focused === "message" && (
                <motion.div
                  layoutId="focus-indicator"
                  className="absolute -bottom-px left-0 right-0 h-[2px] rounded-full"
                  style={{ background: "var(--gradient-primary)" }}
                />
              )}
            </div>

            <motion.button
              type="submit"
              disabled={sending}
              whileHover={{ scale: 1.03, boxShadow: "0 0 30px hsl(265 90% 60% / 0.3)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm text-primary-foreground transition-all disabled:opacity-50"
              style={{ background: "var(--gradient-primary)" }}
            >
              {sending ? (
                <>Sending... <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity }} className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full" /></>
              ) : (
                <>Send Message <Send size={16} /></>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
