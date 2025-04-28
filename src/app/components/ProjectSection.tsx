// ProjectsSection.jsx
"use client";

import { motion } from 'framer-motion';
import { Github, FileText, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { content } from '../lib/content';

export default function ProjectsSection({  animations }: { isMobile: boolean, animations: Record<string, any> }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={animations.fadeIn}
      transition={{ duration: 0.6 }}
      className="py-24 md:py-32 px-6 sm:px-8 bg-white dark:bg-gray-900"
      id="projects"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animations.fadeIn}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured <span className="text-indigo-600 dark:text-indigo-400">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the recent projects I've worked on, showcasing my skills in DevOps, cloud architecture, and infrastructure automation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {content.projects.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={animations.fadeIn}
              transition={{ delay: index * 0.1 + 0.3 }}
              whileHover={animations.hoverEffect}
            >
              <Card className="h-full overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/50 hover:shadow-xl transition-all duration-300">
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="outline" className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800/50">
                        {tech}
                      </Badge>
                    ))}
                    {project.stack.length > 4 && (
                      <Badge variant="outline" className="bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-700">
                        +{project.stack.length - 4} more
                      </Badge>
                    )}
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mt-auto">
                    {project.github && (
                      <motion.div whileTap={animations.tapEffect}>
                        <Button variant="outline" size="sm" className="gap-2">
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center"
                          >
                            <Github className="h-4 w-4" />
                            Code
                          </a>
                        </Button>
                      </motion.div>
                    )}
                    
                    {project.documentation && (
                      <motion.div whileTap={animations.tapEffect}>
                        <Button variant="outline" size="sm" className="gap-2">
                          <a 
                            href={project.documentation} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center"
                          >
                            <FileText className="h-4 w-4" />
                            Docs
                          </a>
                        </Button>
                      </motion.div>
                    )}
                    
                    {project.preview && project.preview !== "/" && (
                      <motion.div whileTap={animations.tapEffect}>
                        <Button variant="outline" size="sm" className="gap-2">
                          <a 
                            href={project.preview} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      </motion.div>
                    )}
                  </div>
                  
                  {project.highlight && (
                    <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800">
                      <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                        {project.highlight}
                      </p>
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}