import React, { useRef, useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import useScrollAnimation, { useIntersectionObserver } from '@/hooks/useScrollAnimation';

import { motion } from 'framer-motion';

const Skills = () => {
  const sectionRef = useRef();
  const isVisible = useIntersectionObserver(sectionRef, 0.2);
  const scrollDir = useScrollAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && scrollDir === 'down') setHasAnimated(true);
  }, [isVisible, scrollDir]);

  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Vue.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Sass"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "Express.js", "Django", "PostgreSQL", "MongoDB", "Redis", "GraphQL"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Docker", "AWS", "Figma", "Adobe Creative Suite", "Webpack", "Vite", "Jest"]
    },
    {
      title: "Mobile & Others",
      skills: ["React Native", "Flutter", "Firebase", "Stripe API", "Socket.io", "RESTful APIs"]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95,
      filter: 'blur(4px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 16
      }
    }
  };

  return (
    <motion.section
      id="skills"
      ref={sectionRef}
      initial="hidden"
      animate={hasAnimated ? 'visible' : 'hidden'}
      variants={containerVariants}
      className="min-h-screen py-24 bg-gradient-to-br from-violet-950 via-zinc-900 to-black px-4 sm:px-10 md:px-16 lg:px-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] pointer-events-none" />
      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          variants={itemVariants}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-violet-600 drop-shadow-lg">
            Skills & Technologies
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            A broad set of tools and frameworks for building scalable, user-friendly products.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          variants={containerVariants}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.045,
                boxShadow: "0 8px 32px 0 rgba(124,58,237,0.25)",
                borderColor: "#a78bfa",
                transition: { type: "spring", stiffness: 400, damping: 18 }
              }}
            >
              <div className="relative bg-white/10 border border-white/10 group rounded-2xl p-7 shadow-xl hover:shadow-2xl transition-all duration-400 h-full overflow-hidden backdrop-blur-xl before:absolute before:inset-0 before:rounded-2xl before:pointer-events-none before:border-2 before:border-transparent before:group-hover:border-violet-400 before:transition-all before:duration-300">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-violet-500/20 to-violet-900/10 opacity-0 group-hover:opacity-100 blur-lg pointer-events-none transition-all duration-500" />
                <h3 className="text-xl font-semibold text-white text-center mb-6 bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent group-hover:from-violet-300 group-hover:to-violet-500 transition-all duration-300 drop-shadow">
                  {category.title}
                </h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      className="bg-violet-600/20 text-violet-100 text-sm px-4 py-1.5 rounded-full border border-violet-500/30 shadow-sm hover:bg-violet-500/80 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
