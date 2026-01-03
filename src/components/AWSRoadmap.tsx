import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cloud, Award, Target, Rocket, CheckCircle2, Circle, ArrowRight } from 'lucide-react';

interface CertStep {
  title: string;
  code: string;
  description: string;
  skills: string[];
  status: 'completed' | 'in-progress' | 'upcoming';
  icon: typeof Cloud;
}

const certificationPath: CertStep[] = [
  {
    title: 'AWS Cloud Practitioner',
    code: 'CLF-C02',
    description: 'Foundational understanding of AWS Cloud, services, and terminology.',
    skills: ['Cloud Concepts', 'Security & Compliance', 'Core Services', 'Pricing & Billing'],
    status: 'in-progress',
    icon: Cloud,
  },
  {
    title: 'AWS Solutions Architect Associate',
    code: 'SAA-C03',
    description: 'Design resilient, high-performing, secure, and cost-optimized architectures.',
    skills: ['Architecture Design', 'High Availability', 'Resilient Systems', 'Cost Optimization'],
    status: 'upcoming',
    icon: Target,
  },
  {
    title: 'AWS Solutions Architect Professional',
    code: 'SAP-C02',
    description: 'Advanced skills in designing complex AWS solutions for enterprise organizations.',
    skills: ['Complex Architectures', 'Migration Strategies', 'Enterprise Solutions', 'Multi-Account'],
    status: 'upcoming',
    icon: Rocket,
  },
];

const currentAWSProjects = [
  'Building serverless applications with AWS Lambda and API Gateway',
  'Implementing cloud data pipelines with AWS Glue and Redshift',
  'Deploying containerized applications using ECS and ECR',
  'Designing cloud architecture for scalable web applications',
];

export const AWSRoadmap = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="aws-roadmap" className="relative py-24 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm uppercase tracking-wider">Certification Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            AWS <span className="gradient-text">Roadmap</span>
          </h2>
          <div className="section-divider" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            My journey to becoming a certified AWS Solutions Architect, building expertise in 
            cloud architecture, serverless computing, and scalable data solutions.
          </p>
        </motion.div>

        {/* Certification Timeline */}
        <div className="relative max-w-4xl mx-auto mb-16">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-primary/20 hidden md:block" />

          {certificationPath.map((cert, index) => (
            <motion.div
              key={cert.code}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative flex items-center gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
                <motion.div
                  className={`w-4 h-4 rounded-full border-2 ${
                    cert.status === 'in-progress'
                      ? 'bg-primary border-primary animate-pulse'
                      : cert.status === 'completed'
                      ? 'bg-emerald-500 border-emerald-500'
                      : 'bg-secondary border-border'
                  }`}
                  whileHover={{ scale: 1.5 }}
                />
              </div>

              {/* Card */}
              <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                <motion.div
                  className={`glass-card p-6 relative overflow-hidden ${
                    cert.status === 'in-progress' ? 'border-primary/50' : ''
                  }`}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Status Indicator */}
                  <div className="absolute top-4 right-4">
                    {cert.status === 'completed' && (
                      <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-medium">
                        <CheckCircle2 className="w-3 h-3" />
                        Completed
                      </span>
                    )}
                    {cert.status === 'in-progress' && (
                      <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                        <motion.div
                          className="w-2 h-2 rounded-full bg-primary"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                        In Progress
                      </span>
                    )}
                    {cert.status === 'upcoming' && (
                      <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-secondary text-muted-foreground text-xs font-medium">
                        <Circle className="w-3 h-3" />
                        Upcoming
                      </span>
                    )}
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-xl ${
                      cert.status === 'in-progress' 
                        ? 'bg-primary/20' 
                        : 'bg-secondary'
                    }`}>
                      <cert.icon className={`w-6 h-6 ${
                        cert.status === 'in-progress' ? 'text-primary' : 'text-muted-foreground'
                      }`} />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-muted-foreground mb-1">{cert.code}</p>
                      <h3 className="text-lg font-bold">{cert.title}</h3>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 rounded-md bg-secondary text-xs font-medium text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Empty Space for alignment */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>

        {/* Current AWS Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="glass-card p-8 max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/20">
              <Rocket className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Current AWS Projects</h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {currentAWSProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{project}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
