import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const skills = [
  {
    name: "Frontend Development",
    description: "Angular.Js, Vue.js, TypeScript, Tailwind CSS, Alpine.js",
    proficiency: 90,
    color: "blue",
    icon: "💻"
  },
  {
    name: "Backend Development",
    description: "NestJs, Core PHP, Laravel, TypeScript",
    proficiency: 90,
    color: "green",
    icon: "🖥️"
  },
  {
    name: "Cloud & DevOps",
    description: "AWS, Docker, Kubernetes, CI/CD",
    proficiency: 80,
    color: "orange",
    icon: "☁️"
  },
  {
    name: "UI/UX Design",
    description: "Figma, User Research",
    proficiency: 70,
    color: "red",
    icon: "🎨"
  },
  {
    name: "Data Analytics",
    description: "SQL",
    proficiency: 80,
    color: "cyan",
    icon: "📊"
  }
];

const colorClasses = {
  blue: {
    bg: "from-blue-50 to-indigo-100",
    progress: "bg-primary",
    icon: "text-primary"
  },
  green: {
    bg: "from-green-50 to-emerald-100",
    progress: "bg-green-600",
    icon: "text-green-600"
  },
  purple: {
    bg: "from-purple-50 to-violet-100",
    progress: "bg-purple-600",
    icon: "text-purple-600"
  },
  orange: {
    bg: "from-orange-50 to-amber-100",
    progress: "bg-orange-600",
    icon: "text-orange-600"
  },
  red: {
    bg: "from-red-50 to-pink-100",
    progress: "bg-red-600",
    icon: "text-red-600"
  },
  cyan: {
    bg: "from-cyan-50 to-blue-100",
    progress: "bg-cyan-600",
    icon: "text-cyan-600"
  }
};

export default function SkillsSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="skills" className="py-16 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Skills & Expertise</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`bg-gradient-to-br ${colorClasses[skill.color].bg} p-8 rounded-xl hover:shadow-lg transition-all duration-300 group cursor-pointer`}
              data-testid={`skill-card-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
            >
              <div className={`text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 ${colorClasses[skill.color].icon}`}>
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">{skill.name}</h3>
              <p className="text-slate-600 mb-4">{skill.description}</p>
              <div className="bg-slate-200 rounded-full h-2 mb-2">
                <motion.div
                  className={`h-2 rounded-full transition-all duration-500 ${colorClasses[skill.color].progress}`}
                  initial={{ width: 0 }}
                  animate={isVisible ? { width: `${skill.proficiency}%` } : {}}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                />
              </div>
              <span className="text-sm text-slate-500">
                {skill.proficiency >= 85 ? 'Expert' : skill.proficiency >= 75 ? 'Advanced' : skill.proficiency >= 65 ? 'Proficient' : 'Intermediate'} - {skill.proficiency}%
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
