export const personalInfo = {
  name: "Haries H",
  title: "B.E. Computer Science and Engineering",
  tagline: "A passionate final-year CSE student specialized in Python, Machine Learning, Data Science, and Artificial Intelligence.",
  location: "Chennai, India",
  phone: "9360691870",
  github: "https://github.com/hharies-04",
  githubUsername: "hharies-04",
  email: "hharies135@gmail.com",
  website: "https://hharies-04.github.io/Portfolio-Haries/",
  linkedin: "https://www.linkedin.com/in/haries-h-331223373",
  avatar: "/profile.jpg",
  bio: "Motivated final-year B.E. Computer Science student at Sathyabama Institute of Science and Technology, Chennai. Strong knowledge in Python, Machine Learning, Data Science, and Artificial Intelligence. Experienced in building AI systems, medical image classifiers, and full-stack web applications."
};

export const stats = [
  { label: "Sathyabama B.E. Score", value: "79%" },
  { label: "GitHub Repositories", value: "8+" },
  { label: "Certifications", value: "5+" },
  { label: "Key Domain", value: "AI, ML & Full-Stack" }
];

export const skills = {
  frontend: [
    { name: "React JS & JavaScript", level: 90 },
    { name: "HTML5 & CSS3 Flexbox", level: 95 },
    { name: "Core Java & Advanced Java", level: 88 },
    { name: "Flutter & Mobile UI", level: 80 },
    { name: "C Programming", level: 85 }
  ],
  backendMl: [
    { name: "Python", level: 92 },
    { name: "Machine Learning & Scikit-Learn", level: 90 },
    { name: "Artificial Intelligence & LLMs", level: 88 },
    { name: "Data Science & NumPy", level: 85 },
    { name: "Reinforcement Learning (Q-Learning)", level: 84 },
    { name: "DBMS & SQL", level: 88 }
  ],
  tools: [
    { name: "GitHub & Version Control", level: 92 },
    { name: "Computer Vision (OpenCV)", level: 85 },
    { name: "Analytical & Critical Thinking", level: 90 },
    { name: "Logical Reasoning", level: 90 }
  ]
};

