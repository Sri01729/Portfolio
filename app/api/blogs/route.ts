import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const blogsDirectory = path.join(process.cwd(), 'content/blogs')

export async function GET() {
  try {
    const fileNames = fs.readdirSync(blogsDirectory)
    const allPostsData = await Promise.all(
      fileNames.map(async (fileName) => {
        // Skip non-MD files
        if (!fileName.endsWith('.md')) return null

        const slug = fileName.replace(/\.md$/, '')
        const fullPath = path.join(blogsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)

        const processedContent = await remark()
          .use(html)
          .process(content)
        const contentHtml = processedContent.toString()

        return {
          slug,
          title: data.title,
          description: data.description,
          date: data.date,
          readTime: data.readTime,
          category: data.category,
          tags: data.tags,
          thumbnail: data.thumbnail,
          content: contentHtml,
        }
      })
    )

    // Filter out null values and sort posts by date
    const sortedPosts = allPostsData
      .filter(post => post !== null)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    return NextResponse.json(sortedPosts)
  } catch (error) {
    console.error('Error loading blog posts:', error)
    return NextResponse.json(
      { error: 'Failed to load blog posts' },
      { status: 500 }
    )
  }
}
