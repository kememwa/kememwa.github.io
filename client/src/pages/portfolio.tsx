import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import SkillsSection from "@/components/skills-section";
import ExperienceTimeline from "@/components/experience-timeline";
import ProjectsGallery from "@/components/projects-gallery";
import EducationSection from "@/components/education-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Portfolio() {
  useEffect(() => {
    // Set page title and meta description
    document.title = "Dennis Kememwa - Full Stack Developer Portfolio";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Full Stack Developer specializing in React, Node.js, and modern web technologies. View my projects, experience, and skills.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Full Stack Developer specializing in React, Node.js, and modern web technologies. View my projects, experience, and skills.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="font-inter bg-slate-50 text-slate-700">
      <Navigation />
      <HeroSection />
      <SkillsSection />
      <ExperienceTimeline />
      <ProjectsGallery />
     <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
