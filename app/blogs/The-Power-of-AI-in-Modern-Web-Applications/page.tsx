'use client';

import { motion } from 'framer-motion';
import { FaArrowLeft, FaCalendarAlt, FaClock, FaTag } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import CodeBlock from '@/app/Components/CodeBlock';

const AIWebAppsBlogPost = () => {
  const codeExample1 = `// Example of a simple AI-powered search component
import { useState } from 'react';
import { searchAPI } from '@/lib/api';

const AISearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const data = await searchAPI.searchWithAI(query);
      setResults(data);
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-lg"
          placeholder="Search with AI..."
        />
        <button
          onClick={handleSearch}
          disabled={loading}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>

      {results.length > 0 && (
        <div className="mt-4">
          {results.map((result) => (
            <div key={result.id} className="p-4 border rounded-lg mb-2">
              <h3 className="font-bold">{result.title}</h3>
              <p className="text-gray-600">{result.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AISearch;`;

  const codeExample2 = `// Example of a sentiment analysis API route
import { NextApiRequest, NextApiResponse } from 'next';
import { analyzeSentiment } from '@/lib/ai';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ message: 'Text is required' });
    }

    const sentiment = await analyzeSentiment(text);

    return res.status(200).json({ sentiment });
  } catch (error) {
    console.error('Sentiment analysis failed:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}`;

  const codeExample3 = `// Example of a recommendation system implementation
import { useState, useEffect } from 'react';
import { getRecommendations } from '@/lib/recommendations';

const RecommendationEngine = ({ userId }) => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const data = await getRecommendations(userId);
        setRecommendations(data);
      } catch (error) {
        console.error('Failed to fetch recommendations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, [userId]);

  if (loading) {
    return <div>Loading recommendations...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {recommendations.map((item) => (
        <div key={item.id} className="border rounded-lg p-4">
          <h3 className="font-bold">{item.title}</h3>
          <p className="text-sm text-gray-600">{item.description}</p>
          <div className="mt-2">
            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
              {item.category}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecommendationEngine;`;

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
              src="/blog-thumbnails/ai-web-apps.jpg"
              alt="AI in Web Applications"
              fill
              className="object-cover"
              priority
            />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            The Power of AI in Modern Web Applications
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-[#969696] mb-8">
            <div className="flex items-center">
              <FaCalendarAlt className="mr-2" />
              <span>April 10, 2025</span>
            </div>
            <div className="flex items-center">
              <FaClock className="mr-2" />
              <span>10 min read</span>
            </div>
            <div className="flex items-center">
              <FaTag className="mr-2" />
              <span>AI</span>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-[#fefeff] mb-6">
              Artificial Intelligence is transforming the way we build and interact with web applications. From personalized user experiences to intelligent automation, AI capabilities are becoming an essential part of modern web development.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">AI-Powered Search</h2>
            <p className="text-[#fefeff] mb-6">
              One of the most common applications of AI in web development is enhanced search functionality. AI-powered search can understand natural language queries, provide context-aware results, and learn from user interactions to improve over time.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">Implementation Example</h3>
            <p className="text-[#fefeff] mb-4">
              Here's a simple example of how to implement an AI-powered search component in a React application:
            </p>

            <CodeBlock code={codeExample1} language="tsx" />

            <h2 className="text-2xl font-bold mt-8 mb-4">Sentiment Analysis</h2>
            <p className="text-[#fefeff] mb-6">
              Sentiment analysis allows your application to understand the emotional tone of user-generated content. This can be used for moderating comments, analyzing customer feedback, or personalizing user experiences based on their emotional state.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">API Implementation</h3>
            <p className="text-[#fefeff] mb-4">
              Here's how you might implement a sentiment analysis API endpoint in Next.js:
            </p>

            <CodeBlock code={codeExample2} language="typescript" />

            <h2 className="text-2xl font-bold mt-8 mb-4">Recommendation Systems</h2>
            <p className="text-[#fefeff] mb-6">
              Recommendation systems use AI to suggest relevant content, products, or services to users based on their preferences and behavior. These systems can significantly improve user engagement and conversion rates.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">Component Example</h3>
            <p className="text-[#fefeff] mb-4">
              Here's an example of a recommendation engine component:
            </p>

            <CodeBlock code={codeExample3} language="tsx" />

            <h2 className="text-2xl font-bold mt-8 mb-4">Best Practices</h2>
            <ul className="list-disc pl-6 mb-6 text-[#fefeff]">
              <li className="mb-2">Always provide fallbacks for when AI services are unavailable or return errors.</li>
              <li className="mb-2">Implement proper loading states to improve user experience during AI processing.</li>
              <li className="mb-2">Consider privacy implications and ensure user data is handled responsibly.</li>
              <li className="mb-2">Use AI to enhance existing functionality rather than replacing it entirely.</li>
              <li className="mb-2">Monitor AI performance and implement feedback loops for continuous improvement.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
            <p className="text-[#fefeff] mb-6">
              AI capabilities are becoming increasingly accessible to web developers, enabling the creation of more intelligent and personalized web applications. By integrating AI features thoughtfully, you can significantly enhance user experiences and add powerful functionality to your web projects.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AIWebAppsBlogPost;