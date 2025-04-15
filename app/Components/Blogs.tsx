'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { useState, useRef, ReactNode } from 'react';

interface TiltCardProps {
  children: ReactNode;
  index: number;
}

const TiltCard = ({ children, index }: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transform: "perspective(1000px)",
      }}
      className="relative"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-0  rounded-lg blur-xl"
      />
      <div
        style={{
          transform: "translateZ(50px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-0 rounded-lg"
      />
      <motion.div
        style={{
          transform: "translateZ(25px)",
          transformStyle: "preserve-3d",
        }}
        className="relative bg-transparent border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

const Blogs = () => {
  const featuredBlogs = [
    {
      title: "Building Scalable Web Applications",
      description: "Learn about the best practices and architecture patterns for building scalable web applications.",
      date: "2024-03-15",
      readTime: "5 min read",
      category: "Development",
      tags: ["Web Development", "Architecture", "Scalability"],
      slug: "building-scalable-web-applications",
      thumbnail: "/blog1.jpg"
    },
    {
      title: "The Future of AI in Web Development",
      description: "Exploring how artificial intelligence is transforming the way we build and interact with web applications.",
      date: "2024-03-10",
      readTime: "4 min read",
      category: "AI",
      tags: ["Artificial Intelligence", "Web Development", "Future Tech"],
      slug: "future-of-ai-web-development",
      thumbnail: "/blog2.jpg"
    }
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl md:text-5xl font-medium mb-8 max-w-2xl group relative">
                Thoughts & Writings.
                <span className="absolute left-0 top-full mt-2 w-64 p-2 bg-black/80 text-xs text-[#969696] rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                  A collection of insights, tutorials, and reflections on software development and technology. Here, I share my experiences, lessons learned, and thoughts on the ever-evolving tech landscape.
                </span>
              </h2>
            </motion.div>
          </div>

          <div className="md:col-span-2">
            <div className="grid grid-cols-1 gap-8 mt-0 md:mt-48 md:pt-4">
              {featuredBlogs.map((blog, index) => (
                <TiltCard key={blog.slug} index={index}>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-[#969696] mb-2">
                      <span>{blog.date}</span>
                      <span>•</span>
                      <span>{blog.readTime}</span>
                      <span>•</span>
                      <span className="bg-black/40 px-2 py-1 rounded-full text-xs border border-white/10">
                        {blog.category}
                      </span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-medium text-[#fefeff] mb-3">{blog.title}</h2>
                    <p className="text-sm text-[#969696] mb-4">{blog.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {blog.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-black/40 border border-white/10 rounded-full text-xs text-[#969696]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/blogs/${blog.slug}`}
                      className="inline-flex items-center text-sm text-[#fefeff] hover:text-[#969696] transition-colors"
                    >
                      Read More <FaArrowRight className="ml-2 text-xs" />
                    </Link>
                  </div>
                </TiltCard>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center mt-8"
            >
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 px-6 py-3 bg-black/40 border border-white/10 rounded-lg text-sm text-[#fefeff] font-medium hover:border-white/20 hover:text-[#969696] transition-colors"
              >
                View All Posts
                <FaArrowRight className="text-xs" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Blogs;