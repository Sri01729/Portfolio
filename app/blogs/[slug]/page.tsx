"use client"
import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { FaSearch, FaArrowRight, FaArrowLeft, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"
import Link from "next/link"
import StarField from "../../Components/Starfield"

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
    thumbnail: "/blog-thumbnails/tailwind-css.jpg",
    content: `
# Building Responsive UIs with Tailwind CSS

Tailwind CSS has revolutionized the way we build user interfaces. In this comprehensive guide, I'll walk you through the fundamentals and advanced techniques for creating beautiful, responsive designs with Tailwind CSS.

## Why Tailwind CSS?

Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without leaving your HTML. Unlike traditional CSS frameworks, Tailwind doesn't come with pre-designed components. Instead, it provides low-level utility classes that you can use to build your own components.

The benefits of using Tailwind CSS include:

- **Rapid development**: Write styles directly in your HTML
- **Consistent design**: Built-in design system with predefined values
- **Responsive design**: Easy-to-use responsive utilities
- **Customization**: Highly customizable to match your brand
- **Small bundle size**: Only includes the CSS you use

## Getting Started

To get started with Tailwind CSS, you need to install it in your project:

\`\`\`bash
npm install -D tailwindcss
npx tailwindcss init
\`\`\`

Then, configure your template paths in the \`tailwind.config.js\` file:

\`\`\`js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
\`\`\`

## Responsive Design with Tailwind

One of the most powerful features of Tailwind CSS is its responsive design utilities. Tailwind uses a mobile-first approach, which means you design for mobile first and then add breakpoints for larger screens.

Here's an example of a responsive card component:

\`\`\`html
<div class="bg-white rounded-lg shadow-md p-4 md:p-6 lg:p-8">
  <h2 class="text-xl md:text-2xl lg:text-3xl font-bold mb-2">Card Title</h2>
  <p class="text-gray-600 mb-4">This is a responsive card that looks good on all screen sizes.</p>
  <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Click Me</button>
</div>
\`\`\`

In this example:
- The padding increases as the screen size gets larger
- The font size of the title increases on larger screens
- The button has hover effects

## Advanced Techniques

### Custom Components

While Tailwind is utility-first, you can still create reusable components. Here's how to create a button component:

\`\`\`html
<button class="inline-flex items-center px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
  Button Text
</button>
\`\`\`

### Dark Mode

Tailwind CSS has built-in support for dark mode. You can enable it in your configuration:

\`\`\`js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // or 'media' for system preference
  // ...
}
\`\`\`

Then use the \`dark:\` prefix for dark mode styles:

\`\`\`html
<div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
  This div has different styles in light and dark mode.
</div>
\`\`\`

## Conclusion

Tailwind CSS is a powerful tool for building responsive user interfaces. Its utility-first approach allows for rapid development and consistent design. With the techniques covered in this guide, you should be able to create beautiful, responsive designs with Tailwind CSS.

Remember to check out the [Tailwind CSS documentation](https://tailwindcss.com/docs) for more information and examples.
    `
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
    thumbnail: "/blog-thumbnails/ai-web-apps.jpg",
    content: `
# The Power of AI in Modern Web Applications

Artificial Intelligence is revolutionizing web development and user experiences. In this article, I'll explore how AI is transforming the web and provide practical strategies for integrating AI into your projects.

## The AI Revolution in Web Development

AI is no longer just a buzzword or a futuristic concept. It's here, and it's changing how we build and interact with web applications. From personalized user experiences to intelligent automation, AI is making web applications smarter, more efficient, and more engaging.

## Key Applications of AI in Web Development

### 1. Personalized User Experiences

AI can analyze user behavior and preferences to deliver personalized content and recommendations. This creates a more engaging and relevant experience for each user.

### 2. Intelligent Search and Discovery

AI-powered search engines can understand natural language queries and provide more accurate and relevant results. This improves the user experience and helps users find what they're looking for faster.

### 3. Content Generation and Optimization

AI can generate and optimize content, from product descriptions to blog posts. This saves time and ensures consistency across your web application.

### 4. Chatbots and Virtual Assistants

AI-powered chatbots and virtual assistants can provide instant support and guidance to users, improving customer service and user satisfaction.

## Implementation Strategies

### Using Pre-built AI Services

The easiest way to integrate AI into your web application is to use pre-built AI services. These services provide APIs that you can call from your application.

Popular AI services include:

- **OpenAI**: For natural language processing and generation
- **Google Cloud AI**: For machine learning and computer vision
- **AWS AI**: For a wide range of AI capabilities
- **Azure AI**: For cognitive services and machine learning

### Building Custom AI Models

For more specialized needs, you might want to build custom AI models. This requires more expertise and resources, but gives you more control and customization.

## Best Practices for AI Integration

1. **Start Small**: Begin with simple AI features and gradually add more complex ones.
2. **Focus on User Value**: Ensure that AI features provide real value to users.
3. **Maintain Transparency**: Be clear about how AI is being used in your application.
4. **Ensure Privacy**: Protect user data and comply with privacy regulations.
5. **Test Thoroughly**: AI systems can behave unexpectedly, so thorough testing is essential.

## Conclusion

AI is transforming web development and user experiences. By integrating AI into your web applications, you can create more engaging, efficient, and intelligent experiences for your users.

Remember to start small, focus on user value, and ensure privacy and transparency in your AI implementations.
    `
  },
  // Add more blog posts as needed
]

export default function BlogPost() {
  const params = useParams()
  const [loading, setLoading] = useState(true)
  const [post, setPost] = useState<any>(null)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    // Find the blog post based on the slug
    const foundPost = blogPosts.find(p => p.slug === params.slug)
    setPost(foundPost || null)
    setLoading(false)
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

  // Function to convert markdown to HTML (simplified version)
  const renderMarkdown = (markdown: string) => {
    // This is a very simplified version - in a real app, you'd use a proper markdown library
    return markdown
      .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mb-6">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mt-8 mb-4">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold mt-6 mb-3">$1</h3>')
      .replace(/^#### (.*$)/gm, '<h4 class="text-lg font-bold mt-4 mb-2">$1</h4>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code class="bg-gray-800 px-1 py-0.5 rounded">$1</code>')
      .replace(/```([\s\S]*?)```/g, '<pre class="bg-gray-800 p-4 rounded-lg overflow-x-auto my-4"><code>$1</code></pre>')
      .replace(/\n\n/g, '<br><br>')
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
              </div>
            </motion.div>
          </div>
        </div>

        {/* Blog Content */}
        <div
          className="blog-content text-gray-300 leading-relaxed mt-8"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
        />

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
      </div>
    </div>
  )
}