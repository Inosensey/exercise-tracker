/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['spoonacular.com']
  },
  env: {
    exerciseApi: "http://localhost:5000/api/exercise",
    mealApi: "http://localhost:5000/api/meal",
    ingredientsApi: "http://localhost:5000/api/ingredients"
  }
}

module.exports = nextConfig
