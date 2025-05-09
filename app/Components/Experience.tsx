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
        <div className="grid xl:grid-cols-3 gap-8">
          <div className="xl:col-span-1">
            <div className="sticky top-8">
              <h2 className="text-4xl xl:text-7xl font-medium mb-8 max-w-2xl group relative">
                Journey.
                <span className="absolute left-0 top-full mt-2 w-64 p-2 bg-black/80 text-xs text-[#969696] rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                  A timeline of my professional journey, showcasing key roles and achievements in software development.
                </span>
              </h2>
            </div>
          </div>

          <div className="xl:col-span-2 mt-8">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-5xl px-0 md:px-6 lg:px-24 xl:px-0"
            >
              <div className="space-y-4 max-w-5xl mt-0 xl:mt-16 xl:pt-4">
  <p className="font-mono text-sm text-[#969696]">Current</p>
  <h3 className="text-4xl font-medium text-[#fefeff]">Building, Freelancing, and Preparing for What's Next</h3>
  <p className="text-sm text-[#fefeff]">2024 — Present &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Freelance + Skill Polishing + AI Exploration</p>
  <p className="text-sm text-[#969696]">
    Right now, I'm actively freelancing and sharpening my skills as I look for the perfect full-time role. I'm investing significant time into enhancing my abilities in frontend frameworks, modern web development, and backend architecture, ensuring I'm ready for the evolving tech landscape.
    <br /><br />
    Alongside my freelancing projects, I'm keeping a close eye on the rapid advancements in artificial intelligence. Tools and frameworks like <span className="text-[#fefeff]">RAG systems, LangChain, Stable Diffusion</span>, and models such as <span className="text-[#fefeff]">GPT-4, Claude, Gemini, Mistral, and LLaMA</span> are becoming increasingly essential, reshaping how we approach software development, design, and problem-solving.
    <br /><br />
    I've integrated these AI technologies into several personal and freelance projects, exploring their practical applications within real-world scenarios. Currently, I'm particularly interested in developing applications powered by autonomous AI agents—capable of handling complex tasks, making informed decisions, and interacting seamlessly with APIs.
    <br /><br />
    I'm committed to mastering both traditional software engineering and AI-driven methodologies, ensuring I can create impactful, user-centric applications. The goal isn't just to be ready for the future, but to actively contribute to building it.
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
              className="max-w-5xl px-0 md:px-6 lg:px-24 xl:px-0"
            >
              <div className="space-y-4 max-w-5xl mt-0 xl:mt-16 xl:pt-4">
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
              className="max-w-5xl px-0 md:px-6 lg:px-24 xl:px-0"
            >

                <div className="space-y-4 max-w-5xl mt-0 xl:mt-16 xl:pt-4">
                  <h2 className="font-mono text-sm text-[#969696]">Cognizant</h2>
                  <h3 className="text-4xl font-medium text-[#fefeff]">Full Stack Developer</h3>
                  <p className="text-sm text-[#fefeff]">2020 - 2022 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Coimbatore,&nbsp;India</p>
                  <p className="text-sm text-[#969696]">
                   I joined Cognizant initially in a QA role, but my passion for building solutions drove me to pursue development immediately. Driven by the question, "How can I use code to solve real-world problems at scale?", I immersed myself in development fundamentals. Cognizant provided a supportive environment, and through focused self-learning and seizing internal opportunities, I successfully transitioned into a <span className="text-[#fefeff]">Full Stack Developer</span> role within the first 3 months.
                   <br /><br />
                   It was here I truly learned how large-scale systems are built, maintained, and optimized. As a developer at Cognizant, I developed and maintained scalable web applications using modern frameworks like <span className="text-[#fefeff]">React, Next.js, Node.js, and Spring Boot</span>. I collaborated across cross-functional teams to deliver smooth, intuitive user experiences, implemented robust APIs, and fine-tuned backend logic and database performance. I also helped streamline development workflows through CI/CD pipelines, and actively contributed to team growth by mentoring junior developers.
                  </p>
                </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Experience
