import React, { useRef, useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import useScrollAnimation, { useIntersectionObserver } from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';

const Skills = () => {
  const sectionRef = useRef();
  const isVisible = useIntersectionObserver(sectionRef, 0.1);
  const scrollDir = useScrollAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible) setHasAnimated(true);
  }, [isVisible]);

  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Sass"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "Express.js", "Django", "PostgreSQL", "MongoDB", "Redis", "MySQL"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Docker", "AWS", "Figma", "Webpack", "Vite", "Jest"]
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
        staggerChildren: 0.15,
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
        damping: 16,
        ease: [0.16, 1, 0.3, 1]
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
      className="min-h-[90vh] py-12 md:py-24 bg-gradient-to-br from-violet-950 via-zinc-900 to-black px-4 sm:px-6 md:px-8 lg:px-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] pointer-events-none" />
      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-12 md:mb-20"
          variants={itemVariants}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-white bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-violet-600 drop-shadow-lg">
            Skills & Technologies
          </h2>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            A broad set of tools and frameworks for building scalable, user-friendly products.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 8px 32px 0 rgba(124,58,237,0.25)",
                transition: { type: "spring", stiffness: 400, damping: 18 }
              }}
            >
              <div className="relative bg-white/5 border border-white/10 group rounded-xl p-6 shadow-lg hover:shadow-violet-500/20 transition-all duration-400 h-full overflow-hidden backdrop-blur-sm">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-violet-500/20 to-violet-900/10 opacity-0 group-hover:opacity-100 blur-md pointer-events-none transition-all duration-500" />
                <h3 className="text-lg md:text-xl font-semibold text-white text-center mb-4 bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent group-hover:from-violet-300 group-hover:to-violet-500 transition-all duration-300">
                  {category.title}
                </h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      className="bg-violet-600/20 text-violet-100 text-xs md:text-sm px-3 py-1 rounded-full border border-violet-500/30 hover:bg-violet-500/50 hover:text-white transition-all duration-300 cursor-default"
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