/** @type {import('next').NextConfig} */
const nextConfig = {
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