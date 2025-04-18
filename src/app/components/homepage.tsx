import Link from "next/link";
import { ProjectSection } from "./sections/ProjectSection";
import {
  ArrowRight,
  Cloud,
  FileText,
  Github,
  Linkedin,
  Mail,
  MonitorCheck,
  Terminal,
} from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { TestimonialCard } from "./sections/TestimonialCard";
import { MotionButton, MotionDiv, MotionSection } from "./motion-wrapper";

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
      title: "CI/CD Pipeline for Node.js App",
      stack: ["GitHub Actions", "Docker", "AWS EC2"],
      description:
        "Designed and implemented a full CI/CD pipeline for a Node.js application using GitHub Actions and Docker. The pipeline includes linting, testing, Docker image building, and deployment to AWS EC2 with zero downtime.",
      github: "https://github.com/yourusername/nodejs-cicd-pipeline",
    },
    {
      title: "Infrastructure Automation with Terraform",
      stack: ["Terraform", "AWS", "CloudWatch"],
      description:
        "Provisioned and managed scalable AWS infrastructure using Terraform. Automated deployment of EC2 instances, RDS, and S3 with monitoring and alerting configured via CloudWatch.",
      github: "https://github.com/yourusername/aws-terraform-iac",
    },
    {
      title: "Kubernetes Monitoring Stack",
      stack: ["Kubernetes", "Prometheus", "Grafana"],
      description:
        "Set up a Kubernetes cluster with Prometheus and Grafana for real-time monitoring. Created custom dashboards and alerts for CPU/memory usage, container status, and application performance.",
      github: "https://github.com/yourusername/k8s-monitoring-stack",
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
      name: "Sarah Khan",
      position: "Software Engineer at XYZ Inc.",
      quote:
        "Abdullah’s understanding of CI/CD pipelines and infrastructure automation is top-notch. He made our development-to-deployment process smoother than ever.",
    },
    {
      name: "Ahmed Malik",
      position: "Team Lead at CloudDev",
      quote:
        "His ability to troubleshoot, optimize, and explain DevOps solutions clearly made a huge impact on our project’s delivery timelines.",
    },
  ],
};

export const HomePage = () => {
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
                  { icon: Mail, link: `mailto:${content.contact.email}` },
                ].map(({ icon: Icon }, index) => (
                  <MotionButton
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8 md:h-10 md:w-10 rounded-full text-white hover:bg-white/20 backdrop-blur-sm shadow-lg"
                  >
                    <Icon className="h-4 w-4 md:h-5 md:w-5" />
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
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-12 md:py-16 px-4 md:px-5 bg-white dark:bg-gray-800"
      >
        <div className="max-w-6xl mx-auto text-center" id="projects">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
            <MonitorCheck className="inline-block mr-2 h-8 w-8 text-indigo-600" />
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
            Infrastructure solutions that scale, automate, and optimize
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
            {content.projects.map((project, index) => (
              <ProjectSection
                key={index}
                title={project.title}
                description={project.description}
                github={project.github}
                stack={project.stack}
              />
            ))}
          </div>
        </div>
      </MotionSection>

      {/* Certifications Section */}
      <MotionSection
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-12 md:py-16 px-4 md:px-5 bg-gray-50 dark:bg-gray-900"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2
            className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-2"
            id="certifications"
          >
            {/* <Certificate className="inline-block mr-2 h-8 w-8 text-indigo-600" /> */}
            Professional Certifications
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
            Validated expertise in cloud technologies and DevOps practices
          </p>
          <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {content.certifications.map((cert, index) => (
              <MotionDiv
                key={index}
                whileHover={{ y: -5 }}
                className="p-4 md:p-5 bg-white dark:bg-gray-800 border rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex flex-col items-center text-center">
                  <Cloud className="h-12 w-12 text-indigo-600 mb-4" />
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {cert.name}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-2">
                    {cert.organization}
                  </p>
                  <Link
                    href={cert.link}
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
                  >
                    Verify Certification
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
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
        viewport={{ once: true }}
        className="py-12 md:py-16 px-4 md:px-5 bg-white dark:bg-gray-800"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Client Testimonials
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
            What industry professionals say about my work
          </p>
          <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {content.testimonials.map((testi, index) => (
              <TestimonialCard
                key={index}
                quote={testi.quote}
                name={testi.name}
                position={testi.position}
              />
            ))}
          </div>
        </div>
      </MotionSection>
      <div className="flex justify-between items-center mt-12 text-gray-500 dark:text-gray-400 text-sm"></div>
    </div>
  );
};
