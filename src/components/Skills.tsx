import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Cloud, Database, Users, Monitor, Server, Workflow, Shield, Layers, Cpu, BarChart3, GitBranch } from 'lucide-react';

interface Skill {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

interface SkillCategory {
  title: string;
  icon: typeof Code;
  skills: Skill[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Data Analytics & Insights',
    icon: BarChart3,
    color: 'from-emerald-500 to-teal-500',
    skills: [
      { name: 'Advanced Excel', level: 'expert' },
      { name: 'Power BI', level: 'advanced' },
      { name: 'SQL (PostgreSQL/MySQL)', level: 'advanced' },
      { name: 'Python (Pandas/NumPy)', level: 'advanced' },
      { name: 'Data Visualization', level: 'advanced' },
      { name: 'Statistical Analysis', level: 'intermediate' },
      { name: 'ETL Pipelines', level: 'intermediate' },
      { name: 'Data Warehousing', level: 'intermediate' },
    ],
  },
  {
    title: 'Web Development (MERN)',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React.js', level: 'advanced' },
      { name: 'Node.js', level: 'advanced' },
      { name: 'Express.js', level: 'intermediate' },
      { name: 'MongoDB', level: 'intermediate' },
      { name: 'TypeScript', level: 'intermediate' },
      { name: 'HTML/CSS', level: 'expert' },
      { name: 'Tailwind CSS', level: 'advanced' },
      { name: 'REST APIs', level: 'advanced' },
    ],
  },
  {
    title: 'AWS Cloud Services',
    icon: Cloud,
    color: 'from-orange-500 to-amber-500',
    skills: [
      { name: 'EC2', level: 'intermediate' },
      { name: 'S3', level: 'advanced' },
      { name: 'Lambda', level: 'intermediate' },
      { name: 'RDS', level: 'intermediate' },
      { name: 'DynamoDB', level: 'intermediate' },
      { name: 'CloudFormation', level: 'beginner' },
      { name: 'IAM', level: 'intermediate' },
      { name: 'API Gateway', level: 'intermediate' },
      { name: 'AWS Glue', level: 'beginner' },
      { name: 'Redshift', level: 'beginner' },
    ],
  },
  {
    title: 'Product & Agile',
    icon: Users,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Scrum/Agile', level: 'advanced' },
      { name: 'Product Strategy', level: 'intermediate' },
      { name: 'UI/UX Design', level: 'intermediate' },
      { name: 'User Research', level: 'intermediate' },
      { name: 'Jira/Trello', level: 'advanced' },
      { name: 'Stakeholder Mgmt', level: 'intermediate' },
      { name: 'Backlog Management', level: 'advanced' },
      { name: 'Sprint Planning', level: 'advanced' },
    ],
  },
];

const levelColors = {
  beginner: 'bg-slate-500',
  intermediate: 'bg-blue-500',
  advanced: 'bg-emerald-500',
  expert: 'bg-amber-500',
};

const levelLabels = {
  beginner: 'Learning',
  intermediate: 'Proficient',
  advanced: 'Advanced',
  expert: 'Expert',
};

const levelWidths = {
  beginner: 'w-1/4',
  intermediate: 'w-1/2',
  advanced: 'w-3/4',
  expert: 'w-full',
};

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="relative py-24 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm uppercase tracking-wider">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Skills <span className="gradient-text">Matrix</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          {Object.entries(levelLabels).map(([level, label]) => (
            <div key={level} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${levelColors[level as keyof typeof levelColors]}`} />
              <span className="text-sm text-muted-foreground">{label}</span>
            </div>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2.5 rounded-xl bg-gradient-to-br ${category.color}`}>
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold">{category.title}</h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + catIndex * 0.1 + skillIndex * 0.03 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className={`w-2 h-2 rounded-full ${levelColors[skill.level]} group-hover:animate-pulse`} />
                    </div>
                    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${levelColors[skill.level]}`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: undefined } : { width: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 + catIndex * 0.1 + skillIndex * 0.03 }}
                        style={{ width: isInView ? undefined : 0 }}
                      >
                        <div className={`h-full ${levelWidths[skill.level]}`} />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <h4 className="text-lg font-semibold mb-6">DevOps & Tools</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: 'Docker', icon: Layers },
              { name: 'Git', icon: GitBranch },
              { name: 'CI/CD', icon: Workflow },
              { name: 'Linux', icon: Monitor },
              { name: 'AWS CodePipeline', icon: Server },
              { name: 'Infrastructure as Code', icon: Cpu },
              { name: 'Machine Learning', icon: BarChart3 },
              { name: 'Security Best Practices', icon: Shield },
            ].map((tool) => (
              <motion.div
                key={tool.name}
                className="skill-badge flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <tool.icon className="w-4 h-4" />
                {tool.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
