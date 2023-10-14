/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async rewrites() {
      return [
        {
          source: "/",
          destination: "/pages/index.js",
        },
      ];
    },
  };
  
  module.exports = nextConfig;