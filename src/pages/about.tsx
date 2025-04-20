import React from "react";
import Head from "next/head";

const About = () => {
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
    
  
    <div className="bg-[#FDFCFF] p-8 rounded-lg max-w-4xl mx-auto">
      
      {/* Title section */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        About the Minilo Design
      </h1>

      {/* Content section */}
      <p className="text-sm text-gray-700 leading-relaxed">
        Minilo is a minimalistic, open-source design system that provides
        flexible components and tools for building user interfaces across
        different platforms. The system focuses on simplicity, consistency, and
        scalability, enabling teams to create seamless and cohesive user
        experiences.
      </p>

      <p className="text-sm text-gray-700 mt-4">
        With a fixed border radius of 8px, a consistent color palette, and a
        clean, modern aesthetic, Minilo is designed to be timeless and adaptable
        to future trends. Whether you're building a mobile app, website, or any
        other product, Minilo offers the foundation you need for a polished,
        intuitive UI.
      </p>

      <p className="text-sm text-gray-700 mt-4">
        As an open-source project, Minilo encourages collaboration and
        contributions from the community. Whether you're a designer, developer,
        or enthusiast, you can help shape the future of this design system by
        contributing to its growth and evolution.
      </p>
    </div>
    </>
  );
};

export default About;
