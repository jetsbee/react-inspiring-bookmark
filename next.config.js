/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "books.google.com",
      },
    ], // ref. https://nextjs.org/docs/app/api-reference/components/image#remotepatterns
  },
};

module.exports = nextConfig;
