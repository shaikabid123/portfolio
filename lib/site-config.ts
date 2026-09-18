/**
 * Single source of truth for every piece of content in the portfolio.
 * Sourced verbatim from /mnt/user-data/uploads/portfolio_content.txt —
 * nothing here is invented, estimated, or carried over from an earlier draft.
 * Empty strings mean "not provided" — the UI hides those fields.
 */

export const site = {
  name: {
    first: "SHAIK",
    last: "ABID",
    full: "Shaik Abid",
    initial: "A",
  },

  tagline: "Building intelligent systems with AI, LLMs and code.",

  role: "AI Automation Engineer",

  focus: [
    "AI/ML",
    "Generative AI",
    "LLMs",
    "RAG",
    "Python",
    "Software development",
  ],

  education: {
    degree: "Bachelor of Technology CSE (AI & ML)",
    year: "2026",
  },

  /** Most recent first. Every field here is as supplied — no dates or titles inferred. */
  experience: [
    {
      title: "AI Automation Engineer",
      company: "SNN Technologies",
      location: "Hyderabad",
      start: "Jun 2026",
      end: "Present",
    },
    {
      title: "AI/ML Intern",
      company: "Infosys Springboard 6.0",
      location: "Virtual",
      start: "Sept 2025",
      end: "Nov 2025",
    },
    {
      title: "Data Analytics Intern",
      company: "SmartBridge",
      location: "Virtual",
      start: "Apr 2025",
      end: "Jun 2025",
    },
  ],

  /** Grouped for the Skills section. Every entry comes from portfolio_content.txt. */
  skills: {
    Languages: ["Python", "SQL"],
    "AI & ML": ["Machine Learning", "Deep Learning", "GenAI", "LLM", "RAG"],
    "Web & APIs": ["Next.js", "React", "FastAPI"],
    Databases: ["MongoDB", "MySQL"],
    Tools: ["Git", "GitHub", "Power BI", "Tableau"],
  },

  projects: [
    {
      title: "HireLoop",
      blurb:
        "An AI-powered recruitment platform that automates candidate screening, job matching, resume analysis, and hiring workflows to improve recruitment efficiency.",
      stack: ["Python", "React.js", "FastAPI", "PostgreSQL", "NLP", "OpenAI API", "REST APIs"],
      repo: "",
      demo: "",
    },
    {
      title: "AI CRM",
      blurb:
        "An AI-powered CRM platform that helps businesses manage customer interactions, leads, and sales activities with intelligent automation and insights.",
      stack: ["Python", "React.js", "FastAPI", "PostgreSQL", "OpenAI API", "REST APIs"],
      repo: "",
      demo: "",
    },
    {
      title: "AI Music Recommendation",
      blurb:
        "An AI-based music recommendation system that suggests personalized songs based on user preferences, listening behavior, and music characteristics.",
      stack: ["Python", "Machine Learning", "Pandas", "Scikit-learn", "Spotify API", "Streamlit"],
      repo: "",
      demo: "",
    },
    {
      title: "AI Insurance Portal",
      blurb:
        "An intelligent insurance portal that streamlines policy management, customer onboarding, claims processing, and insurance-related queries using AI.",
      stack: ["React.js", "Python", "FastAPI", "PostgreSQL", "OpenAI API", "REST APIs"],
      repo: "",
      demo: "",
    },
    {
      title: "Visualization Tool for Electric Vehicle Charge and Analysis",
      blurb:
        "A data visualization platform for analyzing EV charging patterns, energy consumption, charging duration, and station performance through interactive dashboards.",
      stack: ["Python", "Pandas", "Plotly", "Power BI", "SQL", "Data Visualization"],
      repo: "",
      demo: "",
    },
  ],

  /**
   * Data for the "AI / ML Lab" section. Each domain's `appliedIn` list is
   * cross-referenced against the real skills and project stacks above —
   * never invented. Where no project or listed skill backs a domain, the
   * array stays empty and the UI simply omits that line rather than
   * implying experience that hasn't been demonstrated.
   *
   * Note: "Computer Vision" was requested as a domain to visualize but has
   * no corresponding entry anywhere in skills or project stacks. It's kept
   * here as a focus area only — no skill tag, no applied-in projects.
   */
  aiLab: [
    {
      key: "ml",
      label: "ML",
      name: "Machine Learning",
      description: "Algorithms that learn patterns from data to make predictions or decisions.",
      skill: "Machine Learning",
      appliedIn: ["AI Music Recommendation"],
    },
    {
      key: "dl",
      label: "DL",
      name: "Deep Learning",
      description: "Neural network architectures that learn layered representations from data.",
      skill: "Deep Learning",
      appliedIn: [] as string[],
    },
    {
      key: "cv",
      label: "CV",
      name: "Computer Vision",
      description: "Techniques for extracting information and understanding from images and video.",
      skill: "",
      appliedIn: [] as string[],
    },
    {
      key: "genai",
      label: "Gen",
      name: "Generative AI",
      description: "Models that generate new text, images, or other content from learned patterns.",
      skill: "GenAI",
      appliedIn: ["HireLoop", "AI CRM", "AI Insurance Portal"],
    },
    {
      key: "llm",
      label: "LLM",
      name: "LLMs",
      description: "Large language models trained on text for understanding and generating language.",
      skill: "LLM",
      appliedIn: ["HireLoop", "AI CRM", "AI Insurance Portal"],
    },
    {
      key: "rag",
      label: "RAG",
      name: "RAG",
      description: "Retrieval-Augmented Generation — grounding model outputs in retrieved external data.",
      skill: "RAG",
      appliedIn: [] as string[],
    },
  ],

  profiles: {
    github: "https://github.com/shaikabid123",
    linkedin: "https://www.linkedin.com/in/shaik-abid-945589258/",
    email: "shaikabid1703@gmail.com",
    phone: "9701530903",
  },

  /** Drives the navbar. Sections are added to the page one pass at a time. */
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
