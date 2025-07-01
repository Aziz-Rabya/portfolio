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
  const isVisible = useIntersectionObserver(sectionRef, 0.2);
  const scrollDir = useScrollAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && scrollDir === 'down') setHasAnimated(true);
  }, [isVisible, scrollDir]);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform built with React and Node.js, featuring user authentication, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "https://github.com/your-username/ecommerce-platform"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      tags: ["React", "Firebase", "Material-UI", "Socket.io"],
      liveUrl: "#",
      githubUrl: "https://github.com/your-username/task-app"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that provides detailed weather information and forecasts for multiple locations worldwide.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      tags: ["Vue.js", "OpenWeather API", "Chart.js", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/your-username/weather-dashboard"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing creative work with smooth animations and interactive elements.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      tags: ["React", "Framer Motion", "Tailwind CSS", "TypeScript"],
      liveUrl: "#",
      githubUrl: "https://github.com/your-username/portfolio"
    }
  ];

  return (
    <motion.section
      id="projects"
      ref={sectionRef}
      initial="hidden"
      animate={hasAnimated ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.6 }}
      className="min-h-screen py-24 bg-gradient-to-b from-violet-900 to-black px-4 sm:px-10 md:px-16 lg:px-24"
    >
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          animate={hasAnimated ? 'visible' : 'hidden'}
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-white">Featured Projects</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Some of my recent work building full-stack apps with modern tools and clean designs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={hasAnimated ? 'visible' : 'hidden'}
              variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="bg-white/10 border border-white/10 backdrop-blur-md rounded-2xl overflow-hidden hover:shadow-2xl transform transition-all duration-700 hover:-translate-y-2">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110 hover:brightness-110"
                  />
                </div>
                <CardHeader className="px-6 pt-6">
                  <CardTitle className="text-2xl font-semibold text-white">{project.title}</CardTitle>
                  <CardDescription className="text-slate-300 mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <div className="flex flex-wrap gap-2 my-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-violet-600 text-white text-sm hover:bg-violet-700 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white hover:scale-105">
                        <ExternalLink className="h-4 w-4 mr-2" />Live Demo
                      </Button>
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="bg-gray-800 hover:bg-gray-900 text-white hover:scale-105">
                        <FiGithub className="h-4 w-4 mr-2" />Code
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;

