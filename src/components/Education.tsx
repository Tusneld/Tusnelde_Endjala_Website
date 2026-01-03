import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, BookOpen, X, ExternalLink, Loader2, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface Module {
  name: string;
  learnings: string[];
  project?: { name: string; link?: string };
}

interface YearData {
  year: number;
  modules: Module[];
}

interface DegreeData {
  title: string;
  institution: string;
  duration: string;
  years: YearData[];
  inProgress?: boolean;
}

const educationData: DegreeData[] = [
  {
    title: 'Diploma in Information Technology',
    institution: 'Triumphant College',
    duration: '02/2021 - 11/2023',
    years: [
      {
        year: 1,
        modules: [
          { name: 'Principles of IS', learnings: ['Information systems fundamentals', 'Business process integration', 'System components'] },
          { name: 'Mathematics', learnings: ['Discrete mathematics', 'Logic and proofs', 'Set theory'] },
          { name: 'Computing Applications', learnings: ['Office productivity tools', 'Document management', 'Spreadsheet analysis'] },
          { name: 'Information Processing', learnings: ['Data handling', 'Information lifecycle', 'Processing techniques'] },
          { name: 'Intro Programming I', learnings: ['Programming fundamentals', 'Algorithm basics', 'Problem solving'] },
        ],
      },
      {
        year: 2,
        modules: [
          { name: 'Software Engineering 1', learnings: ['SDLC methodologies', 'Requirements gathering', 'UML diagrams'] },
          { name: 'Web Design', learnings: ['HTML/CSS fundamentals', 'Responsive design', 'User interface principles'] },
          { name: 'System Analysis', learnings: ['Business analysis', 'System modeling', 'Feasibility studies'] },
          { name: 'Software PM', learnings: ['Project planning', 'Resource management', 'Agile basics'] },
          { name: 'IT Systems', learnings: ['Hardware components', 'System architecture', 'IT infrastructure'] },
          { name: 'Computer Math', learnings: ['Binary systems', 'Boolean algebra', 'Number theory'] },
          { name: 'DBMS', learnings: ['Database design', 'SQL fundamentals', 'Normalization'], project: { name: 'Medical Reality Show Database', link: 'https://github.com/Tusneld/medical-reality-show-database-design' } },
        ],
      },
      {
        year: 3,
        modules: [
          { name: 'Software Engineering 2', learnings: ['Advanced design patterns', 'Testing methodologies', 'Code quality'] },
          { name: 'Advanced Web', learnings: ['JavaScript frameworks', 'Backend integration', 'API development'] },
          { name: 'Advanced Database', learnings: ['Query optimization', 'Stored procedures', 'Database administration'] },
          { name: 'Information Systems', learnings: ['Enterprise systems', 'ERP concepts', 'System integration'] },
          { name: 'Architecture', learnings: ['System architecture patterns', 'Scalability', 'Microservices intro'] },
          { name: 'Feasibility Study', learnings: ['Cost-benefit analysis', 'Risk assessment', 'Project viability'] },
          { name: 'Networks 1', learnings: ['Network fundamentals', 'TCP/IP', 'Network security basics'] },
        ],
      },
    ],
  },
  {
    title: 'B.Sc. Computer Science & IT (Honors)',
    institution: 'Triumphant College',
    duration: '02/2025 - Present',
    inProgress: true,
    years: [
      {
        year: 1,
        modules: [
          { name: 'Business Communication', learnings: ['Professional writing', 'Presentation skills', 'Stakeholder communication'] },
          { name: 'Intro to Computers', learnings: ['Computer fundamentals', 'Operating systems', 'Digital literacy'] },
          { name: 'Networking', learnings: ['Network protocols', 'LAN/WAN concepts', 'Network configuration'] },
          { name: 'Programming 1B', learnings: ['Object-oriented concepts', 'Data structures basics', 'Algorithm design'] },
        ],
      },
      {
        year: 2,
        modules: [
          { name: 'SQL', learnings: ['Advanced queries', 'Database optimization', 'Data manipulation'] },
          { name: 'Statistics', learnings: ['Statistical analysis', 'Probability theory', 'Data interpretation'] },
          { name: 'System Administration', learnings: ['Server management', 'User administration', 'System monitoring'] },
          { name: 'IT Project Management', learnings: ['Agile/Scrum', 'Sprint planning', 'Stakeholder management'] },
          { name: 'Java OOP', learnings: ['Java fundamentals', 'Design patterns', 'Enterprise Java'] },
          { name: 'Operating Systems', learnings: ['Process management', 'Memory allocation', 'File systems'] },
          { name: 'Advanced Networks', learnings: ['Routing protocols', 'Network security', 'Cloud networking'] },
        ],
      },
      {
        year: 3,
        modules: [
          { name: 'Advanced Database', learnings: ['NoSQL databases', 'Big data concepts', 'Data warehousing'] },
          { name: 'Business Intelligence', learnings: ['BI tools', 'Data visualization', 'Analytics dashboards'] },
          { name: 'Digital Forensics', learnings: ['Evidence collection', 'Forensic analysis', 'Legal frameworks'] },
          { name: 'Entrepreneurship', learnings: ['Startup fundamentals', 'Business models', 'Innovation'] },
          { name: 'Linux Administration', learnings: ['Linux commands', 'Shell scripting', 'Server setup'] },
          { name: 'MIS', learnings: ['Management systems', 'Decision support', 'Enterprise integration'] },
          { name: 'Research Methods', learnings: ['Research design', 'Data collection', 'Academic writing'] },
        ],
      },
      {
        year: 4,
        modules: [
          { name: 'Algorithms', learnings: ['Algorithm analysis', 'Complexity theory', 'Advanced data structures'] },
          { name: 'ERP Systems', learnings: ['SAP basics', 'Enterprise integration', 'Process automation'] },
          { name: 'Requirement Analysis', learnings: ['Requirements engineering', 'Use case modeling', 'Specification documents'] },
          { name: 'Cloud Computing', learnings: ['AWS fundamentals', 'Cloud architecture', 'Serverless computing'] },
          { name: 'E-Business', learnings: ['Digital commerce', 'Online marketing', 'Payment systems'] },
          { name: 'DBMS Advanced', learnings: ['Distributed databases', 'Transaction management', 'Recovery systems'] },
          { name: 'Mobile Apps', learnings: ['Mobile development', 'Cross-platform apps', 'Mobile UX'] },
          { name: 'Project Management', learnings: ['Advanced PM', 'Risk management', 'Quality assurance'] },
          { name: 'Research Project', learnings: ['Independent research', 'Thesis writing', 'Presentation'] },
        ],
      },
    ],
  },
  {
    title: 'B.Sc. Data Science',
    institution: 'IU International University',
    duration: '05/2024 - Present',
    inProgress: true,
    years: [],
  },
];

