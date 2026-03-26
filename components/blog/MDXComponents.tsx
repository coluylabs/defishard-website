import { ReactNode } from 'react'
import Image from 'next/image'

interface Props {
  children?: ReactNode
  className?: string
}

// Custom styled MDX components matching DeFiShard design system
// These must be server components for next-mdx-remote/rsc
export const mdxComponents = {
  h1: ({ children, ...props }: Props) => (
    <h1 className="text-3xl md:text-4xl font-bold text-brand-white mt-12 mb-6 first:mt-0" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: Props) => (
    <h2 className="text-2xl md:text-3xl font-bold text-brand-white mt-10 mb-4 border-l-2 border-brand-lime pl-4" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: Props) => (
    <h3 className="text-xl font-bold text-brand-white mt-8 mb-3" {...props}>
      {children}
    </h3>
  ),
  h4: ({ children, ...props }: Props) => (
    <h4 className="text-lg font-bold text-brand-white mt-6 mb-2" {...props}>
      {children}
    </h4>
  ),
  p: ({ children, ...props }: Props) => (
    <p className="text-brand-slate leading-relaxed mb-4" {...props}>
      {children}
    </p>
  ),
  a: ({ children, ...props }: Props & { href?: string }) => (
    <a className="text-brand-lime hover:underline transition-colors" {...props}>
      {children}
    </a>
  ),
  ul: ({ children, ...props }: Props) => (
    <ul className="list-disc list-inside space-y-2 mb-6 text-brand-slate" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: Props) => (
    <ol className="list-decimal list-inside space-y-2 mb-6 text-brand-slate" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }: Props) => (
    <li className="text-brand-slate" {...props}>
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }: Props) => (
    <blockquote className="border-l-4 border-brand-lime bg-dark-surface p-4 my-6 rounded-r-lg text-brand-slate italic" {...props}>
      {children}
    </blockquote>
  ),
  code: ({ children, className, ...props }: Props) => {
    const isCodeBlock = className && /language-/.test(className)
    if (!isCodeBlock) {
      return (
        <code className="bg-dark-surface border border-dark-border px-1.5 py-0.5 rounded text-brand-lime font-mono text-sm" {...props}>
          {children}
        </code>
      )
    }
    return (
      <code className={className} {...props}>
        {children}
      </code>
    )
  },
  pre: ({ children, ...props }: Props) => (
    <pre className="bg-dark-surface border border-dark-border rounded-lg p-4 overflow-x-auto my-6 font-mono text-sm" {...props}>
      {children}
    </pre>
  ),
  hr: () => <hr className="border-dark-border my-8" />,
  table: ({ children, ...props }: Props) => (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse" {...props}>
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }: Props) => (
    <thead {...props}>{children}</thead>
  ),
  tbody: ({ children, ...props }: Props) => (
    <tbody {...props}>{children}</tbody>
  ),
  tr: ({ children, ...props }: Props) => (
    <tr className="border-b border-dark-border/50" {...props}>{children}</tr>
  ),
  th: ({ children, ...props }: Props) => (
    <th className="text-left py-3 px-4 bg-dark-surface border-b border-dark-border text-brand-white font-mono text-xs uppercase tracking-wider" {...props}>
      {children}
    </th>
  ),
  td: ({ children, ...props }: Props) => (
    <td className="py-3 px-4 border-b border-dark-border/50 text-brand-slate" {...props}>
      {children}
    </td>
  ),
  img: (props: { src?: string; alt?: string }) => (
    <Image
      src={props.src || ''}
      alt={props.alt || ''}
      width={800}
      height={450}
      sizes="(max-width: 768px) 100vw, 768px"
      className="rounded-lg border border-dark-border my-6 max-w-full h-auto"
    />
  ),
  strong: ({ children, ...props }: Props) => (
    <strong className="text-brand-white font-semibold" {...props}>
      {children}
    </strong>
  ),
  em: ({ children, ...props }: Props) => (
    <em className="text-brand-slate italic" {...props}>
      {children}
    </em>
  ),
}
