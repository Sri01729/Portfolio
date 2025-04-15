"use client"
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"
import { FaGithub, FaFirefox, FaReact, FaNodeJs, FaJsSquare, FaChrome  } from "react-icons/fa"
import { PiOpenAiLogo } from "react-icons/pi"
import { RiNextjsFill } from "react-icons/ri"
import { SiMermaid } from "react-icons/si";
import { BiLogoSpringBoot, BiLogoPostgresql } from "react-icons/bi"
import { TbBrandVite } from "react-icons/tb"
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const projects = [
    {
    "title": "QuizScraper",
    "description": "QuizScraper is a Chrome extension that dynamically generates quizzes from any webpage content. It transforms articles, documentation, and PDFs into interactive learning experiences with multiple question types including code snippets, conceptual questions, and visual diagram challenges. I built this to solve the problem of passive reading by creating instant knowledge tests tailored to the content users are actively engaging with.",
    "tags": ["Chrome Extension", "JavaScript", "nodejs","Quiz Generation", "Mermaid.js", "AI-Powered"],
    "link": "https://github.com/yourusername/QuizScraper",
    "slug": "quizscraper",
    "platforms": [
      { "icon": FaChrome, "color": "#4285F4" },
      { "icon": FaJsSquare, "color": "#F7DF1E" },
      { "icon": SiMermaid, "color": "#FF6B6B" },
      { "icon": PiOpenAiLogo, "color": "#00A4EF" }
    ],
    "video": "/QuizScraper-demo.mp4",
    "details": {
      "overview": "QuizScraper is a Chrome extension that dynamically generates quizzes from any webpage content. It transforms articles, documentation, and PDFs into interactive learning experiences with multiple question types including code snippets, conceptual questions, and visual diagram challenges.\n\nTo solve the problem of passive reading by creating instant knowledge tests tailored to the content users are actively engaging with.",
      "role": "Full Stack Developer",
      "responsibilities": [
        "Designed and implemented the Chrome extension architecture",
        "Developed the quiz generation algorithm using OpenAI's API",
        "Created the user interface for quiz display and interaction",
        "Implemented Mermaid.js integration for diagram-based questions",
        "Built the backend API for processing webpage content"
      ],
      "technologies": {
        "frontend": ["JavaScript", "React", "Chrome Extension API", "Mermaid.js"],
        "backend": ["Node.js", "Express", "OpenAI API"],
        "database": ["MongoDB"],
        "tools": ["Git", "VS Code", "Chrome DevTools"]
      },
      "process": [
        "Agile Development with 2-week sprints",
        "Requirements gathering and planning",
        "Prototype development",
        "Core functionality implementation",
        "Testing and refinement",
        "Deployment and monitoring"
      ],
      "challenges": [
        {
          "challenge": "Processing complex webpage content",
          "solution": "Implemented a robust HTML parser with custom filtering for different content types"
        },
        {
          "challenge": "Generating relevant questions",
          "solution": "Created a sophisticated prompt engineering system for OpenAI API"
        },
        {
          "challenge": "Performance optimization",
          "solution": "Implemented caching and lazy loading for better extension performance"
        }
      ],
      "outcomes": {
        "metrics": [
          "Successfully deployed to Chrome Web Store",
          "Achieved 4.5/5 user rating",
          "Processed over 10,000 webpages",
          "Generated 50,000+ questions"
        ],
        "feedback": [
          "Users reported improved learning retention",
          "Positive feedback on question quality",
          "Appreciation for the intuitive interface"
        ]
      },
      "learnings": [
        "Deep understanding of Chrome Extension development",
        "Advanced prompt engineering techniques",
        "Performance optimization for browser extensions",
        "User experience design for educational tools"
      ],
      "links": {
        "github": "https://github.com/yourusername/QuizScraper",
        "demo": "https://chrome.google.com/webstore/detail/quizscraper"
      }
    }
},
  {
    title: "RedinAI",
    description:
      "RedinAI is an AI assistant where you can input a Reddit post link and a prompt, and the AI analyzes the post and comments to provide insightful answers based on your questions. I created this app to address the challenge of absorbing knowledge from lengthy Reddit threads. It helps users easily digest and understand complex discussions by summarizing key points and offering relevant answers.",
    tags: ["Next.js", "Spring Boot", "PostgreSQL", "OpenAI"],
    link: "https://github.com/yourusername/RedinAI",
    slug: "redinai",
    platforms: [
      { icon: PiOpenAiLogo, color: "#00A4EF" },
      { icon: RiNextjsFill, color: "#ffffff" },
      { icon: BiLogoSpringBoot, color: "#6DB33F" },
      { icon: BiLogoPostgresql, color: "#336791" },
    ],
    video: "/RedinAI.mp4",
    details: {
      overview: "RedinAI is an AI assistant that analyzes Reddit posts and comments to provide insightful answers based on user questions. It helps users easily digest and understand complex discussions by summarizing key points and offering relevant answers.\n\nTo address the challenge of absorbing knowledge from lengthy Reddit threads by providing AI-powered analysis and insights.",
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
      process: [
        "Scrum with weekly sprints",
        "System architecture design",
        "Database schema development",
        "API implementation",
        "Frontend development",
        "Integration and testing",
        "Deployment and monitoring"
      ],
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
      learnings: [
        "Advanced Spring Boot application development",
        "Next.js and React best practices",
        "Database optimization techniques",
        "AI integration patterns"
      ],
      links: {
        github: "https://github.com/yourusername/RedinAI",
        demo: "https://redinai-demo.com"
      }
    }
  },
  {
    title: "Browzio",
    description:
      "Browzio is a powerful and fun browser extension designed to help users track and analyze their online activity effortlessly. Whether you're a developer, student, or professional, Browzio provides you with insightful metrics about your browsing habits, helping you optimize the time you spend online.",
    tags: ["JavaScript", "Local Storage", "Firefox Web Extension API"],
    link: "https://addons.mozilla.org/en-US/firefox/addon/browzio/",
    slug: "browzio",
    platforms: [{ icon: FaFirefox, color: "#FF7139" }],
    video: "/Browzio.mp4",
    details: {
      overview: "Browzio is a powerful and fun browser extension designed to help users track and analyze their online activity effortlessly. Whether you're a developer, student, or professional, Browzio provides you with insightful metrics about your browsing habits.\n\nTo help users understand and optimize their browsing habits through data-driven insights.",
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
      process: [
        "Iterative Development",
        "Extension architecture design",
        "Core functionality implementation",
        "UI/UX development",
        "Testing and refinement",
        "Firefox Add-ons submission"
      ],
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
      learnings: [
        "Firefox Web Extension development",
        "Data visualization techniques",
        "Privacy-focused development practices",
        "Performance optimization for browser extensions"
      ],
      links: {
        github: "https://github.com/yourusername/Browzio",
        demo: "https://addons.mozilla.org/en-US/firefox/addon/browzio/"
      }
    }
  },
  {
    title: "Apple Website Replica",
    description:
      "A responsive replica of the Apple website homepage, built with modern web technologies to create a seamless and interactive user experience. The project showcases advanced animations, 3D visual effects, and smooth transitions. This project highlights the ability to combine 3D animations and interactive elements, providing an immersive experience similar to that of a high-quality tech website like Apple's.",
    tags: ["Three.js", "React Three Fiber", "React Three Drei", "GSAP", "Vite"],
    link: "https://github.com/sri01729/apple-website-homepage-mimic",
    slug: "apple-website-replica",
    platforms: [
      { icon: FaReact, color: "#61DAFB" },
      { icon: FaNodeJs, color: "#68A063" },
      { icon: TbBrandVite, color: "#b45ee3" },
    ],
    video: "/apple.mp4",
    details: {
      overview: "A responsive replica of the Apple website homepage, built with modern web technologies to create a seamless and interactive user experience. The project showcases advanced animations, 3D visual effects, and smooth transitions.\n\nTo demonstrate proficiency in creating high-end, interactive web experiences with modern web technologies.",
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
      process: [
        "Component-Driven Development",
        "UI/UX analysis",
        "Component architecture",
        "3D implementation",
        "Animation development",
        "Performance optimization"
      ],
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
      learnings: [
        "Advanced 3D web development",
        "Performance optimization techniques",
        "Animation best practices",
        "Responsive design patterns"
      ],
      links: {
        github: "https://github.com/sri01729/apple-website-homepage-mimic",
        demo: "https://apple-website-replica-demo.com"
      }
    }
  },
]

