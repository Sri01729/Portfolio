import React from 'react'
import Image from "next/image";
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <>
       <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="max-w-7xl"
                >
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h2 className="text-4xl md:text-7xl font-medium mb-8 max-w-2xl">
             Contact.
            </h2>

          </motion.div>
        </div>
                    <div className="md:col-span-2 md:col-start-2">
                      <div className="space-y-8 max-w-2xl mt-0 md:mt-32 md:pt-4 text-center md:text-left">
                        <Image
                          src="/srinivas_alahari.png"
                          alt="Sai Srinivas Alahari"
                          width={300}
                          height={200}
                          className="mb-8 rounded-xl mx-auto md:mx-0"
                        />
                        <p className="text-xl md:text-xl text-[#fefeff] underline">saialahariedu@gmail.com</p>
                        <div className="flex items-center gap-2 justify-center md:justify-start">
                          <div className="relative">
                            <div className="w-2 h-2 bg-[#fefeff] rounded-full animate-pulse"></div>
                            <div className="absolute top-0 left-0 w-2 h-2 bg-[#fefeff] rounded-full animate-[ping_1.5s_ease-in-out_infinite] opacity-90"></div>
                          </div>
                          <p className="text-l text-[#969696]">Looking for new opportunities.</p>
                        </div>
                        <div className="flex gap-8 md:gap-20 pt-8 justify-center md:justify-start">


                          <a
                            href="https://www.linkedin.com/in/sai-srinivas-alahari-924303252/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#969696] hover:text-[#fefeff] transition-colors text-sm flex flex-row"
                          >
                            <FaLinkedin size={16} /> LinkedIn
                          </a>

                          <a
                            href="https://github.com/Sri01729/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#969696] hover:text-[#fefeff] transition-colors text-sm flex flex-row"
                          >

                            <FaGithub size={16} />GitHub
                          </a>
                          <a
                            href="mailto:saialahariedu@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#969696] hover:text-[#fefeff] transition-colors text-sm flex flex-row"
                          >
                            <Mail size={16} />Mail
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
    </>
  )
}

export default Contact
