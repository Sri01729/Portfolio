'use client';

import React from 'react';
import { Tabs } from "@/components/ui/tabs";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiRedux, SiVuedotjs, SiNodedotjs, SiExpress,
  SiPython, SiDjango, SiFastapi, SiMongodb,
  SiPostgresql, SiMysql, SiRedis, SiGit,
  SiDocker, SiAmazon,
  SiPostman, SiFigma, SiAdobexd, SiAdobephotoshop,
  SiAdobeillustrator
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { motion } from 'framer-motion';

const TechStack = () => {
  const frontendItems = [
    { title: "React", icon: <SiReact className="h-full w-full" style={{ color: '#61DAFB' }} />, href: "#frontend" },
    { title: "Next.js", icon: <SiNextdotjs className="h-full w-full text-white" />, href: "#frontend" },
    { title: "TypeScript", icon: <SiTypescript className="h-full w-full" style={{ color: '#3178C6' }} />, href: "#frontend" },
    { title: "Tailwind", icon: <SiTailwindcss className="h-full w-full" style={{ color: '#06B6D4' }} />, href: "#frontend" },
    { title: "Redux", icon: <SiRedux className="h-full w-full" style={{ color: '#764ABC' }} />, href: "#frontend" },
    { title: "Vue.js", icon: <SiVuedotjs className="h-full w-full" style={{ color: '#4FC08D' }} />, href: "#frontend" },
  ];

  const backendItems = [
    { title: "Node.js", icon: <SiNodedotjs className="h-full w-full" style={{ color: '#339933' }} />, href: "#backend" },
    { title: "Express", icon: <SiExpress className="h-full w-full text-white" />, href: "#backend" },
    { title: "Python", icon: <SiPython className="h-full w-full" style={{ color: '#3776AB' }} />, href: "#backend" },
    { title: "Django", icon: <SiDjango className="h-full w-full" style={{ color: '#092E20' }} />, href: "#backend" },
    { title: "FastAPI", icon: <SiFastapi className="h-full w-full" style={{ color: '#009688' }} />, href: "#backend" },
  ];

  const databaseItems = [
    { title: "MongoDB", icon: <SiMongodb className="h-full w-full" style={{ color: '#47A248' }} />, href: "#database" },
    { title: "PostgreSQL", icon: <SiPostgresql className="h-full w-full" style={{ color: '#336791' }} />, href: "#database" },
    { title: "MySQL", icon: <SiMysql className="h-full w-full" style={{ color: '#4479A1' }} />, href: "#database" },
    { title: "Redis", icon: <SiRedis className="h-full w-full" style={{ color: '#DC382D' }} />, href: "#database" },
  ];

  const toolItems = [
    { title: "Git", icon: <SiGit className="h-full w-full" style={{ color: '#F05032' }} />, href: "#tools" },
    { title: "Docker", icon: <SiDocker className="h-full w-full" style={{ color: '#2496ED' }} />, href: "#tools" },
    { title: "AWS", icon: <SiAmazon className="h-full w-full" style={{ color: '#FF9900' }} />, href: "#tools" },
    { title: "VS Code", icon: <VscCode className="h-full w-full" style={{ color: '#007ACC' }} />, href: "#tools" },
    { title: "Postman", icon: <SiPostman className="h-full w-full" style={{ color: '#FF6C37' }} />, href: "#tools" },
  ];

  const designItems = [
    { title: "Figma", icon: <SiFigma className="h-full w-full" style={{ color: '#F24E1E' }} />, href: "#design" },
    { title: "Adobe XD", icon: <SiAdobexd className="h-full w-full" style={{ color: '#FF61F6' }} />, href: "#design" },
    { title: "Photoshop", icon: <SiAdobephotoshop className="h-full w-full" style={{ color: '#31A8FF' }} />, href: "#design" },
    { title: "Illustrator", icon: <SiAdobeillustrator className="h-full w-full" style={{ color: '#FF9900' }} />, href: "#design" },
  ];

  const tabs = [
    {
      title: "Frontend",
      value: "frontend",
      content: (
        <div className="w-full relative h-full p-10 overflow-visible">
          <FloatingDock
            items={frontendItems}
            desktopClassName="bg-transparent"
          />
        </div>
      ),
    },
    {
      title: "Backend",
      value: "backend",
      content: (
        <div className="w-full relative h-full p-10 overflow-visible">
          <FloatingDock
            items={backendItems}
            desktopClassName="bg-transparent"
          />
        </div>
      ),
    },
    {
      title: "Database",
      value: "database",
      content: (
        <div className="w-full relative h-full p-10 overflow-visible">
          <FloatingDock
            items={databaseItems}
            desktopClassName="bg-transparent"
          />
        </div>
      ),
    },
    {
      title: "Tools",
      value: "tools",
      content: (
        <div className="w-full relative h-full p-10 overflow-visible">
          <FloatingDock
            items={toolItems}
            desktopClassName="bg-transparent"
          />
        </div>
      ),
    },
    {
      title: "Design",
      value: "design",
      content: (
        <div className="w-full relative h-full p-10 overflow-visible">
          <FloatingDock
            items={designItems}
            desktopClassName="bg-transparent"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid xl:grid-cols-2 gap-16">
        {/* Left Column - Intro Text */}
        <div className="space-y-8">
          <div>
            <motion.h2
              className="text-4xl xl:text-5xl font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Technical Proficiency<span className="text-[#969696]">.</span>
            </motion.h2>
            <motion.p
              className="text-[#969696] text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              With a comprehensive tech stack spanning frontend, backend, and DevOps,
              I bring full-stack expertise to every project. My toolkit enables me to
              build scalable, modern applications with emphasis on performance and user experience.
            </motion.p>
          </div>

          <motion.div
            className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-medium mb-4">Highlights</h3>
            <ul className="space-y-3 text-[#969696]">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#61DAFB]"></span>
                Modern Frontend Development with React & Next.js
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#339933]"></span>
                Robust Backend Systems with Node.js & Python
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#47A248]"></span>
                Database Design & Optimization
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2496ED]"></span>
                DevOps & Cloud Infrastructure
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F24E1E]"></span>
                UI/UX Design & Prototyping
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Right Column - Skills */}
        <motion.div
          className="h-[40rem] [perspective:1000px] relative flex flex-col w-full items-start justify-start overflow-visible"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Tabs
            tabs={tabs}
            containerClassName="justify-start mb-8"
            tabClassName="text-sm font-medium text-[#969696] hover:text-white transition-colors"
            activeTabClassName="text-white bg-white/10 border border-white/20 backdrop-blur-sm"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default TechStack;