"use client"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { FaArrowLeft, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"
import Link from "next/link"
import StarField from "../../Components/Starfield"
import FloatingBubble from "../../Components/FloatingBubble"
import { BlogPost, getBlogPost } from "@/lib/blog"
import Prism from 'prismjs'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-markup'

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

  // Apply syntax highlighting after content is loaded
  useEffect(() => {
    if (post) {
      // Small delay to ensure DOM is updated
      setTimeout(() => {
        Prism.highlightAll()
      }, 100)
    }
  }, [post])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#fefeff]"></div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-[#fefeff]">Blog Post Not Found</h1>
          <Link href="/blogs" className="text-[#fefeff] hover:text-[#969696] transition-colors">
            Return to Blogs
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-black text-[#fefeff] px-4 py-24">
      <StarField />
      <div className="max-w-7xl mx-auto relative">
        <div className="absolute inset-0 pointer-events-none">
          <FloatingBubble text={post?.title || "Loading..."} />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* First column - Heading */}
          <div className="md:col-span-1">
            <div className="sticky top-8">
              <Link
                href="/blogs"
                className="text-[#969696] hover:text-[#fefeff] transition-colors inline-flex items-center gap-2 mb-8"
              >
                <FaArrowLeft size={14} />
                back
              </Link>
              <h1 className="text-4xl md:text-7xl font-medium group relative">
                {post.title.toLowerCase()}.
                <span className="absolute left-0 top-full mt-2 w-64 p-2 bg-black/80 text-xs text-[#969696] rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                  A detailed exploration of my thoughts and insights on this topic.
                </span>
              </h1>
            </div>
          </div>

          {/* Second and Third columns - Content */}
          <div className="md:col-span-2 space-y-16 mt-32">
            {/* Meta Information */}
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 text-xs text-[#969696] mb-4">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
                <span>•</span>
                <span className="bg-black/40 px-2 py-1 rounded-full text-xs border border-white/10">
                  {post.category}
                </span>
              </div>
              <p className="text-sm text-[#969696] mb-6">{post.description}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-black/40 border border-white/10 rounded-full text-xs text-[#969696] hover:text-[#fefeff] transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Featured Image */}
            {post.thumbnail && (
              <div className="max-w-2xl">
                <h2 className="text-2xl font-medium mb-4">Featured Image</h2>
                <div className="aspect-video bg-black/40 rounded-lg overflow-hidden border border-white/10">
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}

            {/* Blog Content */}
            <div className="max-w-2xl">
              <h2 className="text-2xl font-medium mb-6 text-[#fefeff]">Content</h2>
              <div
                className="blog-content text-sm text-[#969696] leading-relaxed prose prose-invert max-w-none space-y-6 [&>p]:mb-4 [&>h2]:text-xl [&>h2]:font-medium [&>h2]:mt-8 [&>h2]:mb-4 [&>h2]:text-[#fefeff] [&>h3]:text-lg [&>h3]:font-medium [&>h3]:mt-6 [&>h3]:mb-3 [&>h3]:text-[#fefeff] [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:space-y-2 [&>blockquote]:border-l-2 [&>blockquote]:border-white/10 [&>blockquote]:pl-4 [&>blockquote]:italic [&>pre]:bg-black/40 [&>pre]:p-4 [&>pre]:rounded-lg [&>pre]:overflow-x-auto [&>pre]:border [&>pre]:border-white/10 [&>pre]:my-6 [&>pre>code]:block [&>pre>code]:text-[#fefeff] [&>pre>code]:font-mono [&>pre>code]:text-sm [&>code]:bg-black/40 [&>code]:px-1.5 [&>code]:py-0.5 [&>code]:rounded [&>code]:text-[#fefeff] [&>code]:font-mono [&>code]:text-sm [&>img]:rounded-lg [&>img]:my-6"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* Social Sharing */}
            <div className="max-w-2xl">
              <h2 className="text-2xl font-medium mb-4">Share this article</h2>
              <div className="flex gap-4">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://yourdomain.com/blogs/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#fefeff] hover:text-[#969696] transition-colors"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://yourdomain.com/blogs/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#fefeff] hover:text-[#969696] transition-colors"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href={`https://github.com/yourusername`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#fefeff] hover:text-[#969696] transition-colors"
                >
                  <FaGithub size={24} />
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div className="max-w-2xl">
              <h2 className="text-2xl font-medium mb-4">Navigation</h2>
              <div className="flex justify-between">
                <Link
                  href="/blogs"
                  className="text-[#fefeff] hover:text-[#969696] transition-colors flex items-center gap-1.5 text-sm font-medium bg-black/40 px-3 py-1.5 rounded-lg border border-white/10"
                >
                  ← Back to Blogs
                </Link>
                <Link
                  href="/blogs"
                  className="text-[#fefeff] hover:text-[#969696] transition-colors flex items-center gap-1.5 text-sm font-medium bg-black/40 px-3 py-1.5 rounded-lg border border-white/10"
                >
                  Next Article →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}