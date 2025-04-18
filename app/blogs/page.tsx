"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaSearch, FaArrowRight, FaArrowLeft } from "react-icons/fa"
import Link from "next/link"


// Sample blog data
const blogPosts = [
  {
    id: "intui-cell-luna",
    title: "A New Dawn for AI: IntuiCell Introduces a Paradigm Shift in Intelligence",
    description: "Discover how IntuiCell is challenging the foundations of current Artificial Intelligence with a novel approach inspired by neuroscience, culminating in Luna, a robot that learns autonomously in real-time.",
    date: "April 02, 2025",
    readTime: "7 min read",
    category: "AI",
    tags: ["AI", "Machine Learning", "Neuroscience", "Robotics", "Autonomous Learning"],
    thumbnail: "/intuicell.png",
  },
  {
  "id": "langchain-rag-ai-optimization",
  "title": "LangChain RAG: Enhancing AI Model Accuracy with Retrieval-Augmented Generation",
  "description": "Explore how LangChain's Retrieval-Augmented Generation (RAG) boosts language model accuracy by integrating real-time external data into the response generation process.",
  "date": "February 26, 2024",
  "readTime": "5 min read",
  "category": "AI ",
  "tags": ["LangChain", "RAG", "LLM", "AI Tools", "Web Development"],
  "thumbnail": "/langchain.png"
}
,
  {
    id: "Building-Responsive-UIs-with-Tailwind-CSS",
    title: "Building Responsive UIs with Tailwind CSS",
    description: "Learn how to create beautiful, responsive user interfaces using Tailwind CSS. This guide covers the fundamentals and advanced techniques for building modern web applications.",
    date: "October 15, 2024",
    readTime: "8 min read",
    category: "Frontend",
    tags: ["Tailwind CSS", "Responsive Design", "Web Development"],
    thumbnail: "/blog-thumbnails/tailwind-css.jpg",
  },
  {
    id: "The-Power-of-AI-in-Modern-Web-Applications",
    title: "The Power of AI in Modern Web Applications",
    description: "Explore how artificial intelligence is transforming web development and user experiences. Discover practical applications and implementation strategies for integrating AI into your projects.",
    date: "September 10, 2025",
    readTime: "10 min read",
    category: "AI",
    tags: ["Artificial Intelligence", "Web Development", "Machine Learning"],
    thumbnail: "/ai-web.png",
  }
]

const categories = [
  "All Categories",
  ...Array.from(new Set(blogPosts.map((post) => post.category))),
]

export default function BlogsPage() {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All Categories")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.description.toLowerCase().includes(search.toLowerCase())
    const matchesCategory =
      category === "All Categories" || post.category === category
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:gap-16 px-4 md:px-0">
        {/* Left column: Heading and description at the top */}
        <div className="w-full md:w-[40%] flex flex-col justify-start items-start pt-12 md:pt-20">
          <Link href="/" className="inline-flex items-center text-[#969696] hover:text-white mb-8">
            <FaArrowLeft className="mr-2" /> Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">Thoughts & Writings</h1>
          <p className="text-xl text-gray-400 mb-2 max-w-lg">
            Insights, tutorials, and reflections on tech, development, and creative problem-solving.
          </p>
        </div>
        {/* Right column: Search, filter, and blog list */}
        <div className="w-full md:w-[60%] max-w-2xl mx-auto py-12 md:py-20 flex flex-col">
          <div className="flex flex-col md:flex-row gap-4 mb-10 items-center justify-end">
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-72 px-4 py-2 rounded-lg bg-[#18181b] border border-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-gray-700"
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full md:w-48 px-4 py-2 rounded-lg bg-[#18181b] border border-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-gray-700"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div>
            {filteredPosts.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
                className="bg-[#0A0A0A] border border-white/10 rounded-lg hover:border-white/20 transition-colors mb-6"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-[#969696] mb-2">
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                    <span>•</span>
                    <span className="bg-black/40 px-2 py-1 rounded-full text-xs border border-white/10">
                      {blog.category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-medium text-[#fefeff] mb-3">{blog.title}</h2>
                  <p className="text-[#969696] mb-4">{blog.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-black/40 border border-white/10 rounded-full text-sm text-[#969696]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/blogs/${blog.id}`}
                    className="inline-flex items-center text-[#fefeff] hover:text-[#969696] transition-colors"
                  >
                    Read More <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}