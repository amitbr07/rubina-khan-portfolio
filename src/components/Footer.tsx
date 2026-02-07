import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 relative overflow-hidden">
      {/* Subtle gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "var(--gradient-primary)" }} />

      <div className="container-max px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground flex items-center gap-1"
          >
            © 2026 Amit Kumar Sahu. Made with
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart size={14} className="text-primary fill-primary" />
            </motion.span>
          </motion.p>
          <div className="flex items-center gap-4">
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -3, scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.label}
              >
                <link.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
