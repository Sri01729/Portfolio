"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

// Project data with detailed information
const projectDetails = {
  "quizscraper": {
    title: "QuizScraper",
    overview: "QuizScraper is a Chrome extension that dynamically generates quizzes from any webpage content. It transforms articles, documentation, and PDFs into interactive learning experiences with multiple question types including code snippets, conceptual questions, and visual diagram challenges.",
    purpose: "To solve the problem of passive reading by creating instant knowledge tests tailored to the content users are actively engaging with.",
    role: "Full Stack Developer",
    responsibilities: [
      "Designed and implemented the Chrome extension architecture",
      "Developed the quiz generation algorithm using OpenAI's API",
      "Created the user interface for quiz display and interaction",
      "Implemented Mermaid.js integration for diagram-based questions",
      "Built the backend API for processing webpage content"
    ],
    technologies: {
      frontend: ["JavaScript", "React", "Chrome Extension API", "Mermaid.js"],
      backend: ["Node.js", "Express", "OpenAI API"],
      database: ["MongoDB"],
      tools: ["Git", "VS Code", "Chrome DevTools"]
    },
    developmentProcess: {
      methodology: "Agile Development with 2-week sprints",
      phases: [
        "Requirements gathering and planning",
        "Prototype development",
        "Core functionality implementation",
        "Testing and refinement",
        "Deployment and monitoring"
      ]
    },
    challenges: [
      {
        challenge: "Processing complex webpage content",
        solution: "Implemented a robust HTML parser with custom filtering for different content types"
      },
      {
        challenge: "Generating relevant questions",
        solution: "Created a sophisticated prompt engineering system for OpenAI API"
      },
      {
        challenge: "Performance optimization",
        solution: "Implemented caching and lazy loading for better extension performance"
      }
    ],
    outcomes: {
      metrics: [
        "Successfully deployed to Chrome Web Store",
        "Achieved 4.5/5 user rating",
        "Processed over 10,000 webpages",
        "Generated 50,000+ questions"
      ],
      feedback: [
        "Users reported improved learning retention",
        "Positive feedback on question quality",
        "Appreciation for the intuitive interface"
      ]
    },
    visuals: {
      video: "/QuizScraper-demo.mp4",
      screenshots: [
        "/quizscraper-1.png",
        "/quizscraper-2.png",
        "/quizscraper-3.png"
      ]
    },
    links: {
      github: "https://github.com/yourusername/QuizScraper",
      demo: "https://chrome.google.com/webstore/detail/quizscraper"
    },
    learnings: [
      "Deep understanding of Chrome Extension development",
      "Advanced prompt engineering techniques",
      "Performance optimization for browser extensions",
      "User experience design for educational tools"
    ]
  },
  "redinai": {
    title: "RedinAI",
    overview: "RedinAI is an AI assistant that analyzes Reddit posts and comments to provide insightful answers based on user questions. It helps users easily digest and understand complex discussions by summarizing key points and offering relevant answers.",
    purpose: "To address the challenge of absorbing knowledge from lengthy Reddit threads by providing AI-powered analysis and insights.",
    role: "Full Stack Developer",
    responsibilities: [
      "Architected the full-stack application",
      "Developed the frontend using Next.js",
      "Built the backend with Spring Boot",
      "Integrated OpenAI API for content analysis",
      "Implemented PostgreSQL database design"
    ],
    technologies: {
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      backend: ["Spring Boot", "Java", "OpenAI API"],
      database: ["PostgreSQL"],
      tools: ["Git", "IntelliJ IDEA", "VS Code"]
    },
    developmentProcess: {
      methodology: "Scrum with weekly sprints",
      phases: [
        "System architecture design",
        "Database schema development",
        "API implementation",
        "Frontend development",
        "Integration and testing",
        "Deployment and monitoring"
      ]
    },
    challenges: [
      {
        challenge: "Handling Reddit API rate limits",
        solution: "Implemented efficient caching and request queuing"
      },
      {
        challenge: "Processing large Reddit threads",
        solution: "Developed a smart content summarization algorithm"
      },
      {
        challenge: "Real-time response generation",
        solution: "Optimized OpenAI API calls with streaming responses"
      }
    ],
    outcomes: {
      metrics: [
        "Processed over 5,000 Reddit threads",
        "Generated 20,000+ AI responses",
        "Achieved 90% user satisfaction rate"
      ],
      feedback: [
        "Users found the AI responses highly relevant",
        "Positive feedback on response time",
        "Appreciation for the intuitive interface"
      ]
    },
    visuals: {
      video: "/RedinAI.mp4",
      screenshots: [
        "/redinai-1.png",
        "/redinai-2.png",
        "/redinai-3.png"
      ]
    },
    links: {
      github: "https://github.com/yourusername/RedinAI",
      demo: "https://redinai.com"
    },
    learnings: [
      "Advanced Spring Boot application development",
      "Next.js and React best practices",
      "Database optimization techniques",
      "AI integration patterns"
    ]
  },
  "browzio": {
    title: "Browzio",
    overview: "Browzio is a powerful and fun browser extension designed to help users track and analyze their online activity effortlessly. Whether you're a developer, student, or professional, Browzio provides you with insightful metrics about your browsing habits.",
    purpose: "To help users understand and optimize their browsing habits through data-driven insights.",
    role: "Solo Developer",
    responsibilities: [
      "Designed and implemented the Firefox extension",
      "Developed the activity tracking system",
      "Created the analytics dashboard",
      "Implemented data visualization features",
      "Built the settings and configuration system"
    ],
    technologies: {
      frontend: ["JavaScript", "Firefox Web Extension API", "Chart.js"],
      storage: ["Local Storage", "IndexedDB"],
      tools: ["Git", "VS Code", "Firefox Developer Tools"]
    },
    developmentProcess: {
      methodology: "Iterative Development",
      phases: [
        "Extension architecture design",
        "Core functionality implementation",
        "UI/UX development",
        "Testing and refinement",
        "Firefox Add-ons submission"
      ]
    },
    challenges: [
      {
        challenge: "Accurate activity tracking",
        solution: "Implemented robust event listeners and data validation"
      },
      {
        challenge: "Data privacy concerns",
        solution: "Developed local-only storage with encryption"
      },
      {
        challenge: "Performance impact",
        solution: "Optimized tracking algorithms and storage patterns"
      }
    ],
    outcomes: {
      metrics: [
        "Successfully published on Firefox Add-ons",
        "Achieved 4.3/5 user rating",
        "Processed over 1 million browsing events"
      ],
      feedback: [
        "Users appreciated the privacy-focused approach",
        "Positive feedback on the intuitive interface",
        "Valuable insights into browsing patterns"
      ]
    },
    visuals: {
      video: "/Browzio.mp4",
      screenshots: [
        "/browzio-1.png",
        "/browzio-2.png",
        "/browzio-3.png"
      ]
    },
    links: {
      github: "https://github.com/yourusername/Browzio",
      demo: "https://addons.mozilla.org/en-US/firefox/addon/browzio/"
    },
    learnings: [
      "Firefox Web Extension development",
      "Data visualization techniques",
      "Privacy-focused development practices",
      "Performance optimization for browser extensions"
    ]
  },
  "apple-website-replica": {
    title: "Apple Website Replica",
    overview: "A responsive replica of the Apple website homepage, built with modern web technologies to create a seamless and interactive user experience. The project showcases advanced animations, 3D visual effects, and smooth transitions.",
    purpose: "To demonstrate proficiency in creating high-end, interactive web experiences with modern web technologies.",
    role: "Frontend Developer",
    responsibilities: [
      "Implemented 3D animations and effects",
      "Developed responsive layouts",
      "Created interactive components",
      "Optimized performance",
      "Implemented smooth transitions"
    ],
    technologies: {
      frontend: ["React", "Three.js", "React Three Fiber", "React Three Drei", "GSAP"],
      build: ["Vite"],
      tools: ["Git", "VS Code", "Chrome DevTools"]
    },
    developmentProcess: {
      methodology: "Component-Driven Development",
      phases: [
        "UI/UX analysis",
        "Component architecture",
        "3D implementation",
        "Animation development",
        "Performance optimization"
      ]
    },
    challenges: [
      {
        challenge: "Complex 3D animations",
        solution: "Leveraged React Three Fiber for efficient 3D rendering"
      },
      {
        challenge: "Performance optimization",
        solution: "Implemented code splitting and lazy loading"
      },
      {
        challenge: "Responsive design",
        solution: "Created adaptive layouts with CSS Grid and Flexbox"
      }
    ],
    outcomes: {
      metrics: [
        "Achieved 95% Lighthouse performance score",
        "Successfully replicated key Apple website features",
        "Received positive feedback on animations"
      ],
      feedback: [
        "Users were impressed by the smooth animations",
        "Positive feedback on the responsive design",
        "Appreciation for attention to detail"
      ]
    },
    visuals: {
      video: "/apple.mp4",
      screenshots: [
        "/apple-1.png",
        "/apple-2.png",
        "/apple-3.png"
      ]
    },
    links: {
      github: "https://github.com/sri01729/apple-website-homepage-mimic",
      demo: "https://apple-website-replica.vercel.app"
    },
    learnings: [
      "Advanced 3D web development",
      "Performance optimization techniques",
      "Animation best practices",
      "Responsive design patterns"
    ]
  }
};

