import React from "react";

const About = () => {
  return (
    <div className="bg-[#FDFCFF] p-8 rounded-lg max-w-4xl mx-auto">
      {/* Title section */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        About the Minilo Design
      </h1>

      {/* Content section */}
      <p className="text-lg text-gray-700 leading-relaxed">
        Minilo is a minimalistic, open-source design system that provides
        flexible components and tools for building user interfaces across
        different platforms. The system focuses on simplicity, consistency, and
        scalability, enabling teams to create seamless and cohesive user
        experiences.
      </p>

      <p className="text-lg text-gray-700 mt-4">
        With a fixed border radius of 8px, a consistent color palette, and a
        clean, modern aesthetic, Minilo is designed to be timeless and adaptable
        to future trends. Whether you're building a mobile app, website, or any
        other product, Minilo offers the foundation you need for a polished,
        intuitive UI.
      </p>

      <p className="text-lg text-gray-700 mt-4">
        As an open-source project, Minilo encourages collaboration and
        contributions from the community. Whether you're a designer, developer,
        or enthusiast, you can help shape the future of this design system by
        contributing to its growth and evolution.
      </p>
    </div>
  );
};

export default About;
