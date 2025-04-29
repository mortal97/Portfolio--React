import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: 1.2, ease: "easeOut" }
    },
  };

  const scrollIndicatorVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.5,
        duration: 0.6,
        ease: "easeOut",
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-800 z-0"></div>
      
      <div className="container mx-auto px-4 py-20 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="w-full md:w-3/5 mb-12 md:mb-0"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.p 
              className="text-primary-600 dark:text-primary-400 font-medium mb-4"
              variants={itemVariants}
            >
              Hello, I'm
            </motion.p>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
              variants={itemVariants}
            >
              Jonathan Rodriguez
            </motion.h1>
            <motion.h2 
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary-600 dark:text-primary-400 mb-6"
              variants={itemVariants}
            >
              Front-End Developer
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl"
              variants={itemVariants}
            >
              I craft exceptional web experiences with React, TypeScript, and modern web technologies.
              Let's build something amazing together.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <a href="#contact">
                <Button size="lg">
                  Get in Touch
                </Button>
              </a>
              <a href="#projects">
                <Button variant="outline" size="lg">
                  View My Work
                </Button>
              </a>
            </motion.div>

            <motion.div 
              className="flex items-center mt-12 gap-6"
              variants={socialVariants}
            >
              <a 
                href="https://github.com/mortal97" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/jonathan-rodriguez-perez-056861124/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:jonthan1997@gmail.com" 
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>

          <div className="w-full md:w-2/5 flex justify-center">
            <motion.div 
              className="w-64 h-64 md:w-80 md:h-80 relative bg-gradient-to-br from-primary-500 to-primary-700 rounded-full overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <img 
                src="/profile.jpg"
                alt="Jonathan Rodriguez" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={scrollIndicatorVariants}
      >
        <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll Down</span>
        <div className="animate-bounce">
          <ArrowDown size={20} className="text-primary-600 dark:text-primary-400" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;