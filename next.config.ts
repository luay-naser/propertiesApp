/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false, // تعطيل Turbopack
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uninfectious-emilia-unmarshaled.ngrok-free.dev",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
