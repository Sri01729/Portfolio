import { motion } from 'framer-motion'
import React from 'react'

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
            <h2 className="text-4xl md:text-7xl font-medium mb-8 max-w-2xl group relative">
              experience.
              <span className="absolute left-0 top-full mt-2 w-64 p-2 bg-black/80 text-xs text-[#969696] rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                A journey through my professional development, highlighting key roles and achievements. Each position has contributed to my growth as a developer and shaped my approach to problem-solving in the tech industry.
              </span>
            </h2>
          </div>

          <div className="md:col-span-2">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-5xl"
            >
              <div className="space-y-4 max-w-2xl mt-0 md:mt-32 md:pt-4">
                <p className="font-mono text-sm text-[#969696]">North Island College</p>
                <h3 className="text-4xl font-medium text-[#fefeff]">P.G Diploma in Digital Design and Development</h3>
                <p className="text-sm text-[#fefeff]">2022 - 2024 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Courtenay,&nbsp;British Columbia</p>
                <p className="text-sm text-[#969696]">
                  I achieved a Cumulative <span className="text-sky-500">GPA of 4.03/4.33</span>, showcasing my dedication to academic excellence. I was honored to receive the <span className="text-sky-500">Leonard & Isabel Bryan Memorial Bursary Scholarship (2023)</span>, recognizing my exceptional performance and commitment to learning. Additionally, I was placed on the  <span className="text-sky-500">Dean's Honour Roll (June 2024)</span> for consistently maintaining high grades and academic distinction.
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
                  <h3 className="text-4xl font-medium text-[#fefeff]">Software Developer</h3>
                  <p className="text-sm text-[#fefeff]">2020 - 2022</p>
                  <p className="text-sm text-[#969696]">
                   As a Software Developer at Cognizant, I developed and maintained scalable web applications using modern frameworks like <span className="text-sky-500"> React, Next.js, Node.js and Spring Boot</span>. I collaborated with cross-functional teams to deliver seamless user experiences, implemented efficient APIs, and optimized database solutions. By streamlining development workflows with CI/CD pipelines and mentoring junior developers, I contributed to fostering a collaborative and innovative environment while ensuring high-quality deliverables.
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
