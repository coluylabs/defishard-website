'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { BlogPostMeta } from '@/lib/blog'

interface BlogCardProps {
  post: BlogPostMeta
  index?: number
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Link href={`/blog/${post.slug}`}>
        <div className="group bg-dark-surface border border-dark-border rounded-lg p-6 hover:border-brand-lime/50 transition-all duration-300 h-full flex flex-col">
          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-2 py-1 bg-brand-lime/10 text-brand-lime rounded border border-brand-lime/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h2 className="text-xl font-bold text-brand-white group-hover:text-brand-lime transition-colors mb-3">
            {post.title}
          </h2>

          {/* Description */}
          <p className="text-brand-slate text-sm leading-relaxed mb-4 flex-grow">
            {post.description}
          </p>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-brand-slate border-t border-dark-border pt-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{post.readingTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="w-3 h-3" />
              <span>{post.author}</span>
            </div>
          </div>

          {/* Read more arrow */}
          <div className="mt-4 flex items-center gap-2 text-brand-lime text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity">
            <span>Read article</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
