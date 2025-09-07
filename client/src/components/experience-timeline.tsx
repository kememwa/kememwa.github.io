import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const experiences = [
{
  title: "IT Infrastructure and Applications Coordinator",
  company: "Kim-Fay EA Ltd",
  period: "2025 - Present",
  description: "Driving the design and implementation of enterprise applications while ensuring reliable IT infrastructure. Developed and enhanced Laravel + Livewire solutions for some of the In-House applications. Built and customized ERP modules using C# to streamline operations. Coordinated infrastructure upgrades, administered Active Directory for secure identity management, optimized helpdesk operations, and ensured high system availability across departments.",
  technologies: ["Laravel", "Livewire", "Tailwind Css", "Alpine.js", "C#", "MySQL", "Active Directory", "IT Infrastructure"]
},

  {
    title: "Junior Software Engineer",
    company: "BitWise Digital Solutions",
    period: "2023 - 2025-Jan",
    description: "Developed responsive web applications using Core PHP, Laravel and Vue.js, Angular.JS, TypeScript. Collaborated with design teams to implement pixel-perfect UI components, improving user engagement by 35%.",
    technologies: ["Laravel", "Bootstrap", "Vue.js"]
  }
];

export default function ExperienceTimeline() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="experience" className="py-16 bg-slate-800 text-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            A journey through innovative companies and challenging projects
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title + experience.company}
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 pb-12 timeline-item"
              data-testid={`experience-${index}`}
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-primary to-secondary" />
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-4 w-3 h-3 bg-primary rounded-full transform -translate-x-1.5 border-4 border-white shadow-lg shadow-primary/50" />
              
              <motion.div
                whileHover={{ scale: 1.02, x: 8 }}
                className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-8 hover:bg-slate-700/70 transition-all duration-300 cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{experience.title}</h3>
                    <p className="text-accent font-semibold">{experience.company}</p>
                  </div>
                  <div className="text-slate-300 mt-2 md:mt-0">{experience.period}</div>
                </div>
                <p className="text-slate-300 mb-4 leading-relaxed">{experience.description}</p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
