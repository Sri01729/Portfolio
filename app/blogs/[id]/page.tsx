"use client"
import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { FaArrowLeft, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"
import Link from "next/link"
import StarField from "../../Components/Starfield"
import ReactMarkdown from 'react-markdown'

// Sample blog data
const blogs = [
  {
    id: "intui-cell-luna",
    title: "A New Dawn for AI: IntuiCell Introduces a Paradigm Shift in Intelligence",
    description: "Discover how IntuiCell is challenging the foundations of current Artificial Intelligence with a novel approach inspired by neuroscience, culminating in Luna, a robot that learns autonomously in real-time.",
    date: "2024-05-20",
    readTime: "7 min read",
    category: "Artificial Intelligence",
    tags: ["AI", "Machine Learning", "Neuroscience", "Robotics", "Autonomous Learning"],
    thumbnail: "/intuicell.png",
    content: `
# A New Dawn for AI: IntuiCell Introduces a Paradigm Shift in Intelligence

Have you ever considered why, despite the remarkable progress in fields like image recognition and natural language processing, today's Artificial Intelligence often feels limited in its ability to truly reason and learn in dynamic real-world environments? According to Udia Inel from IntuiCell, the core issue lies within the very methodology underpinning current AI, which he describes as being "shackled to back propagation, limited to pre-trained information, and incapable of that self-driven on-the-fly learning of humans and animals". But what if a fundamentally different approach was not only possible but had already arrived?

## The Fundamental Shift in Learning

IntuiCell claims to have "fixed all this". They argue that while traditional machine learning has yielded "amazing demos from traditional ml in low stake applications," it doesn't represent genuine intelligence. Instead, it relies on "feeding millions of data points into a large statistical model and leaving it without any capacity to reason or learn". This reliance on vast datasets and pre-training leads to failures when these systems encounter the complexities and novelties of the real world, where they "fail on the training data".

IntuiCell isn't pursuing incremental improvements by simply scaling up data or computational power. Instead, they are "taking a fundamentally different approach to anything that's being seen in the current Paradigm". Their perspective is rooted in the observation that since the "early 50s AI technology has been inspired on how the brain works without a proper understanding of how the brain actually works".

## Drawing Inspiration from Neuroscience

This is where IntuiCell's innovation takes center stage. They have leveraged "30 years of contrarian Neuroscience research" which has provided them with "novel and groundbreaking insights on the mechanisms by which the brain interacts with the world and learns from such interactions". These "novel insights" have enabled IntuiCell to "Envision intelligence from ground up," focusing on "how we think of Senses actuators neurons and how the neurons are able to solve their local problems".

This foundational understanding unlocks a "fundamentally new learning Paradigm that will able to learn like we do". IntuiCell describes their creation as "a real digital nervous system that learns in real world real time," something that "has never been done before".

## Luna: Embodiment of a New Learning Paradigm

To tangibly demonstrate this revolutionary technology, IntuiCell introduced Luna, an ordinary-looking off-the-shelf laboratory robot. Luna isn't a carefully curated demo; she serves as a "vehicle for us to intuitively demonstrate our inal capabilities in real world environment". What distinguishes Luna is her capacity for "continuous autonomous learning".

- Unlike conventional AI, Luna is "not pre-trained in simulation".
- She is "not dependent on data sets".
- IntuiCell doesn't "fine-tune or control architectures". Instead, Luna's "indel Network architectures" empower her to learn independently by exploring her surroundings.

This generic network isn't limited to this specific robot; IntuiCell believes it could be implemented on "a drone or a mobile robot or any kind of QP" or even in digital agents.

## Learning to Stand: An Emergent Behavior

The initial demonstration showcased Luna performing movements and learning her own mechanics, culminating in her learning to stand and balance entirely on her own. The leash visible was purely a "safety feature" to prevent physical damage during falls, as Luna lacks the "soft tissue" of animals to cushion impacts. IntuiCell draws a parallel to how "mammals" learn to understand their bodies and develop "emergent features" like walking, emphasizing that Luna was experiencing everything in "real time" and learning from it. Crucially, IntuiCell explicitly stated they "haven't told her how to stand"; they only designed the senses to propagate problems, allowing the robot to solve them autonomously. They also underscored that they did not predefine any "mathematical model" of the robot's configuration or use a "global cost function" to dictate actions.

## Adapting to Novel Terrain: Real-Time Generalization

Further illustrating Luna's learning prowess, IntuiCell introduced a new terrain: ice. In stark contrast to traditional machine learning, where such a change would typically necessitate going offline for extensive retraining, Luna was able to "generalize for novel scenarios" and adapt in real-time. She utilized her prior understanding of balance to navigate the more challenging surface. This demonstrated "intrinsic learning similar to how we learn with real world interactions, continuous learning and adaptation".

## The Dawn of Genuine Intelligence

IntuiCell boldly proclaims that their technology isn't merely the "Next Generation in AI"; it represents the "first generation of genuine intelligence". They believe they have made "intelligence a starting point rather than the end goal," opening the "Gateway of autonomous systems that can learn in real time in the chaos of reality".

## The Journey Ahead: Newborn to Childhood

Looking forward, Luna is currently in her "newborn era," having gained control over her body. The next significant phase is the "child era," where she will learn to take "small steps" – initially shaky but profoundly important for the evolution of her intelligence and this novel technological paradigm. During this "child era," IntuiCell envisions being able to teach Luna new skills through instructions in "real world real time" interactions, mirroring how humans and animals learn.

IntuiCell's unveiling of their technology, embodied by Luna's autonomous learning, offers a compelling glimpse into the future of AI. By grounding their approach in a deeper understanding of neuroscience, they are pioneering a new era of truly autonomous learning systems with the potential to revolutionize countless applications. The initial steps have been taken, and the world watches with anticipation as Luna embarks on her "childhood," promising a future where intelligent systems can learn and adapt with the fluidity and resilience of living beings.
    `
  }
]

export default function BlogPostPage() {
  const params = useParams()
  const [loading, setLoading] = useState(true)
  const [post, setPost] = useState<any>(null)

  useEffect(() => {
    // Find the blog post based on the id
    const foundPost = blogs.find(p => p.id === params.id)
    setPost(foundPost || null)
    setLoading(false)
  }, [params.id])

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
          <div className="blog-content text-gray-300 leading-relaxed space-y-6 prose prose-invert max-w-none">
            <style jsx global>{`
              .blog-content h1 {
                font-size: 2rem;
                font-weight: bold;
                margin-top: 2rem;
                margin-bottom: 1rem;
              }
              .blog-content h2 {
                font-size: 1.5rem;
                font-weight: bold;
                margin-top: 2rem;
                margin-bottom: 1rem;
              }
              .blog-content h3 {
                font-size: 1.25rem;
                font-weight: bold;
                margin-top: 1.5rem;
                margin-bottom: 0.75rem;
              }
              .blog-content p {
                margin-bottom: 1rem;
              }
              .blog-content ul {
                list-style-type: disc;
                padding-left: 1.5rem;
                margin-bottom: 1rem;
              }
              .blog-content ol {
                list-style-type: decimal;
                padding-left: 1.5rem;
                margin-bottom: 1rem;
              }
              .blog-content li {
                margin-bottom: 0.25rem;
              }
              .blog-content blockquote {
                border-left: 4px solid #3b82f6;
                padding-left: 1rem;
                font-style: italic;
                margin: 1rem 0;
              }
              .blog-content code {
                background-color: #1f2937;
                padding: 0.125rem 0.25rem;
                border-radius: 0.25rem;
                font-size: 0.875rem;
              }
              .blog-content pre {
                background-color: #1f2937;
                padding: 1rem;
                border-radius: 0.25rem;
                margin: 1rem 0;
                overflow-x: auto;
              }
              .blog-content img {
                max-width: 100%;
                height: auto;
                border-radius: 0.5rem;
                margin: 1.5rem 0;
              }
              .blog-content a {
                color: #60a5fa;
                text-decoration: underline;
              }
              .blog-content a:hover {
                color: #93c5fd;
              }
            `}</style>
            <ReactMarkdown>
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <h3 className="text-lg font-semibold mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string) => (
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
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://yourdomain.com/blogs/${post.id}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://yourdomain.com/blogs/${post.id}`)}`}
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
        </motion.article>
      </div>
    </div>
  )
}