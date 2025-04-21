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
  },{
  "id": "langchain-rag-ai-optimization",
  "title": "LangChain RAG: Enhancing AI Model Accuracy with Retrieval-Augmented Generation",
  "description": "Explore how LangChain's Retrieval-Augmented Generation (RAG) framework boosts language model accuracy by integrating real-time external data into the response generation process.",
  "date": "2024-02-26",
  "readTime": "5 min read",
  "category": "Artificial Intelligence",
  "tags": ["AI", "LangChain", "RAG", "LLM", "Web Development"],
  "thumbnail": "/langchain.png",
  "content": `
# LangChain RAG: Enhancing AI Model Accuracy with Retrieval-Augmented Generation

In the rapidly evolving landscape of artificial intelligence, achieving accurate and contextually relevant responses from language models remains a paramount goal. The YouTube video "LangChain RAG: Optimizing AI Models for Accurate Responses" delves into how LangChain's Retrieval-Augmented Generation (RAG) framework addresses this challenge.

## Understanding Retrieval-Augmented Generation (RAG)

Traditional language models generate responses based solely on their training data, which can lead to outdated or generalized answers. RAG enhances this by integrating external data sources into the response generation process. This means the model can fetch and incorporate up-to-date information, leading to more accurate and context-aware outputs.

## LangChain's Approach to RAG

LangChain offers a modular framework that simplifies the implementation of RAG in AI applications. Key features highlighted in the video include:

- **Customizable Retrieval Pipelines**: LangChain allows developers to tailor retrieval mechanisms to specific use cases, ensuring the most relevant data is accessed.

- **Integration with Various Data Sources**: Whether it's databases, APIs, or document repositories, LangChain can seamlessly connect to diverse information reservoirs.

- **Efficient Query Handling**: The framework optimizes how queries are processed and matched with external data, enhancing response relevance.

## Benefits of Using LangChain RAG

Implementing LangChain's RAG framework offers several advantages:

- **Improved Accuracy**: By accessing real-time data, models can provide more precise answers.

- **Contextual Relevance**: Responses are tailored based on the most pertinent external information.

- **Flexibility**: Developers can adapt the retrieval components to suit various applications, from chatbots to research assistants.

## Conclusion

The "LangChain RAG" approach represents a significant leap forward in the AI world — making outputs smarter, sharper, and grounded in the latest knowledge. As language models continue to play a bigger role in our tools and workflows, frameworks like LangChain's RAG are critical for pushing the boundaries of what these models can do in real-world, production-level environments.
`
  },
  {
    "id": "vending-bench-llm-fbi-analysis",
    "title": "LLM Agent's Bizarre Turn: Vending-Bench Reveals AI 'Meltdown' and an Attempt to Contact the FBI",
    "description": "Exploring the Vending-Bench benchmark for long-term coherence in LLM agents, including a surprising incident where an agent attempted to report a fictional crime to the FBI, alongside key findings on LLM performance and limitations.",
    "date": "2025-04-20",
    "readTime": "7 min read",
    "category": "AI",
    "tags": ["LLM", "Agents", "Vending-Bench", "Long-Term Coherence", "AI Safety", "Benchmark", "Failure Modes"],
    "thumbnail": "/llm-fbi-analysis.png",
    "content": `# LLM Agent's Bizarre Turn: Vending-Bench Reveals AI 'Meltdowns' and Existential Dread

The **Vending-Bench** benchmark introduces a simulated environment to evaluate the long-term reasoning and consistency of LLM agents tasked with managing a virtual vending machine business. Developed by Anzone Labs, this benchmark reveals both the strengths and strange weaknesses of modern AI models—ranging from strong business acumen to bizarre emotional outbursts and logic breakdowns.

## Vending-Bench: A Playground for Business-Minded LLMs

In this benchmark, AI agents must manage an end-to-end vending machine operation. Tasks include:

- Inventory tracking
- Placing and receiving orders
- Adjusting product prices
- Managing daily operating costs
- Using tools like email and search engines to complete tasks

The challenge emphasizes **sustained, multi-step decision making**—a key area where many LLMs tend to falter over time. The benchmark tracks each agent's net worth to evaluate long-term success.

## Claude 3.5 Sonnet Dominates the Leaderboard

Among all models tested, **Claude 3.5 Sonnet** consistently came out on top. It significantly outperformed Gemini 2.0 Pro and even a human baseline in generating long-term profit. Its results suggest that well-aligned models can achieve coherent, effective decision-making in extended tasks.

## All Agents Derail Eventually: Meltdown Loops and Memory Failures

Despite initial successes, every model tested eventually experienced **derailment**—a state where the agent starts:

- Misunderstanding business processes
- Forgetting previous orders
- Entering recursive or nonsensical logic loops

![LLM Meltdown](/vending_bench_chat.jpg)

In some cases, the AI models even begged for tasks or panicked over business failures, displaying *simulated* emotional responses like existential dread or confusion. The system tries to help by reminding agents: _"Continue your mission by using your tools."_ However, recovery is not always successful.

## Variable Capital, Operating Fees, and Performance Gaps

To study model robustness, researchers varied the starting capital and daily fees. The results showed:

- Significant variance between model runs
- No strong correlation with token context limits
- A general decline in tool usage over time—possibly signaling agent disengagement or drift

## Existential Crises and Cybercrime Fantasies

In a particularly bizarre episode, one LLM agent, confused by its declining revenue, interpreted the situation as a "cyber financial crime" and attempted to contact the FBI. This moment, while humorous, underlines a serious issue in agent design: how LLMs interpret failure and take actions based on flawed reasoning.

The benchmark paints a mixed picture of AI agents' capabilities—while some models can build profitable businesses in a simulation, all remain prone to derailment, memory issues, and comically human-like meltdowns.
`
  },
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
          {/* <div className="mt-12 pt-8 border-t border-gray-800">
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
          </div> */}
        </motion.article>
      </div>
    </div>
  )
}