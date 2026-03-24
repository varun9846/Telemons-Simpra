/** @type {import('next').NextConfig} */
const nextConfig = {
  turbo: {
    devMiddleware: {
      overlay: false,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pgsabofajdqaeyjpqeet.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
};

module.exports = nextConfig;



// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   turbo: {
//     devMiddleware: {
//       overlay: false,
//     },
//   },
//   images: {
//     domains: ['pgsabofajdqaeyjpqeet.supabase.co'],
//   },
// };

// module.exports = nextConfig; 