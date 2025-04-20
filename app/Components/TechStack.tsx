'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Gravity, MatterBody } from '@/components/ui/gravity';
import {
  SiTypescript, SiJavascript, SiReact, SiNextdotjs, SiNodedotjs,
  SiExpress, SiMongodb, SiPostgresql, SiPython, SiDjango,
  SiTailwindcss, SiFramer, SiGit, SiGithub,
  SiHtml5, SiCss3, SiSass, SiWebpack, SiBabel, SiDocker,
  SiAmazon, SiVercel, SiFirebase, SiOpenai, SiSpring,
  SiWordpress,
  SiFigma,
  SiAdobexd,
  SiPhp
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { MdOutlineMouse } from 'react-icons/md';
import { FaJava } from 'react-icons/fa';

const TechStack = () => {
  // Technology icons with their components
  const techIcons = [
    { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
    { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
    { icon: SiReact, name: 'React', color: '#61DAFB' },
    { icon: SiNextdotjs, name: 'Next.js', color: '#FFFFFF' },
    { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
    { icon: SiExpress, name: 'Express', color: '#666666' },
    { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
    { icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
    { icon: SiPython, name: 'Python', color: '#3776AB' },
    { icon: SiTailwindcss, name: 'Tailwind CSS', color: '#06B6D4' },
    { icon: SiFramer, name: 'Framer Motion', color: '#0055FF' },
    { icon: SiGit, name: 'Git', color: '#F05032' },
    { icon: SiGithub, name: 'GitHub', color: '#666666' },
    { icon: VscCode, name: 'VS Code', color: '#007ACC' },
    { icon: SiHtml5, name: 'HTML5', color: '#E34F26' },
    { icon: SiCss3, name: 'CSS3', color: '#1572B6' },
    { icon: SiSass, name: 'Sass', color: '#CC6699' },
    { icon: SiWebpack, name: 'Webpack', color: '#8DD6F9' },
    { icon: SiBabel, name: 'Babel', color: '#F9DC3E' },
    { icon: SiDocker, name: 'Docker', color: '#2496ED' },
    { icon: SiAmazon, name: 'AWS', color: '#FF9900' },
    { icon: SiVercel, name: 'Vercel', color: '#666666' },
    { icon: SiFirebase, name: 'Firebase', color: '#FFCA28' },
    { icon: SiOpenai, name: 'OpenAI', color: '#10A37F' },
    { icon: FaJava, name: 'Java', color: '#007396' },
    { icon: SiSpring, name: 'Spring Boot', color: '#6DB33F' },
    { icon: SiSpring, name: 'Spring AI', color: '#6DB33F' },
    { icon: SiWordpress, name: 'WordPress', color: '#21759B' },
    { icon: SiFigma, name: 'Figma', color: '#F24E1E' },
    { icon: SiAdobexd, name: 'Adobe XD', color: '#FF61F6' },
    { icon: SiPhp, name: 'PHP', color: '#777BB4' }
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
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="sticky top-8">
              <h2 className="text-4xl md:text-7xl font-medium mb-8 max-w-2xl group relative">
                tech stack.
                <span className="absolute left-0 top-full mt-2 w-64 p-2 bg-black/80 text-xs text-[#969696] rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                  A collection of technologies I work with to bring ideas to life. From front-end frameworks to back-end solutions, these tools form the foundation of my development process.
                </span>
              </h2>
            </div>
          </div>

          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mt-0 md:mt-48 md:pt-4"
            >
              <p className="text-sm text-white/70 mb-8 max-w-2xl">
                These technologies form the foundation of my development toolkit. I leverage them to build scalable, performant, and user-friendly applications. Each tool has been carefully chosen for its strengths in solving specific challenges.
              </p>
              <div className="relative bg-transparent border border-white/10 rounded-xl p-8 hover:border-white/20 transition-colors h-[400px] overflow-hidden">
                <Gravity
                  className="w-full h-full"
                  gravity={{ x: 0, y: 0.2 }}
                  resetOnResize={true}
                  grabCursor={true}
                >
                  {techIcons.map((tech, index) => (
                    <MatterBody
                      key={index}
                      bodyType="circle"
                      x={`${Math.random() * 60 + 20}%`}
                      y={`${Math.random() * 60 + 20}%`}
                      matterBodyOptions={{
                        friction: 0.3,
                        restitution: 0.4,
                        density: 0.002,
                        isStatic: false,
                        collisionFilter: {
                          group: 0,
                          category: 0x0001,
                          mask: 0xFFFFFFFF
                        }
                      }}
                      className="flex items-center justify-center"
                    >
                      <div className="flex items-center gap-1.5 bg-black/40 border border-gray-700 hover:border-gray-600 transition-colors rounded-full px-2 py-1 group">
                        <div className="w-6 h-6 flex items-center justify-center">
                          <tech.icon size={16} style={{ color: tech.color }} />
                        </div>
                        <span className="text-xs text-white/90 whitespace-nowrap">
                          {tech.name}
                        </span>
                      </div>
                    </MatterBody>
                  ))}
                </Gravity>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TechStack;