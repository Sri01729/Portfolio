import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import rehypePrism from 'rehype-prism-plus'

const blogsDirectory = path.join(process.cwd(), 'content/blogs')

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const fullPath = path.join(blogsDirectory, `${params.slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const { data, content } = matter(fileContents)

    const processedContent = await remark()
      .use(html)
      .use(rehypePrism)
      .process(content)
    const contentHtml = processedContent.toString()

    return NextResponse.json({
      slug: params.slug,
      title: data.title,
      description: data.description,
      date: data.date,
      readTime: data.readTime,
      category: data.category,
      tags: data.tags,
      thumbnail: data.thumbnail,
      content: contentHtml,
    })
  } catch (error) {
    console.error('Error loading blog post:', error)
    return NextResponse.json({ error: 'Blog post not found' }, { status: 404 })
  }
}