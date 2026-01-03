import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, Globe, Heart, BookOpen, Lightbulb, Target, Sparkles } from 'lucide-react';

const leadershipRoles = [
  {
    title: 'Potentialife Ignite Leader',
    subtitle: 'Level 1 Leadership Graduate',
    description: 'Leadership development program focused on personal growth, emotional intelligence, and community impact.',
    icon: Sparkles,
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    title: 'Africa Agility Ambassador',
    subtitle: 'Tech Community Advocate',
    description: 'Promoting agile methodologies and modern software practices across African tech communities.',
    icon: Globe,
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Power Learn Project Ambassador',
    subtitle: 'PLP Academy Representative',
    description: 'Empowering youth through technology education and digital skills training initiatives.',
    icon: BookOpen,
    gradient: 'from-blue-500 to-cyan-500',
  },
];

const sdgFocus = [
  { code: '1', name: 'No Poverty', color: 'bg-red-600' },
  { code: '4', name: 'Quality Education', color: 'bg-red-700' },
  { code: '5', name: 'Gender Equality', color: 'bg-orange-500' },
  { code: '8', name: 'Decent Work', color: 'bg-rose-600' },
  { code: '9', name: 'Industry & Innovation', color: 'bg-amber-600' },
  { code: '10', name: 'Reduced Inequalities', color: 'bg-pink-600' },
  { code: '17', name: 'Partnerships', color: 'bg-blue-800' },
];

const certifications = [
  { name: 'Certified Scrum Product Owner', issuer: 'Scrum Alliance', icon: Target },
  { name: 'AI-Enhanced Project Management', issuer: '10 Academy', icon: Lightbulb },
  { name: 'AI Career Essentials', issuer: 'ALX Africa', icon: Sparkles },
  { name: 'Product Design Certification', issuer: 'Professional Cert', icon: Heart },
];

export const Leadership = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="leadership" className="relative py-24 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm uppercase tracking-wider">Impact & Advocacy</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Leadership & <span className="gradient-text">Values</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Leadership Roles */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {leadershipRoles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 group hover:border-primary/50 transition-all"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${role.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <role.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-1">{role.title}</h3>
              <p className="text-sm text-primary font-medium mb-3">{role.subtitle}</p>
              <p className="text-sm text-muted-foreground">{role.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass-card p-8 mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-bold">Professional Certifications</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
              >
                <cert.icon className="w-5 h-5 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold text-sm mb-1">{cert.name}</h4>
                <p className="text-xs text-muted-foreground">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SDG Focus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Globe className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-bold">Sustainable Development Goals Focus</h3>
          </div>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Committed to contributing to the UN Sustainable Development Goals through technology 
            and community initiatives.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {sdgFocus.map((sdg, index) => (
              <motion.div
                key={sdg.code}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.05 }}
                className={`${sdg.color} px-4 py-2 rounded-lg text-white text-sm font-semibold flex items-center gap-2`}
                whileHover={{ scale: 1.05 }}
              >
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs">
                  {sdg.code}
                </span>
                {sdg.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
