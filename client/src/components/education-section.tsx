import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { GraduationCap, Award, Code, TrendingUp } from "lucide-react";

const educationData = [
  {
    title: "B.Sc. in Computer Science and Technology, major in Computer Technology",
    institution: "The Technical University of Kenya(TUK)",
    description: "Gained strong grounding in computer science principles with hands-on experience in software development and IT systems.",
    period: "Class of 2022",
    icon: GraduationCap,
    color: "primary"
  }
  // {
  //   title: "AWS Solutions Architect",
  //   institution: "Amazon Web Services",
  //   description: "Professional certification for cloud architecture and deployment",
  //   period: "2023",
  //   grade: "Professional",
  //   icon: Award,
  //   color: "accent"
  // },
  // {
  //   title: "Full Stack Web Development",
  //   institution: "freeCodeCamp",
  //   description: "Comprehensive certification covering modern web technologies",
  //   period: "2022",
  //   grade: "Certified",
  //   icon: Code,
  //   color: "green"
  // },
  // {
  //   title: "Google Analytics Certified",
  //   institution: "Google",
  //   description: "Advanced analytics and data interpretation certification",
  //   period: "2023",
  //   grade: "Expert",
  //   icon: TrendingUp,
  //   color: "red"
  // }
];

const colorClasses = {
  primary: "bg-primary text-white",
  accent: "bg-accent text-white",
  green: "bg-green-600 text-white",
  red: "bg-red-600 text-white"
};

const gradeColors = {
  "GPA: 3.8/4.0": "bg-green-100 text-green-800",
  "Professional": "bg-blue-100 text-blue-800",
  "Certified": "bg-green-100 text-green-800",
  "Expert": "bg-red-100 text-red-800"
};

export default function EducationSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="py-16 bg-slate-100" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Education & Certifications</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {educationData.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 cursor-pointer"
                  data-testid={`education-card-${index}`}
                >
                  <div className="flex items-center mb-6">
                    <div className={`rounded-full p-3 mr-4 ${colorClasses[item.color]}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">{item.title}</h3>
                      <p className="text-slate-600">{item.institution}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-semibold">{item.period}</span>
                    <span className={`px-3 py-1 rounded-full text-sm ${gradeColors[item.grade]}`}>
                      {item.grade}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
