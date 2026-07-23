import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { fetchData } from '../../lib/supabaseClient'
import BlogCard from './BlogCard'
import { FaNewspaper } from 'react-icons/fa'

export default function BlogGrid() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadBlogPosts = async () => {
      setLoading(true)
      const { data, error } = await fetchData('blog_posts', {
        filter: { status: 'published' },
        order: { column: 'published_at', ascending: false }
      })

      if (!error && data) {
        const mappedPosts = data.map(post => {
          let tagsList = []
          try {
            if (Array.isArray(post.tags)) {
              tagsList = post.tags
            } else if (typeof post.tags === 'string') {
              tagsList = JSON.parse(post.tags)
            }
          } catch (e) {
            tagsList = []
          }

          return {
            id: post.id,
            slug: post.slug,
            title: post.title,
            excerpt: post.excerpt,
            category: post.category,
            author: post.author || 'Admin',
            date: post.published_at 
              ? new Date(post.published_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
              : new Date(post.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
            image: post.featured_image,
            tags: tagsList
          }
        })
        setPosts(mappedPosts)
      }
      setLoading(false)
    }

    loadBlogPosts()
  }, [])

  if (loading) {
    return (
      <div className="py-24 text-center">
        <div className="inline-block">
          <div className="relative w-12 h-12 mx-auto">
            <div className="absolute inset-0 border-3 border-[#FF6B00]/20 rounded-full" />
            <div className="absolute inset-0 border-3 border-t-[#FF6B00] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin" />
          </div>
          <p className="text-gray-400 text-sm mt-4">Memuat artikel...</p>
        </div>
      </div>
    )
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-5xl mb-4">📝</div>
        <p className="text-gray-400 text-lg">Belum ada artikel yang diterbitkan.</p>
      </div>
    )
  }

  return (
    <section className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}