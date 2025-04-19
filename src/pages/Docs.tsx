import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; // For GitHub-flavored markdown (if needed)

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
    <div className="min-h-screen bg-[#FDFCFF] p-8 text-gray-800">
      <ReactMarkdown
  remarkPlugins={[remarkGfm]}
  components={components}
>
  {mdxContent}
</ReactMarkdown>

    </div>
  );
};

export default Docs;
