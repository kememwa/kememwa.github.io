import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="about" className="pt-24 pb-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6">
              Hi, I'm <span className="text-primary">Dennis</span>
              <div className="text-2xl lg:text-4xl text-secondary mt-2">Full Stack Developer</div>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              I create digital experiences that combine beautiful design with powerful functionality. 
              With 5+ years of experience, I specialize in React, Node.js, and modern web technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
                data-testid="button-view-work"
              >
                View My Work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
                data-testid="button-download-cv"
              >
                Download CV
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <img 
              src="/attached_assets/kem.jpg" 
              alt="Dennis Kememwa - Professional Headshot" 
              className="w-80 h-80 rounded-full object-cover shadow-2xl border-8 border-white"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
