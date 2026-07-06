import React from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { HelpCircle, Briefcase, Award, Code2, Zap, Users } from 'lucide-react';

// Handle ESM/CommonJS double-default wrapping at runtime
const CountUpComponent = (CountUp as any).default || CountUp;
import { PERSONAL_INFO, ACHIEVEMENTS, ABOUT_HIGHLIGHTS } from '../constants';
import SectionTitle from '../components/SectionTitle';

const ICON_MAP: Record<string, any> = {
  Briefcase,
  Award,
  Code2,
  Zap,
  Users,
};

const getHighlightIcon = (name: string) => {
  const IconComponent = ICON_MAP[name];
  return IconComponent ? <IconComponent className="w-5 h-5" /> : <HelpCircle className="w-5 h-5" />;
};

export const About: React.FC = () => {
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-24 px-6 relative bg-bg-sec/30">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge="My Story"
          title="About Me"
          description="A look into my background, stats, and what drives my software development process."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Interactive Terminal Profile Mockup */}
          <div className="lg:col-span-5 w-full glass-effect rounded-2xl border border-border-theme overflow-hidden shadow-2xl">
            {/* Window bar */}
            <div className="bg-bg-sec px-4 py-3 border-b border-border-theme flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs text-muted-theme font-mono ml-2">profile.json</span>
            </div>
            
            {/* Terminal Body */}
            <div className="p-6 font-mono text-xs sm:text-sm text-text-theme/90 leading-relaxed overflow-x-auto bg-black/40">
              <pre>
                <code>
{`{
  "name": "Asif",
  "role": "MERN Stack Developer",
  "skills": [
    "MongoDB", "Express", "React", "Node"
  ],
  "experience": "${PERSONAL_INFO.experienceYears} Years",
  "philosophy": [
    "Write clean, dry code",
    "Design with user intent",
    "Ship fast, optimize constantly"
  ],
  "currentFocus": "Scaling Server Infrastructures",
  "openToWork": true
}`}
                </code>
              </pre>
            </div>
          </div>

          {/* Right Column: Narrative and Highlights */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                Hi, I'm {PERSONAL_INFO.name} — a Passionate Full Stack Architect.
              </h3>
              <p className="text-base text-muted-theme leading-relaxed">
                My passion is building elegant software systems that solve user problems. 
                I write modern JavaScript/TypeScript and specialize in the NoSQL database modeling 
                and server-side architectures. Over the past years, I've collaborated with local companies 
                and remote startups to deliver scalable APIs and responsive, accessible user interfaces.
              </p>
            </div>

            {/* Achievements Counter Grid */}
            <div 
              ref={statsRef} 
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 rounded-2xl border border-border-theme bg-card-theme/35 backdrop-blur-sm"
            >
              {ACHIEVEMENTS.map((stat) => (
                <div key={stat.id} className="text-center flex flex-col items-center">
                  <span className="text-2xl md:text-3xl font-extrabold text-primary mb-1">
                    {statsInView ? (
                      <CountUpComponent end={stat.count} duration={2.5} suffix={stat.suffix} />
                    ) : (
                      `0${stat.suffix}`
                    )}
                  </span>
                  <span className="text-xs md:text-sm text-muted-theme font-medium leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* highlights timeline cards */}
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-theme mb-2">Core Pillars</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ABOUT_HIGHLIGHTS.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-xl border border-border-theme bg-card-theme/20 hover:bg-card-theme/40 transition-colors duration-300 flex gap-3 items-start"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                      {getHighlightIcon(item.iconName)}
                    </div>
                    <div>
                      <h5 className="font-bold text-sm md:text-base text-text-theme mb-1">{item.title}</h5>
                      <p className="text-xs text-muted-theme leading-normal">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
