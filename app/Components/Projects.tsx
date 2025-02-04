import React from 'react'
import { FaGithub, FaLinkedin, FaPython, FaFirefox, FaReact, FaNodeJs } from 'react-icons/fa';
import { PiOpenAiLogo } from "react-icons/pi";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoSpringBoot, BiLogoPostgresql } from "react-icons/bi";
import { TbBrandVite } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
const Projects = () => {

  const workProjects = [
    {
      title: "RedinAI",
      description: "RedinAI is an AI assistant where you can input a Reddit post link and a prompt, and the AI analyzes the post and comments to provide insightful answers based on your questions. I created this app to address the challenge of absorbing knowledge from lengthy Reddit threads. It helps users easily digest and understand complex discussions by summarizing key points and offering relevant answers (Deployment in progress).",
      tags: ["Nextjs", "SpringBoot", "PostgreSql", "OpenAI"],
      link: "",
      platforms: [
        { icon: PiOpenAiLogo, color: "#00A4EF" },
        { icon: RiNextjsFill, color: "#00A4EF" },
        { icon: BiLogoSpringBoot, color: "#00A4EF" },
        { icon: BiLogoPostgresql, color: "#00A4EF" },

      ],
      video: "/RedinAI.mp4"
    },
    {
      title: "Browzio",
      description: "Browzio is a powerful and fun browser extension designed to help users track and analyze their online activity effortlessly. Whether you're a developer, student, or professional, Browzio provides you with insightful metrics about your browsing habits, helping you optimize the time you spend online.",
      tags: ["Javascript", "Local Storage", "Firefox web Extension API"],
      link: "https://addons.mozilla.org/en-US/firefox/addon/browzio/",
      platforms: [
        { icon: FaFirefox, color: "#00A4EF" }
      ],
      video: "/Browzio.mp4"
    },
    {
      title: "Apple Website Replica",
      description: "A responsive replica of the Apple website homepage, built with modern web technologies to create a seamless and interactive user experience. The project showcases advanced animations, 3D visual effects, and smooth transitions. This project highlights the ability to combine 3D animations and interactive elements, providing an immersive experience similar to that of a high-quality tech website like Apple's.",
      tags: ["Three.js", "React Three Fiber", "React Three Drei", "GSAP", "Vite"],
      link: "https://github.com/Sri01729/apple-website-homepage-mimic",
      platforms: [
        { icon: FaReact, color: "#61DAFB" },
        { icon: FaNodeJs, color: "#68A063" },
        { icon: TbBrandVite, color: "#b45ee3" }
      ],
      video: "/apple.mp4",
      image:''
    }
  ];

  return (
    <>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl">
        <h2 className="text-4xl md:text-7xl font-medium mb-8 max-w-2xl">projects.</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 md:col-start-2">
            <div className="grid gap-8 md:gap-16 max-w-2xl">
              {workProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  whileHover={{ y: -10 }}
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="block p-4 md:p-8 border border-[#969696] rounded-lg hover:border-[#969696] transition-colors relative">
                    <h3 className="text-xl md:text-2xl font-medium mb-4"><span className="text-sky-500">{project.title}</span></h3>
                    <p className="text-sm text-[#fefeff] mb-6">{project.description}</p>
                    {project.video ? (
                      <div className="mb-6">
                        <video
                          width="100%"
                          height="auto"
                          controls
                          className="rounded-lg"
                        >
                          <source src={project.video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    ) : project.image && (
                      <div className="mb-6">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={700}
                          height={300}
                          className="rounded-lg"
                        />
                      </div>
                    )}

                    <div className="flex flex-wrap gap-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-sm text-[#969696]">{tag}</span>
                      ))}
                    </div>
                    <div className="absolute top-4 right-4 flex gap-2">
                      {project.platforms.map((Platform, i) => (
                        <Platform.icon
                          key={i}
                          className="text-xl"
                          style={Platform.color ? { color: Platform.color } : {}}
                        />
                      ))}
                    </div>
                  </a>
                </motion.div>
              ))}
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
        </div>
      </motion.div>
    </>
  )
}

export default Projects
