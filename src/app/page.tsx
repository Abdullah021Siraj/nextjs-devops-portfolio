"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Terminal, 
  FileText, 
  Github, 
  Linkedin, 
  Mail,
  Check
} from 'lucide-react';

// Import UI components properly
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

// Lazy load content-heavy sections
import dynamic from 'next/dynamic';
const ProjectsSection = dynamic(() => import('./components/ProjectSection'), {
  ssr: false
});
const CertificationsSection = dynamic(() => import('./components/CertificateSection'), {
  ssr: false
});
const TestimonialsSection = dynamic(() => import('./components/TestimonialSection'), {
  ssr: false
});

// Move content to a separate file for better organization
import { content } from './lib/content';

// Custom hook for mobile detection
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if the screen is mobile-sized
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    
    // Initial check
    checkMobile();
    
    // Add event listener with debouncing
    let timeoutId: string | number | NodeJS.Timeout | undefined;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkMobile, 100);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
};

export default function HomePage() {
  const [copied, setCopied] = useState(false);
  const isMobile = useIsMobile();

  // Memoized email copy handler
  const handleCopyEmail = useCallback(() => {
    navigator.clipboard
      .writeText(content.contact.email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy email: ", err);
        window.location.href = `mailto:${content.contact.email}`;
      });
  }, []);

  // Animation variants - memoized objects to prevent rerenders
  const animations = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    slideInFromLeft: {
      hidden: isMobile ? { opacity: 0 } : { x: -50, opacity: 0 },
      visible: { x: 0, opacity: 1 }
    },
    slideInFromRight: {
      hidden: isMobile ? { opacity: 0 } : { x: 50, opacity: 0 },
      visible: { x: 0, opacity: 1 }
    },
    hoverEffect: isMobile ? {} : { y: -5 },
    tapEffect: isMobile ? {} : { scale: 0.95 },
    hoverScale: isMobile ? {} : { scale: 1.05 }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-hidden">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={animations.fadeIn}
        transition={{ duration: 0.5 }}
        className="relative min-h-screen py-12 md:py-16 px-4 md:px-5 bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-800 overflow-hidden"
      >
        {/* Animated background (only on desktop) */}
        {!isMobile && (
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute -right-20 -top-20 w-96 h-96 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl"
            />
          </div>
        )}

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
            {/* Left content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={animations.slideInFromLeft}
              transition={{ duration: 0.5 }}
              className="flex-1 text-center lg:text-left"
            >
              <Badge className="mb-3 md:mb-4 text-xs md:text-sm bg-white/20 hover:bg-white/30 text-white border-none backdrop-blur-sm">
                <Terminal className="mr-2 h-4 w-4" />
                Available for new opportunities
              </Badge>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
                {content.herosection.title}
              </h1>

              <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto lg:mx-0">
                {content.herosection.description}
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-2 md:gap-3 mt-6 md:mt-8">
                {content.herosection.techStack.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="bg-white/10 text-white border-white/20 hover:bg-white/20 text-xs md:text-sm backdrop-blur-sm"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 mt-8 md:mt-10">
                <motion.div
                  whileHover={animations.hoverScale}
                  whileTap={animations.tapEffect}
                >
                  <Button className="text-xs md:text-sm bg-white text-indigo-700 hover:bg-black/90 hover:text-white shadow-lg">
                    <a
                      href={content.contact.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="inline-flex items-center"
                    >
                      Download Resume
                      <FileText className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4" />
                    </a>
                  </Button>
                </motion.div>
              </div>

              <div className="flex justify-center lg:justify-start gap-3 md:gap-4 mt-6 md:mt-8">
                {[
                  { icon: Github, link: content.contact.github },
                  { icon: Linkedin, link: content.contact.linkedin },
                ].map(({ icon: Icon, link }, index) => (
                  <motion.div
                    key={index}
                    whileHover={animations.hoverScale}
                    whileTap={animations.tapEffect}
                  >
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 md:h-10 md:w-10 rounded-full text-white hover:bg-white/20 backdrop-blur-sm shadow-lg"
                    >
                      <a href={link} target="_blank" rel="noopener noreferrer">
                        <Icon className="h-4 w-4 md:h-5 md:w-5" />
                      </a>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={animations.slideInFromRight}
              transition={{ duration: 0.5 }}
              className="flex-1 flex flex-col items-center mt-8 lg:mt-0"
            >
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl hover:border-white/50 transition-all duration-300">
                <Image
                  src="/profile-image.png"
                  alt="Abdullah - DevOps Engineer"
                  width={320}
                  height={320}
                  priority
                  quality={isMobile ? 75 : 90}
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              <Card className="mt-6 md:mt-8 bg-white/10 border-white/20 backdrop-blur-sm text-white p-4 md:p-6 w-full max-w-xs sm:max-w-sm md:max-w-md hover:bg-white/20 transition-all duration-300 shadow-xl">
                <div className="grid grid-cols-3 gap-2 md:gap-4 text-center">
                  {content.herosection.stats.map((stat) => (
                    <div key={stat.label} className="flex flex-col">
                      <span className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
                        {stat.value}
                      </span>
                      <span className="text-xs md:text-sm text-white/70">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section - Lazy loaded */}
      
        <ProjectsSection isMobile={isMobile} animations={animations} />
     

      {/* Certifications Section - Lazy loaded */}
      
        <CertificationsSection isMobile={isMobile} animations={animations} />
     

      {/* Testimonials Section - Lazy loaded */}
      
        <TestimonialsSection isMobile={isMobile} animations={animations} />
     

      {/* Contact Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={animations.fadeIn}
        transition={{ duration: 0.6 }}
        className="relative py-24 md:py-32 px-6 sm:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden"
        id="contact"
      >
        {/* Decorative elements (desktop only) */}
        {!isMobile && (
          <>
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-900/30 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>
            <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-blue-900/20 rounded-full mix-blend-screen filter blur-3xl opacity-15"></div>
          </>
        )}

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={animations.fadeIn}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center mb-6 p-4 rounded-2xl bg-indigo-900/30 backdrop-blur-sm border border-indigo-800/50">
              <Mail className="h-8 w-8 text-indigo-400" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Build Something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
                Amazing
              </span>
            </h2>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              Whether you have a project in mind or just want to connect, I would
              love to hear from you.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <motion.div
                whileHover={animations.hoverScale}
                whileTap={animations.tapEffect}
              >
                <Button
                  onClick={handleCopyEmail}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-semibold shadow-lg hover:shadow-indigo-500/30 transition-all flex items-center justify-center gap-2 w-full"
                >
                  {copied ? (
                    <>
                      <Check className="h-5 w-5" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Mail className="h-5 w-5" />
                      Email Me
                    </>
                  )}
                </Button>
              </motion.div>

              <motion.div
                whileHover={animations.hoverScale}
                whileTap={animations.tapEffect}
              >
                <Button className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/20 backdrop-blur-sm shadow-lg hover:shadow-white/10 transition-all w-full">
                  <a
                    href={content.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Linkedin className="h-5 w-5" />
                    Connect
                  </a>
                </Button>
              </motion.div>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-800">
              <div className="flex justify-center space-x-6">
                {[
                  { icon: Github, link: content.contact.github },
                  { icon: Linkedin, link: content.contact.linkedin },
                ].map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={animations.hoverEffect}
                    whileTap={animations.tapEffect}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-12 w-12 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10"
                    >
                      <a
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <social.icon className="h-5 w-5" />
                      </a>
                    </Button>
                  </motion.div>
                ))}
              </div>
              <p className="mt-8 text-gray-400 text-sm">
                © {new Date().getFullYear()} {content.name}. All rights
                reserved.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}