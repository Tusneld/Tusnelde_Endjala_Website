import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink, Code, Cloud, Database, Layers, Globe, Server, FileSpreadsheet, ClipboardList } from 'lucide-react';

type ProjectCategory = 'all' | 'web' | 'data' | 'cloud' | 'analytics';

interface Project {
  title: string;
  description: string;
  category: ProjectCategory[];
  techStack: string[];
  icon: typeof Code;
  gradient: string;
  github?: string;
  demo?: string;
  status?: 'completed' | 'in-progress';
}

const projects: Project[] = [
  {
    title: 'E-Learning Platform',
    description: 'Full-stack educational platform with course management, user authentication, and progress tracking. Built with MERN stack.',
    category: ['web'],
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    icon: Globe,
    gradient: 'from-blue-500 to-cyan-500',
    github: 'https://github.com/Tusneld',
    status: 'in-progress',
  },
  {
    title: 'AWS Serverless API',
    description: 'RESTful API built with AWS Lambda, API Gateway, and DynamoDB. Implements serverless architecture patterns.',
    category: ['cloud', 'web'],
    techStack: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'Node.js', 'CloudFormation'],
    icon: Cloud,
    gradient: 'from-orange-500 to-amber-500',
    github: 'https://github.com/Tusneld',
    status: 'in-progress',
  },
  {
    title: 'Data Pipeline with AWS Glue',
    description: 'ETL pipeline for processing and transforming large datasets using AWS Glue and Redshift for analytics.',
    category: ['data', 'cloud', 'analytics'],
    techStack: ['AWS Glue', 'Redshift', 'Python', 'PySpark', 'S3'],
    icon: Database,
    gradient: 'from-emerald-500 to-teal-500',
    github: 'https://github.com/Tusneld',
    status: 'in-progress',
  },
  {
    title: 'Medical Reality Show Database',
    description: 'Designed and implemented a relational database model using MS SQL Server for efficient data storage and retrieval.',
    category: ['data', 'analytics'],
    techStack: ['MS SQL Server', 'Database Design', 'Data Modeling', 'ERD'],
    icon: Server,
    gradient: 'from-purple-500 to-pink-500',
    github: 'https://github.com/Tusneld/medical-reality-show-database-design',
    status: 'completed',
  },
  {
    title: 'Sales Analysis Dashboard',
    description: 'Interactive sales analytics dashboard using Excel Pivot Tables and Power BI for business intelligence.',
    category: ['analytics'],
    techStack: ['Excel', 'Pivot Tables', 'Power BI', 'Data Visualization'],
    icon: FileSpreadsheet,
    gradient: 'from-green-500 to-emerald-500',
    status: 'completed',
  },
  {
    title: 'Data Cleaning with Excel',
    description: 'Performed comprehensive data cleaning and preprocessing on large datasets using Excel to ensure data quality and integrity.',
    category: ['analytics'],
    techStack: ['Excel', 'Data Cleaning', 'Data Quality', 'Formulas'],
    icon: FileSpreadsheet,
    gradient: 'from-teal-500 to-cyan-500',
    status: 'completed',
  },
  {
    title: 'Containerized Web App',
    description: 'Deploying containerized applications using AWS ECS and ECR with CI/CD pipelines.',
    category: ['cloud', 'web'],
    techStack: ['Docker', 'AWS ECS', 'ECR', 'CodePipeline', 'React'],
    icon: Layers,
    gradient: 'from-indigo-500 to-violet-500',
    github: 'https://github.com/Tusneld',
    status: 'in-progress',
  },
  {
    title: 'Project Management Workflow',
    description: 'Kanban-style project management workflow using Trello for agile team coordination.',
    category: ['web'],
    techStack: ['Trello', 'Agile', 'Scrum', 'Project Management'],
    icon: ClipboardList,
    gradient: 'from-sky-500 to-blue-500',
    demo: 'https://trello.com/b/vHcxFj75/kanye-kim-wedding-schedule',
    status: 'completed',
  },
];

const filters: { label: string; value: ProjectCategory }[] = [
  { label: 'All Projects', value: 'all' },
  { label: 'Web Development', value: 'web' },
  { label: 'Data Analysis', value: 'analytics' },
  { label: 'Data Engineering', value: 'data' },
  { label: 'Cloud / AWS', value: 'cloud' },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects = projects.filter(
    (project) => activeFilter === 'all' || project.category.includes(activeFilter)
  );

  return (
    <section id="projects" className="relative py-24 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-dots-pattern opacity-20" />

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm uppercase tracking-wider">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Project <span className="gradient-text">Gallery</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`filter-btn ${activeFilter === filter.value ? 'active' : ''}`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative"
                onMouseEnter={() => setHoveredProject(project.title)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="glass-card h-full overflow-hidden">
                  {/* Header with Icon */}
                  <div className={`relative h-40 bg-gradient-to-br ${project.gradient} p-6 flex items-center justify-center`}>
                    <project.icon className="w-16 h-16 text-white/80" />
                    
                    {/* Status Badge */}
                    {project.status && (
                      <span className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-medium ${
                        project.status === 'completed' 
                          ? 'bg-emerald-500/20 text-emerald-300' 
                          : 'bg-amber-500/20 text-amber-300'
                      }`}>
                        {project.status === 'completed' ? 'Completed' : 'In Progress'}
                      </span>
                    )}

                    {/* Overlay on Hover */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredProject === project.title ? 1 : 0 }}
                      className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4"
                    >
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          aria-label="View on GitHub"
                        >
                          <Github className="w-6 h-6 text-white" />
                        </motion.a>
                      )}
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          aria-label="View Demo"
                        >
                          <ExternalLink className="w-6 h-6 text-white" />
                        </motion.a>
                      )}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 rounded-md bg-secondary text-xs font-medium text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="px-2 py-1 rounded-md bg-secondary text-xs font-medium text-muted-foreground">
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Tusneld"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/50 text-primary font-medium hover:bg-primary/10 transition-all"
          >
            <Github className="w-5 h-5" />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};
