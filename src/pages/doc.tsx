import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; // For GitHub-flavored markdown (if needed)
import Head from 'next/head';

const Docs: React.FC = () => {
  const [mdxContent, setMdxContent] = useState<string>('');

  useEffect(() => {
    const fetchMDXContent = async () => {
      const res = await fetch('/MiniloDesignDocs.mdx'); // Ensure this path is public or served properly
      const text = await res.text();
      setMdxContent(text);
    };
    
    fetchMDXContent();
  }, []);

  const components = {
    h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h1 className="text-3xl font-bold mb-6" {...props} />
    ),
    h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h2 className="text-2xl font-semibold mt-8 mb-4" {...props} />
    ),
    h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h3 className="text-xl font-semibold mt-6 mb-2" {...props} />
    ),
    p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
      <p className="text-gray-700 mb-4" {...props} />
    ),
    code: ({ inline, className, children, ...props }: any) => (
      <code
        className={`bg-gray-100 px-1 rounded text-sm font-mono ${className || ''}`}
        {...props}
      >
        {children}
      </code>
    ),
    pre: ({ className, children, ...props }: any) => (
      <pre
        className={`bg-gray-100 p-4 rounded overflow-x-auto mb-4 ${className || ''}`}
        {...props}
      >
        {children}
      </pre>
    ),
  };

  return (
    <>
     <Head>
        <title>Minilo Design</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#003078" />
        <meta
          name="description"
          content="Minilo Design is a minimalistic and adaptive design system that empowers developers with flexible components for building modern UIs."
        />
        <meta
          name="keywords"
          content="design system, Minilo, UI components, web design, responsive design, modern UI, adaptive UI"
        />
        <meta name="author" content="Minilo Design" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo192.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/favicon/android-chrome-512x512.png"
        />

        <meta property="og:title" content="Minilo Design - A Modern Design System" />
        <meta
          property="og:description"
          content="Minilo Design is a minimalistic and adaptive design system that empowers developers with flexible components for building modern UIs."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://minilo.io" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Minilo Design - A Modern Design System" />
        <meta
          name="twitter:description"
          content="Minilo Design is a minimalistic and adaptive design system that empowers developers with flexible components for building modern UIs."
        />
        <meta name="twitter:image" content="/logo192.png" />

        <link rel="manifest" href="/site.webmanifest" />
      </Head>
    <div className="min-h-screen bg-[#FDFCFF] p-8 text-gray-800">
      <ReactMarkdown
  remarkPlugins={[remarkGfm]}
  components={components}
>
  {mdxContent}
</ReactMarkdown>

    </div>
    </>
  );
};

export default Docs;
