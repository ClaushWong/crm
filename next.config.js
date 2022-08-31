/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");
const withLess = require("next-with-less");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withPlugins(
  [
    withLess({
      lessLoaderOptions: {
        lessOptions: {
          javascriptEnabled: true,
          localIdentName: "[path]___[local]___[hash:base64:5]",
        },
      },
    }),
  ],
  nextConfig
);
