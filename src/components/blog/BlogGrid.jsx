import { useEffect, useState } from 'react'
import { fetchData } from '../../lib/supabaseClient'
import BlogCard from './BlogCard'

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
        // Map database fields to the fields expected by BlogCard
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
    return <div className="text-center py-12 text-slate-500 col-span-full">Memuat blog...</div>
  }

  if (posts.length === 0) {
    return <div className="text-center py-12 text-slate-500 col-span-full">Belum ada artikel yang diterbitkan.</div>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  )
}