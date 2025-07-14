/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  // Remove output: 'export' para habilitar SSR
  // output: 'export', // Comentado para permitir SSR
  
  // Configuração para static files do Lovable
  async rewrites() {
    return [
      {
        source: '/lovable-uploads/:path*',
        destination: '/lovable-uploads/:path*',
      },
    ];
  },
}

module.exports = nextConfig;