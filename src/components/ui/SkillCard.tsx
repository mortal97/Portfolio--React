import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../../types';
import { Code, Layers, Library, Settings, Box } from 'lucide-react';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  const getIcon = () => {
    switch (skill.icon) {
      case 'html':
        return <Code className="text-orange-500" />;
      case 'css':
        return <Code className="text-blue-500" />;
      case 'javascript':
        return <Code className="text-yellow-500" />;
      case 'typescript':
        return <Code className="text-blue-600" />;
      case 'react':
        return <Code className="text-cyan-500" />;
      case 'redux':
        return <Layers className="text-purple-600" />;
      case 'nextjs':
        return <Code className="text-black dark:text-white" />;
      case 'tailwind':
        return <Code className="text-cyan-400" />;
      case 'sass':
        return <Code className="text-pink-500" />;
      case 'graphql':
        return <Library className="text-pink-600" />;
      case 'jest':
        return <Settings className="text-red-500" />;
      case 'webpack':
        return <Box className="text-blue-500" />;
      case 'git':
        return <Settings className="text-orange-600" />;
      case 'figma':
        return <Settings className="text-purple-500" />;
      case 'storybook':
        return <Library className="text-pink-500" />;
      case 'responsive':
        return <Layers className="text-green-500" />;
      case 'accessibility':
        return <Layers className="text-blue-600" />;
      case 'api':
        return <Code className="text-yellow-600" />;
      default:
        return <Code className="text-gray-500" />;
    }
  };

  const variants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
      },
    }),
  };

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
      className="flex items-center gap-3 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-md">
        {getIcon()}
      </div>
      <div>
        <h4 className="font-medium text-gray-900 dark:text-white">{skill.name}</h4>
        <div className="flex mt-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-6 h-1 rounded-sm mr-1 ${
                i < skill.level
                  ? 'bg-primary-500'
                  : 'bg-gray-200 dark:bg-gray-700'
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;