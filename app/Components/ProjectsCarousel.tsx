"use client"
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"
import { FaGithub, FaFirefox, FaReact, FaNodeJs, FaJsSquare, FaChrome  } from "react-icons/fa"
import { PiOpenAiLogo } from "react-icons/pi"
import { RiNextjsFill } from "react-icons/ri"
import { SiMermaid } from "react-icons/si";
import { BiLogoSpringBoot, BiLogoPostgresql } from "react-icons/bi"
import { TbBrandVite } from "react-icons/tb"
import { motion, AnimatePresence } from "framer-motion";

const projects = [
    {
    "title": "QuizScraper",
    "description": "QuizScraper is a Chrome extension that dynamically generates quizzes from any webpage content. It transforms articles, documentation, and PDFs into interactive learning experiences with multiple question types including code snippets, conceptual questions, and visual diagram challenges. I built this to solve the problem of passive reading by creating instant knowledge tests tailored to the content users are actively engaging with.",
    "tags": ["Chrome Extension", "JavaScript", "Quiz Generation", "Mermaid.js", "AI-Powered"],
    "link": "https://github.com/yourusername/QuizScraper",
    "platforms": [
      { "icon": FaChrome, "color": "#4285F4" },
      { "icon": FaJsSquare, "color": "#F7DF1E" },
      { "icon": SiMermaid, "color": "#FF6B6B" },
      { "icon": PiOpenAiLogo, "color": "#00A4EF" }
    ],
    "video": "/QuizScraper-demo.mp4",
},
  {
    title: "RedinAI",
    description:
      "RedinAI is an AI assistant where you can input a Reddit post link and a prompt, and the AI analyzes the post and comments to provide insightful answers based on your questions. I created this app to address the challenge of absorbing knowledge from lengthy Reddit threads. It helps users easily digest and understand complex discussions by summarizing key points and offering relevant answers.",
    tags: ["Next.js", "Spring Boot", "PostgreSQL", "OpenAI"],
    link: "https://github.com/yourusername/RedinAI",
    platforms: [
      { icon: PiOpenAiLogo, color: "#00A4EF" },
      { icon: RiNextjsFill, color: "#ffffff" },
      { icon: BiLogoSpringBoot, color: "#6DB33F" },
      { icon: BiLogoPostgresql, color: "#336791" },
    ],
    video: "/RedinAI.mp4",
  },
  {
    title: "Browzio",
    description:
      "Browzio is a powerful and fun browser extension designed to help users track and analyze their online activity effortlessly. Whether you're a developer, student, or professional, Browzio provides you with insightful metrics about your browsing habits, helping you optimize the time you spend online.",
    tags: ["JavaScript", "Local Storage", "Firefox Web Extension API"],
    link: "https://addons.mozilla.org/en-US/firefox/addon/browzio/",
    platforms: [{ icon: FaFirefox, color: "#FF7139" }],
    video: "/Browzio.mp4",
  },
  {
    title: "Apple Website Replica",
    description:
      "A responsive replica of the Apple website homepage, built with modern web technologies to create a seamless and interactive user experience. The project showcases advanced animations, 3D visual effects, and smooth transitions. This project highlights the ability to combine 3D animations and interactive elements, providing an immersive experience similar to that of a high-quality tech website like Apple's.",
    tags: ["Three.js", "React Three Fiber", "React Three Drei", "GSAP", "Vite"],
    link: "https://github.com/sri01729/apple-website-homepage-mimic",
    platforms: [
      { icon: FaReact, color: "#61DAFB" },
      { icon: FaNodeJs, color: "#68A063" },
      { icon: TbBrandVite, color: "#b45ee3" },
    ],
    video: "/apple.mp4",
  },
]

export default function StickyScrollRevealProjects() {
    return (

        <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-7xl">
            <h2 className="text-4xl md:text-7xl font-medium mb-8 max-w-2xl">projects.</h2>
    <div className="w-full py-8 bg-transparent overflow-hidden">
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
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1.5 text-sm font-medium"
                >
                  <FaGithub className="text-lg" /> View Project
                </a>
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
            </div>

        </motion.div>

  )
}
