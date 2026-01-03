import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Education } from '@/components/Education';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { AWSRoadmap } from '@/components/AWSRoadmap';
import { Leadership } from '@/components/Leadership';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ScrollReveal } from '@/components/ScrollReveal';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <ScrollReveal>
          <About />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <Experience />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <Education />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <Skills />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <Projects />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <AWSRoadmap />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <Leadership />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <Contact />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
