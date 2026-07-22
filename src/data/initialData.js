export const INITIAL_DATA = {
  coverPhoto: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
  profilePhoto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80", // Will fallback/use user image
  bio: {
    fullName: "Md. Emam Zafor Saadik",
    title: "AI Engineer & ML Researcher",
    location: "Dhaka, Bangladesh",
    phone: "+880 1990 930131",
    statusBadge: "Available for opportunities",
    shortBio: "Final-year CSE student building research-driven ML pipelines, NLP, RAG, automated workflows, backend and architectural solutions for complex real-world data systems."
  },
  socialMedia: [
    { id: "sm-1", platform: "LinkedIn", url: "https://linkedin.com", label: "LinkedIn" },
    { id: "sm-2", platform: "GitHub", url: "https://github.com", label: "GitHub" },
    { id: "sm-3", platform: "Google Scholar", url: "https://scholar.google.com", label: "Scholar" }
  ],
  about: "Final-year CSE student building research-driven ML pipelines, NLP, RAG, automated workflows, backend and architectural solutions for complex real-world data systems.",
  experience: [
    {
      id: "exp-1",
      position: "CTO & Co-Founder",
      company: "ARI Software Lab",
      startDate: "2022",
      endDate: "",
      isCurrent: true,
      description: "Leading technological strategy and product development. Architecting scalable AI infrastructure and managing a team of developers to deliver innovative software solutions.",
      link: "https://arisoftwarelab.com"
    },
    {
      id: "exp-2",
      position: "Research Intern",
      company: "Peer Research Lab",
      startDate: "2023",
      endDate: "2024",
      isCurrent: false,
      description: "Conducted intensive research in machine learning methodologies. Contributed to academic papers and collaborated with senior researchers on novel AI architectures.",
      link: ""
    },
    {
      id: "exp-3",
      position: "Member",
      company: "BUBT Photography Club",
      startDate: "2022",
      endDate: "2023",
      isCurrent: false,
      description: "Event coverage and creative visual documentation for campus events.",
      link: ""
    }
  ],
  researchFocus: [
    {
      id: "rf-1",
      title: "TERRA: Temporal-Evolution and Reasoning-Trace RAG",
      description: "Advanced Retrieval-Augmented Generation framework focusing on temporal data evolution and traceable reasoning paths for complex querying.",
      status: "Published",
      venue: "IEEE / ArXiv",
      year: "2024",
      link: "https://arxiv.org",
      keywords: ["NLP", "RAG", "Temporal Reasoning"]
    },
    {
      id: "rf-2",
      title: "Lung Cancer Detection using X-Ray Images",
      description: "Applied DenseNet-169 architecture for high-accuracy detection of lung anomalies from standard chest X-rays, aiming to improve early diagnostic rates.",
      status: "Preprint",
      venue: "Medical AI Journal",
      year: "2024",
      link: "https://arxiv.org",
      keywords: ["Computer Vision", "DenseNet-169", "Healthcare"]
    },
    {
      id: "rf-3",
      title: "AQI Prediction",
      description: "Engineered an LSTM model achieving highly accurate predictions. Processed multi-sensor time-series datasets containing meteorological and emission data for spatio-temporal modeling. Collaborated with environmental experts to deploy forecasting dashboards.",
      status: "In Progress",
      venue: "Environmental ML Work",
      year: "2024",
      link: "",
      keywords: ["LSTM", "Time-Series", "Environmental Data"]
    },
    {
      id: "rf-4",
      title: "GAN-BanglaFake",
      description: "Developed a generative adversarial network architecture tailored for synthesizing high-fidelity Bangla handwritten characters. Enhanced training stability employing Wasserstein loss and gradient penalty techniques.",
      status: "Completed",
      venue: "Computer Vision Research",
      year: "2023",
      link: "",
      keywords: ["GAN", "Generative AI", "WGAN-GP"]
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "ObsidianIDE",
      icon: "code",
      description: "A lightweight, customizable Integrated Development Environment tailored for specific workflows.",
      link: "https://github.com",
      demoLink: "",
      techStack: ["React", "Tauri", "Monaco"]
    },
    {
      id: "proj-2",
      title: "Blood Connect",
      icon: "droplet",
      description: "Comprehensive blood bank and donation management system connecting donors with patients efficiently.",
      link: "https://github.com",
      demoLink: "",
      techStack: ["Node.js", "MongoDB", "Express"]
    },
    {
      id: "proj-3",
      title: "VisionAid",
      icon: "eye",
      description: "Smart blind stick utilizing sensors and basic AI to provide spatial awareness and obstacle detection for the visually impaired.",
      link: "https://github.com",
      demoLink: "",
      techStack: ["Embedded C++", "YOLO", "Raspberry Pi"]
    },
    {
      id: "proj-4",
      title: "Cursion-2",
      icon: "globe",
      description: "Interactive Black Hole Lifecycle Simulator demonstrating complex astrophysical phenomena through visual models.",
      link: "https://github.com",
      demoLink: "",
      techStack: ["Three.js", "WebGL", "Physics Engine"]
    },
    {
      id: "proj-5",
      title: "Stance Detection",
      icon: "message-square",
      description: "Fine-tuned pre-trained transformer models (BERT, RoBERTa) to classify user stance on controversial topics with significant performance improvements. Built a scalable web API using FastAPI to serve the model for real-time inference.",
      link: "https://github.com",
      demoLink: "",
      techStack: ["PyTorch", "BERT", "FastAPI"]
    }
  ],
  education: [
    {
      id: "edu-1",
      degree: "B.Sc. in Computer Science & Engineering",
      institute: "BUBT (Bangladesh University of Business and Technology)",
      result: "CGPA: 3.85",
      startDate: "2021",
      endDate: "2025",
      highlights: "Focus on AI, Machine Learning, and Software Architecture"
    }
  ],
  skills: [
    {
      category: "Languages",
      items: ["Python", "C/C++", "Java", "SQL"]
    },
    {
      category: "Machine Learning & AI",
      items: ["PyTorch", "TensorFlow", "Keras", "Scikit-Learn", "HuggingFace Transformers", "LangChain"]
    },
    {
      category: "Data Science Tools",
      items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "OpenCV"]
    },
    {
      category: "Backend & Cloud",
      items: ["FastAPI", "Django", "Docker", "Git"]
    }
  ],
  researchInterests: [
    "Natural Language Processing (NLP)",
    "Computer Vision (CV)",
    "Generative AI",
    "Retrieval-Augmented Generation (RAG)",
    "Time-Series Analysis"
  ],
  contact: [
    { id: "c-1", type: "email", value: "sayhitosaadik@gmail.com", label: "Email" },
    { id: "c-2", type: "phone", value: "+880 1990 930131", label: "Phone" },
    { id: "c-3", type: "location", value: "Dhaka, Bangladesh", label: "Location" }
  ],
  responseTime: "Response time: ~24 hours",
  hobbies: [],
  downloadCv: {
    fileUrl: "./CV.pdf",
    fileName: "Zafor_Saadik_CV.pdf",
    buttonText: "Download CV",
    lastUpdated: "2024"
  }
}
