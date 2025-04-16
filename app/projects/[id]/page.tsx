"use client"
import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa"
import Link from "next/link"
import StarField from "../../Components/Starfield"

// Sample project data
const projects = [
  {
  "id": "quizscraper",
  "title": "Quiz Scraper",
  "description": "A Chrome extension that generates quiz questions from webpage content using AI to help users prepare for exams and interviews.",
  "category": "AI-powered Chrome Extension",
  "technologies": {
    "frontend": ["HTML5", "CSS3", "JavaScript"],
    "backend": ["Chrome Extension API"],
    "ai": ["OpenAI API"],
    "tools": ["Git", "Chrome Developer Tools"]
  },
  "media": {
    "type": "video",
    "url": "/QuizScraper-demo.mp4",
    "thumbnail": "/project-thumbnails/quizscraper.jpg"
  },
  "overview": "Quiz Scraper is a Chrome extension that instantly generates quiz questions from any webpage content, providing an interactive way to study and prepare for technical interviews.",
  "role": "Solo Developer",
  "responsibilities": [
    "Designed and implemented the extension UI with clean HTML/CSS",
    "Developed the content parsing and question generation system",
    "Integrated OpenAI API for intelligent question generation",
    "Implemented Chrome storage for saving quizzes",
    "Added multiple question types (MCQ, scenario-based, etc.)"
  ],
  "process": [
    "Identified pain points in technical interview preparation",
    "Designed the minimal viable extension interface",
    "Implemented core question generation functionality",
    "Added progressive enhancements like different question types"
  ],
  "challenges": [
    {
      "problem": "Generating relevant questions from diverse webpage content",
      "solution": "Implemented smart content parsing and tailored AI prompts"
    },
    {
      "problem": "Handling different question formats in the UI",
      "solution": "Created a flexible rendering system for various question types"
    },
    {
      "problem": "Maintaining extension performance",
      "solution": "Optimized API calls and implemented local caching"
    }
  ],
  "outcomes": {
    "metrics": [
      "Generates 10-50 questions in under 10 seconds",
      "Supports 4+ different question types",
      "4.9/5 average user satisfaction in testing"
    ],
    "feedback": [
      "This has become my go-to tool for interview prep",
      "Love how it creates scenario-based questions from documentation",
      "The different difficulty levels make it perfect for all skill levels"
    ]
  },
  "learnings": [
    "Effective use of Chrome Extension APIs",
    "Prompt engineering for better AI outputs",
    "Designing intuitive browser extension UIs"
  ],
  "links": {
    "github": "https://github.com/yourusername/quizscraper",
    "chrome-store": "https://chrome.google.com/webstore/quizscraper"
  },
  "features": [
    "Generates questions from any webpage content",
    "Multiple question types (MCQ, scenario-based, conceptual)",
    "Adjustable difficulty levels",
    "Save and export quiz functionality",
    "Clean, distraction-free interface"
  ]
},
  {
    "id": "redinai",
    "title": "RedinAI",
    "description": "RedinAI is an AI-powered web application designed to extract and analyze Reddit posts and their comments. It functions like an interactive chat board, allowing users to engage with the post content and comments to gain insights. The app features three main windows: a chat window for discussing post content and comments, a comment window displaying comments in a tree structure, and an input window for entering Reddit post links and prompts. Users can select built-in starter prompts, create custom prompts, and save them with a name. Posts can also be saved and organized on a Kanban board for easy drag-and-drop management. RedinAI simplifies the process of understanding complex Reddit discussions by providing actionable insights and organized content.",
    "category": "AI-powered Web Application",
    "technologies": {
      "frontend": ["React", "TypeScript", "Tailwind CSS"],
      "backend": ["Spring Boot", "Spring Security", "Spring AI"],
      "database": ["PostgreSQL"],
      "ai_model": ["OpenAI GPT-4o-mini"],
      "tools": ["Git", "Docker"]
    },
    "media": {
      "type": "video",
      "url": "/RedinAI.mp4",
      "thumbnail": "/project-thumbnails/RedinAI.jpg"
    },
    "overview": "RedinAI is an intelligent platform for analyzing and interacting with Reddit posts and comments.",
    "role": "AI Engineer & Full Stack Developer",
    "responsibilities": [
      "Integrated OpenAI GPT-4o-mini for comment and post analysis",
      "Developed the frontend interface with React and TypeScript",
      "Implemented the backend API using Spring Boot",
      "Designed the PostgreSQL database schema",
      "Created the Kanban board and comment tree structure features"
    ],
    "process": [
      "Researched and selected OpenAI GPT-4o-mini for cost-effective AI analysis",
      "Developed the chat, comment, and input window interfaces",
      "Built and integrated backend APIs for post and comment processing",
      "Designed the Kanban board for post organization",
      "Tested and optimized the application for performance"
    ],
    "challenges": [
      {
        "problem": "Efficiently processing large comment threads",
        "solution": "Implemented tree structure for comment display and optimized API calls"
      },
      {
        "problem": "Managing prompt creation and storage",
        "solution": "Developed a prompt management system with save and reuse functionality"
      },
      {
        "problem": "Ensuring cost-effective AI model usage",
        "solution": "Utilized OpenAI GPT-4 Mini for affordable yet powerful analysis"
      }
    ],
    "outcomes": {
      "metrics": [
        "50% faster analysis of Reddit threads",
        "Excellent insights from the comments using AI",
        "4.8/5 average test-user satisfaction rating"
      ],
      "feedback": [
        "The chat window makes understanding Reddit posts so easy",
        "Love the Kanban board for organizing my favorite posts",
        "The comment tree structure is super intuitive"
      ]
    },
    "learnings": [
      "Effective integration of cost-efficient AI models",
      "Best practices for interactive web application design",
      "Strategies for managing and displaying large datasets"
    ],
    "links": {
      "github": "https://github.com/yourusername/RedinAI",
      "demo": "https://RedinAI.demo"
    }
},
  {
  id: "browzio",
  title: "Browzio",
  description: "A privacy-first browser extension that visualizes your browsing behavior—like scroll mileage and tab usage—to help you understand and optimize your digital habits.",
  category: "Browser Extension",
  technologies: {
    frontend: ["JavaScript", "HTML5", "CSS3", "Chrome Extension API"],
    backend: ["Node.js", "Express"],
    database: ["IndexedDB"],
    tools: ["Git", "Webpack", "Firefox Add-ons"]
  },
  media: {
    type: "video",
    url: "/browzio.mp4",
    thumbnail: "/project-thumbnails/browzio.jpg"
  },
  overview: "Browzio is a lightweight browser extension that passively tracks your browsing activity—such as scroll and hover mileage, active tabs, and session time—without compromising privacy. All data is stored locally and presented through a sleek dashboard, helping users gain insights into their digital behavior.",
  role: "Full Stack Developer",
  responsibilities: [
    "Architected the entire extension and dashboard ecosystem",
    "Built a popup and dashboard interface for visualizing user metrics",
    "Captured real-time scroll and hover activity using DOM listeners",
    "Implemented tab tracking and time-on-page analytics",
    "Ensured all user data remains 100% local and secure"
  ],
  process: [
    "Identified common productivity issues around tab overload and passive browsing",
    "Sketched and validated core use cases like scroll tracking and session snapshots",
    "Developed the tracking engine and visual dashboard iteratively",
    "Tested performance impact and memory usage across various sites",
    "Launched MVP and incorporated feedback from early testers"
  ],
  challenges: [
    {
      problem: "Accurately capturing user behavior without harming performance",
      solution: "Used debounced and throttled DOM listeners, and persisted minimal data in IndexedDB"
    },
    {
      problem: "Keeping all data local with no backend storage",
      solution: "Leveraged Chrome’s local storage APIs and structured everything client-side"
    },
    {
      problem: "Making raw data (like scroll distance) meaningful to users",
      solution: "Introduced visualizations like daily mileage, comparison to Earth’s circumference, and most active tabs"
    }
  ],
  outcomes: {
    metrics: [
      "100% local-first tracking with zero data sent externally",
      "Reponsive dashboard with mouse animation",
      "Positive feedback from productivity communities on Reddit"
    ],
    feedback: [
      "I had no idea I scrolled over a kilometer every day until Browzio!",
      "Love how clean and useful the dashboard is—super fun stats without being invasive.",
      "Exactly the kind of digital mindfulness tool I didn’t know I needed"
    ]
  },
  learnings: [
    "Advanced Chrome Extension APIs and client-side architecture",
    "Optimizing browser performance when working with passive tracking",
    "Designing data visualizations that communicate personal insights clearly"
  ],
  links: {
    github: "https://github.com/yourusername/browzio",
    chrome: "https://chrome.google.com/webstore/detail/browzio/your-extension-id",
    demo: "https://yourdemo.com/browzio"
  }
}
,
  {
    id: "apple-website-replica",
    title: "Apple Website Clone",
    description: "A responsive clone of the Apple website homepage with modern design and animations.",
    category: "Web Development",
    technologies: {
      frontend: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"],
      tools: ["Git", "Vercel"]
    },
    media: {
      type: "video",
      url: "/apple.mp4",
      thumbnail: "/project-thumbnails/apple-clone.jpg"
    },
    overview: "A pixel-perfect clone of the Apple website homepage, featuring responsive design, smooth animations, and modern UI components.",
    role: "Frontend Developer",
    responsibilities: [
      "Recreated the Apple website design with precision",
      "Implemented responsive layouts for all devices",
      "Developed smooth animations and transitions",
      "Optimized performance and loading times",
      "Ensured cross-browser compatibility"
    ],
    process: [
      "Analyzed the original Apple website design",
      "Created a component-based architecture",
      "Implemented responsive layouts using Tailwind CSS",
      "Added animations with Framer Motion",
      "Optimized for performance and accessibility"
    ],
    challenges: [
      {
        problem: "Recreating complex animations",
        solution: "Used Framer Motion for precise control over animations"
      },
      {
        problem: "Ensuring pixel-perfect design",
        solution: "Used browser dev tools to match styles exactly"
      },
      {
        problem: "Optimizing for mobile devices",
        solution: "Implemented responsive design patterns and tested on multiple devices"
      }
    ],
    outcomes: {
      metrics: [
        "95% design accuracy compared to original",
        "98% Lighthouse performance score",
        "100% responsive on all tested devices"
      ],
      feedback: [
        "This clone looks almost identical to the real Apple website",
        "The animations are smooth and professional",
        "It works perfectly on my mobile device"
      ]
    },
    learnings: [
      "Advanced CSS techniques for modern web design",
      "Animation best practices with Framer Motion",
      "Performance optimization for image-heavy websites"
    ],
    links: {
      github: "https://github.com/yourusername/apple-clone",
      demo: "https://apple-clone-demo.vercel.app"
    }
  }
]

