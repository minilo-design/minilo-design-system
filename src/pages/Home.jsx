import React from "react";
import heroImage from "../assets/hero-image.png";
import feature1 from "../assets/design-images/design-1.svg";
import feature2 from "../assets/design-images/design-2.svg";
import feature3 from "../assets/design-images/design-3.svg";

const Home = () => {
  return (
    <div className="bg-[#FDFCFF] text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] md:h-[500px]">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-full object-cover rounded-xl"
          width={1440}
          height={500}
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
          {/* Feature Card 1 */}
          <div className="bg-white border border-[#E9E9E9] rounded-2xl overflow-hidden">
            <img
              src={feature1}
              alt="Typography and Grid System"
              className="w-full h-[200px] object-cover rounded-t-2xl"
              width={400}
              height={200}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#003078] mb-2">
                Typography & Grid System
              </h3>
              <p className="text-sm text-gray-600">
                A flexible typography and grid system that adapts to any layout
                design.
              </p>
            </div>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white border border-[#E9E9E9] rounded-2xl overflow-hidden">
            <img
              src={feature2}
              alt="Color Schemes & Themes"
              className="w-full h-[200px] object-cover rounded-t-2xl"
              width={400}
              height={200}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#003078] mb-2">
                Color Schemes & Themes
              </h3>
              <p className="text-sm text-gray-600">
                Easily implement consistent color schemes and themes for a
                cohesive user experience.
              </p>
            </div>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white border border-[#E9E9E9] rounded-2xl overflow-hidden">
            <img
              src={feature3}
              alt="Components"
              className="w-full h-[200px] object-cover rounded-t-2xl"
              width={400}
              height={200}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#003078] mb-2">
                Components
              </h3>
              <p className="text-sm text-gray-600">
                A wide range of reusable and customizable components to
                streamline your development process.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
