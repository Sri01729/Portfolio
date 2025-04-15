"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaSearch, FaArrowRight, FaArrowLeft } from "react-icons/fa"
import Link from "next/link"

// Sample blog data - replace with your actual blog posts
const blogPosts = [
  {
    id: 1,
    title: "Building Responsive UIs with Tailwind CSS",
    description: "Learn how to create beautiful, responsive user interfaces using Tailwind CSS. This guide covers the fundamentals and advanced techniques for building modern web applications.",
    date: "April 15, 2025",
    readTime: "8 min read",
    category: "Frontend",
    tags: ["Tailwind CSS", "Responsive Design", "Web Development"],
    slug: "building-responsive-uis-with-tailwind-css",
    thumbnail: "/blog-thumbnails/tailwind-css.jpg"
  },
  {
    id: 2,
    title: "The Power of AI in Modern Web Applications",
    description: "Explore how artificial intelligence is transforming web development and user experiences. Discover practical applications and implementation strategies for integrating AI into your projects.",
    date: "April 10, 2025",
    readTime: "10 min read",
    category: "AI",
    tags: ["Artificial Intelligence", "Web Development", "Machine Learning"],
    slug: "power-of-ai-in-modern-web-applications",
    thumbnail: "/blog-thumbnails/ai-web-apps.jpg"
  },
  {
    id: 3,
    title: "Optimizing Performance in Next.js Applications",
    description: "Learn advanced techniques for improving the performance of your Next.js applications. From code splitting to image optimization, discover strategies to make your apps faster and more efficient.",
    date: "April 5, 2025",
    readTime: "12 min read",
    category: "Performance",
    tags: ["Next.js", "Performance", "Web Development"],
    slug: "optimizing-performance-in-nextjs-applications",
    thumbnail: "/blog-thumbnails/nextjs-performance.jpg"
  },
  {
    id: 4,
    title: "Creating Interactive 3D Experiences with Three.js",
    description: "Dive into the world of 3D web graphics with Three.js. Learn how to create immersive, interactive experiences that engage users and elevate your web applications.",
    date: "March 28, 2025",
    readTime: "15 min read",
    category: "3D",
    tags: ["Three.js", "3D Graphics", "WebGL"],
    slug: "creating-interactive-3d-experiences-with-threejs",
    thumbnail: "/blog-thumbnails/threejs-3d.jpg"
  },
  {
    id: 5,
    title: "Building Chrome Extensions: A Complete Guide",
    description: "Master the art of creating Chrome extensions from scratch. This comprehensive guide covers everything from basic setup to advanced features and publishing to the Chrome Web Store.",
    date: "March 20, 2025",
    readTime: "14 min read",
    category: "Extensions",
    tags: ["Chrome Extensions", "JavaScript", "Web Development"],
    slug: "building-chrome-extensions-complete-guide",
    thumbnail: "/blog-thumbnails/chrome-extensions.jpg"
  },
  {
    id: 6,
    title: "The Future of Web Development: WebAssembly and Beyond",
    description: "Explore emerging technologies shaping the future of web development. From WebAssembly to edge computing, discover what's next for the web platform.",
    date: "March 15, 2025",
    readTime: "11 min read",
    category: "Future Tech",
    tags: ["WebAssembly", "Edge Computing", "Future of Web"],
    slug: "future-of-web-development-webassembly-and-beyond",
    thumbnail: "/blog-thumbnails/webassembly-future.jpg"
  }
]

// All unique categories and tags for filtering
const allCategories = [...new Set(blogPosts.map(post => post.category))]
const allTags = [...new Set(blogPosts.flatMap(post => post.tags))]

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [filteredPosts, setFilteredPosts] = useState(blogPosts)

  // Filter posts based on search query, category, and tags
  useEffect(() => {
    let filtered = blogPosts

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(post => post.category === selectedCategory)
    }

    // Filter by tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter(post =>
        selectedTags.some(tag => post.tags.includes(tag))
      )
    }

    setFilteredPosts(filtered)
  }, [searchQuery, selectedCategory, selectedTags])

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Link
          href="/"
          className="inline-flex items-center text-gray-400 hover:text-[#60A5FA] transition-colors mb-8"
        >
          <FaArrowLeft className="mr-2" /> Back to Home
        </Link>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-7xl font-medium text-[#fefeff]">
                Thoughts & Writings
              </h1>
              <p className="text-xl text-[#969696]">
                Insights, tutorials, and reflections on tech, development, and creative problem-solving.
              </p>
            </motion.div>
          </div>

          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Search and Filter Section */}
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-grow">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2 pl-10 text-[#fefeff] focus:outline-none focus:border-white/20"
                  />
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#969696]" />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-[#fefeff] focus:outline-none focus:border-white/20"
                >
                  <option value="All">All Categories</option>
                  {allCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Blog Posts Grid */}
              <div className="grid grid-cols-1 gap-8">
                {filteredPosts.map((blog, index) => (
                  <motion.div
                    key={blog.slug}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
                    className="bg-[#0A0A0A] border border-white/10 rounded-lg hover:border-white/20 transition-colors"
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
                        href={`/blogs/${blog.slug}`}
                        className="inline-flex items-center text-[#fefeff] hover:text-[#969696] transition-colors"
                      >
                        Read More <FaArrowRight className="ml-2" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}