export const projects = [
  {
    id: "aura-flow-reactor",
    title: "Aura Flow Reactor System",
    category: "Machine Learning",
    description: "An intelligent flow reactor automation platform engineered for predictive parameter analytics, real-time chemical process optimization, and adaptive feedback control.",
    tags: ["Python", "Machine Learning", "AI System", "Flow Reactor", "Analytics"],
    githubUrl: "https://github.com/hharies-04/Aura-Flow-Reactor",
    liveUrl: "https://github.com/hharies-04/Aura-Flow-Reactor",
    language: "Python / AI",
    outputType: "ml_simulation",
    outputDetails: {
      type: "Aura Flow Reactor Simulator"
    }
  },
  {
    id: "mammographic-mass-classification",
    title: "Mammographic Mass Classification",
    category: "Machine Learning",
    description: "A machine learning project to classify mammographic masses as benign or malignant using Random Forest, SVM, Logistic Regression, and MLP classifiers with ensemble voting.",
    tags: ["Python", "Machine Learning", "Scikit-Learn", "Ensemble Voting"],
    githubUrl: "https://github.com/hharies-04/Breast-Cancer-Severity-Prediction",
    liveUrl: "https://hharies-04.github.io/Breast-Cancer-Severity-Prediction/",
    language: "Python / Jupyter",
    outputType: "ml_simulation",
    outputDetails: {
      type: "Mammographic ML Classifier",
      modelAccuracy: "96.4%"
    }
  },
  {
    id: "intrusion-detection-rl",
    title: "Adaptive Intrusion Detection Response System (RL)",
    category: "Machine Learning",
    description: "RL-based adaptive intrusion detection system that learns and responds to network anomalies and security threats in real-time using Q-learning techniques.",
    tags: ["Python", "Reinforcement Learning", "Q-Learning", "Cybersecurity"],
    githubUrl: "https://github.com/hharies-04/Intrusion-Detection-Response-System-RL",
    liveUrl: "https://hharies-04.github.io/Intrusion-Detection-Response-System-RL/",
    language: "Python",
    outputType: "security_simulation",
    outputDetails: {
      type: "RL Intrusion Threat Monitor"
    }
  },
  {
    id: "medical-imaging-oct",
    title: "Medical Imaging Using OCT Images",
    category: "Machine Learning",
    description: "CNN-based retinal disease classification from OCT images — automatically detects CNV, DME, Drusen, and Normal conditions using deep learning and image augmentation techniques.",
    tags: ["Python", "Computer Vision", "CNN", "Deep Learning", "Medical AI"],
    githubUrl: "https://github.com/hharies-04/Medical-Imaging-OCT",
    liveUrl: "https://github.com/hharies-04/Medical-Imaging-OCT",
    language: "Python / TensorFlow",
    outputType: "ml_simulation",
    outputDetails: {
      type: "Retinal Medical Imaging AI"
    }
  },
  {
    id: "eagle-food-delivery",
    title: "Eagle Food Delivery Platform",
    category: "Web Apps",
    description: "Full-featured online food ordering & delivery application built with dynamic menu items, cart calculation, delivery address tracking, and instant checkout flow.",
    tags: ["JavaScript", "HTML5", "CSS Flexbox", "UI Component"],
    githubUrl: "https://github.com/hharies-04/Eagle-Food-Delivery",
    liveUrl: "https://hharies-04.github.io/Eagle-Food-Delivery/",
    language: "JavaScript / HTML",
    outputType: "live_site",
    outputDetails: {
      type: "Live Deployed Web Application"
    }
  },
  {
    id: "luxe-ecommerce",
    title: "Luxe E-Commerce Store",
    category: "Web Apps",
    description: "Modern luxury e-commerce platform showcasing high-end product collections, instant category filters, sliding image carousels, and responsive cart drawers.",
    tags: ["JavaScript", "E-Commerce", "CSS Flexbox", "Responsive UI"],
    githubUrl: "https://github.com/hharies-04/Luxe-ecommerce",
    liveUrl: "https://hharies-04.github.io/Luxe-ecommerce/",
    language: "JavaScript / CSS",
    outputType: "live_site",
    outputDetails: {
      type: "Live Storefront Website"
    }
  },
  {
    id: "instagram-clone",
    title: "Instagram Web UI Clone",
    category: "UI Clones",
    description: "Pixel-perfect web application clone of Instagram featuring story highlights bar, dynamic post likes, inline comment posting, and profile view modals.",
    tags: ["JavaScript", "CSS Flexbox", "HTML5", "Social Media UI"],
    githubUrl: "https://github.com/hharies-04/Instagram-Clone",
    liveUrl: "https://hharies-04.github.io/Instagram-Clone/",
    language: "JavaScript / CSS",
    outputType: "live_site",
    outputDetails: {
      type: "Live Instagram Social Clone"
    }
  },
  {
    id: "linkedin-clone",
    title: "LinkedIn Professional Network Clone",
    category: "UI Clones",
    description: "Clean, responsive web clone of LinkedIn featuring news feed layout, profile cards, job application highlights, and custom posting modal.",
    tags: ["JavaScript", "CSS Flexbox", "Modern Layouts", "UI/UX"],
    githubUrl: "https://github.com/hharies-04/Linkedin-Clone",
    liveUrl: "https://hharies-04.github.io/Linkedin-Clone/",
    language: "JavaScript / CSS",
    outputType: "live_site",
    outputDetails: {
      type: "Live LinkedIn Network Web App"
    }
  },
  {
    id: "fortuner-product-landing",
    title: "Fortuner Product Landing Showcase",
    category: "Web Apps",
    description: "High-impact luxury automotive landing page featuring interactive vehicle highlights, spec comparison grid, test drive request modal, and CSS flexbox styling.",
    tags: ["HTML5", "CSS3 Flexbox", "Automotive UI", "Interactive Landing"],
    githubUrl: "https://github.com/hharies-04/Fortuner-Product-Landing",
    liveUrl: "https://hharies-04.github.io/Fortuner-Product-Landing/",
    language: "CSS / HTML",
    outputType: "live_site",
    outputDetails: {
      type: "Live Product Landing Page"
    }
  },
  {
    id: "college-fest",
    title: "College Fest Interactive Portal",
    category: "Web Apps",
    description: "Vibrant event portal designed for college festivals, featuring schedule filtering, live registration forms, event categories, and interactive banner displays.",
    tags: ["HTML", "CSS", "JavaScript", "Event Management"],
    githubUrl: "https://github.com/hharies-04/College-Fest",
    liveUrl: "https://hharies-04.github.io/College-Fest/",
    language: "HTML / JavaScript",
    outputType: "live_site",
    outputDetails: {
      type: "Live College Fest Event App"
    }
  }
];

export const experienceData = [
  {
    role: "AI/ML Intern",
    type: "Business Gateways International",
    period: "2025",
    description: "Cleaned, preprocessed, and prepared datasets for model training. Hands-on experience with Large Language Models (LLMs) using Ollama on real-time projects."
  },
  {
    role: "Computer Vision Specialist",
    type: "Wenoxo Certification",
    period: "2025",
    description: "Engineered object detection and image preprocessing pipelines using OpenCV and Python. Applied dataset augmentation to boost model accuracy."
  },
  {
    role: "Fullstack Web Development",
    type: "Tap Academy Capstone",
    period: "2026",
    description: "Mastered Core Java, JDBC, Servlets, Spring, Hibernate, and MySQL. Built an end-to-end Online Food Delivery Capstone Application."
  }
];

export const educationData = [
  {
    degree: "B.E. Computer Science Engineering (79%)",
    institution: "Sathyabama Institute Of Science And Technology, Chennai",
    period: "2022 - 2026",
    details: "Final Year Student. Focus on Artificial Intelligence, Machine Learning, Data Science, Data Structures, and Web Technologies."
  },
  {
    degree: "PUC - 12th Standard (73.5%)",
    institution: "State Board Of Tamilnadu (Sreeram Matric Higher Secondary School)",
    period: "2022",
    details: "Higher Secondary Education in Science and Mathematics."
  },
  {
    degree: "SSLC - 10th Standard (82%)",
    institution: "State Board Of Tamilnadu (Sreeram Matric Higher Secondary School)",
    period: "2020",
    details: "Secondary School Leaving Certificate."
  }
];
