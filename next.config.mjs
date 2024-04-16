/** @type {import('next').NextConfig} */
const nextConfig = {};

export const images = {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "cdn.sanity.io",
      port: "",
    },
  ],
};
