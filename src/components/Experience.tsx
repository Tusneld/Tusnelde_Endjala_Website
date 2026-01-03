import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, Building2 } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  description: string;
  type: 'full-time' | 'volunteer' | 'intern';
}

const experiences: ExperienceItem[] = [
  {
    title: 'Project/Operations Intern',
    company: '10 Academy',
    date: '08/2024 - 03/2025',
    description: 'Managed remote submission consistency across multiple cohorts. Coordinated training operations and managed session logistics, contributing to a 30% increase in program efficiency.',
    type: 'intern',
  },
  {
    title: 'QA Tester (Volunteer)',
    company: 'Beden Group – Partyjor App',
    date: '04/2025',
    description: 'Tested end-to-end user flows across web and Android platforms. Reported bugs and inconsistencies enabling timely fixes by the development team.',
    type: 'volunteer',
  },
];

const typeColors = {
  'full-time': 'bg-emerald-500',
  'volunteer': 'bg-purple-500',
  'intern': 'bg-blue-500',
};

const typeLabels = {
  'full-time': 'Full-time',
  'volunteer': 'Volunteer',
  'intern': 'Internship',
};

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="relative py-24 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm uppercase tracking-wider">Career Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Vertical Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30 md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative mb-12 pl-12 md:pl-0 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:text-left'
              }`}
            >
              {/* Timeline Node */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.2 }}
                className={`absolute left-0 md:left-1/2 w-8 h-8 rounded-full glass-card border-2 border-primary flex items-center justify-center md:-translate-x-1/2`}
              >
                <Briefcase className="w-4 h-4 text-primary" />
              </motion.div>

              {/* Card */}
              <div className={`glass-card p-6 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                {/* Type Badge */}
                <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium text-white ${typeColors[exp.type]} mb-3`}>
                  {typeLabels[exp.type]}
                </span>

                <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                
                <div className={`flex items-center gap-4 mb-3 text-sm text-muted-foreground ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                  <span className="flex items-center gap-1">
                    <Building2 className="w-4 h-4" />
                    {exp.company}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {exp.date}
                  </span>
                </div>

                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
