import React, { useRef, useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Palette, Zap, Users } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useScrollAnimation';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';

const About = () => {
  const sectionRef = useRef();
  const isVisible = useIntersectionObserver(sectionRef, 0.2);
  const scrollDir = useScrollAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && scrollDir === 'down') setHasAnimated(true);
  }, [isVisible, scrollDir]);

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
      transition={{ duration: 0.6 }}
      className="min-h-screen py-24 bg-gradient-to-b from-black via-zinc-900 to-violet-900 px-4 sm:px-10 md:px-16 lg:px-24"
    >
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          animate={hasAnimated ? 'visible' : 'hidden'}
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-white">About Me</h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            I'm a passionate developer with a keen eye for design, dedicated to creating exceptional digital experiences.
            With expertise in both frontend and backend technologies, I bring ideas to life through clean code and innovative solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={hasAnimated ? 'visible' : 'hidden'}
              variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="bg-white/10 border border-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl hover:shadow-2xl text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-violet-600">
                  <skill.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{skill.title}</h3>
                <p className="text-slate-300 text-sm">{skill.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default About;
