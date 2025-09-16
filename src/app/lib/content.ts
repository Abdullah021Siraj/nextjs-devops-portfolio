// lib/content.js

export const content = {
  name: "Abdullah",
  herosection: {
    title: "Hi, I'm Abdullah – DevOps Engineer 🚀",
    description:
      "I specialize in automating software delivery, building reliable infrastructure, and optimizing DevOps workflows using modern cloud-native tools. Let's make deployments fast, secure, and seamless.",
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
    {
      title: "CI/CD with Tekton & OpenShift - Production level Project",
      stack: [
        "GitHub Actions",
        "Tekton",
        "Kubernetes",
        "Openshift",
        "CI/CD",
        "Testing & Linting",
      ],
      description:
        "Designed and implemented a robust CI/CD pipeline integrating GitHub Actions, Tekton, and OpenShift. Automated linting and unit testing to maintain code quality. Streamlined container image builds and deployments to Kubernetes/OpenShift. Improved release reliability and reduced manual overhead. Delivered a scalable workflow supporting CI/CD.",
      github: "https://github.com/Abdullah021Siraj/CI-CD_with_Tekton",
      highlight:
        "End-to-end CI/CD pipeline with automated testing and deployments on OpenShift.",
    },
  ],

  certifications: [
    {
      name: "Container & Kubernetes Essentials ",
      organization: "IBM",
      link: "https://www.credly.com/badges/d0a7d150-c48e-4a20-9ebc-f46694b8700f",
      image: "/containers-kubernetes-essentials.1.png",
    },
    {
      name: "Continuous Integration and Continuous Delivery (CI/CD) ",
      organization: "IBM",
      link: "https://www.credly.com/earner/earned/share/59feebeb-52a3-44da-9da5-626816cb8f33",
      image: "/continuous-integration-continuous-delivery-ci-cd.1.png",
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
        "Abdullah's understanding of CI/CD pipelines and infrastructure automation is top-notch. He made our development-to-deployment process smoother than ever.",
      company: "DevStu Inc.",
    },
    {
      name: "Ahmed Malik",
      position: "Team Lead",
      quote:
        "His ability to troubleshoot, optimize, and explain DevOps solutions clearly made a huge impact on our project's delivery timelines.",
      company: "CloudDev.",
    },
  ],
};
