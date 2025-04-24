"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Space_Grotesk } from "next/font/google";
import dynamic from "next/dynamic";
import StarField from "./Components/Starfield";
import DeveloperIntro from "./Components/DeveloperIntro";
import SkillsIntro from "./Components/SkillsIntro";
import Experience from "./Components/Experience";
import About from "./Components/About";
import Contact from "./Components/Contact";
import ProjectsCarousel from "./Components/ProjectsCarousel"; // Import the missing component
import Blogs from "./Components/Blogs";
import VisitCounter from "./Components/VisitCounter";
import TechStack from "./Components/TechStack";
import Link from "next/link";
import GithubCard from "./Components/GithubCard";

// Dynamically import SplineModel for better performance
// const SplineModel = dynamic(() => import("./Components/SplineModel"), {
//   loading: () => (
//     <div className="w-full h-[350px] xl:h-[80vh] flex items-center justify-center bg-black/40 border border-white/10 rounded-xl">
//       <div className="flex flex-col items-center gap-4">
//         <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
//         <div className="text-white/50 text-sm">Loading 3D experience...</div>
//       </div>
//     </div>
//   ),
//   ssr: false
// });

const spaceGrotesk = Space_Grotesk({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const sections = [
  { id: "intro", title: "Intro" },
  { id: "work", title: "Work" },
  { id: "tech", title: "Tech" },
  { id: "background", title: "Background" },
  { id: "blogs", title: "Blogs" },
  { id: "about", title: "About" },
  { id: "contact", title: "Contact" }
];


type AudienceType = 'anyone' | 'recruiters' | 'engineers' | 'product-managers';

const audienceContent = {
  anyone: {
    title: "For Anyone",
    description: (<>I'm a <DeveloperIntro /> solving real-world challenges by creating impactful and practical digital solutions that make a difference in people's lives, currently diving into AI for innovation.</>),
    skills: []
  },
  recruiters: {
    title: "Recruiters",
    description: (
      <>
        Full Stack Developer with 2 years of professional experience complemented by P.G Diploma in Web Development. My expertise includes <SkillsIntro />
      </>

    ),
    skills: [<a href="/Sai_Srinivas_Resume.pdf" download className="hover:text-[#fefeff] transition-colors">Download Resume</a>]
  },
  engineers: {
    title: "Engineers",
    description: (
      <>
        A problem-solver at heart, passionate about innovation and collaboration. Explore my real-time projects on my{" "}
        <a
          href="https://github.com/Sri01729"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-[#969696]"
          style={{ display: "inline-flex", alignItems: "center" }}
        >
          GitHub &#x2197;
        </a>
      </>
    ),
    skills: [<a href="/Sai_Srinivas_Resume.pdf" download className="hover:text-[#fefeff] transition-colors">Download Resume</a>]
  },
  'product-managers': {
    title: "Product Managers",
    description: "I bring technical expertise to product development, bridging the gap between business objectives and technical execution.",
    skills: [<a href="/Sai_Srinivas_Resume.pdf" download className="hover:text-[#fefeff] transition-colors">Download Resume</a>]
  }
};

const featuredBlogs = [
  {
    id: "intui-cell-luna",
    title: "A New Dawn for AI: IntuiCell Introduces a Paradigm Shift in Intelligence",
    description: "Discover how IntuiCell is challenging the foundations of current Artificial Intelligence with a novel approach inspired by neuroscience, culminating in Luna, a robot that learns autonomously in real-time.",
    date: "2024-05-20",
    readTime: "7 min read",
    category: "Artificial Intelligence",
    tags: ["AI", "Machine Learning", "Neuroscience", "Robotics", "Autonomous Learning"],
    thumbnail: "/blog-thumbnails/intui-cell-luna.jpg"
  },
  {
    id: "Building-Responsive-UIs-with-Tailwind-CSS",
    title: "Building Responsive UIs with Tailwind CSS",
    description: "Learn how to create beautiful, responsive user interfaces using Tailwind CSS. This guide covers the fundamentals and advanced techniques for building modern web applications.",
    date: "April 15, 2025",
    readTime: "8 min read",
    category: "Frontend",
    tags: ["Tailwind CSS", "Responsive Design", "Web Development"],
    thumbnail: "/blog-thumbnails/tailwind-css.jpg"
  },
  {
    id: "The-Power-of-AI-in-Modern-Web-Applications",
    title: "The Power of AI in Modern Web Applications",
    description: "Explore how artificial intelligence is transforming web development and user experiences. Discover practical applications and implementation strategies for integrating AI into your projects.",
    date: "April 10, 2025",
    readTime: "10 min read",
    category: "AI",
    tags: ["Artificial Intelligence", "Web Development", "Machine Learning"],
    thumbnail: "/blog-thumbnails/ai-web-apps.jpg"
  }
];

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("intro");
  const [selectedAudience, setSelectedAudience] = useState<AudienceType>("anyone");
  const [isNameExpanded, setIsNameExpanded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleHorizontalScroll = () => {
    if (scrollContainerRef.current) {
      setScrollPosition(scrollContainerRef.current.scrollLeft);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleHorizontalScroll);
      return () => {
        if (container) {
          container.removeEventListener('scroll', handleHorizontalScroll);
        }
      };
    }
    return undefined;
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = sectionId === "intro" ? 0 : section.offsetTop;
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const handleLogoClick = () => {
    window.location.reload();
  };

  const remainingLetters = "ai  />".split("");

  return (
    <div className={`${spaceGrotesk.className} text-[#fefeff] flex flex-col min-h-screen relative`}>
      <StarField />
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            className="h-screen w-screen flex items-center justify-center bg-black"
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <motion.h1
                className="text-[12vw] lg:text-[8vw] font-medium leading-none"
                animate={{
                  opacity: [1, 0],
                  y: [0, -20],
                  transition: { duration: 0.5, delay: 1.5 }
                }}
              >
                <span>Sai Srinivas Alahari</span>
              </motion.h1>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-grow"
          >
            {/* Logo */}
            <motion.div
              className="absolute lg:fixed top-8 left-8 lg:left-8 z-50 cursor-pointer"
              onHoverStart={() => setIsNameExpanded(true)}
              onHoverEnd={() => setIsNameExpanded(false)}
              onClick={handleLogoClick}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative text-3xl font-medium flex">
                <span>S</span>
                <AnimatePresence>
                  {isNameExpanded && (
                    <div className="flex ">
                      {remainingLetters.map((letter, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 5 }}
                          transition={{
                            duration: 0.1,
                            delay: index * 0.02,
                            ease: "easeOut"
                          }}
                        >
                          {letter}
                        </motion.span>
                      ))}
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              className="absolute xl:fixed top-8 right-8 z-50 xl:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="space-y-2">
                <span className={`block w-8 h-0.5 bg-[#fefeff] transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                <span className={`block w-8 h-0.5 bg-[#fefeff] transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-8 h-0.5 bg-[#fefeff] transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
              </div>
            </button>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "tween", duration: 0.3 }}
                  className="fixed inset-0 bg-black z-40 xl:hidden pt-24 px-8"
                >
                  {sections.map(({ id, title }) => (
                    <div key={id} className="mb-6">
                      <Link
                        href={`#${id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(id);
                          setIsMenuOpen(false);
                        }}
                        className={`text-2xl font-medium transition-colors duration-300 ${activeSection === id
                            ? 'text-[#fefeff]'
                            : 'text-[#969696] hover:text-[#fefeff]'
                        }`}
                      >
                        {title}
                      </Link>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Header */}
            <header className="p-4 xl:p-8 pt-24 xl:pt-8 bg-black">
              <div className="relative xl:static mb-8">
                <nav className="max-w-screen-xl mx-auto audience-nav">
                  <ul className="flex items-center justify-center gap-1 p-1 text-sm">
                    {(['anyone', 'recruiters', 'engineers', 'product-managers'] as AudienceType[]).map((audience) => (
                      <li key={audience} className="relative">
                        <button
                          onClick={() => setSelectedAudience(audience)}
                          data-active={selectedAudience === audience}
                          className={`px-4 py-2 rounded-md transition-all duration-200 ${
                            selectedAudience === audience
                              ? 'text-[#fefeff]'
                              : 'text-[#969696] hover:text-[#fefeff]'
                          }`}
                        >
                          {audienceContent[audience].title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </header>

            {/* Desktop Navigation */}
            <nav className="hidden xl:block fixed left-8 top-1/2 -translate-y-1/2 z-40">
              {sections.map(({ id, title }) => (
                <div key={id} className="mb-4 text-left">
                  <Link
                    href={`#${id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(id);
                    }}
                    className={`group flex items-center gap-2 text-sm transition-colors duration-300 ${activeSection === id
                        ? 'text-[#fefeff]'
                        : 'text-[#969696] hover:text-[#fefeff]'
                    }`}
                  >
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className={`transition-all duration-300 ${activeSection === id ? 'font-medium' : ''}`}
                    >
                      {title}
                    </motion.span>
                  </Link>
                </div>
              ))}
            </nav>

            {/* Main Content */}
            <main className="flex-grow">
              <section id="intro" className="min-h-screen flex items-center px-4 xl:px-24 xl:ml-16">
                <div className="w-full max-w-7xl mx-auto">
                  <div className="grid xl:grid-cols-2 gap-16">
                    <div className="xl:col-span-1">
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <h1 className="text-sm text-[#969696] tracking-wider uppercase">Full Stack Developer</h1>
                          <h2 className="text-4xl xl:text-7xl font-medium group relative">
                            Sai Srinivas Alahari<span className="text-[#969696]">.</span>
                          </h2>
                        </div>

                        <motion.div
                          key={selectedAudience}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                          className="relative z-10"
                        >
                          <p className="text-[#969696] text-lg">
                            {audienceContent[selectedAudience].description}
                          </p>

                          {audienceContent[selectedAudience].skills.length > 0 && (
                            <motion.div
                              className="flex flex-wrap gap-4 mt-8"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.3 }}
                            >
                              {audienceContent[selectedAudience].skills.map((skill, index) => (
                                <div
                                  key={index}
                                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm hover:bg-white/10 transition-colors"
                                >
                                  {skill}
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </motion.div>

                        <div className="pt-8 flex gap-4">
                          <a
                            href="https://github.com/Sri01729"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-black/40 border border-white/10 rounded-lg text-sm text-[#fefeff] font-medium hover:border-white/20 hover:text-[#969696] transition-colors"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            GitHub
                          </a>
                          <a
                            href="https://www.linkedin.com/in/sai-srinivas-alahari-b4744a137/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-black/40 border border-white/10 rounded-lg text-sm text-[#fefeff] font-medium hover:border-white/20 hover:text-[#969696] transition-colors"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                            LinkedIn
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="xl:col-span-1">
                      <div className="h-full flex items-center justify-center">
                        <GithubCard />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Work Section */}
              <section id="work" className="min-h-screen px-4 py-12 xl:px-24 xl:ml-16">
               <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
               >
                 <ProjectsCarousel />
               </motion.div>
              </section>

              {/* Tech Stack Section */}
              <section id="tech" className="min-h-screen px-4 xl:px-24 py-12 py-32 xl:ml-16">
               <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
               >
                 <TechStack />
               </motion.div>
              </section>

              {/* Background Section */}
              <section id="background" className="min-h-screen px-4 xl:px-24 py-12 py-32 xl:ml-16">
               <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
               >
                 <Experience />
               </motion.div>
              </section>

              {/* Blogs Section */}
              <section id="blogs" className="min-h-screen px-4 xl:px-24 py-12 py-32 xl:ml-16">
               <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
               >
                 <Blogs />
               </motion.div>
              </section>

              {/* About Section */}
              <section id="about" className="min-h-screen px-4 xl:px-24 py-12 py-32 xl:ml-16">
               <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
               >
                 <About />
               </motion.div>
              </section>

              {/* Contact Section */}
              <section id="contact" className="min-h-screen px-4 xl:px-24 py-12 py-32 xl:ml-16">
               <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
               >
                 <Contact />
               </motion.div>
              </section>
            </main>

            {/* Footer */}
            <footer className="px-4 xl:px-24 py-8 text-[#969696] xl:ml-16">
              <div className="flex flex-col xl:flex-row justify-between items-center gap-4">
                <span className="text-sm text-center xl:text-left">© 2025 Sai Srinivas Alahari. All rights reserved.</span>
                <VisitCounter />
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
