'use client';

import { motion } from 'framer-motion';
import { FaArrowLeft, FaCalendarAlt, FaClock, FaTag } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import CodeBlock from '@/app/Components/CodeBlock';

const TailwindBlogPost = () => {
  const codeExample1 = `<div className="flex flex-col md:flex-row items-center justify-between p-6 bg-white rounded-lg shadow-md">
  <div className="mb-4 md:mb-0">
    <h2 className="text-xl font-bold text-gray-800">Card Title</h2>
    <p className="text-gray-600">This is a responsive card that changes layout on different screen sizes.</p>
  </div>
  <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
    Click Me
  </button>
</div>`;

  const codeExample2 = `// Responsive container
<div className="container mx-auto px-4 sm:px-6 lg:px-8">
  {/* Content */}
</div>

// Responsive grid
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Grid items */}
</div>

// Responsive text
<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
  Responsive Heading
</h1>`;

  const codeExample3 = `// Custom breakpoint in tailwind.config.js
module.exports = {
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px', // Custom breakpoint
    },
  },
}`;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link
          href="/blogs"
          className="inline-flex items-center text-sm text-[#969696] hover:text-white transition-colors mb-8"
        >
          <FaArrowLeft className="mr-2" /> Back to Blogs
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-full h-64 md:h-80 mb-8 rounded-lg overflow-hidden">
            <Image
              src="/blog-thumbnails/tailwind-css.jpg"
              alt="Tailwind CSS"
              fill
              className="object-cover"
              priority
            />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Building Responsive UIs with Tailwind CSS
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-[#969696] mb-8">
            <div className="flex items-center">
              <FaCalendarAlt className="mr-2" />
              <span>April 15, 2025</span>
            </div>
            <div className="flex items-center">
              <FaClock className="mr-2" />
              <span>8 min read</span>
            </div>
            <div className="flex items-center">
              <FaTag className="mr-2" />
              <span>Frontend</span>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-[#fefeff] mb-6">
              Tailwind CSS has revolutionized the way we build user interfaces. Its utility-first approach allows developers to create responsive designs quickly and efficiently. In this guide, we'll explore how to leverage Tailwind CSS to build beautiful, responsive UIs.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">The Power of Utility Classes</h2>
            <p className="text-[#fefeff] mb-6">
              Tailwind CSS provides a comprehensive set of utility classes that cover everything from layout and spacing to typography and colors. This approach eliminates the need to write custom CSS for most UI components.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">Responsive Design Example</h3>
            <p className="text-[#fefeff] mb-4">
              Here's a simple example of a responsive card component using Tailwind CSS:
            </p>

            <CodeBlock code={codeExample1} language="jsx" />

            <p className="text-[#fefeff] mt-6 mb-4">
              This card component automatically adjusts its layout based on screen size. On mobile devices, the content stacks vertically, while on larger screens, it displays in a horizontal layout.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">Common Responsive Patterns</h3>
            <p className="text-[#fefeff] mb-4">
              Here are some common responsive patterns you'll use in your projects:
            </p>

            <CodeBlock code={codeExample2} language="jsx" />

            <h3 className="text-xl font-bold mt-6 mb-3">Custom Breakpoints</h3>
            <p className="text-[#fefeff] mb-4">
              You can customize breakpoints in your Tailwind configuration to match your design requirements:
            </p>

            <CodeBlock code={codeExample3} language="javascript" />

            <h2 className="text-2xl font-bold mt-8 mb-4">Best Practices</h2>
            <ul className="list-disc pl-6 mb-6 text-[#fefeff]">
              <li className="mb-2">Start with mobile-first design and use responsive modifiers to enhance the layout for larger screens.</li>
              <li className="mb-2">Use container classes to create consistent layouts across different screen sizes.</li>
              <li className="mb-2">Leverage Flexbox and Grid utilities for complex layouts.</li>
              <li className="mb-2">Extract common patterns into reusable components to maintain consistency.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
            <p className="text-[#fefeff] mb-6">
              Tailwind CSS provides a powerful and flexible approach to building responsive UIs. By leveraging its utility classes and responsive modifiers, you can create beautiful, maintainable interfaces that work seamlessly across all device sizes.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TailwindBlogPost;