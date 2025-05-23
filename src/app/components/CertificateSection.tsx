// CertificationsSection.jsx
"use client";

import { motion } from 'framer-motion';
import { Check, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { content } from '../lib/content';

export default function CertificationsSection({ animations }: { isMobile: boolean; animations: any }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={animations.fadeIn}
      transition={{ duration: 0.6 }}
      className="py-24 md:py-32 px-6 sm:px-8 bg-gray-50 dark:bg-gray-800"
      id="certifications"
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
            Professional <span className="text-indigo-600 dark:text-indigo-400">Certifications</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Industry-recognized certifications that validate my expertise in DevOps, cloud platforms, and infrastructure automation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {content.certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={animations.fadeIn}
              transition={{ delay: index * 0.1 + 0.3 }}
              whileHover={animations.hoverEffect}
            >
              <Card className="h-full overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-lg transition-all duration-300">
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                      <Check className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    {cert.link && (
                      <motion.div whileTap={animations.tapEffect}>
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                          <a href={cert.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                          </a>
                        </Button>
                      </motion.div>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    {cert.name}
                  </h3>
                  
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {cert.organization}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                    <motion.div whileTap={animations.tapEffect}>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full"
                      >
                        <a 
                          href={cert.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-full"
                        >
                          View Credential
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Skills section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animations.fadeIn}
          transition={{ delay: 0.4 }}
          className="mt-24"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">
            Technical <span className="text-indigo-600 dark:text-indigo-400">Skillset</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {Object.entries(content.skillstacks).map(([category, skills], index) => (
              <motion.div
                key={category}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={animations.fadeIn}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <Card className="h-full overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-lg transition-all duration-300">
                  <div className="p-6">
                    <h4 className="text-lg font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
                      {category}
                    </h4>
                    <ul className="space-y-2">
                      {skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="flex items-center text-gray-700 dark:text-gray-300">
                          <span className="w-1.5 h-1.5 bg-indigo-500 dark:bg-indigo-400 rounded-full mr-2"></span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}