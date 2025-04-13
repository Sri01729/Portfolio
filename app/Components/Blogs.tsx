'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

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
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h2 className="text-4xl md:text-7xl font-medium mb-8 max-w-2xl">
              Thoughts & Writings.
            </h2>

          </motion.div>
        </div>

        <div className="md:col-span-2">
          <div className="grid grid-cols-1 gap-8 mt-0 md:mt-48 md:pt-4">
            {featuredBlogs.map((blog, index) => (
              <motion.div
                key={blog.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800/70 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{blog.title}</h3>
                  <p className="text-sm text-[#969696]">{blog.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mt-8"
          >
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#60A5FA] rounded-lg text-white font-medium hover:bg-[#3B82F6] transition-colors"
            >
              View All Posts
              <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;