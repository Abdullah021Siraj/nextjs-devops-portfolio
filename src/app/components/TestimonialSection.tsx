// TestimonialsSection.jsx
"use client";

import { motion } from 'framer-motion';
import { MessageCircle, Quote, ArrowUpRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { content } from '../lib/content';

export default function TestimonialsSection({ isMobile, animations }: { isMobile: boolean, animations: any }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={animations.fadeIn}
      transition={{ duration: 0.6 }}
      className="py-24 md:py-32 px-6 sm:px-8 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-900 dark:to-indigo-950 overflow-hidden"
      id="testimonials"
    >
      {/* Background decoration */}
      {!isMobile && (
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute -right-40 top-1/4 w-96 h-96 bg-indigo-400 rounded-full filter blur-3xl"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
            className="absolute -left-40 bottom-1/4 w-80 h-80 bg-blue-400 rounded-full filter blur-3xl"
          />
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animations.fadeIn}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center mb-6 p-3 rounded-full bg-indigo-100 dark:bg-indigo-900/30">
            <MessageCircle className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Client <span className="text-indigo-600 dark:text-indigo-400">Testimonials</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Feedback from professionals I have had the pleasure to work with on various projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {content.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={animations.fadeIn}
              transition={{ delay: index * 0.2 + 0.3 }}
              whileHover={animations.hoverEffect}
            >
              <Card className="h-full overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300">
                <div className="p-6 md:p-8 flex flex-col h-full">
                  <Quote className="h-10 w-10 text-indigo-300 dark:text-indigo-700 mb-6" />
                  
                  <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-6 italic">
                    {testimonial.quote}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.position}{testimonial.company && `, ${testimonial.company}`}
                      </p>
                    </div>
                    
                    <div className="flex justify-end">
                      <motion.div whileTap={animations.tapEffect}>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-800/50"
                        >
                          <ArrowUpRight className="h-4 w-4" />
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animations.fadeIn}
          transition={{ delay: 0.5 }}
          className="mt-16 md:mt-20 text-center"
        >
          <Card className="p-8 md:p-10 bg-gradient-to-r from-indigo-600 to-blue-600 border-none text-white max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Enhance Your DevOps Capabilities?
            </h3>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Lets collaborate to streamline your development workflow, optimize your infrastructure, and build reliable, scalable systems.
            </p>
            <motion.div 
              whileHover={animations.hoverScale}
              whileTap={animations.tapEffect}
              className="inline-block"
            >
              <Button 
                className="px-8 py-6 rounded-xl bg-white text-indigo-600 hover:bg-gray-100 font-semibold shadow-lg text-lg"
              >
                <a 
                  href="#contact" 
                  className="flex items-center"
                >
                  Get in Touch
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
}