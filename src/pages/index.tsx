'use client';

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import heroImage from '../assets/hero-image.png';

const Home = () => {
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

      <div className="bg-[#FDFCFF] text-gray-800">
        {/* Hero Section */}
        <section className="relative w-full h-[300px] md:h-[500px] rounded-xl overflow-hidden">
          <Image
            src={heroImage}
            alt="Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center px-4 py-8">
            <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
              Build Beautiful UIs with Minilo
            </h1>
            <p className="text-white text-lg md:text-xl max-w-xl">
              Fast, flexible, and modern design system for your applications.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#003078] text-center mb-12">
            Features of Minilo Design
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
  {[
    {
      src: "/assets/design-images/design-1.svg",
      title: "Typography & Grid System",
      desc: "A flexible typography and grid system that adapts to any layout design.",
    },
    {
      src: "/assets/design-images/design-2.svg",
      title: "Color Schemes & Themes",
      desc: "Easily implement consistent color schemes and themes for a cohesive user experience.",
    },
    {
      src: "/assets/design-images/design-3.svg",
      title: "Components",
      desc: "A wide range of reusable and customizable components to streamline your development process.",
    },
  ].map((item, i) => (
    <div
      key={i}
      className="bg-white border border-[#E9E9E9] rounded-2xl overflow-hidden"
    >
      <div className="relative w-full h-[200px]">
        <img
          src={item.src}
          alt={item.title}
          className="w-full h-full object-cover"
        />
        {/* Fade Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/90 to-transparent" />
      </div>
      <div className="-mt-6 px-6 pb-6 relative z-10 bg-white">
        <h3 className="text-xl font-semibold text-[#003078] mb-2">
          {item.title}
        </h3>
        <p className="text-sm text-gray-600">{item.desc}</p>
      </div>
    </div>
  ))}
</div>



        </section>
      </div>
    </>
  );
};

export default Home;
