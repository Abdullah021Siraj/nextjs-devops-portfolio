"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Cloud,
  ExternalLink,
  FileText,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  MessageSquareQuote,
  MonitorCheck,
  Quote,
  Terminal,
  User,
} from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { MotionButton, MotionDiv, MotionSection } from "./motion-wrapper";
import { useState } from "react";

const content = {
  name: "Abdullah",
  herosection: {
    title: "Hi, I'm Abdullah – DevOps Engineer 🚀",
    description:
      "I specialize in automating software delivery, building reliable infrastructure, and optimizing DevOps workflows using modern cloud-native tools. Let's make deployments fast, secure, and seamless.",
    stats: [
      { value: "3+", label: "Years Experience" },
      { value: "20+", label: "Projects Deployed" },
      { value: "99.9%", label: "Uptime Achieved" },
    ],
    techStack: ["Docker", "Kubernetes", "AWS", "Terraform", "CI/CD", "Python"],
  },

  skillstacks: {
    "CI/CD": ["GitHub Actions", "GitLab CI/CD", "Jenkins", "CircleCI"],
    Containers: ["Docker", "Kubernetes", "Helm"],
    IAC: ["Terraform", "Ansible", "Pulumi"],
    Cloud: ["AWS (EC2, S3, Lambda, EKS)", "GCP", "Azure"],
    Monitoring: ["Prometheus", "Grafana", "ELK Stack", "Datadog"],
    Scripting: ["Bash", "Python", "Go"],
    VCS: ["Git", "GitHub", "GitLab", "Bitbucket"],
    Security: ["Vault", "Snyk", "AWS IAM", "Cloudflare"],
  },

  projects: [
    {
      title: "Automated AWS CI/CD Pipeline for Java Web App",
      stack: [
        "AWS CodePipeline",
        "EC2",
        "Maven",
        "S3",
        "CodeArtifact",
        "Docker",
      ],
      description:
        "Architected a high-efficiency CI/CD pipeline on AWS to automate the build, test, and deployment of a Java web application. Leveraged AWS CodePipeline, CodeBuild, and CodeDeploy to enable seamless integration and delivery, reducing deployment time by 70%. Implemented Docker for containerization, S3 for artifact storage, and CodeArtifact for dependency management, ensuring zero-downtime deployments to EC2 instances.",
      github: "https://github.com/Abdullah021Siraj/nextwork-devops",
      documentation:
        "https://docs.google.com/document/d/1lbey67SzSb3Vv79g0vBFSFwZAGT4E9BJzpGqRO3b-DQ/edit?tab=t.0",
      preview: "/",
      highlight: "🚀 Reduced deployment time by 70% with full automation.",
    },
    {
      title: "Serverless URL Shortener – Scalable Microservice on AWS",
      stack: [
        "Lambda",
        "API Gateway",
        "DynamoDB",
        "Vercel",
        "Node.js",
        "CloudWatch",
      ],
      description:
        "Built a lightning-fast, serverless URL shortener using AWS Lambda and API Gateway, handling 10,000+ requests/month with sub-100ms latency. Integrated DynamoDB for high-performance data storage and Vercel for frontend hosting. Configured real-time monitoring and alerts via CloudWatch, ensuring 99.9% uptime and cost-efficient scalability.",
      github: "https://github.com/Abdullah021Siraj/url-shortener-AWSLamda",
      documentation:
        "https://docs.google.com/document/d/126T9fZCsb1OVCyhWyeDJdhbT-WtfJK0nxzyoUWRsgVQ/edit?tab=t.0",
      preview: "https://url-shortener-nu-lilac.vercel.app/",
      highlight: "⚡ Achieved sub-100ms latency with serverless architecture.",
    },
    {
      title: "Real-Time Weather Dashboard – AWS EC2 & Node.js",
      stack: ["AWS EC2", "Nginx", "PM2", "Vercel", "React"],
      description:
        "Deployed a dynamic weather dashboard with real-time data fetching, hosted on AWS EC2 for high availability. Configured Nginx as a reverse proxy and PM2 for process management, ensuring seamless uptime. The React frontend, deployed on Vercel, delivers a responsive UX with interactive charts and location-based weather insights.",
      github: "https://github.com/Abdullah021Siraj/weather-app",
      documentation:
        "https://docs.google.com/document/d/1pYmdWx9-ZqvNuAoW5IN3sDlVcpExBdAGLfeTFIswasI/edit?tab=t.0#heading=h.uxus0bscn3lk",
      preview: "https://abdullah021siraj-weather-app.vercel.app/",
      highlight: "🌦️ Delivered real-time weather updates with 99% reliability.",
    },
  ],

  certifications: [
    {
      name: "AWS Certified DevOps Engineer – Professional",
      organization: "Amazon Web Services",
      link: "https://www.credly.com/badges/your-aws-cert-id",
    },
    {
      name: "Certified Kubernetes Administrator (CKA)",
      organization: "Cloud Native Computing Foundation",
      link: "https://www.cncf.io/certification/cka/",
    },
    {
      name: "HashiCorp Certified: Terraform Associate",
      organization: "HashiCorp",
      link: "https://www.hashicorp.com/certification/terraform-associate",
    },
  ],

  contact: {
    email: "dev.abdullah21@gmail.com",
    github: "https://github.com/abdullah021siraj",
    linkedin: "https://linkedin.com/in/abdullah021siraj",
    resume:
      "https://docs.google.com/document/d/1hyCr2I1_KyZlqo9ot1s6Onsn_rq0AtEtsCv7Mvfyuu8/export?format=pdf",
  },

  testimonials: [
    {
      name: "Sarah Ali",
      position: "Software Engineer",
      quote:
        "Abdullah’s understanding of CI/CD pipelines and infrastructure automation is top-notch. He made our development-to-deployment process smoother than ever.",
      company: "DevStu Inc."
      },
    {
      name: "Ahmed Malik",
      position: "Team Lead",
      quote:
        "His ability to troubleshoot, optimize, and explain DevOps solutions clearly made a huge impact on our project’s delivery timelines.",
      company: "CloudDev."
      },
  ],
};