export default function ProjectPage() {
  const params = useParams()
  const [project, setProject] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const projectId = params.id as string
    const foundProject = projects.find(p => p.id === projectId)
    setProject(foundProject || null)
    setLoading(false)
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-blue-400 hover:text-blue-300">
            Return to Projects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <StarField />
      <div className="max-w-7xl mx-auto px-4 py-12">
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
          className="space-y-8"
        >
          <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
            {project.media?.type === "video" ? (
              <video
                src={project.media.url}
                title={project.title}
                className="w-full h-full object-cover"
                controls
                autoPlay
                muted
                loop
                playsInline
                poster={project.media.thumbnail}
              />
            ) : project.media?.thumbnail ? (
              <img
                src={project.media.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-600">
                <span className="text-4xl">🖼️</span>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <h1 className="text-4xl md:text-7xl font-medium text-[#fefeff]">
                {project.title}
              </h1>
              <span className="text-sm bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full">
                {project.category}
              </span>
            </div>
            <p className="text-xl text-[#969696]">{project.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-[#fefeff]">Overview</h2>
                <p className="text-gray-300">{project.overview}</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-[#fefeff]">Role & Responsibilities</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {project.responsibilities.map((resp: string, index: number) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-[#fefeff]">Development Process</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {project.process.map((step: string, index: number) => (
                    <li key={index}>{step}</li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-[#fefeff]">Technologies Used</h2>
                <div className="space-y-4">
                  {Object.entries(project.technologies).map(([category, techs]: [string, any]) => (
                    <div key={category}>
                      <h3 className="text-lg font-semibold text-gray-400 mb-2 capitalize">
                        {category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {techs.map((tech: string) => (
                          <span
                            key={tech}
                            className="text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-[#fefeff]">Challenges & Solutions</h2>
                <div className="space-y-4">
                  {project.challenges.map((challenge: any, index: number) => (
                    <div key={index} className="bg-gray-800/50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-300 mb-2">Problem:</h3>
                      <p className="text-gray-400 mb-3">{challenge.problem}</p>
                      <h3 className="font-semibold text-gray-300 mb-2">Solution:</h3>
                      <p className="text-gray-400">{challenge.solution}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#fefeff]">Outcomes & Results</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-400 mb-2">Key Metrics</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {project.outcomes.metrics.map((metric: string, index: number) => (
                      <li key={index}>{metric}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-400 mb-2">User Feedback</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {project.outcomes.feedback.map((feedback: string, index: number) => (
                      <li key={index}>{feedback}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#fefeff]">Learnings & Reflections</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {project.learnings.map((learning: string, index: number) => (
                  <li key={index}>{learning}</li>
                ))}
              </ul>
            </section>
          </div>

          <div className="flex gap-4 pt-8 border-t border-gray-800">
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-400 hover:text-gray-300 transition-colors"
            >
              <FaGithub className="mr-2" size={20} /> View on GitHub
            </a>
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-400 hover:text-gray-300 transition-colors"
            >
              <FaExternalLinkAlt className="mr-2" size={20} /> Live Demo
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}