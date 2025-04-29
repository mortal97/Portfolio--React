import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { experiences } from '../../data/experience';
import Button from '../ui/Button';

const About: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="About Me"
          subtitle="Learn more about my background and experience"
          align="center"
        />

        <div className="flex flex-col lg:flex-row gap-12 mt-12">
          <motion.div 
            className="w-full lg:w-2/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <div className="relative">
              <div className="w-full h-96 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                <img 
                  src="/profile.jpg"
                  alt="Jonathan Rodriguez" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg font-bold">2+ Years</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="w-full lg:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Front-End Developer with a passion for creating exceptional user experiences
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm a Front-End Developer with 2 years of experience specializing in building responsive, 
                user-friendly web applications. My expertise includes React, TypeScript, and modern front-end 
                frameworks, with a strong focus on creating intuitive and engaging user interfaces.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Throughout my career, I've collaborated with cross-functional teams to deliver high-quality
                web solutions that meet business objectives while providing exceptional user experiences.
                I'm passionate about clean code, web performance optimization, and staying updated with 
                the latest front-end trends and technologies.
              </p>
            </motion.div>

            <motion.div 
              className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4"
              variants={staggerChildren}
            >
              <motion.div 
                className="flex items-center gap-3"
                variants={fadeInUp}
              >
                <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
                  <Calendar size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Experience</h4>
                  <p className="text-gray-600 dark:text-gray-400">2+ years</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center gap-3"
                variants={fadeInUp}
              >
                <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Projects</h4>
                  <p className="text-gray-600 dark:text-gray-400">10+ completed</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="flex gap-4">
                <a href="#contact">
                  <Button>
                    Contact Me
                  </Button>
                </a>
                <a href="#" download="jonathan-rodriguez-resume.pdf">
                  <Button variant="outline">
                    Download CV
                  </Button>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div 
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerChildren}
        >
          <SectionTitle 
            title="Work Experience"
            subtitle="My professional journey"
            align="center"
          />

          <div className="mt-12 space-y-8">
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.id}
                className="relative pl-8 border-l-2 border-primary-200 dark:border-primary-800"
                variants={fadeInUp}
              >
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary-600"></div>
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.role}</h4>
                  <div className="flex items-center gap-2 mt-1 mb-3">
                    <span className="text-primary-600 dark:text-primary-400">{exp.company}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-600 dark:text-gray-400">{exp.period}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 text-xs px-2 py-1 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;