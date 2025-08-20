import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    period: "2022 - Present",
    description: "Led development of scalable web applications serving 100K+ users. Architected microservices infrastructure using Node.js and AWS, reducing system response time by 40%.",
    technologies: ["React", "Node.js", "AWS", "MongoDB"]
  },
  {
    title: "Frontend Developer",
    company: "Digital Innovations Inc",
    period: "2020 - 2022",
    description: "Developed responsive web applications using React and TypeScript. Collaborated with design teams to implement pixel-perfect UI components, improving user engagement by 35%.",
    technologies: ["React", "TypeScript", "Vue.js"]
  },
  {
    title: "Junior Web Developer",
    company: "StartupHub",
    period: "2019 - 2020",
    description: "Built and maintained company websites using modern JavaScript frameworks. Gained expertise in full-stack development and agile methodologies.",
    technologies: ["JavaScript", "PHP", "MySQL"]
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
