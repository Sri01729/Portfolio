import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const blogsDirectory = path.join(process.cwd(), 'content/blogs')

export const dynamic = 'force-dynamic'

export async function GET(
  request: Request,
  context: { params: { slug: string } }
): Promise<NextResponse> {
  try {
    const fullPath = path.join(blogsDirectory, `${context.params.slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const { data, content } = matter(fileContents)

    // Process markdown to HTML
    const processedContent = await remark()
      .use(html, { sanitize: false }) // Disable sanitization to allow custom HTML
      .process(content)

    const contentHtml = processedContent.toString()

    // Return the blog post data
    return new NextResponse(JSON.stringify({
      slug: context.params.slug,
      title: data.title,
      description: data.description,
      date: data.date,
      readTime: data.readTime,
      category: data.category,
      tags: data.tags,
      thumbnail: data.thumbnail,
      content: contentHtml,
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error('Error loading blog post:', error)
    return new NextResponse(JSON.stringify({ error: 'Blog post not found' }), {
      status: 404,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}