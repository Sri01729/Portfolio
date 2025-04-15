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
    date: "2024-05-20",
    readTime: "7 min read",
    category: "Artificial Intelligence",
    tags: ["AI", "Machine Learning", "Neuroscience", "Robotics", "Autonomous Learning"],
    thumbnail: "/blog-thumbnails/intui-cell-luna.jpg",
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
  },
  {
    id: "Building-Responsive-UIs-with-Tailwind-CSS",
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
    id: "The-Power-of-AI-in-Modern-Web-Applications",
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