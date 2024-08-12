/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'kreatrwebsite.s3.ap-south-1.amazonaws.com',
      'studio-website-eta.vercel.app',
      'images.unsplash.com',
      'img.freepik.com',
      'images.pexels.com' // Add this line
    ],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;


