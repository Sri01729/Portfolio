import { NextRequest } from 'next/server'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import rehypePrism from 'rehype-prism-plus'

const blogsDirectory = path.join(process.cwd(), 'content/blogs')

type Props = {
  params: {
    slug: string
  }
}

export async function GET(
  req: NextRequest,
  context: Props
) {
  try {
    const fullPath = path.join(blogsDirectory, `${context.params.slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const { data, content } = matter(fileContents)

    const processedContent = await remark()
      .use(html)
      .use(rehypePrism)
      .process(content)
    const contentHtml = processedContent.toString()

    return Response.json({
      slug: context.params.slug,
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
    return Response.json({ error: 'Blog post not found' }, { status: 404 })
  }
}