const FlipCard = ({ degree, onModuleClick }: { degree: DegreeData; onModuleClick: (module: Module) => void }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedYear, setSelectedYear] = useState(1);

  const currentYearData = degree.years.find((y) => y.year === selectedYear);

  return (
    <div className="flip-card h-[420px]">
      <motion.div
        className="flip-card-inner"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div
          className="flip-card-front glass-card-strong p-6 flex flex-col cursor-pointer"
          style={{ backfaceVisibility: 'hidden' }}
          onClick={() => degree.years.length > 0 && setIsFlipped(true)}
        >
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 rounded-xl bg-primary/10">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            {degree.inProgress && (
              <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-medium">
                <Loader2 className="w-3 h-3 animate-spin" />
                In Progress
              </span>
            )}
          </div>

          <h3 className="text-xl font-bold mb-2">{degree.title}</h3>
          <p className="text-primary font-medium mb-1">{degree.institution}</p>
          <p className="text-sm text-muted-foreground mb-4">{degree.duration}</p>

          {degree.years.length > 0 ? (
            <>
              <div className="flex-1" />
              <div className="flex items-center justify-between text-sm text-muted-foreground mt-4 pt-4 border-t border-border">
                <span>{degree.years.length} Years • {degree.years.reduce((acc, y) => acc + y.modules.length, 0)} Modules</span>
                <span className="flex items-center gap-1 text-primary">
                  View Details <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Loader2 className="w-8 h-8 text-primary animate-spin" />
                </motion.div>
                <p className="text-muted-foreground">Currently Pursuing</p>
                <p className="text-xs text-muted-foreground mt-1">Modules Loading...</p>
              </div>
            </div>
          )}
        </div>

        {/* Back */}
        <div
          className="flip-card-back glass-card-strong p-6 flex flex-col"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-lg">{degree.title.split(' ').slice(0, 2).join(' ')}</h4>
            <button
              onClick={(e) => { e.stopPropagation(); setIsFlipped(false); }}
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Year Tabs */}
          <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
            {degree.years.map((y) => (
              <button
                key={y.year}
                onClick={(e) => { e.stopPropagation(); setSelectedYear(y.year); }}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                  selectedYear === y.year
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary hover:bg-secondary/80'
                }`}
              >
                Year {y.year}
              </button>
            ))}
          </div>

          {/* Modules List */}
          <div className="flex-1 overflow-y-auto space-y-2 pr-1">
            {currentYearData?.modules.map((module) => (
              <button
                key={module.name}
                onClick={(e) => { e.stopPropagation(); onModuleClick(module); }}
                className="w-full text-left p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-sm">{module.name}</span>
                  <BookOpen className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);

  return (
    <section id="education" className="relative py-24 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-dots-pattern opacity-20" />

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm uppercase tracking-wider">Academic Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Detailed <span className="gradient-text">Education</span>
          </h2>
          <div className="section-divider" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Explore my academic journey. Click on each degree to view year-by-year modules, 
            and click on any module to see detailed learnings and related projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationData.map((degree, index) => (
            <motion.div
              key={degree.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FlipCard degree={degree} onModuleClick={setSelectedModule} />
            </motion.div>
          ))}
        </div>

        {/* Module Dialog */}
        <Dialog open={!!selectedModule} onOpenChange={() => setSelectedModule(null)}>
          <DialogContent className="glass-card-strong border-border max-w-lg">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-primary" />
                {selectedModule?.name}
              </DialogTitle>
              <DialogDescription className="sr-only">
                Module details and learnings
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 mt-4">
              <div>
                <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">
                  Core Learnings
                </h4>
                <ul className="space-y-2">
                  {selectedModule?.learnings.map((learning, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {learning}
                    </li>
                  ))}
                </ul>
              </div>

              {selectedModule?.project ? (
                <div className="pt-4 border-t border-border">
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">
                    Related Project
                  </h4>
                  {selectedModule.project.link ? (
                    <a
                      href={selectedModule.project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors group"
                    >
                      <span className="font-medium">{selectedModule.project.name}</span>
                      <ExternalLink className="w-4 h-4 text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  ) : (
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-secondary">
                      <span>{selectedModule.project.name}</span>
                      <span className="px-2 py-0.5 rounded-full bg-accent/20 text-accent text-xs font-medium">
                        Coming Soon
                      </span>
                    </div>
                  )}
                </div>
              ) : (
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-secondary/50">
                    <span className="text-sm text-muted-foreground">No project linked yet</span>
                    <span className="px-2 py-0.5 rounded-full bg-accent/20 text-accent text-xs font-medium">
                      Coming Soon
                    </span>
                  </div>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
