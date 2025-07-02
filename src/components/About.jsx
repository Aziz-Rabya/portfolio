import React, { useRef, useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Code, Palette, Zap, Users } from 'lucide-react';
import useScrollAnimation, { useIntersectionObserver } from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';

const About = () => {
  const sectionRef = useRef();
  const isVisible = useIntersectionObserver(sectionRef, 0.1);
  const scrollDir = useScrollAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible) setHasAnimated(true);
  }, [isVisible]);

  const skills = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Proficient in React, Node.js, Python, and modern web technologies"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces with Figma and Adobe Creative Suite"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Building fast, scalable applications with best practices and modern tools"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Experienced in agile methodologies and cross-functional team environments"
    }
  ];

  return (
    <motion.section
      id="about"
      ref={sectionRef}
      initial="hidden"
      animate={hasAnimated ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-[90vh] py-12 md:py-24 bg-gradient-to-b from-black via-zinc-900 to-violet-900 px-4 sm:px-6 md:px-8 lg:px-24"
    >
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial="hidden"
          animate={hasAnimated ? 'visible' : 'hidden'}
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-white">
            About Me
          </h2>
          <p className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer with a keen eye for design, dedicated to creating exceptional digital experiences.
            With expertise in both frontend and backend technologies, I bring ideas to life through clean code and innovative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={hasAnimated ? 'visible' : 'hidden'}
              variants={{ 
                hidden: { opacity: 0, y: 50, scale: 0.95 }, 
                visible: { opacity: 1, y: 0, scale: 1 } 
              }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-violet-500/20 transition-all duration-300 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 mb-4 rounded-full bg-violet-600/90 mx-auto">
                  <skill.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2">{skill.title}</h3>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed">{skill.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default About;