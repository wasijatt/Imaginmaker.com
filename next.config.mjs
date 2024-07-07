/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
      disableStaticImages: false,
      domains: [], 
      unoptimized: true,
    },
  };
  
  export default nextConfig;
  