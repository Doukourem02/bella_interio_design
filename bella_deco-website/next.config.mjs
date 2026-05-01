/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "http", hostname: "localhost", port: "3000", pathname: "/**" },
      { protocol: "http", hostname: "127.0.0.1", port: "3000", pathname: "/**" },
      // Payload file URLs on Railway (and any other *.up.railway.app CMS host)
      { protocol: "https", hostname: "*.up.railway.app", pathname: "/**" },
    ],
  },
};

export default nextConfig;
