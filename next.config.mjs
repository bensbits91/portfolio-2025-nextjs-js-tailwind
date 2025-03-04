/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      dangerouslyAllowSVG: true,
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            port: '',
            pathname: '/ddfrx5278/**',
            search: ''
         }
      ]
   }
};

export default nextConfig;
