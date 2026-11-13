import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // 404 global para el sitio con un layout por idioma (español / inglés)
    globalNotFound: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
