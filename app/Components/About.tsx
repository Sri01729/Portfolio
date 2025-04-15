import { motion } from 'framer-motion'
import React from 'react'

const About = () => {
    return (
        <>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-7xl"
            >
                <h2 className="text-4xl md:text-7xl font-medium mb-8 max-w-2xl group relative">
                  about.
                  <span className="absolute left-0 top-full mt-2 w-64 p-2 bg-black/80 text-xs text-[#969696] rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                    Get to know the person behind the code. Beyond technical skills, I bring creativity, passion, and a continuous learning mindset to every project and collaboration.
                  </span>
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-1 md:col-start-2">
                        <div className="space-y-8">
                            <p className="text-sm text-[#fefeff]">
                                A Software developer with over 2 years of experience at a multinational corporation.
                                I take pride in my craft, and love mentoring earlier career developers.
                                I develop cross functional partnerships, and thrive in complex, ambiguous environments.
                            </p>
                        </div>
                    </div>

                    <div className="md:col-span-1 md:col-start-3 md:mt-32">
                        <div className="space-y-8">
                            <p className="text-sm text-[#fefeff]">
                                My approach combines technical expertise with creative problem-solving,
                                always striving to build solutions that are both elegant and practical.
                                Zooming out on company strategy, zooming in on details.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 gap-8 mt-8">
                    <div className="md:col-span-1 md:col-start-2">
                        <div className="space-y-8">
                            <p className="text-sm text-[#fefeff]">
                                In my free time, I challenge myself with new projects, explore advancements in AI, and delve into innovative technologies
                                to keep my skills sharp and curiosity alive. Over the past 2 years, I've focused on staying updated with AI advancements to
                                adapt to the rapid pace of innovation in the field.
                            </p>
                        </div>
                    </div>

                    <div className="md:col-span-1 md:col-start-3 md:mt-32">
                        <div className="space-y-8">
                            <p className="text-sm text-[#fefeff]">
                                The urge to create something new and fresh from my hands is the one thing that always motivates me to
                                work. The art of creation is the one I admire the most, and it is the driving force behind my daily endeavours. This
                                passion is the cornerstone of my professional journey.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default About
