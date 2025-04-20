import React from "react";
import Head from "next/head";
// Ensure this matches your SVG handling setup

const Components = () => {
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
      <div className="bg-[#FDFCFF] p-8 rounded-lg border border-[#E9E9E9] max-w-4xl mx-auto">

      
      {/* Figma link section */}
      <h1 className="text-1xl font-semibold text-gray-800 mb-6 text-center">
        <a
          href="https://www.figma.com/design/eOMBuOepZXFo3g4LclkXlO/Minilo-Design-System?node-id=0-1&t=Ii49jLCi4V2j8jM6-1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:text-indigo-800 transition duration-300 ease-in-out"
        >
          Minilo Design System Figma
        </a>
      </h1>

      {/* SVG component */}
      <div className="flex justify-center mb-6">
       
        <img
                src="/assets/Components.svg" // Reference SVG file from public folder
                alt="Components"
                className="w-72 h-72 text-gray-600"
              />
      </div>

      {/* Divider */}
      <hr className="my-6 border-t-2 border-gray-300" />

      {/* GitHub link section */}
      <h1 className="text-1xl font-semibold text-gray-800 mb-6 text-center">
        <a
          href="https://github.com/minilo-design/minilo-design-system"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:text-indigo-800 transition duration-300 ease-in-out"
        >
          Minilo Design System Source Code
        </a>
      </h1>
    </div>
    </>
  );
};

export default Components;
