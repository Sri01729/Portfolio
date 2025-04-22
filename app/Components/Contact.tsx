'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

// Import EmailJS as a fallback
import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_PUBLIC_KEY = 'gwtVlxJ6xemuxk19i';
const EMAILJS_SERVICE_ID = 'service_8i10mcu';
const EMAILJS_TEMPLATE_ID = 'template_gq0x5rm';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Initialize EmailJS with your Public Key as a fallback
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // First try the server-side API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log('API response:', data);

      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        console.error('API error:', data.error);

        // If server-side API fails, try the client-side EmailJS as a fallback
        if (formRef.current) {
          try {
            console.log('Trying client-side EmailJS as fallback');
            const result = await emailjs.sendForm(
              EMAILJS_SERVICE_ID,
              EMAILJS_TEMPLATE_ID,
              formRef.current
            );

            if (result.text === 'OK') {
              setSubmitStatus('success');
              setFormData({ name: '', email: '', message: '' }); // Reset form
            } else {
              throw new Error('Client-side EmailJS failed');
            }
          } catch (fallbackError) {
            console.error('Fallback EmailJS error:', fallbackError);
            setSubmitStatus('error');
            setErrorMessage(data.error || 'Failed to send message. Please try again.');
          }
        } else {
          setSubmitStatus('error');
          setErrorMessage(data.error || 'Failed to send message. Please try again.');
        }
      }
    } catch (error: any) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
      setErrorMessage(`An unexpected error occurred. Please try again later or email me directly.`);
    } finally {
      setIsSubmitting(false);
    }
  };

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
                contact.
                <span className="absolute left-0 top-full mt-2 w-64 p-2 bg-black/80 text-xs text-[#969696] rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                  Let's connect and explore potential collaborations. Whether you have a project in mind, a question about my work, or just want to say hello, I'm always open to new conversations and opportunities.
                </span>
              </h2>
            </div>
          </div>

          <div className="xl:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8 mt-0 xl:mt-48 xl:pt-4 px-0 md:px-6 lg:px-24 xl:px-0"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-white/5 to-white/10 rounded-xl blur opacity-20"></div>
                <div className="relative bg-transparent border border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors">
                  <div className="flex flex-col xl:flex-row items-center gap-6">
                    <div className="w-32 h-32 xl:w-40 xl:h-40 relative rounded-full overflow-hidden border-2 border-white/10">
                      <Image
                        src="/srinivas_ghibli.png"
                        alt="Sai Srinivas Alahari"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-center xl:text-left">
                      <h3 className="text-2xl font-medium text-[#fefeff] mb-2">Sai Srinivas Alahari</h3>
                      <p className="text-[#969696] mb-4">Software Developer</p>
                      <div className="flex items-center gap-2 justify-center xl:justify-start mb-2">
                        <div className="relative">
                          <div className="w-2 h-2 bg-white/50 rounded-full animate-pulse"></div>
                          <div className="absolute top-0 left-0 w-2 h-2 bg-white/50 rounded-full animate-[ping_1.5s_ease-in-out_infinite] opacity-90"></div>
                        </div>
                        <p className="text-sm text-[#969696]">Looking for new opportunities</p>
                      </div>
                      <a
                        href="mailto:saialahariedu@gmail.com"
                        className="text-[#fefeff] hover:text-[#969696] transition-colors text-sm flex items-center gap-1 justify-center xl:justify-start"
                      >
                        <Mail size={16} /> saialahariedu@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.form
                ref={formRef}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                onSubmit={handleSubmit}
                className="space-y-6 bg-transparent border border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors"
              >
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm text-[#969696] mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-[#fefeff] focus:outline-none focus:border-white/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-[#969696] mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-[#fefeff] focus:outline-none focus:border-white/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm text-[#969696] mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-[#fefeff] focus:outline-none focus:border-white/20 resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-6 py-3 text-sm text-[#fefeff] font-medium hover:border-white/20 hover:text-[#969696] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <p className="text-sm text-green-400">Message sent successfully! I'll get back to you soon.</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-sm text-red-400">
                    {errorMessage || 'Failed to send message. Please try again or email me directly.'}
                  </p>
                )}
              </motion.form>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap gap-4 justify-center xl:justify-start"
              >
                <a
                  href="https://www.linkedin.com/in/sai-srinivas-alahari-924303252/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-black/40 border border-white/10 rounded-lg text-[#fefeff] hover:border-white/20 hover:text-[#969696] transition-colors flex items-center gap-2"
                >
                  <FaLinkedin size={18} /> LinkedIn
                </a>

                <a
                  href="https://github.com/Sri01729/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-black/40 border border-white/10 rounded-lg text-[#fefeff] hover:border-white/20 hover:text-[#969696] transition-colors flex items-center gap-2"
                >
                  <FaGithub size={18} /> GitHub
                </a>

                <a
                  href="mailto:saialahariedu@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-black/40 border border-white/10 rounded-lg text-[#fefeff] hover:border-white/20 hover:text-[#969696] transition-colors flex items-center gap-2"
                >
                  <Mail size={18} /> Email
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;