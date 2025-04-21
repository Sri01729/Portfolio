"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Space_Grotesk } from "next/font/google";
import StarField from "./Components/Starfield";
import DeveloperIntro from "./Components/DeveloperIntro";
import SkillsIntro from "./Components/SkillsIntro";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import About from "./Components/About";
import Contact from "./Components/Contact";
import ProjectsCarousel from "./Components/ProjectsCarousel"; // Import the missing component
import Blogs from "./Components/Blogs";
import VisitCounter from "./Components/VisitCounter";
import TechStack from "./Components/TechStack";
import Link from "next/link";
import SplineModel from "./Components/SplineModel";


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
    skills: [<a href="//Sai_Srinivas_Resume.pdf" download className="hover:text-[#fefeff] transition-colors">Download Resume</a>]
  },
  'product-managers': {
    title: "Product Managers",
    description: "I bring technical expertise to product development, bridging the gap between business objectives and technical execution.",
    skills: [<a href="//Sai_Srinivas_Resume.pdf" download className="hover:text-[#fefeff] transition-colors">Download Resume</a>]
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
                className="text-[12vw] md:text-[8vw] font-medium leading-none"
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
              className="absolute md:fixed top-8 left-8 md:left-8 z-50 cursor-pointer"
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
              className="absolute md:fixed top-8 right-8 z-50 md:hidden"
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
                  className="fixed inset-0 bg-black z-40 md:hidden pt-24 px-8"
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
            <header className="p-4 md:p-8 pt-24 md:pt-8 bg-black">
              <div className="relative md:static mb-8">
                <div
                  className="absolute left-0 z-10 w-12 h-full bg-gradient-to-r from-black to-transparent pointer-events-none"
                  style={{
                    opacity: scrollPosition > 0 ? 1 : 0,
                    transition: 'opacity 0.3s ease'
                  }}
                ></div>
                <div className="absolute right-0 z-10 w-12 h-full bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
                <div
                  ref={scrollContainerRef}
                  className="flex gap-4 md:gap-8 justify-start md:justify-center text-sm overflow-x-auto scrollbar-hide"
                  style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    WebkitOverflowScrolling: 'touch',
                    paddingLeft: '2rem',
                    paddingRight: '2rem'
                  }}
                >
                  {(['anyone', 'recruiters', 'engineers', 'product-managers'] as AudienceType[]).map((audience) => (
                    <button
                      key={audience}
                      onClick={() => setSelectedAudience(audience)}
                      className={`transition-colors whitespace-nowrap flex-shrink-0 ${selectedAudience === audience
                        ? 'text-[#fefeff] font-medium'
                        : 'text-[#969696] hover:text-[#fefeff]'
                        }`}
                    >
                      {audienceContent[audience].title}
                    </button>
                  ))}
                </div>
              </div>
            </header>

            {/* Desktop Navigation */}
            <nav className="hidden md:block fixed left-8 top-1/2 -translate-y-1/2 z-40">
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
              <section id="intro" className="px-4 md:px-24 py-12 md:pb-32 md:ml-16">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <div className="md:pt-48">
                      <h2 className="text-4xl md:text-7xl font-medium mb-4 max-w-2xl group relative">
                        Sai Srinivas Alahari<span className="text-[#969696]">.</span>
                        <span className="absolute left-0 top-full mt-2 w-64 p-2 bg-black/80 text-xs text-[#969696] rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                          Full Stack Developer with a passion for building impactful digital solutions
                        </span>
                      </h2>

                      {/* Audience Selector */}
                      {/* <div className="flex flex-wrap gap-3 mb-4">
                        {Object.entries(audienceContent).map(([key, { title }]) => (
                          <button
                            key={key}
                            onClick={() => setSelectedAudience(key as AudienceType)}
                            className={`px-3 py-1 text-sm rounded-full transition-all ${selectedAudience === key
                              ? "bg-white/10 text-[#fefeff]"
                              : "bg-transparent text-[#969696] hover:text-[#fefeff]"
                              }`}
                          >
                            {title}
                          </button>
                        ))}
                      </div> */}

                      <motion.div
                        key={selectedAudience}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="mt-8 pr-4"
                      >
                        <p className="text-[#969696] mb-8">
                          {audienceContent[selectedAudience].description}
                        </p>

                        {audienceContent[selectedAudience].skills.length > 0 && (
                          <motion.div
                            className="flex flex-wrap gap-4 mt-6"
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
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <div className="h-full pt-4 md:pt-0">
                        <SplineModel />
                        <div className=" relative left-3/4 bottom-14 bg-black h-10 w-1/4" />
                    </div>
                  </div>
                </div>
              </section>

              {/* Work Section */}
              <section id="work" className="min-h-screen px-4 py-12 md:px-24 md:ml-16">
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
              <section id="tech" className="min-h-screen px-4 md:px-24 py-12 md:px-24 py-32 md:ml-16">
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
              <section id="background" className="min-h-screen px-4 md:px-24 py-12 md:px-24 py-32 md:ml-16">
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
              <section id="blogs" className="min-h-screen px-4 md:px-24 py-12 md:px-24 py-32 md:ml-16">
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
              <section id="about" className="min-h-screen px-4 md:px-24 py-12 md:px-24 py-32 md:ml-16">
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
              <section id="contact" className="min-h-screen px-4 md:px-24 py-12 md:px-24 py-32 md:ml-16">
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
            <footer className="px-4 md:px-24 py-8 text-[#969696] md:ml-16">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <span className="text-sm text-center md:text-left">© 2025 Sai Srinivas Alahari. All rights reserved.</span>
                <VisitCounter />
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
