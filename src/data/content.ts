export const content = {
  hero: {
    name: "ARIGALA BALAJI",
    title: "Associate System Administrator | Cybersecurity Enthusiast",
    subtitle: "Building secure, scalable cloud infrastructure — one automation at a time.",
  },
  about: {
    bio: "B.Tech CSE (Cyber Security) graduate from Kalasalingam University (2025). Currently working as Associate System Administrator at GISUL Software Solutions / DGM Technologies, Bengaluru. Passionate about cloud infrastructure, security automation, and ethical hacking. Active on TryHackMe and PortSwigger Web Security Academy.",
    stats: [
      { label: "Cloud Platforms", value: 4, icon: "☁️" },
      { label: "VMs Managed", value: 200, suffix: "+", icon: "🖥️" },
      { label: "Automation Scripts", value: 10, suffix: "+", icon: "⚙️" },
      { label: "Security Projects", value: 2, icon: "🔐" }
    ]
  },
  skills: [
    {
      category: "Cloud & Infrastructure",
      items: ["Azure", "AWS", "GCP", "OCI"]
    },
    {
      category: "DevOps & Containers",
      items: ["Docker Swarm", "HAProxy", "GitHub Actions"]
    },
    {
      category: "Security & Identity",
      items: ["Microsoft Entra ID", "Intune", "Cybersecurity"]
    },
    {
      category: "Scripting",
      items: ["PowerShell", "Bash", "Python"]
    },
    {
      category: "Web & Backend",
      items: ["Django", "Flask", "FastAPI", "Next.js", "Express"]
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "SQL"]
    },
    {
      category: "Remote Access",
      items: ["Apache Guacamole"]
    },
    {
      category: "OS",
      items: ["Windows Server 2022", "Linux (Ubuntu)"]
    }
  ],
  experience: [
    {
      title: "Associate System Administrator",
      company: "GISUL Software Solutions / DGM Technologies",
      location: "Bengaluru",
      period: "Apr 2026 – Present",
      bullets: [
        "Multi-cloud administration (Azure, AWS, GCP, OCI)",
        "Production incident resolution (HAProxy DNS, WebSocket keepalives)",
        "Microsoft Entra ID / Intune device management",
        "GitHub Actions CI/CD pipelines",
        "Azure Automation runbooks for resource cleanup"
      ]
    },
    {
      title: "IT Administrator Intern",
      company: "GISUL Software Solutions / DGM Technologies",
      location: "Bengaluru",
      period: "Jan 2026 – Apr 2026",
      bullets: [
        "Bulk VM provisioning and software deployment (PowerShell/Chocolatey)",
        "Guacamole bulk user provisioning via REST API + PostgreSQL (200+ VMs)",
        "Azure RBAC automation for large user cohorts",
        "HAProxy + Docker Swarm load balancer configuration"
      ]
    }
  ],
  projects: [
    {
      title: "AI-Powered Medical Diagnosis",
      tags: ["Python", "Flask", "Machine Learning", "Image Analysis"],
      description: "Web app that takes medical images as input, preprocesses them for ML models, and returns illness predictions with treatment recommendations.",
    },
    {
      title: "Cybersecurity Encryption/Decryption Web App",
      tags: ["Python", "Flask", "AES", "DES", "Hill Cipher", "Caesar Cipher"],
      description: "A web application implementing four cryptographic algorithms (AES, DES, Hill Cipher, Caesar Cipher) for secure text encryption and decryption.",
      github: "https://github.com/balaji8331/encrypt_decrypt"
    },
    {
      title: "Guacamole RDP Gateway Automation",
      tags: ["REST API", "PostgreSQL", "Bash", "Docker Swarm", "HAProxy"],
      description: "Automated provisioning of 200+ remote desktop connections in Apache Guacamole using REST API and PostgreSQL, with HAProxy load balancing across Docker Swarm replicas."
    },
    {
      title: "DGM Session Tracker v4.0",
      tags: ["PowerShell", "Azure Log Analytics", "Windows Events"],
      description: "Employee session monitoring system using Windows Security Event IDs, sending ETT/ETWT metrics to Azure Log Analytics workspace via PowerShell automation."
    }
  ],
  education: [
    {
      degree: "B.Tech CSE (Cyber Security)",
      institution: "Kalasalingam University",
      year: "2025",
      score: "CGPA: 7.14"
    },
    {
      degree: "10+2 MPC",
      institution: "Narayana Junior College, BIEAP",
      year: "2021",
      score: "91.6%"
    },
    {
      degree: "SSC",
      institution: "Keshava Reddy High School, BSEAP",
      year: "2019",
      score: "CGPA: 9.5"
    }
  ],
  certifications: ["CEH", "OSCP"],
  contact: {
    email: "arigalabalaji8331@gmail.com",
    github: "https://github.com/balaji8331",
    linkedin: "https://www.linkedin.com/in/arigala-balaji-45b2a8279/",
    instagram: "#",
    twitter: "#"
  }
};
