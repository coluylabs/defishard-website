import { Metadata } from 'next'
import { getAllPosts } from '@/lib/blog'
import BlogCard from '@/components/blog/BlogCard'
import Header from '@/components/Header'
import { BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog | DeFiShard - Technical Articles on MPC Wallet Security',
  description: 'Technical articles, tutorials, and insights about MPC wallet security, distributed key generation, and Web3 security best practices.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-dark-bg text-brand-white">
      <Header />
      
      <div className="container-custom pt-28 pb-20">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-12 border-b border-dark-border pb-8">
            <div className="inline-flex items-center gap-2 bg-brand-lime/10 border border-brand-lime/20 px-4 py-2 rounded-full mb-6">
              <BookOpen className="h-4 w-4 text-brand-lime" />
              <span className="text-sm font-mono font-medium text-brand-lime">
                Technical Articles
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-brand-white mb-4">
              Blog
            </h1>
            <p className="text-xl text-brand-slate max-w-2xl">
              Deep dives into MPC wallet security, distributed key generation, and building secure Web3 applications.
            </p>
          </div>

          {/* Posts Grid */}
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {posts.map((post, index) => (
                <BlogCard key={post.slug} post={post} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-dark-surface border border-dark-border rounded-lg">
              <BookOpen className="w-12 h-12 text-brand-slate mx-auto mb-4" />
              <h2 className="text-xl font-bold text-brand-white mb-2">Coming Soon</h2>
              <p className="text-brand-slate font-mono">
                We&apos;re working on technical articles. Stay tuned!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
