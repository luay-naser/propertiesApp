/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false, // ⛔ تعطيل Turbopack نهائيًا
  },
};

module.exports = nextConfig;