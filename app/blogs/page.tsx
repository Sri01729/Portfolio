"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaSearch, FaArrowRight, FaArrowLeft } from "react-icons/fa"
import Link from "next/link"
import StarField from "../Components/Starfield"
import { BlogPost, getAllBlogPosts, getAllCategories, getAllTags } from "@/lib/blog"

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([])
  const [allCategories, setAllCategories] = useState<string[]>([])
  const [allTags, setAllTags] = useState<string[]>([])

  useEffect(() => {
    const loadBlogs = async () => {
      const posts = await getAllBlogPosts()
      setFilteredPosts(posts)
      setAllCategories(await getAllCategories())
      setAllTags(await getAllTags())
    }
    loadBlogs()
  }, [])

  // Filter posts based on search query, category, and tags
  useEffect(() => {
    const filterPosts = async () => {
      const posts = await getAllBlogPosts()
      let filtered = posts

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
    }
    filterPosts()
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
      <StarField />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Link
          href="/"
          className="inline-flex items-center text-gray-400 hover:text-[#fefeff] transition-colors mb-8"
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

              {/* Tags Filter */}
              <div className="flex flex-wrap gap-2 mb-8">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      selectedTags.includes(tag)
                        ? "bg-blue-500 text-white"
                        : "bg-black/40 border border-white/10 text-[#969696] hover:border-white/20"
                    }`}
                  >
                    #{tag}
                  </button>
                ))}
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