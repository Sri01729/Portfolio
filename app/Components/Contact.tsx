import React from 'react'
import Image from "next/image";
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div>
       <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="max-w-5xl"
                >
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 md:col-start-2">
                      <div className="space-y-8 max-w-2xl">
                        <Image
                          src="/srinivas_alahari.jpg"
                          alt="Sai Srinivas Alahari"
                          width={500}
                          height={300}
                          className="mb-8 rounded-xl"
                        />
                        <p className="text-xl md:text-xl text-[#fefeff] underline">saialahariedu@gmail.com</p>
                        <div className="flex items-center gap-2">
                          <div className="relative">
                            <div className="w-2 h-2 bg-[#fefeff] rounded-full animate-pulse"></div>
                            <div className="absolute top-0 left-0 w-2 h-2 bg-[#fefeff] rounded-full animate-[ping_1.5s_ease-in-out_infinite] opacity-90"></div>
                          </div>
                          <p className="text-l text-[#969696]">Looking for new opportunities.</p>
                        </div>
                        <div className="flex gap-20 pt-8">


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
    </div>
  )
}

export default Contact
