import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import SeoHead from '@/components/site/SeoHead';
import { docsQuickLinks } from '@/data/site-content';

const DOC_DESCRIPTION =
  'Documentation for the Minilo Design System including foundations, tokens, principles, and component guidelines.';

export default function Docs() {
  const [mdxContent, setMdxContent] = useState('');

  useEffect(() => {
    const fetchMDXContent = async () => {
      const res = await fetch('/MiniloDesignDocs.mdx');
      const text = await res.text();
      setMdxContent(text);
    };

    fetchMDXContent();
  }, []);

  const markdownComponents = {
    h1: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h1 className="text-3xl font-bold mb-4" {...props}>
        {children}
      </h1>
    ),
    h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h2 className="text-2xl font-bold mt-10 mb-3" {...props}>
        {children}
      </h2>
    ),
    h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h3 className="text-xl font-semibold mt-8 mb-2" {...props}>
        {children}
      </h3>
    ),
    p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
      <p className="mb-4 leading-relaxed" {...props}>
        {children}
      </p>
    ),
    ul: ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
      <ul className="list-disc pl-5 mb-4" {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
      <ol className="list-decimal pl-5 mb-4" {...props}>
        {children}
      </ol>
    ),
    code: ({ className, children, ...props }: any) => (
      <code className={`font-mono text-sm ${className || ''}`} {...props}>
        {children}
      </code>
    ),
    pre: ({ className, children, ...props }: any) => (
      <pre className={className || ''} {...props}>
        {children}
      </pre>
    ),
  };

  return (
    <>
      <SeoHead title="Docs" description={DOC_DESCRIPTION} path="/doc" />

      <section className="page-intro">
        <div className="minilo-kicker">Documentation</div>
        <h1 className="page-title">Implementation guide for the full Minilo system</h1>
        <p className="page-copy">
          This page preserves your original documentation content while presenting it with improved readability,
          hierarchy, and quick navigation.
        </p>
      </section>

      <section className="docs-layout page-section">
        <aside className="docs-aside" aria-label="Quick links">
          <h2 className="docs-aside-title">Quick links</h2>
          {docsQuickLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </aside>

        <article className="docs-content" id="vision">
          {mdxContent ? (
            <>
              <div id="docs-body">
                <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                  {mdxContent}
                </ReactMarkdown>
              </div>

              <div id="docs-use" style={{ marginTop: '24px' }}>
                <h2>How to use this documentation</h2>
                <p>
                  Start with purpose and principles, move through tokens, then map each UI element to an
                  existing Storybook component before building product screens.
                </p>
              </div>

              <div id="docs-links" style={{ marginTop: '24px' }}>
                <h2>Project links</h2>
                <ul>
                  <li>
                    <a href="https://minilo.io" target="_blank" rel="noopener noreferrer">
                      Website
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/minilo-design/minilo-design-system"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source code
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://storybook.minilo.io/?path=/docs/documentation--docs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Storybook
                    </a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <p className="docs-loading">Loading documentation content...</p>
          )}
        </article>
      </section>
    </>
  );
}