export const HomePage = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
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
  };

  return (
    <div
      className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-hidden"
      id="home"
    >
      {/* Hero Section */}
      <MotionSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative min-h-screen py-12 md:py-16 px-4 md:px-5 bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-800 overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <MotionDiv
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute -right-20 -top-20 w-96 h-96 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl"
          ></MotionDiv>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
            {/* Left content */}
            <MotionDiv
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
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
                <MotionButton
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-xs md:text-sm bg-white text-indigo-700 hover:bg-black/90 hover:text-white shadow-lg"
                >
                  <a
                    href="https://docs.google.com/document/d/1hyCr2I1_KyZlqo9ot1s6Onsn_rq0AtEtsCv7Mvfyuu8/export?format=pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    <span className="inline-flex items-center">
                      Download Resume
                      <FileText className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4" />
                    </span>
                  </a>
                </MotionButton>
              </div>

              <div className="flex justify-center lg:justify-start gap-3 md:gap-4 mt-6 md:mt-8">
                {[
                  { icon: Github, link: content.contact.github },
                  { icon: Linkedin, link: content.contact.linkedin },
                ].map(({ icon: Icon, link }, index) => (
                  <MotionButton
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8 md:h-10 md:w-10 rounded-full text-white hover:bg-white/20 backdrop-blur-sm shadow-lg"
                  >
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      <Icon className="h-4 w-4 md:h-5 md:w-5" />
                    </a>
                  </MotionButton>
                ))}
              </div>
            </MotionDiv>

            {/* Right content */}
            <MotionDiv
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="flex-1 flex flex-col items-center mt-8 lg:mt-0"
            >
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl hover:border-white/50 transition-all duration-300">
                <Image
                  src="/profile-image.png"
                  alt="Abdullah - DevOps Engineer"
                  width={320}
                  height={320}
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
            </MotionDiv>
          </div>
        </div>
      </MotionSection>

      {/* Projects Section */}
      <MotionSection
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="relative py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-indigo-100 dark:bg-indigo-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 right-20 w-48 h-48 bg-purple-100 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center mb-4"
            >
              <div className="p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-900/50">
                <MonitorCheck className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              </div>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 bg-clip-text"
            >
              Cloud Engineering Projects
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Scalable infrastructure solutions with measurable business impact
            </MotionDiv>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.projects.map((project, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="h-full bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
                  <div className="p-6 pb-0 flex-1">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg mr-3">
                        <Cloud className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {project.description}
                    </p>

                    {project.highlight && (
                      <div className="mb-6 px-4 py-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-100 dark:border-indigo-900/30">
                        <p className="text-sm font-medium text-indigo-700 dark:text-indigo-300 flex items-center">
                          {/* <LightningBolt className="h-4 w-4 mr-2" /> */}
                          {project.highlight}
                        </p>
                      </div>
                    )}

                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.stack.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs font-medium px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700/20 border-t border-gray-100 dark:border-gray-700 flex justify-between">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Source Code
                    </a>
                    <div className="flex space-x-4">
                      {project.documentation && (
                        <a
                          href={project.documentation}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center"
                        >
                          <FileText className="h-4 w-4 mr-2" />
                          Docs
                        </a>
                      )}
                      {project.preview && project.preview !== "/" && (
                        <a
                          href={project.preview}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* Certifications Section */}
      <MotionSection
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative py-20 md:py-28 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-40 h-40 bg-blue-100 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-indigo-100 dark:bg-indigo-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center mb-4 p-3 rounded-2xl bg-blue-50 dark:bg-blue-900/30">
              {/* <Certificate className="h-8 w-8 text-blue-600 dark:text-blue-400" /> */}
            </div>

            <h2
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
              id="certifications"
            >
              Professional Certifications
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Verified expertise in cloud architecture and DevOps engineering
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.certifications.map((cert, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div className="h-full bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
                  <div className="p-8 pb-6 flex-1 flex flex-col items-center text-center">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
                      <div className="relative p-5 bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/30 dark:to-gray-800 rounded-full border border-blue-100 dark:border-blue-900/30">
                        <Cloud className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                      {cert.name}
                    </h3>

                    <p className="text-blue-500 dark:text-blue-400 font-medium mb-4">
                      {cert.organization}
                    </p>

                  </div>

                  <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700/20 border-t border-gray-100 dark:border-gray-700 text-center">
                    <Link
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/40 text-blue-600 dark:text-blue-400 font-medium transition-colors border border-blue-100 dark:border-blue-900/30"
                    >
                      Verify Credential
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </MotionSection>
      {/* Testimonials Section */}
      <MotionSection
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative py-20 md:py-28 px-4 sm:px-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-20 left-1/4 w-48 h-48 bg-teal-100 dark:bg-teal-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 right-20 w-64 h-64 bg-indigo-100 dark:bg-indigo-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-10"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center mb-4 p-3 rounded-2xl bg-teal-50 dark:bg-teal-900/30">
              <MessageSquareQuote className="h-8 w-8 text-teal-600 dark:text-teal-400" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Endorsements
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Trusted by industry leaders and collaborators
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {content.testimonials.map((testi, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="h-full bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 relative">
                  {/* Decorative quote mark */}
                  <div className="absolute top-6 right-6 text-gray-100 dark:text-gray-700 group-hover:text-teal-100 dark:group-hover:text-teal-900/50 transition-colors">
                    <Quote className="h-16 w-16" />
                  </div>

                  <div className="p-8 pr-12">
                    <div className="flex items-start mb-6">
                      <div className="flex-shrink-0 mr-4">
                        <div className="relative h-12 w-12 rounded-full bg-gradient-to-br from-teal-100 to-teal-50 dark:from-teal-900 dark:to-teal-800/50 p-0.5">
                          <div className="h-full w-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                            <User className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-gray-900 dark:text-white">
                          {testi.name}
                        </p>
                        <p className="text-teal-600 dark:text-teal-400 text-sm">
                          {testi.position}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 text-lg italic relative z-10">
                      {testi.quote}
                    </p>
                  </div>

                  {/* Company logo (if available in data) */}
                  {testi.company && (
                    <div className="px-8 py-4 bg-gray-50 dark:bg-gray-700/20 border-t border-gray-100 dark:border-gray-700 flex items-center">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400 mr-2">
                        From
                      </span>
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        {testi.company}
                      </span>
                    </div>
                  )}
                </div>
              </MotionDiv>
            ))}
          </div>

          {/* Optional CTA */}
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Link
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-medium transition-colors shadow-lg hover:shadow-teal-500/20"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Share Your Experience
            </Link>
          </MotionDiv>
        </div>
      </MotionSection>
      {/* Contact Section */}
      <MotionSection
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative py-24 md:py-32 px-6 sm:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-900/30 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-blue-900/20 rounded-full mix-blend-screen filter blur-3xl opacity-15"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
            id="contact"
          >
            <div className="inline-flex items-center justify-center mb-6 p-4 rounded-2xl bg-indigo-900/30 backdrop-blur-sm border border-indigo-800/50">
              <Mail className="h-8 w-8 text-indigo-400" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Lets Build Something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
                Amazing
              </span>
            </h2>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              Whether you have a project in mind or just want to connect, I would
              love to hear from you.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <MotionButton
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleCopyEmail}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-semibold shadow-lg hover:shadow-indigo-500/30 transition-all flex items-center justify-center gap-2"
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
              </MotionButton>

              <MotionButton
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/20 backdrop-blur-sm shadow-lg hover:shadow-white/10 transition-all"
              >
                <a
                  href={content.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Linkedin className="h-5 w-5" />
                  Connect
                </a>
              </MotionButton>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-800">
              <div className="flex justify-center space-x-6">
                {[
                  { icon: Github, link: content.contact.github },
                  { icon: Linkedin, link: content.contact.linkedin },
                ].map((social, index) => (
                  <MotionButton
                    key={index}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    asChild
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
                  </MotionButton>
                ))}
              </div>
              <p className="mt-8 text-gray-400 text-sm">
                © {new Date().getFullYear()} {content.name}. All rights
                reserved.
              </p>
            </div>
          </MotionDiv>
        </div>
      </MotionSection>
    </div>
  );
};
