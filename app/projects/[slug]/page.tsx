"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaFirefox, FaReact, FaNodeJs, FaJsSquare, FaChrome } from "react-icons/fa";
import { PiOpenAiLogo } from "react-icons/pi";
import { RiNextjsFill } from "react-icons/ri";
import { SiMermaid } from "react-icons/si";
import { BiLogoSpringBoot, BiLogoPostgresql } from "react-icons/bi";
import { TbBrandVite } from "react-icons/tb";
import { IconType } from "react-icons";
import Link from "next/link";
import { projects } from "@/app/Components/ProjectsCarousel";

interface Platform {
  icon: IconType;
  color: string;
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  slug: string;
  platforms: Platform[];
  video: string;
  details?: {
    overview: string;
    role: string;
    responsibilities: string[];
    technologies: {
      frontend?: string[];
      backend?: string[];
      database?: string[];
      tools?: string[];
    };
    process: string[];
    challenges: {
      challenge: string;
      solution: string;
    }[];
    outcomes: {
      metrics: string[];
      feedback: string[];
    };
    learnings: string[];
    links: {
      github: string;
      demo: string;
    };
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p: Project) => p.slug === params.slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <main className="min-h-screen bg-black text-[#fefeff] px-4 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* First column - Heading */}
          <div className="md:col-span-1">
            <div className="sticky top-8">
        <Link
          href="/"
                className="text-[#969696] hover:text-[#fefeff] transition-colors inline-flex items-center gap-2 mb-8"
        >
                <FaArrowLeft size={14} />
                back
        </Link>
              <h1 className="text-4xl md:text-7xl font-medium group relative">
                {project.title.toLowerCase()}.
                <span className="absolute left-0 top-full mt-2 w-64 p-2 bg-black/80 text-xs text-[#969696] rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                  A detailed look at the project's development process, technologies used, and outcomes achieved.
                </span>
              </h1>
            </div>
          </div>

          {/* Second and Third columns - Content */}
          <div className="md:col-span-2 space-y-16 mt-32">
            {/* Overview Section */}
            <div className="max-w-2xl">
              <h2 className="text-2xl font-medium mb-4">Overview</h2>
              <p className="text-sm text-[#969696] whitespace-pre-line">
                {project.details?.overview || project.description}
              </p>
            </div>

            {/* Role & Responsibilities Section */}
            {project.details && (
              <div className="max-w-2xl">
                <h2 className="text-2xl font-medium mb-4">Role & Responsibilities</h2>
                <p className="text-sm text-[#969696] mb-4">{project.details.role}</p>
                <ul className="list-disc pl-5 space-y-2">
                  {project.details.responsibilities.map((responsibility, index) => (
                    <li key={index} className="text-sm text-[#969696]">{responsibility}</li>
              ))}
            </ul>
              </div>
            )}

            {/* Video Demo Section */}
            {project.video && (
              <div className="max-w-2xl">
                <h2 className="text-2xl font-medium mb-4">Demo</h2>
                <div className="rounded-lg overflow-hidden">
                  <video
                    width="100%"
                    height="auto"
                    autoPlay
                    loop
                    muted
                    controls
                    playsInline
                    className="object-cover"
                  >
                    <source src={project.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            )}

            {/* Technologies Section */}
            <div className="max-w-2xl">
              <h2 className="text-2xl font-medium mb-4">Technologies</h2>
              {project.details ? (
                <div className="space-y-6">
                  {Object.entries(project.details.technologies).map(([category, techs]) => (
                    <div key={category}>
                      <h3 className="text-lg font-medium mb-2 capitalize">{category}</h3>
                      <div className="flex flex-wrap gap-3">
                        {techs.map((tech: string, index: number) => (
                          <span
                            key={index}
                            className="bg-black/40 text-[#969696] text-xs font-medium px-2.5 py-1 rounded-full border border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="bg-black/40 text-[#969696] text-xs font-medium px-2.5 py-1 rounded-full border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <div className="flex items-center gap-3 mt-4">
                {project.platforms.map((Platform: Platform, index: number) => (
                  <Platform.icon
                    key={index}
                    className="text-2xl"
                    style={{ color: Platform.color }}
                    title={project.tags[index]}
                  />
                ))}
              </div>
            </div>

            {/* Development Process Section */}
            {project.details && (
              <div className="max-w-2xl">
                <h2 className="text-2xl font-medium mb-4">Development Process</h2>
                <ul className="list-disc pl-5 space-y-2">
                  {project.details.process.map((step, index) => (
                    <li key={index} className="text-sm text-[#969696]">{step}</li>
              ))}
            </ul>
              </div>
            )}

            {/* Challenges & Solutions Section */}
            {project.details && (
              <div className="max-w-2xl">
                <h2 className="text-2xl font-medium mb-4">Challenges & Solutions</h2>
            <div className="space-y-4">
                  {project.details.challenges.map((item, index) => (
                    <div key={index} className="border border-white/10 rounded-lg p-4">
                      <h3 className="text-sm font-medium mb-2">Challenge: {item.challenge}</h3>
                      <p className="text-sm text-[#969696]">Solution: {item.solution}</p>
                </div>
              ))}
            </div>
              </div>
            )}

            {/* Outcomes & Results Section */}
            {project.details && (
              <div className="max-w-2xl">
                <h2 className="text-2xl font-medium mb-4">Outcomes & Results</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Metrics</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      {project.details.outcomes.metrics.map((metric, index) => (
                        <li key={index} className="text-sm text-[#969696]">{metric}</li>
                ))}
              </ul>
            </div>
            <div>
                    <h3 className="text-lg font-medium mb-2">Feedback</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      {project.details.outcomes.feedback.map((item, index) => (
                        <li key={index} className="text-sm text-[#969696]">{item}</li>
                ))}
              </ul>
            </div>
                </div>
              </div>
            )}

            {/* Learnings & Reflections Section */}
            {project.details && (
              <div className="max-w-2xl">
                <h2 className="text-2xl font-medium mb-4">Learnings & Reflections</h2>
                <ul className="list-disc pl-5 space-y-2">
                  {project.details.learnings.map((learning, index) => (
                    <li key={index} className="text-sm text-[#969696]">{learning}</li>
              ))}
            </ul>
              </div>
            )}

            {/* Links Section */}
            <div className="max-w-2xl">
              <h2 className="text-2xl font-medium mb-4">Links</h2>
              <div className="flex items-center gap-4">
                {project.details ? (
                  <>
                    <Link
                      href={project.details.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#fefeff] hover:text-[#969696] transition-colors flex items-center gap-1.5 text-sm font-medium bg-black/40 px-3 py-1.5 rounded-lg border border-white/10"
                    >
                      GitHub Repository
                    </Link>
                    <Link
                      href={project.details.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                      className="text-[#fefeff] hover:text-[#969696] transition-colors flex items-center gap-1.5 text-sm font-medium bg-black/40 px-3 py-1.5 rounded-lg border border-white/10"
                    >
                      Live Demo
                    </Link>
                  </>
                ) : (
                  <Link
                    href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                    className="text-[#fefeff] hover:text-[#969696] transition-colors flex items-center gap-1.5 text-sm font-medium bg-black/40 px-3 py-1.5 rounded-lg border border-white/10"
                  >
                    View Source
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}