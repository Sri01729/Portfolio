'use client';

import React from 'react';
import { Tabs } from "@/components/ui/tabs";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiRedux, SiVuedotjs, SiNodedotjs, SiExpress,
  SiPython, SiSpring, SiSpringboot, SiMongodb,
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
    { title: "Spring Boot", icon: <SiSpringboot className="h-full w-full" style={{ color: '#6DB33F' }} />, href: "#backend" },
    { title: "Spring", icon: <SiSpring className="h-full w-full" style={{ color: '#6DB33F' }} />, href: "#backend" },
    { title: "Python", icon: <SiPython className="h-full w-full" style={{ color: '#3776AB' }} />, href: "#backend" },
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
        <div className="w-full relative h-full p-10">
          <FloatingDock
            items={frontendItems}
            desktopClassName="bg-transparent"
          />
          <div className="mt-8 space-y-6 p-8 rounded-xl bg-gradient-to-br from-[#1a1a1a]/80 via-black/50 to-[#1a1a1a]/80 border border-white/5 backdrop-blur-sm">
            <h3 className="text-2xl font-medium">Frontend Development</h3>
            <p className="text-[#969696] leading-relaxed">
              Specializing in modern frontend frameworks and libraries to create responsive,
              performant, and beautiful user interfaces. Proficient in React ecosystem with
              Next.js for SSR/SSG, TypeScript for type safety, and Tailwind CSS for rapid styling.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm text-[#969696]">
              <div>
                <strong className="text-white">Core:</strong>
                <ul className="mt-2 space-y-1">
                  <li>• React & Next.js</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <strong className="text-white">State & Performance:</strong>
                <ul className="mt-2 space-y-1">
                  <li>• Redux Toolkit</li>
                  <li>• React Query</li>
                  <li>• Performance Optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Backend",
      value: "backend",
      content: (
        <div className="w-full relative h-full p-10">
          <FloatingDock
            items={backendItems}
            desktopClassName="bg-transparent"
          />
          <div className="mt-8 space-y-6 p-8 rounded-xl bg-gradient-to-br from-[#1a1a1a]/80 via-black/50 to-[#1a1a1a]/80 border border-white/5 backdrop-blur-sm">
            <h3 className="text-2xl font-medium">Backend Development</h3>
            <p className="text-[#969696] leading-relaxed">
              Building robust and scalable server-side applications with modern technologies.
              Experienced in both Node.js and Spring ecosystems, with a focus on RESTful APIs,
              microservices, and serverless architectures.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm text-[#969696]">
              <div>
                <strong className="text-white">Node.js Stack:</strong>
                <ul className="mt-2 space-y-1">
                  <li>• Express.js</li>
                  <li>• REST APIs</li>
                  <li>• Authentication</li>
                  <li>• Authorization</li>
                </ul>
              </div>
              <div>
                <strong className="text-white">Spring Stack:</strong>
                <ul className="mt-2 space-y-1">
                  <li>• Spring Boot</li>
                  <li>• Spring Security</li>
                  <li>• Spring AI</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Database",
      value: "database",
      content: (
        <div className="w-full relative h-full p-10">
          <FloatingDock
            items={databaseItems}
            desktopClassName="bg-transparent"
          />
          <div className="mt-8 space-y-6 p-8 rounded-xl bg-gradient-to-br from-[#1a1a1a]/80 via-black/50 to-[#1a1a1a]/80 border border-white/5 backdrop-blur-sm">
            <h3 className="text-2xl font-medium">Database Management</h3>
            <p className="text-[#969696] leading-relaxed">
              Experience with both SQL and NoSQL databases, focusing on data modeling,
              optimization, and scalability. Proficient in designing efficient schemas
              and writing optimized queries for various use cases.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm text-[#969696]">
              <div>
                <strong className="text-white">SQL:</strong>
                <ul className="mt-2 space-y-1">
                  <li>• PostgreSQL</li>
                  <li>• MySQL</li>
                  <li>• Query Optimization</li>
                </ul>
              </div>
              <div>
                <strong className="text-white">NoSQL:</strong>
                <ul className="mt-2 space-y-1">
                  <li>• MongoDB</li>
                  <li>• Redis Caching</li>
                  <li>• Data Modeling</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Tools",
      value: "tools",
      content: (
        <div className="w-full relative h-full p-10">
          <FloatingDock
            items={toolItems}
            desktopClassName="bg-transparent"
          />
          <div className="mt-8 space-y-6 p-8 rounded-xl bg-gradient-to-br from-[#1a1a1a]/80 via-black/50 to-[#1a1a1a]/80 border border-white/5 backdrop-blur-sm">
            <h3 className="text-2xl font-medium">Development Tools</h3>
            <p className="text-[#969696] leading-relaxed">
              Utilizing modern development tools and practices for efficient workflow
              and deployment. Experienced in version control, containerization, and
              cloud services for seamless development and deployment.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm text-[#969696]">
              <div>
                <strong className="text-white">Version Control & CI/CD:</strong>
                <ul className="mt-2 space-y-1">
                  <li>• Git & GitHub</li>
                  <li>• Docker</li>
                  <li>• CI/CD Pipelines</li>
                </ul>
              </div>
              <div>
                <strong className="text-white">Cloud & Testing:</strong>
                <ul className="mt-2 space-y-1">
                  <li>• AWS Services</li>
                  <li>• API Testing</li>
                  <li>• Performance Monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Design",
      value: "design",
      content: (
        <div className="w-full relative h-full p-10">
          <FloatingDock
            items={designItems}
            desktopClassName="bg-transparent"
          />
          <div className="mt-8 space-y-6 p-8 rounded-xl bg-gradient-to-br from-[#1a1a1a]/80 via-black/50 to-[#1a1a1a]/80 border border-white/5 backdrop-blur-sm">
            <h3 className="text-2xl font-medium">Design & UI/UX</h3>
            <p className="text-[#969696] leading-relaxed">
              Bridging the gap between design and development with proficiency in
              modern design tools. Focused on creating intuitive user interfaces
              and seamless user experiences.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm text-[#969696]">
              <div>
                <strong className="text-white">UI Design:</strong>
                <ul className="mt-2 space-y-1">
                  <li>• Figma</li>
                  <li>• Adobe XD</li>
                  <li>• Prototyping</li>
                </ul>
              </div>
              <div>
                <strong className="text-white">Graphics:</strong>
                <ul className="mt-2 space-y-1">
                  <li>• Photoshop</li>
                  <li>• Illustrator</li>
                  <li>• Asset Creation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-7xl">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl"
      >
        <div className="grid xl:grid-cols-3 gap-8">
          <div className="xl:col-span-1">
            <div className="sticky top-8">
              <h2 className="text-4xl xl:text-7xl font-medium mb-8 group relative">
                Tech Stack<span className="text-[#969696]">.</span>
                <span className="absolute left-0 top-full mt-2 w-64 p-2 bg-black/80 text-xs text-[#969696] rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                  A collection of technologies I work with to bring ideas to life. From front-end frameworks to back-end solutions, these tools form the foundation of my development process.
                </span>
              </h2>
            </div>
          </div>

          <div className="xl:col-span-2">
            <div className="h-[40rem] [perspective:1000px] relative flex flex-col w-full items-start justify-center overflow-visible">
              <Tabs
                tabs={tabs}
                containerClassName="justify-center mb-4 mt-0 xl:mt-32"
                tabClassName="text-sm font-medium text-[#969696] hover:text-white transition-colors"
                activeTabClassName="text-white bg-white/10 border border-white/20 backdrop-blur-sm"
              />
              </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TechStack;