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
    id: "quizscraper",
    title: "QuizScraper",
    description: "A web application that helps students prepare for exams by scraping and organizing quiz questions from various sources.",
    category: "Web Development",
    technologies: {
      frontend: ["React", "TypeScript", "Tailwind CSS"],
      backend: ["Node.js", "Express"],
      database: ["MongoDB"],
      tools: ["Git", "Docker", "AWS"]
    },
    media: {
      type: "video",
      url: "/quizscraper-demo.mp4",
      thumbnail: "/project-thumbnails/quizscraper.jpg"
    },
    overview: "QuizScraper is a comprehensive web application designed to help students prepare for exams more effectively. It automatically scrapes quiz questions from various educational websites and organizes them into a user-friendly interface.",
    role: "Full Stack Developer",
    responsibilities: [
      "Designed and implemented the frontend using React and TypeScript",
      "Developed the backend API using Node.js and Express",
      "Implemented web scraping functionality using Puppeteer",
      "Set up MongoDB database and designed the data schema",
      "Deployed the application on AWS using Docker containers"
    ],
    process: [
      "Conducted user research to understand student needs",
      "Designed the application architecture and database schema",
      "Implemented core features iteratively with regular testing",
      "Optimized performance and user experience",
      "Deployed and monitored the application"
    ],
    challenges: [
      {
        problem: "Handling different website structures for scraping",
        solution: "Implemented a flexible scraping system with multiple parsers"
      },
      {
        problem: "Managing large amounts of data efficiently",
        solution: "Used MongoDB aggregation pipeline for optimized queries"
      },
      {
        problem: "Ensuring real-time updates for users",
        solution: "Implemented WebSocket connections for live data updates"
      }
    ],
    outcomes: {
      metrics: [
        "50% reduction in study time for users",
        "10,000+ active users within first month",
        "4.8/5 average user satisfaction rating"
      ],
      feedback: [
        "This app has completely changed how I prepare for exams",
        "The interface is intuitive and the content is well-organized",
        "I love how it automatically updates with new questions"
      ]
    },
    learnings: [
      "Importance of modular architecture for scalability",
      "Best practices for web scraping and data management",
      "Effective strategies for real-time data updates"
    ],
    links: {
      github: "https://github.com/yourusername/quizscraper",
      demo: "https://quizscraper.demo"
    }
  },
  {
    id: "redinai",
    title: "RedinAI",
    description: "An AI-powered reading assistant that helps users understand and retain information from text more effectively.",
    category: "AI/ML",
    technologies: {
      frontend: ["React", "TypeScript", "Tailwind CSS"],
      backend: ["Python", "FastAPI"],
      database: ["PostgreSQL"],
      tools: ["Git", "Docker", "Google Cloud"]
    },
    media: {
      type: "video",
      url: "/RedinAI.mp4",
      thumbnail: "/project-thumbnails/redinai.jpg"
    },
    overview: "RedinAI is an intelligent reading assistant that uses natural language processing to help users better understand and remember what they read. It provides summaries, key points, and interactive quizzes based on the content.",
    role: "AI Engineer & Full Stack Developer",
    responsibilities: [
      "Developed the NLP models for text analysis",
      "Implemented the frontend interface",
      "Created the backend API using FastAPI",
      "Designed and managed the database schema",
      "Deployed and monitored the AI models"
    ],
    process: [
      "Researched and selected appropriate NLP models",
      "Developed and trained custom models for specific tasks",
      "Built the web application interface",
      "Integrated AI models with the application",
      "Conducted extensive testing and optimization"
    ],
    challenges: [
      {
        problem: "Achieving accurate text summarization",
        solution: "Combined multiple NLP models for better results"
      },
      {
        problem: "Handling different types of content",
        solution: "Implemented content-specific processing pipelines"
      },
      {
        problem: "Maintaining model performance at scale",
        solution: "Used model quantization and efficient inference"
      }
    ],
    outcomes: {
      metrics: [
        "40% improvement in reading comprehension",
        "5,000+ active users in first month",
        "4.7/5 average user satisfaction rating"
      ],
      feedback: [
        "This tool has completely changed how I read and learn",
        "The summaries are incredibly accurate and helpful",
        "I love how it adapts to different types of content"
      ]
    },
    learnings: [
      "Advanced techniques in NLP and machine learning",
      "Best practices for AI model deployment",
      "Strategies for improving model accuracy"
    ],
    links: {
      github: "https://github.com/yourusername/redinai",
      demo: "https://redinai.demo"
    }
  },
  {
    id: "browzio",
    title: "Browzio",
    description: "A browser extension that helps users manage their tabs and browsing sessions more efficiently.",
    category: "Browser Extension",
    technologies: {
      frontend: ["JavaScript", "React", "Chrome Extension API"],
      backend: ["Node.js", "Express"],
      database: ["IndexedDB"],
      tools: ["Git", "Webpack", "Chrome Web Store"]
    },
    media: {
      type: "video",
      url: "/browzio.mp4",
      thumbnail: "/project-thumbnails/browzio.jpg"
    },
    overview: "Browzio is a powerful browser extension that helps users organize their tabs, save browsing sessions, and improve their productivity while browsing the web.",
    role: "Full Stack Developer",
    responsibilities: [
      "Designed and implemented the extension architecture",
      "Developed the user interface using React",
      "Implemented tab management functionality",
      "Created session saving and restoration features",
      "Published and maintained the extension on Chrome Web Store"
    ],
    process: [
      "Conducted user research to identify pain points",
      "Designed the extension architecture and data flow",
      "Implemented core features iteratively",
      "Conducted user testing and gathered feedback",
      "Published and iterated based on user reviews"
    ],
    challenges: [
      {
        problem: "Managing memory usage with many open tabs",
        solution: "Implemented efficient tab data structures and lazy loading"
      },
      {
        problem: "Ensuring cross-browser compatibility",
        solution: "Used WebExtensions API and polyfills for broader support"
      },
      {
        problem: "Providing a seamless user experience",
        solution: "Designed an intuitive UI with keyboard shortcuts"
      }
    ],
    outcomes: {
      metrics: [
        "10,000+ active users",
        "4.5/5 average rating on Chrome Web Store",
        "30% reduction in tab clutter for users"
      ],
      feedback: [
        "This extension has completely changed how I browse",
        "I can't imagine browsing without Browzio now",
        "The session management is a game-changer"
      ]
    },
    learnings: [
      "Browser extension development best practices",
      "Performance optimization for browser extensions",
      "User experience design for productivity tools"
    ],
    links: {
      github: "https://github.com/yourusername/browzio",
      demo: "https://chrome.google.com/webstore/detail/browzio"
    }
  },
  {
    id: "apple-website-replica",
    title: "Apple Website Clone",
    description: "A responsive clone of the Apple website homepage with modern design and animations.",
    category: "Web Development",
    technologies: {
      frontend: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      backend: ["Node.js", "Express"],
      database: ["MongoDB"],
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