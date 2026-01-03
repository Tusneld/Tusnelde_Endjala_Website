import { motion } from 'framer-motion';
import { Cloud, Heart, Github, Linkedin, Mail, ArrowUp, Instagram, Facebook } from 'lucide-react';

// Custom X (Twitter) icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/tusnelde-endjala-a65302253/', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/Tusneld', label: 'GitHub' },
  { icon: XIcon, href: 'https://x.com/TusneldeE', label: 'X' },
  { icon: Instagram, href: 'https://www.instagram.com/endjalatusnelde/', label: 'Instagram' },
  { icon: Facebook, href: 'https://www.facebook.com/TusneldeEndjala', label: 'Facebook' },
  { icon: Mail, href: 'mailto:tusneldelainae@gmail.com', label: 'Email' },
];

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'AWS Roadmap', href: '#aws-roadmap' },
  { name: 'Contact', href: '#contact' },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-border bg-card/50">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2 mb-4">
              <Cloud className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold gradient-text">Tusnelde Endjala</span>
            </a>
            <p className="text-sm text-muted-foreground mb-4">
              Multi-disciplinary technology professional building cloud-native solutions 
              for Africa's digital future.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Certifications in Progress */}
          <div>
            <h4 className="font-semibold mb-4">Currently Pursuing</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-muted-foreground">AWS Cloud Practitioner</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-muted-foreground">AWS Solutions Architect</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-muted-foreground">ALX Software Engineering</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span className="text-muted-foreground">B.Sc. Data Science</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {new Date().getFullYear()} Tusnelde Endjala. Built with{' '}
            <Heart className="w-4 h-4 text-red-500 inline" /> in Namibia
          </p>

          <motion.button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors group"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:text-primary transition-colors" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
