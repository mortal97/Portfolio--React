import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../ui/ProjectCard';
import Button from '../ui/Button';
import { fetchGithubProjects } from '../../data/projects';
import type { Project } from '../../types';

const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const githubProjects = await fetchGithubProjects();
        setProjects(githubProjects);
      } catch (error) {
        console.error('Error loading projects:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  const displayedProjects = showAll 
    ? projects 
    : projects.slice(0, 4);

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.5,
      },
    },
  };

  if (loading) {
    return (
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="My Projects"
            subtitle="Loading projects from GitHub..."
            align="center"
          />
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="My Projects"
          subtitle="Explore my recent work from GitHub"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {projects.length > displayedProjects.length && (
          <motion.div 
            className="flex justify-center mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={buttonVariants}
          >
            <Button 
              onClick={() => setShowAll(true)} 
              variant="outline"
              className="flex items-center gap-2"
            >
              <span>View All Projects</span>
              <ArrowRight size={16} />
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;