const path = require('path');

module.exports = {
  reactStrictMode: true,
  experimental: {
    optimizeFonts: true,
  },
  sassOptions: {
    includePaths: [
        path.join(__dirname, 'styles')
    ],
  },
}