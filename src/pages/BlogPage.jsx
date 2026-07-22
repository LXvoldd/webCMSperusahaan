import PageHeader from '../components/shared/PageHeader'
import BlogGrid from '../components/blog/BlogGrid'
import BlogSidebar from '../components/blog/BlogSidebar'

export default function BlogPage() {
  return (
    <main>
      <PageHeader
        title="Blog & Artikel"
        subtitle="Informasi terbaru seputar teknologi, bisnis, dan inovasi digital"
      />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <BlogGrid />
              
              {/* Pagination */}
              <div className="flex justify-center mt-12 space-x-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">« Prev</button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">2</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">3</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">Next »</button>
              </div>
            </div>
            
            <div>
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}