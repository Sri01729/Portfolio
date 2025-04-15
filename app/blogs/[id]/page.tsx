"use client"
import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { FaArrowLeft, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"
import Link from "next/link"
import StarField from "../../Components/Starfield"

// Sample blog data - same as in blogs/page.tsx
const blogPosts = [
  {
    id: 1,
    title: "Building Responsive UIs with Tailwind CSS",
    description: "Learn how to create beautiful, responsive user interfaces using Tailwind CSS. This guide covers the fundamentals and advanced techniques for building modern web applications.",
    date: "April 15, 2025",
    readTime: "8 min read",
    category: "Frontend",
    tags: ["Tailwind CSS", "Responsive Design", "Web Development"],
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
  }
]

export default function BlogPostPage() {
  const params = useParams()
  const [loading, setLoading] = useState(true)
  const [post, setPost] = useState<any>(null)

  useEffect(() => {
    // Find the blog post based on the id
    const foundPost = blogPosts.find(p => p.id === Number(params.id))
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
          <div
            className="blog-content text-gray-300 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
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