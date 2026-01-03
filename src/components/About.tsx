import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cloud, Database, Code, Users, Sparkles, Target, Globe, Rocket } from 'lucide-react';

const highlights = [
  {
    icon: Cloud,
    title: 'AWS Cloud',
    description: 'EC2, S3, Lambda, RDS, DynamoDB, CloudFormation, IAM, VPC',
  },
  {
    icon: Code,
    title: 'Full-Stack',
    description: 'MongoDB, Express.js, React, Node.js (MERN)',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Python, PySpark, ETL Pipelines, AWS Glue, Redshift',
  },
  {
    icon: Users,
    title: 'Product & Agile',
    description: 'Certified CSPO, UI/UX Design, Scrum Master',
  },
];

const stats = [
  { label: 'AWS Services', value: '15+', icon: Cloud },
  { label: 'Projects', value: '20+', icon: Rocket },
  { label: 'Certifications', value: '6+', icon: Target },
  { label: 'Years Learning', value: '4+', icon: Sparkles },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="relative py-24 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-primary font-mono text-sm uppercase tracking-wider">About Me</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Multi-Disciplinary <span className="gradient-text">Tech Professional</span>
            </h2>
            <div className="section-divider" />
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left: Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a multi-disciplinary technology professional advancing through{' '}
                <span className="text-foreground font-medium">ALX's Software Engineering, Data Science, and AWS Cloud Computing</span> programs.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently pursuing <span className="text-primary font-medium">AWS Cloud Practitioner</span> and{' '}
                <span className="text-primary font-medium">AWS Solutions Architect</span> certifications while leveraging 
                expertise in full-stack development, data engineering, and product design.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm passionate about creating <span className="text-foreground font-medium">cloud-native solutions</span> that 
                combine scalable architecture with powerful data capabilities. My goal is to design systems that leverage 
                AWS services to deliver robust, cost-effective, and high-performance applications.
              </p>

              {/* What Drives Me */}
              <div className="flex items-start gap-4 p-4 rounded-xl glass-card mt-6">
                <Globe className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">What Drives Me</h4>
                  <p className="text-sm text-muted-foreground">
                    I'm excited about the future of cloud computing and its potential to transform industries across Africa.
                    Let's connect to discuss AWS solutions, cloud architecture, or opportunities in cloud and data engineering!
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right: Highlight Cards */}
            <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="glass-card p-5 group hover:border-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass-card p-6 text-center group"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
