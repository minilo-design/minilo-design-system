const path = require('path');
const withImages = require('next-images');

module.exports = withImages({
  output: 'export',
  images: {
    unoptimized: true, // REQUIRED when using output: 'export'
    disableStaticImages: true, // Prevent Next.js from processing image imports
  },
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname);
    config.resolve.alias['@styles'] = path.resolve(__dirname, 'styles');
    return config;
  }
});
