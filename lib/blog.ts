import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const blogsDirectory = path.join(process.cwd(), 'content/blogs')

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  readTime: string
  category: string
  tags: string[]
  thumbnail: string
  content: string
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const response = await fetch('/api/blogs')
  if (!response.ok) {
    throw new Error('Failed to fetch blog posts')
  }
  return response.json()
}

export async function getBlogPost(slug: string): Promise<BlogPost> {
  const response = await fetch(`/api/blogs/${slug}`)
  if (!response.ok) {
    throw new Error('Blog post not found')
  }
  return response.json()
}

export async function getAllCategories(): Promise<string[]> {
  const posts = await getAllBlogPosts()
  const categories = new Set<string>()
  posts.forEach(post => {
    categories.add(post.category)
  })
  return Array.from(categories)
}

export async function getAllTags(): Promise<string[]> {
  const posts = await getAllBlogPosts()
  const tags = new Set<string>()
  posts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag))
  })
  return Array.from(tags)
}