import { motion } from 'framer-motion'
import { FaNewspaper, FaRss } from 'react-icons/fa'
import PageHeader from '../components/shared/PageHeader'
import BlogGrid from '../components/blog/BlogGrid'
import BlogSidebar from '../components/blog/BlogSidebar'

export default function BlogPage() {
  return (
    <main className="bg-[#F8F9FA] min-h-screen">
      <PageHeader
        title="Blog & Artikel"
        subtitle="Informasi terbaru seputar teknologi, bisnis, dan inovasi digital"
      />

      {/* Content Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <BlogGrid />
              
              {/* Pagination - Desain Minimalis */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex justify-center items-center gap-2 mt-12"
              >
                <button className="px-4 py-2 rounded-xl border border-[#E8EAED] text-sm text-gray-500 hover:bg-[#FF6B00]/5 hover:border-[#FF6B00]/30 hover:text-[#FF6B00] transition-all">
                  Sebelumnya
                </button>
                <button className="px-4 py-2 rounded-xl bg-[#FF6B00] text-white text-sm font-semibold shadow-lg shadow-[#FF6B00]/25">
                  1
                </button>
                <button className="px-4 py-2 rounded-xl border border-[#E8EAED] text-sm text-gray-500 hover:bg-[#FF6B00]/5 hover:border-[#FF6B00]/30 hover:text-[#FF6B00] transition-all">
                  2
                </button>
                <button className="px-4 py-2 rounded-xl border border-[#E8EAED] text-sm text-gray-500 hover:bg-[#FF6B00]/5 hover:border-[#FF6B00]/30 hover:text-[#FF6B00] transition-all">
                  3
                </button>
                <button className="px-4 py-2 rounded-xl border border-[#E8EAED] text-sm text-gray-500 hover:bg-[#FF6B00]/5 hover:border-[#FF6B00]/30 hover:text-[#FF6B00] transition-all">
                  Selanjutnya
                </button>
              </motion.div>
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