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

// SDG data with official UN colors and logo-style icons
const sdgFocus = [
  { code: '1', name: 'No Poverty', color: '#E5243B', icon: '👥' },
  { code: '2', name: 'Zero Hunger', color: '#DDA63A', icon: '🍽️' },
  { code: '3', name: 'Good Health', color: '#4C9F38', icon: '❤️' },
  { code: '4', name: 'Quality Education', color: '#C5192D', icon: '📚' },
  { code: '5', name: 'Gender Equality', color: '#FF3A21', icon: '⚧️' },
  { code: '6', name: 'Clean Water', color: '#26BDE2', icon: '💧' },
  { code: '7', name: 'Clean Energy', color: '#FCC30B', icon: '☀️' },
  { code: '8', name: 'Decent Work', color: '#A21942', icon: '📈' },
  { code: '9', name: 'Industry & Innovation', color: '#FD6925', icon: '🏭' },
  { code: '10', name: 'Reduced Inequalities', color: '#DD1367', icon: '⚖️' },
  { code: '11', name: 'Sustainable Cities', color: '#FD9D24', icon: '🏙️' },
  { code: '12', name: 'Responsible Consumption', color: '#BF8B2E', icon: '♻️' },
  { code: '13', name: 'Climate Action', color: '#3F7E44', icon: '🌍' },
  { code: '14', name: 'Life Below Water', color: '#0A97D9', icon: '🐟' },
  { code: '15', name: 'Life on Land', color: '#56C02B', icon: '🌲' },
  { code: '16', name: 'Peace & Justice', color: '#00689D', icon: '🕊️' },
  { code: '17', name: 'Partnerships', color: '#19486A', icon: '🤝' },
];

const certifications = [
  { name: 'Certified Scrum Product Owner', issuer: 'Scrum Alliance', icon: Target },
  { name: 'AI-Enhanced Project Management', issuer: '10 Academy', icon: Lightbulb },
  { name: 'AI Career Essentials', issuer: 'ALX Africa', icon: Sparkles },
  { name: 'Product Design Certification', issuer: 'Professional Cert', icon: Heart },
];

// SDG Icon component with proper styling
const SDGIcon = ({ sdg }: { sdg: typeof sdgFocus[0] }) => {
  return (
    <div 
      className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg"
      style={{ 
        backgroundColor: sdg.color,
      }}
    >
      {sdg.code}
    </div>
  );
};

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

          <div className="flex flex-wrap justify-center gap-4">
            {sdgFocus.map((sdg, index) => (
              <motion.div
                key={sdg.code}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.05 }}
                className="group cursor-pointer"
                whileHover={{ 
                  scale: 1.1,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div 
                  className="flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-300"
                  style={{
                    boxShadow: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 25px ${sdg.color}80, 0 0 50px ${sdg.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <SDGIcon sdg={sdg} />
                  <span className="text-xs font-medium text-foreground/80 max-w-[80px] text-center leading-tight">
                    {sdg.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
