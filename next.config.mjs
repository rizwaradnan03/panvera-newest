/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Mengabaikan error ESLint saat build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Mengabaikan error tipe TypeScript saat build
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
