// lib/content.js

export const content = {
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
        "https://docs.google.com/document/d/1xym82FQvCXum2leRmRxNaW85IP4-D5t12kZo9tg2zW4/edit?usp=sharing",
    },
  
    testimonials: [
      {
        name: "Sarah Ali",
        position: "Software Engineer",
        quote:
          "Abdullah's understanding of CI/CD pipelines and infrastructure automation is top-notch. He made our development-to-deployment process smoother than ever.",
        company: "DevStu Inc."
      },
      {
        name: "Ahmed Malik",
        position: "Team Lead",
        quote:
          "His ability to troubleshoot, optimize, and explain DevOps solutions clearly made a huge impact on our project's delivery timelines.",
        company: "CloudDev."
      },
    ],
  };
