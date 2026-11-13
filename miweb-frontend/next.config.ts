import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // 404 global para el sitio con un layout por idioma (español / inglés)
    globalNotFound: true,
  },
  // El pedido ahora se hace en el portal de clientes (entran con su NIT)
  async redirects() {
    return [
      { source: '/pedido', destination: 'https://pedidos.jugosbii.com', permanent: false },
      { source: '/en/order', destination: 'https://pedidos.jugosbii.com', permanent: false },
    ];
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
