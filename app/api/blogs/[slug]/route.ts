import { NextRequest } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import rehypePrism from 'rehype-prism-plus'

const blogsDirectory = path.join(process.cwd(), 'content/blogs')

interface RouteSegmentProps {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function GET(
  request: NextRequest,
  { params }: RouteSegmentProps
) {
  try {
    const filePath = path.join(process.cwd(), 'content/blogs', `${params.slug}.mdx`)
    const content = await fs.readFile(filePath, 'utf8')
    return Response.json({ content })
  } catch (error) {
    console.error('Error reading blog post:', error)
    return Response.json({ error: 'Blog post not found' }, { status: 404 })
  }
}