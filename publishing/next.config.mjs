/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      //   {
      //     source: "/",
      //     destination: "/home",
      //   },
      {
        source: '/admin',
        destination: '/admin/index.html',
      },
    ];
  },
};

export default nextConfig;
