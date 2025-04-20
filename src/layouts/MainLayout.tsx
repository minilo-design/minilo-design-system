// src/layouts/MainLayout.tsx
'use client';
import React, { useState } from 'react';
import Docs from '@/pages/docs';
import About from '@/pages/about';
import Components from '@/pages/components';
import Home from '@/pages/index';

export default function MainLayout() {
  const [activeTab, setActiveTab] = useState('home');

  const renderTab = () => {
    switch (activeTab) {
      case 'docs':
        return <Docs />;
      case 'components':
        return <Components />;
      case 'about':
        return <About />;
      case 'home':
      default:
        return <Home />;
    }
  };

  const handleStorybookRedirect = () => {
    window.open('https://minilo.io/storybook.com', '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FDFCFF] text-gray-800 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-[#E9E9E9] px-4 sm:px-8 py-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#003078] tracking-wide text-center sm:text-left">
          Minilo Design
        </h1>
      </header>

      {/* Tabs Navigation */}
      <nav className="bg-white border-b border-[#E9E9E9] px-4 sm:px-8 py-4">
        <ul className="flex flex-wrap justify-center sm:justify-start space-x-4 sm:space-x-8 text-sm font-medium">
          {['home', 'docs', 'components', 'about'].map((tab) => (
            <li
              key={tab}
              className={`cursor-pointer py-3 ${
                activeTab === tab
                  ? 'text-[#003078] border-b-2 border-[#003078]'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </li>
          ))}
          <li
            className="cursor-pointer py-3 text-gray-500 hover:text-gray-700"
            onClick={handleStorybookRedirect}
          >
            Storybook
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="p-4 sm:p-8 flex-grow space-y-10">
        <div className="max-w-7xl mx-auto">{renderTab()}</div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-[#E9E9E9] px-4 sm:px-8 py-4 text-sm text-center">
        <span className="text-[#003078]">© 2025 Minilo Design</span>
      </footer>
    </div>
  );
}
