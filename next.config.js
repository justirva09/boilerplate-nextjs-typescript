/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    APP_NAME: "BOILERPLATE NEXT TYPESCRIPT",
    BASE_NAME_ENV: "/staging",
    BASE_URL: "http://localhost:3000",
    BASE_URL_API: "https://api.jikan.moe/v4",
    BUILD_DESTINATION: "build/staging",
  },
};

module.exports = nextConfig;