export default function ProjectDetail() {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const project = projectDetails[params.slug as keyof typeof projectDetails];

  useEffect(() => {
    if (project) {
      setLoading(false);
    }
  }, [project]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/" className="text-blue-500 hover:text-blue-400">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Link
          href="/"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8"
        >
          <FaArrowLeft className="mr-2" /> Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{project.title}</h1>

          {/* Project Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-gray-300">{project.overview}</p>
            <p className="text-gray-300 mt-2">{project.purpose}</p>
          </section>

          {/* Role & Responsibilities */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Role & Responsibilities</h2>
            <p className="text-gray-300 mb-4">{project.role}</p>
            <ul className="list-disc list-inside text-gray-300">
              {project.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </section>

          {/* Technologies Used */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
            {Object.entries(project.technologies).map(([category, techs]) => (
              <div key={category} className="mb-4">
                <h3 className="text-xl font-medium mb-2 capitalize">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-900/50 text-blue-200 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* Development Process */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Development Process</h2>
            <p className="text-gray-300 mb-4">{project.developmentProcess.methodology}</p>
            <ul className="list-decimal list-inside text-gray-300">
              {project.developmentProcess.phases.map((phase, index) => (
                <li key={index}>{phase}</li>
              ))}
            </ul>
          </section>

          {/* Challenges & Solutions */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Challenges & Solutions</h2>
            <div className="space-y-4">
              {project.challenges.map((item, index) => (
                <div key={index} className="bg-gray-900/50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium mb-2">Challenge: {item.challenge}</h3>
                  <p className="text-gray-300">Solution: {item.solution}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Outcomes & Results */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Outcomes & Results</h2>
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2">Metrics</h3>
              <ul className="list-disc list-inside text-gray-300">
                {project.outcomes.metrics.map((metric, index) => (
                  <li key={index}>{metric}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Feedback</h3>
              <ul className="list-disc list-inside text-gray-300">
                {project.outcomes.feedback.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* Visuals & Demonstrations */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Visuals & Demonstrations</h2>
            {project.visuals.video && (
              <div className="mb-8">
                <video
                  controls
                  className="w-full rounded-lg shadow-lg"
                  src={project.visuals.video}
                />
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.visuals.screenshots.map((screenshot, index) => (
                <img
                  key={index}
                  src={screenshot}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="rounded-lg shadow-lg w-full"
                />
              ))}
            </div>
          </section>

          {/* Learnings & Reflections */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Learnings & Reflections</h2>
            <ul className="list-disc list-inside text-gray-300">
              {project.learnings.map((learning, index) => (
                <li key={index}>{learning}</li>
              ))}
            </ul>
          </section>

          {/* Project Links */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Project Links</h2>
            <div className="flex gap-4">
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 hover:text-blue-300"
              >
                <FaGithub className="mr-2" /> GitHub Repository
              </a>
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 hover:text-blue-300"
              >
                <FaExternalLinkAlt className="mr-2" /> Live Demo
              </a>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}