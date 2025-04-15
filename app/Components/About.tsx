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
                className="max-w-7xl mx-auto px-4"
            >
                <div className="grid grid-cols-12 gap-8">
                    {/* First column - Heading */}
                    <div className="col-span-4">
                        <h2 className="text-4xl md:text-7xl font-medium sticky top-8 group relative">
                            about.
                            <span className="absolute left-0 top-full mt-2 w-64 p-2 bg-black/80 text-xs text-[#969696] rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                                Get to know the person behind the code. Beyond technical skills, I bring creativity, passion, and a continuous learning mindset to every project and collaboration.
                            </span>
                        </h2>
                    </div>

                    {/* Second and Third columns - Content */}
                    <div className="col-span-8 space-y-32 mt-32">
                        {/* First section - second column */}
                        <div className="max-w-md">
                            <h3 className="text-2xl font-medium mb-4">Who am I?</h3>
                            <p className="text-sm text-[#969696]">
                                I'm a passionate software developer with a keen eye
                                for design and a love for creating seamless user
                                experiences. My journey in tech began with a curiosity
                                about how things work on the internet, which evolved
                                into a deep appreciation for the art of coding.
                            </p>
                        </div>

                        {/* Second section - third column */}
                        <div className="max-w-md ml-auto">
                            <h3 className="text-2xl font-medium mb-4">What do I do?</h3>
                            <p className="text-sm text-[#969696]">
                                I specialize in full-stack development, focusing on
                                building responsive and intuitive web applications.
                                My toolkit includes modern frameworks like React,
                                Next.js, and Node.js, along with a strong foundation
                                in UI/UX principles.
                            </p>
                        </div>

                        {/* Third section - second column */}
                        <div className="max-w-md">
                            <h3 className="text-2xl font-medium mb-4">My Approach</h3>
                            <p className="text-sm text-[#969696]">
                                I believe in clean, maintainable code and user-centered
                                design. Every project is an opportunity to solve
                                problems creatively while ensuring scalability and
                                performance. I'm constantly learning and adapting to
                                new technologies to stay at the forefront of web
                                development.
                            </p>
                        </div>

                        {/* Fourth section - third column */}
                        <div className="max-w-md ml-auto">
                            <h3 className="text-2xl font-medium mb-4">Beyond Code</h3>
                            <p className="text-sm text-[#969696]">
                                When I'm not coding, I enjoy exploring new technologies,
                                contributing to open-source projects, and sharing my
                                knowledge through technical writing. I'm passionate
                                about creating technology that makes a positive impact
                                on people's lives.
                            </p>
                        </div>

                        {/* Fifth section - second column */}
                        <div className="max-w-md">
                            <h3 className="text-2xl font-medium mb-4">Motivation</h3>
                            <p className="text-sm text-[#969696]">
                                The urge to create something new and fresh from my
                                hands is the one thing that always motivates me to
                                work. The art of creation is the one I admire the
                                most, and it is the driving force behind my daily
                                endeavours. This passion is the cornerstone of my
                                professional journey.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default About
