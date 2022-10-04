/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    exerciseApi: "http://localhost:5000/api/exercise"
  }
}

module.exports = nextConfig
