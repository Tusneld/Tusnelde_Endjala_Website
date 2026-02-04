// Import animation library for smooth transitions and effects
import { motion } from 'framer-motion';
// Import hook to detect when element enters viewport
import { useInView } from 'framer-motion';
// Import React hook for DOM references
import { useRef } from 'react';
// Import icons from lucide-react icon library
import { Briefcase, Calendar, Building2, MapPin, TrendingUp } from 'lucide-react';

// TypeScript interface defining the structure of each experience item
interface ExperienceItem {
  title: string;           // Job title
  company: string;         // Company name
  date: string;            // Employment period
  location: string;        // Work location (Remote, On-site, etc.)
  description: string;     // Main job description
  highlights: string[];    // Key achievements as bullet points
  type: 'full-time' | 'volunteer' | 'intern';  // Employment type
}

// Array of experience data - each object represents one job/role
const experiences: ExperienceItem[] = [
  {
    title: 'Project/Operations Intern',
    company: '10 Academy',
    date: 'Aug 2024 - Mar 2025',
    location: 'Remote',
    description: 'Managed remote submission consistency across multiple cohorts. Coordinated training operations and managed session logistics, contributing to a 30% increase in program efficiency.',
    highlights: [
      'Improved program efficiency by 30%',
      'Coordinated training for multiple cohorts',
      'Streamlined submission processes',
    ],
    type: 'intern',
  },
  {
    title: 'QA Tester (Volunteer)',
    company: 'Beden Group – Partyjor App',
    date: 'Apr 2025',
    location: 'Remote',
    description: 'Tested end-to-end user flows across web and Android platforms. Reported bugs and inconsistencies enabling timely fixes by the development team.',
    highlights: [
      'Tested web and Android platforms',
      'Reported critical bugs and inconsistencies',
      'Enabled timely fixes for development team',
    ],
    type: 'volunteer',
  },
];

// Color mapping for different employment types - used for badge backgrounds
const typeColors = {
  'full-time': 'bg-emerald-500',
  'volunteer': 'bg-purple-500',
  'intern': 'bg-blue-500',
};

// Label mapping for employment types - displayed text on badges
const typeLabels = {
  'full-time': 'Full-time',
  'volunteer': 'Volunteer',
  'intern': 'Internship',
};

// Main Experience component - renders the work experience section
export const Experience = () => {
  // Create a ref to attach to the section for viewport detection
  const ref = useRef(null);
  // Hook that returns true when element is in viewport (triggers once, with 100px margin)
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    // Main section wrapper with id for navigation and padding
    <section id="experience" className="relative py-24 overflow-hidden" ref={ref}>
      {/* Background gradient overlay for visual depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      {/* Container for content with responsive padding */}
      <div className="container relative z-10 mx-auto px-4 md:px-8">
        {/* Section header with animated entrance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}           // Start invisible and 30px below
          animate={isInView ? { opacity: 1, y: 0 } : {}}  // Animate to visible when in view
          transition={{ duration: 0.5 }}             // Animation takes 0.5 seconds
          className="text-center mb-16"
        >
          {/* Small label above main heading */}
          <span className="text-primary font-mono text-sm uppercase tracking-wider">Career Journey</span>
          {/* Main section heading with gradient text effect */}
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          {/* Decorative divider line */}
          <div className="section-divider" />
        </motion.div>

        {/* Experience cards container - max width for readability */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Map through each experience item and render a card */}
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}                        // Unique key for React list rendering
              initial={{ opacity: 0, y: 50 }}        // Start invisible and 50px below
              animate={isInView ? { opacity: 1, y: 0 } : {}}  // Animate when in view
              transition={{ duration: 0.5, delay: index * 0.2 }}  // Stagger animation by index
              className="group"
            >
              {/* Glass-effect card container */}
              <div className="glass-card p-6 md:p-8">
                {/* Top row: Type badge and date/location info */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                  {/* Employment type badge (Internship, Volunteer, etc.) */}
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium text-white ${typeColors[exp.type]} w-fit`}>
                    {typeLabels[exp.type]}
                  </span>
                  
                  {/* Date and location container */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    {/* Calendar icon with date */}
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.date}
                    </span>
                    {/* Location pin icon with location text */}
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Job title - large and bold */}
                <h3 className="text-xl md:text-2xl font-bold mb-2">{exp.title}</h3>
                
                {/* Company name with building icon */}
                <div className="flex items-center gap-2 mb-4 text-primary">
                  <Building2 className="w-5 h-5" />
                  <span className="font-medium">{exp.company}</span>
                </div>

                {/* Main job description paragraph */}
                <p className="text-muted-foreground mb-6">{exp.description}</p>

                {/* Key achievements/highlights section */}
                <div className="space-y-3">
                  {/* Map through each highlight and render as a bullet point */}
                  {exp.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-3">
                      {/* Trending up icon as bullet point indicator */}
                      <TrendingUp className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      {/* Highlight text */}
                      <span className="text-sm text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
