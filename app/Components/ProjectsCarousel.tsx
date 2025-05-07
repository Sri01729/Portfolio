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

const projects = [
    {
    "title": "QuizScraper",
    "description": "QuizScraper transforms articles, documentation, and any webpage content into interactive quizzes using the power of OpenAI's LLM, GPT-4.1-nano. Specially designed for students and learners, it helps turn passive reading into active learning by dynamically generating multiple question types, including code snippets, conceptual challenges, and visual diagrams, tailored directly to the content you're engaging with.",
    "tags": ["Chrome Extension", "JavaScript", "nodejs","Quiz Generation", "Mermaid.js", "AI-Powered", "GPT-4.1-nano"],
    "link": "https://github.com/yourusername/QuizScraper",
    "slug": "quizscraper",
    "platforms": [
      { "icon": FaChrome, "color": "#4285F4" },
      { "icon": FaJsSquare, "color": "#F7DF1E" },
      { "icon": SiMermaid, "color": "#FF6B6B" },
        { "icon": PiOpenAiLogo, "color": "#00A4EF" },
      { icon: FaNodeJs, color: "#68A063" },
    ],
    "video": "/QuizScraper-demo.mp4",
},
  {
    title: "RedinAI",
    description:
      "Unlock the knowledge buried in lengthy Reddit threads without the endless scroll. RedinAI acts as your personal AI analyst: give it a post link and a prompt, and it dives deep into the post and comments to surface key insights and answer your specific questions. I built this to tackle information overload, helping you stop drowning in discussion and start understanding complex topics faster.",
    tags: ["Next.js", "SpringBoot", "Spring Security", "Spring AI", "PostgreSql", "OpenAI"],
    link: "https://github.com/yourusername/RedinAI",
    slug: "redinai",
    platforms: [
      { icon: PiOpenAiLogo, color: "#00A4EF" },
      { icon: RiNextjsFill, color: "#ffffff" },
      { icon: BiLogoSpringBoot, color: "#6DB33F" },
      { icon: BiLogoPostgresql, color: "#336791" },
    ],
    video: "/RedinAI.mp4",
    },
  {
  "title": "SketchVision",
  "description": "SketchVision is an innovative web application that transforms simple sketches and text annotations into stunning AI-generated artwork. With an intuitive drawing interface and powerful AI integration, users can quickly bring their visual ideas to life without advanced artistic skills. Perfect for designers, content creators, and anyone looking to visualize concepts rapidly.",
  "tags": ["React", "TypeScript", "Nodejs", "OpenAI", "Canvas API", "DALL-E 3", "AI-Powered"],
  "link": "https://sketchvision.app",
  "slug": "sketchvision",
  "platforms": [
     { icon: PiOpenAiLogo, color: "#00A4EF" },
      { icon: RiNextjsFill, color: "#ffffff" },
      { icon: FaReact, color: "#61DAFB" },
      { icon: FaNodeJs, color: "#68A063" },
      { icon: TbBrandVite, color: "#b45ee3" },
  ],
  "video": "/SketchVision.mp4"
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
  },
  {
    title: "Apple Website Replica",
    description:
      "A responsive replica of the Apple website homepage, built with modern web technologies to create a seamless and interactive user experience. The project showcases advanced animations, 3D visual effects, and smooth transitions. This project highlights the ability to combine 3D animations and interactive elements, providing an immersive experience similar to that of a high-quality tech website like Apple's.",
    tags: ["Three.js", "React","GSAP", "Vite"],
    link: "https://github.com/sri01729/apple-website-homepage-mimic",
    slug: "apple-website-replica",
    platforms: [
      { icon: FaReact, color: "#61DAFB" },
      { icon: FaNodeJs, color: "#68A063" },
      { icon: TbBrandVite, color: "#b45ee3" },
    ],
    video: "/apple.mp4",
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
            <h2 className="text-4xl xl:text-7xl font-medium mb-8 max-w-2xl group relative">
                projects.
                <span className="absolute left-0 top-full mt-2 w-64 p-2 bg-black/80 text-xs text-[#969696] rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                    A showcase of my creative endeavors and technical solutions. Each project represents a unique challenge tackled with innovation and attention to detail, demonstrating my passion for building impactful applications.
                </span>
            </h2>

            {/* Mobile View - Normal Carousel */}
            <div className="xl:hidden w-full py-8 bg-transparent overflow-hidden">
                <div className="space-y-6 px-0 md:px-6 lg:px-24">
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
                                type: "tween",
                                duration: 0.3,
                            }}
                            className="space-y-4 px-4"
                        >
                            <h3 className="text-2xl font-medium text-[#fefeff]">{currentProject.title}</h3>
                            <p className="text-sm text-[#969696]">{currentProject.description}</p>

                            <div className="flex flex-wrap gap-2 mt-4">
                                {currentProject.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="bg-black/40 text-[#969696] text-xs font-medium px-2.5 py-1 rounded-full border border-white/10"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-4 mt-4">
                                <Link
                                    href={`/projects/${currentProject.slug}`}
                                    className="text-[#fefeff] hover:text-[#969696] transition-colors flex items-center gap-1.5 text-sm font-medium bg-black/40 px-3 py-1.5 rounded-lg border border-white/10"
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
            <div className="hidden xl:block w-full py-8 bg-transparent overflow-hidden">
                <div className="relative">
                    <div className="absolute top-2 left-2 z-10 bg-black/60 text-[#969696] text-xs px-2 py-1 rounded-full flex items-center gap-1">
                        <span>Scroll to explore</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 19V5"></path>
                            <path d="m5 12 7-7 7 7"></path>
                        </svg>
                    </div>
                    <StickyScroll
                        content={projects.map((project) => ({
                            title: project.title,
                            description: (
                                <div className="space-y-4">
                                    <p className="text-sm text-[#969696]">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {project.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="bg-black/40 text-[#969696] text-xs font-medium px-2.5 py-1 rounded-full border border-white/10"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-4 mt-4">
                                        <Link
                                            href={`/projects/${project.slug}`}
                                            className="text-white hover:text-gray-300 transition-colors flex items-center gap-1.5 text-sm font-medium bg-black/40 px-3 py-1.5 rounded-lg border border-white/10"
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
            </div>

            <div className="flex justify-center">
                <p className="text-xl md:text-xl text-[#fefeff] leading-tight mb-12 max-w-3xl mx-auto">
                    find more on my{" "}
                    <a
                        href="https://github.com/Sri01729"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-[#969696]"
                        style={{ display: "inline-flex", alignItems: "center" }}
                    >
                        GitHub &#x2197;
                    </a>
                </p>
            </div>
        </motion.div>
    )
}
