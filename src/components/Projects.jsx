import React, { useRef, useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/button';
import { FiGithub } from "react-icons/fi";
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import useScrollAnimation, { useIntersectionObserver } from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';

const Projects = () => {
  const sectionRef = useRef();
  const isVisible = useIntersectionObserver(sectionRef, 0.1);
  const scrollDir = useScrollAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible) setHasAnimated(true);
  }, [isVisible]);

  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing creative work with smooth animations and interactive elements.",
      image: "/portfolio.png",
      tags: ["React", "Framer Motion", "Tailwind CSS", "JavaScript"],
      liveUrl: "https://portfolio-sepia-pi-ovjth9zmma.vercel.app/",
      githubUrl: "https://github.com/Aziz-Rabya/portfolio"
    },
    {
      title: "Gaming-Website",
      description: "Full-featured online store with product listings, cart functionality, and secure checkout process.",
      image: "/ecommerce.png",
      tags: ["Tailwindcss", "react", "Stripe"],
      liveUrl: "https://gaming-website-riham5v2f-azizs-projects-19d6e2bc.vercel.app/",
      githubUrl: "https://github.com/Aziz-Rabya/Gaming_Website"
    },
    {
      title: "Real-Estate",
      description: "Productivity application for organizing tasks with drag-and-drop functionality and team collaboration.",
      image: "/taskapp.png",
      tags: ["React", "Firebase", "Redux", "Material UI"],
      liveUrl: "https://real-estate-bqu9ob9wd-azizs-projects-19d6e2bc.vercel.app/",
      githubUrl: "https://github.com/Aziz-Rabya/real-estate"
    }
  ];

  return (
    <motion.section
      id="projects"
      ref={sectionRef}
      initial="hidden"
      animate={hasAnimated ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      }}
      transition={{ duration: 0.5 }}
      className="min-h-[90vh] py-12 md:py-24 bg-gradient-to-b from-violet-900 to-black px-4 sm:px-6 md:px-8 lg:px-24"
    >
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-white">
            Featured Projects
          </h2>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Some of my recent work building full-stack apps with modern tools and clean designs.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
              }
            }
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300">
                <div className="aspect-video overflow-hidden w-full h-48 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </div>
                <CardHeader className="px-6 pt-6">
                  <CardTitle className="text-xl md:text-2xl font-semibold text-white">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-300 mt-2 text-sm md:text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        className="bg-violet-600/20 text-violet-100 text-xs md:text-sm px-3 py-1 rounded-full border border-violet-500/30 hover:bg-violet-500/50 transition-colors duration-300"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Button 
                        size="sm" 
                        className="bg-green-600 hover:bg-green-700 text-white transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button 
                        size="sm" 
                        className="bg-gray-800 hover:bg-gray-700 text-white transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiGithub className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;