export default function StickyScrollRevealProjects() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextProject = () => {
        setDirection(1);
        setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const prevProject = () => {
        setDirection(-1);
        setActiveIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };

    const currentProject = projects[activeIndex];

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-7xl">
            <h2 className="text-4xl md:text-7xl font-medium mb-8 max-w-2xl group relative">
                projects.
                <span className="absolute left-0 top-full mt-2 w-64 p-2 bg-black/80 text-xs text-[#969696] rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                    A showcase of my creative endeavors and technical solutions. Each project represents a unique challenge tackled with innovation and attention to detail, demonstrating my passion for building impactful applications.
                </span>
            </h2>

            {/* Mobile View - Normal Carousel */}
            <div className="md:hidden w-full py-8 bg-transparent overflow-hidden">
                <div className="space-y-6">
                    <div className="w-full overflow-hidden rounded-lg relative">
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                key={activeIndex}
                                initial={{
                                    opacity: 0,
                                    x: direction > 0 ? 100 : -100
                                }}
                                animate={{
                                    opacity: 1,
                                    x: 0
                                }}
                                exit={{
                                    opacity: 0,
                                    x: direction > 0 ? -100 : 100
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 30
                                }}
                                className="w-full"
                            >
                                {currentProject.video && (
                                    <video
                                        key={currentProject.video}
                                        width="100%"
                                        height="auto"
                                        autoPlay
                                        loop
                                        muted
                                        controls
                                        playsInline
                                        className="object-cover w-full"
                                    >
                                        <source src={currentProject.video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                            key={activeIndex}
                            initial={{
                                opacity: 0,
                                y: 20
                            }}
                            animate={{
                                opacity: 1,
                                y: 0
                            }}
                            exit={{
                                opacity: 0,
                                y: -20
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30,
                                delay: 0.1
                            }}
                            className="space-y-4 px-4"
                        >
                            <h3 className="text-2xl font-medium text-slate-100">{currentProject.title}</h3>
                            <p className="text-slate-300">{currentProject.description}</p>

                            <div className="flex flex-wrap gap-2 mt-4">
                                {currentProject.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="bg-black/40 text-white text-xs font-medium px-2.5 py-1 rounded-full border border-white/10"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-4 mt-4">
                                <Link
                                    href={`/projects/${currentProject.slug}`}
                                    className="text-white hover:text-gray-300 transition-colors flex items-center gap-1.5 text-sm font-medium"
                                >
                                    View Details
                                </Link>
                                <div className="flex items-center gap-3 ml-2">
                                    {currentProject.platforms.map((Platform, index) => (
                                        <Platform.icon
                                            key={index}
                                            className="text-xl"
                                            style={{ color: Platform.color }}
                                            title={currentProject.tags[index]}
                                        />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="flex justify-between items-center px-4">
                        <motion.button
                            onClick={prevProject}
                            className="bg-slate-800/70 text-slate-200 px-4 py-2 rounded-full"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Previous
                        </motion.button>
                        <div className="flex gap-2">
                            {projects.map((_, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => {
                                        setDirection(index > activeIndex ? 1 : -1);
                                        setActiveIndex(index);
                                    }}
                                    className={`w-2 h-2 rounded-full ${
                                        index === activeIndex ? 'bg-blue-500' : 'bg-slate-600'
                                    }`}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                />
                            ))}
                        </div>
                        <motion.button
                            onClick={nextProject}
                            className="bg-slate-800/70 text-slate-200 px-4 py-2 rounded-full"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Next
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Desktop View - Sticky Scroll */}
            <div className="hidden md:block w-full py-8 bg-transparent overflow-hidden">
      <StickyScroll
        content={projects.map((project) => ({
          title: project.title,
          description: (
            <div className="space-y-4">
              <p className="text-slate-300">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-slate-800/70 text-slate-200 text-xs font-medium px-2.5 py-1 rounded-full border border-slate-700/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-4">
                                    <Link
                                        href={`/projects/${project.slug}`}
                  className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1.5 text-sm font-medium"
                >
                                        View Details
                                    </Link>
                <div className="flex items-center gap-3 ml-2">
                  {project.platforms.map((Platform, index) => (
                    <Platform.icon
                      key={index}
                      className="text-xl"
                      style={{ color: Platform.color }}
                      title={project.tags[index]}
                    />
                  ))}
                </div>
              </div>
            </div>
          ),
          content: (
            <div className="w-full h-full overflow-hidden rounded-lg">
              {project.video && (
                <video
                  key={project.video}
                  width="100%"
                  height="100%"
                  autoPlay
                  loop
                  muted
                  controls
                  playsInline
                  className="object-cover w-full h-full"
                >
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          ),
        }))}
        contentClassName="w-[450px] h-[300px] rounded-xl overflow-hidden shadow-xl"
                />
            </div>

                <div className="flex justify-center">
                 <p className="text-xl md:text-xl text-[#fefeff] leading-tight mb-12 max-w-3xl mx-auto ">
                find more on my{" "}
                <a
                  href="https://github.com/Sri01729"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-sky-500"
                  style={{ display: "inline-flex", alignItems: "center" }}
                >
                  GitHub &#x2197;
                </a>
              </p>
              </div>
        </motion.div>
  )
}
