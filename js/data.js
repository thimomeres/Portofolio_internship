const SKILLS = [
  { name: 'Laravel Development', icon: 'fa-brands fa-laravel', color: '#ef4444' },
  { name: 'Backend Web Development', icon: 'fa-solid fa-server', color: '#6366f1' },
  { name: 'Front-End Development', icon: 'fa-solid fa-laptop-code', color: '#22d3ee' },
  { name: 'REST API Integration', icon: 'fa-solid fa-plug', color: '#a78bfa' },
  { name: 'AI Chatbot Development', icon: 'fa-solid fa-robot', color: '#818cf8' },
  { name: 'Natural Language Processing (NLP)', icon: 'fa-solid fa-language', color: '#34d399' },
  { name: 'Large Language Models (LLM) Basics', icon: 'fa-solid fa-brain', color: '#c084fc' },
  { name: 'Unity Game Development', icon: 'fa-solid fa-gamepad', color: '#fbbf24' },
  { name: 'MySQL', icon: 'fa-solid fa-database', color: '#38bdf8' },
  { name: 'Git & GitHub', icon: 'fa-brands fa-github', color: '#e2e8f0' },
  { name: 'Python', icon: 'fa-brands fa-python', color: '#3b82f6' },
  { name: 'JavaScript', icon: 'fa-brands fa-js', color: '#facc15' },
  { name: 'Tailwind CSS', icon: 'fa-solid fa-wind', color: '#22d3ee' },
];

const PROJECTS = [
  {
    title: 'Fake News Detection System',
    tech: ['Python', 'BERT', 'Gemini API'],
    description:
      'Built an NLP-based fake news detection system using BERT and Gemini API for text analysis.',
    icon: 'fa-solid fa-newspaper',
    image: 'assets/projects/fake-news.png',
    imageAlt: 'Fake News Detection — Gemini-powered Colab notebook with interactive detection UI',
    codeLink: 'https://colab.research.google.com/drive/1LIYUXIl_RGFBaf7QthDuwemGVqUSGoId?usp=sharing',
    codeLabel: 'Google Colab',
    codeType: 'colab',
  },
  {
    title: 'AI Mental Health Chatbot',
    tech: ['Laravel', 'Groq AI', 'Railway'],
    description:
      'Developed MindCare — a web-based AI mental health chatbot with empathetic consultation, deployed on Railway.',
    icon: 'fa-solid fa-heart-pulse',
    image: 'assets/projects/mental-health.png',
    imageAlt: 'MindCare mental health chatbot landing page deployed on Railway',
    codeLink: 'https://aichatbootmentalhealth-production.up.railway.app/',
    codeLabel: 'View on Railway',
    codeType: 'railway',
    githubLink: 'https://github.com/thimomeres/AIchatboot_mentalhealth',
  },
  {
    title: 'Breast Cancer Detection System',
    tech: ['Python', 'TensorFlow', 'Flask', 'InceptionResNetV2'],
    description:
      'Built a Flask web app for breast cancer histopathology image classification using InceptionResNetV2 + CBAM deep learning.',
    icon: 'fa-solid fa-microscope',
    image: 'assets/projects/breast-cancer.png',
    imageAlt: 'Breast Cancer Classifier — Flask web app with InceptionResNetV2 + CBAM',
    codeLink: 'https://github.com/thimomeres/Breast_Cancer',
  },
  {
    title: 'AutoDeals Showroom — Mobile & Admin',
    tech: ['Laravel 11', 'MySQL', 'Tailwind CSS'],
    description:
      'Laravel admin engine for AutoDeals used-car showroom: rapid inventory updates, dynamic status workflows, and client price-negotiation alerts.',
    icon: 'fa-solid fa-car',
    image: 'assets/projects/autodeals.png',
    imageAlt: 'AutoDeals showroom dashboard — inventory, sales analytics, and offer management',
    codeLink: 'https://github.com/thimomeres/autodeals-laravel',
  },
  {
    title: 'Game Development Projects',
    tech: ['Unity', 'C#'],
    description:
      'Developed simple interactive games including Roll Ball Game and Simple City Parking Game.',
    icon: 'fa-solid fa-gamepad',
    image: 'assets/projects/game-dev.png',
    imageAlt: 'Unity 3D endless runner game — Roll Ball Game gameplay',
    codeLink: 'https://youtu.be/rJjm5_O3nhQ?si=6EJznsdA3r7X6wEb',
    codeLabel: 'Watch on YouTube',
    codeType: 'youtube',
  },
];
