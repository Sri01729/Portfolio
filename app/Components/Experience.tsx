import { motion } from 'framer-motion'
import React from 'react'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

const Experience = () => {
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
                Journey.
                <span className="absolute left-0 top-full mt-2 w-64 p-2 bg-black/80 text-xs text-[#969696] rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                  A timeline of my professional journey, showcasing key roles and achievements in software development.
                </span>
              </h2>
            </div>
          </div>

          <div className="md:col-span-2">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-5xl"
            >
              <div className="space-y-4 max-w-2xl mt-0 md:mt-16 md:pt-4">
                <p className="font-mono text-sm text-[#969696]">Current</p>
                <h3 className="text-4xl font-medium text-[#fefeff]">Everywhere, All at Once</h3>
                <p className="text-sm text-[#fefeff]">2024 — Present &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AI realm + Dev trenches</p>
                <p className="text-sm text-[#969696]">
                  We're standing at the gates of the future — and it's powered by artificial intelligence. Imagine a high-speed train about to leave the station, and it's named AI. If we don't hop on now, we risk falling behind. In just the past six months, the acceleration in AI development has been unreal.
                  <br /><br />
                  Tools like <span className="text-[#fefeff]">RAG systems, Stable Diffusion, LangChain</span>, and more have gone from cool demos to essential productivity powerhouses. LLMs like <span className="text-[#fefeff]">GPT-4, Claude, Gemini, Mistral, and LLaMA</span> are reshaping how we build, write, think, and code. Companies like <span className="text-[#fefeff]">OpenAI, Anthropic, Google, Meta, and Microsoft</span> are racing toward the same future — and I'm keeping pace.
                  <br /><br />
                  I've been closely tracking this momentum, building personal projects that integrate these tools and models into real-world web applications. Currently, I'm focusing on <span className="text-[#fefeff]">developing autonomous AI agents</span> that can perform complex tasks, reason through multi-step problems, and interface with various tools and APIs. I'm fascinated by the potential of these systems to transform how we interact with software and information.
                  <br /><br />
                  I'm weaponizing myself with  AI tech, learning how to deploy it at scale, and figuring out how it fits into modern dev workflows.
                  <br /><br />
                  At the same time, I'm continuously leveling up my web development skills — exploring advanced <span className="text-[#fefeff]">React patterns, Next.js architecture, backend scalability, DevOps practices, and modern UI/UX design</span>. I believe the future isn't just about knowing AI — it's about knowing how to apply it in powerful, user-first applications.
                  <br /><br />
                  I'm not just preparing for what's next — I'm building it.
                </p>
              </div>
            </motion.div>
            <br />
            <br />
            <br />
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-5xl"
            >
              <div className="space-y-4 max-w-2xl mt-0 md:mt-16 md:pt-4">
                <p className="font-mono text-sm text-[#969696]">North Island College</p>
                <h3 className="text-4xl font-medium text-[#fefeff]">P.G Diploma in Digital Design and Development</h3>
                <p className="text-sm text-[#fefeff]">2022 - 2024 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Courtenay,&nbsp;British Columbia</p>
                <p className="text-sm text-[#969696]">
                  I chose this program because I didn't just want to build software — I wanted to craft experiences that people actually connect with. The intersection of design, development, and digital storytelling fascinated me. I saw this as the perfect launchpad to sharpen both my technical toolkit and creative instincts, and to level up from developer to full-stack digital creator.
                  <br /><br />
                  The curriculum covered a wide range of topics, including <span className="text-[#fefeff]">front-end and back-end web development (HTML, CSS, JavaScript, PHP), database management, UI/UX design principles, and project management</span>. I particularly enjoyed diving into the <span className="text-[#fefeff]">WordPress ecosystem, gaining hands-on experience developing custom themes and plugins from scratch</span>.
                  <br /><br />
                  Throughout the program, I consistently pushed for academic and personal growth — earning a Cumulative <span className="text-[#fefeff]">GPA of 4.03/4.33</span>, a reflection of my commitment to mastering both design principles and development fundamentals. I was honored with the <span className="text-[#fefeff]">Leonard & Isabel Bryan Memorial Bursary Scholarship (2023)</span>, awarded for academic excellence and dedication. And in <span className="text-[#fefeff]">June 2024</span>, I was placed on the <span className="text-[#fefeff]">Dean's Honour Roll</span>, recognized for maintaining top-tier grades and a strong academic presence.
                </p>
              </div>
            </motion.div>
            <br />
            <br />
            <br />
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-5xl"
            >
              <div className="mt-8 md:mt-16">
                <div className="space-y-4 max-w-2xl">
                  <h2 className="font-mono text-sm text-[#969696]">Cognizant</h2>
                  <h3 className="text-4xl font-medium text-[#fefeff]">Full Stack Developer</h3>
                  <p className="text-sm text-[#fefeff]">2020 - 2022 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Coimbatore,&nbsp;India</p>
                  <p className="text-sm text-[#969696]">
                   I joined Cognizant initially in a QA role, but my passion for building solutions drove me to pursue development immediately. Driven by the question, "How can I use code to solve real-world problems at scale?", I immersed myself in development fundamentals. Cognizant provided a supportive environment, and through focused self-learning and seizing internal opportunities, I successfully transitioned into a <span className="text-[#fefeff]">Full Stack Developer</span> role within the first 3 months.
                   <br /><br />
                   It was here I truly learned how large-scale systems are built, maintained, and optimized. As a developer at Cognizant, I developed and maintained scalable web applications using modern frameworks like <span className="text-[#fefeff]">React, Next.js, Node.js, and Spring Boot</span>. I collaborated across cross-functional teams to deliver smooth, intuitive user experiences, implemented robust APIs, and fine-tuned backend logic and database performance. I also helped streamline development workflows through CI/CD pipelines, and actively contributed to team growth by mentoring junior developers.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Experience
