"use client"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { FaArrowLeft, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"
import Link from "next/link"
import StarField from "../../Components/Starfield"
import { BlogPost, getBlogPost } from "@/lib/blog"

export default function BlogPostPage() {
  const params = useParams()
  const [loading, setLoading] = useState(true)
  const [post, setPost] = useState<BlogPost | null>(null)

  useEffect(() => {
    const loadPost = async () => {
      try {
        const foundPost = await getBlogPost(params.slug as string)
        setPost(foundPost)
      } catch (error) {
        console.error('Error loading blog post:', error)
      } finally {
        setLoading(false)
      }
    }
    loadPost()
  }, [params.slug])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <Link href="/blogs" className="text-blue-500 hover:text-blue-400">
            Return to Blogs
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <StarField />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link
          href="/blogs"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8"
        >
          <FaArrowLeft className="mr-2" /> Back to Blogs
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose prose-invert max-w-none"
        >
          {/* Blog Header */}
          <header className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm bg-blue-900/50 text-blue-300 px-2 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-sm text-gray-400">
                {post.date} · {post.readTime}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
            <p className="text-xl text-gray-300 mb-8">{post.description}</p>

            {/* Featured Image */}
            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden mb-8">
              {post.thumbnail ? (
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-600">
                  <span className="text-4xl">🖼️</span>
                </div>
              )}
            </div>
          </header>

          {/* Blog Content */}
          <div
            className="blog-content text-gray-300 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <h3 className="text-lg font-semibold mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Social Sharing */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <h3 className="text-lg font-semibold mb-4">Share this article</h3>
            <div className="flex gap-4">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://yourdomain.com/blogs/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://yourdomain.com/blogs/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href={`https://github.com/yourusername`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex justify-between">
              <Link
                href="/blogs"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                ← Back to Blogs
              </Link>
              <Link
                href="/blogs"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Next Article →
              </Link>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  )
}