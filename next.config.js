
  const withImages = require('next-images');

module.exports = withImages({
    output: 'export', // Enable static export
    fileExtensions: ["jpg", "jpeg", "png", "svg", "webp"],
  images: {
    disableStaticImages: true, // Required to use next-images with static export
  },
});
