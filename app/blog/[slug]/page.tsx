import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPostBySlug, getAllSlugs } from '@/lib/blog'
import { mdxComponents } from '@/components/blog/MDXComponents'
import Mermaid from '@/components/blog/Mermaid'
import Callout from '@/components/blog/Callout'
import Header from '@/components/Header'
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

export const dynamicParams = false

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  
  if (!post) {
    return { title: 'Post Not Found' }
  }

  return {
    title: `${post.title} | DeFiShard Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="min-h-screen bg-dark-bg text-brand-white">
      <Header />
      
      <article className="container-custom pt-28 pb-20">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-brand-slate hover:text-brand-lime transition-colors mb-8 font-mono text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-12 border-b border-dark-border pb-8">
            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-3 py-1 bg-brand-lime/10 text-brand-lime rounded-full border border-brand-lime/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-white mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-brand-slate mb-6">
              {post.description}
            </p>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm font-mono text-brand-slate">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-brand-lime" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-brand-lime" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-lime" />
                <span>{post.readingTime}</span>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            <MDXRemote
              source={post.content}
              components={{ ...mdxComponents, Mermaid, Callout }}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [
                    rehypeSlug,
                    [
                      rehypePrettyCode,
                      {
                        theme: 'github-dark',
                        keepBackground: false,
                      },
                    ],
                  ],
                },
              }}
            />
          </div>

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-dark-border">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-brand-slate font-mono text-sm mb-2">
                  Written by
                </p>
                <p className="text-brand-white font-bold">{post.author}</p>
              </div>
              <Link 
                href="/blog" 
                className="btn-secondary text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                More Articles
              </Link>
            </div>
          </footer>
        </div>
      </article>
    </div>
  )
}
