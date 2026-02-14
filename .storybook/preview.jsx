import React from 'react';
import '../styles/globals.css';

const preview = {
  parameters: {
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'canvas',
      values: [
        { name: 'canvas', value: '#FDFCFF' },
        { name: 'surface', value: '#FFFFFF' },
        { name: 'ink', value: '#181818' },
      ],
    },
    options: {
      storySort: {
        order: ['Foundations', 'Documentation', 'Components'],
      },
    },
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for all components',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'light';
      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('data-theme', theme);
      }

      return (
        <div style={{ minHeight: '100vh', padding: '24px' }}>
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
